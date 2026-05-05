const { spawn } = require('child_process');

const config = {
  port: process.env.LOCALTUNNEL_PORT || '3000',
  subdomain: process.env.LOCALTUNNEL_SUBDOMAIN || 'mykabanchikbeta',
  maxAttempts: Number(process.env.LOCALTUNNEL_MAX_ATTEMPTS || 10),
  retryDelayMs: Number(process.env.LOCALTUNNEL_RETRY_DELAY_MS || 2000),
  stableAfterMs: Number(process.env.LOCALTUNNEL_STABLE_MS || 15000),
  acceptAssignedHostOnMismatch: process.env.LOCALTUNNEL_ACCEPT_ASSIGNED_HOST !== 'false',
  enableCloudflaredFallback: process.env.TUNNEL_CLOUDFLARED_FALLBACK !== 'false',
  isWindows: process.platform === 'win32',
};

config.expectedLocaltunnelHost = `${config.subdomain}.loca.lt`;

const localtunnelArgs = ['localtunnel', '--port', config.port, '--subdomain', config.subdomain];
const cloudflaredArgs = ['tunnel', '--url', `http://localhost:${config.port}`, '--no-autoupdate'];

const localtunnelUrlLinePattern = /your url is:\s*https:\/\/[^\s]+/i;
const httpsUrlPattern = /https:\/\/[^\s]+/i;
const quickTunnelUrlPattern = /https:\/\/(?!api\.)[a-z0-9-]+\.trycloudflare\.com\b/i;
const localtunnelRefusalPattern = /connection refused: .*localtunnel\.me:9327|check your firewall settings/i;
const quickTunnelTimeoutPattern = /api\.trycloudflare\.com\/tunnel|context deadline exceeded/i;

let currentChild = null;
let fallbackStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const writeLine = (stream, text) => {
  stream.write(`${text}\n`);
};

const extractMatch = (text, pattern) => text.match(pattern)?.[0] || null;

const getHostnameFromUrlLine = (text) => {
  const urlLine = extractMatch(text, localtunnelUrlLinePattern);

  if (!urlLine) {
    return null;
  }

  const url = extractMatch(urlLine, httpsUrlPattern);

  if (!url) {
    return null;
  }

  try {
    return new URL(url).hostname;
  } catch (error) {
    writeLine(process.stderr, `could not parse localtunnel url: ${error.message}`);
    return null;
  }
};

const spawnLocaltunnel = () => {
  if (config.isWindows) {
    const comspec = process.env.ComSpec || 'cmd.exe';
    const commandLine = ['npx', ...localtunnelArgs].join(' ');

    return spawn(comspec, ['/d', '/s', '/c', commandLine], {
      stdio: ['inherit', 'pipe', 'pipe'],
    });
  }

  return spawn('npx', localtunnelArgs, {
    stdio: ['inherit', 'pipe', 'pipe'],
  });
};

const spawnCloudflared = () => {
  return spawn('cloudflared', cloudflaredArgs, {
    stdio: ['inherit', 'pipe', 'pipe'],
  });
};

const terminateChild = (child, signal = 'SIGTERM') => {
  if (!child || child.exitCode !== null || child.signalCode) {
    return;
  }

  if (config.isWindows) {
    spawn('taskkill', ['/pid', String(child.pid), '/t', '/f'], {
      stdio: 'ignore',
    });

    return;
  }

  child.kill(signal);
};

const stopCurrentChild = (signal = 'SIGTERM') => {
  terminateChild(currentChild, signal);
};

const pipeOutput = (child, handlers = {}) => {
  child.stdout.on('data', (chunk) => {
    const text = chunk.toString();
    let shouldForward = true;

    if (handlers.stdout) {
      shouldForward = handlers.stdout(text) !== false;
    }

    if (shouldForward) {
      process.stdout.write(text);
    }
  });

  child.stderr.on('data', (chunk) => {
    const text = chunk.toString();
    let shouldForward = true;

    if (handlers.stderr) {
      shouldForward = handlers.stderr(text) !== false;
    }

    if (shouldForward) {
      process.stderr.write(text);
    }
  });
};

process.on('SIGINT', () => {
  stopCurrentChild('SIGINT');
  process.exit(130);
});

process.on('SIGTERM', () => {
  stopCurrentChild('SIGTERM');
  process.exit(143);
});

const startCloudflared = async (reason) => {
  if (!config.enableCloudflaredFallback) {
    writeLine(process.stderr, `localtunnel failed: ${reason}`);
    process.exit(1);
    return;
  }

  if (fallbackStarted) {
    return;
  }

  fallbackStarted = true;
  writeLine(
    process.stderr,
    `localtunnel is unavailable (${reason}). Switching to cloudflared quick tunnel...`
  );

  let child;

  try {
    child = spawnCloudflared();
  } catch (error) {
    writeLine(process.stderr, `cloudflared failed to start: ${error.message}`);
    process.exit(1);
    return;
  }

  currentChild = child;

  return new Promise((resolve) => {
    let printedQuickUrl = false;
    let sawQuickTunnelTimeout = false;

    const printQuickUrl = (text) => {
      if (printedQuickUrl) {
        return;
      }

      const url = extractMatch(text, quickTunnelUrlPattern);

      if (!url) {
        return;
      }

      printedQuickUrl = true;
      writeLine(process.stdout, `your url is: ${url}`);
    };

    pipeOutput(child, {
      stdout: (text) => {
        printQuickUrl(text);
        return true;
      },
      stderr: (text) => {
        printQuickUrl(text);

        if (quickTunnelTimeoutPattern.test(text)) {
          sawQuickTunnelTimeout = true;
        }

        return true;
      },
    });

    child.on('error', (error) => {
      writeLine(process.stderr, `cloudflared tunnel failed: ${error.message}`);
      process.exit(1);
      resolve();
    });

    child.on('exit', (code) => {
      currentChild = currentChild === child ? null : currentChild;

      if (!printedQuickUrl && sawQuickTunnelTimeout) {
        writeLine(
          process.stderr,
          'cloudflared quick tunnel could not reach api.trycloudflare.com. Check firewall, proxy, or network restrictions.'
        );
      }

      process.exit(code || 1);
      resolve();
    });
  });
};

const runLocaltunnelAttempt = async ({ allowUnexpectedHost = false } = {}) => {
  let child;

  try {
    child = spawnLocaltunnel();
  } catch (error) {
    return {
      type: 'start-error',
      reason: error.message,
    };
  }

  currentChild = child;

  return new Promise((resolve) => {
    const state = {
      settled: false,
      becameStable: false,
      sawBackendRefusal: false,
      acceptedUnexpectedHost: false,
      sawUnexpectedHost: false,
      pendingUrlLine: '',
    };

    const stableTimer = setTimeout(() => {
      state.becameStable = true;

      if (state.pendingUrlLine) {
        writeLine(process.stdout, state.pendingUrlLine);
        state.pendingUrlLine = '';
      }
    }, config.stableAfterMs);

    const finish = (result) => {
      if (state.settled) {
        return;
      }

      state.settled = true;
      clearTimeout(stableTimer);
      resolve(result);
    };

    pipeOutput(child, {
      stdout: (text) => {
        const urlLine = extractMatch(text, localtunnelUrlLinePattern);

        if (!urlLine) {
          return true;
        }

        const hostname = getHostnameFromUrlLine(urlLine);

        if (hostname && hostname !== config.expectedLocaltunnelHost) {
          if (allowUnexpectedHost) {
            state.acceptedUnexpectedHost = true;
            state.pendingUrlLine = urlLine;
            writeLine(
              process.stderr,
              `requested subdomain ${config.expectedLocaltunnelHost} was not honored by localtunnel; using assigned hostname ${hostname} instead`
            );
          } else {
            state.sawUnexpectedHost = true;
            writeLine(
              process.stderr,
              `requested subdomain ${config.expectedLocaltunnelHost} was not honored by localtunnel; received ${hostname} instead`
            );
            terminateChild(child);
          }
        } else {
          state.pendingUrlLine = urlLine;
        }

        const remainingText = text.replace(urlLine, '').trim();

        if (remainingText) {
          writeLine(process.stdout, remainingText);
        }

        return false;
      },
      stderr: (text) => {
        if (localtunnelRefusalPattern.test(text)) {
          state.sawBackendRefusal = true;
        }

        return true;
      },
    });

    child.on('error', (error) => {
      currentChild = currentChild === child ? null : currentChild;

      if (state.sawUnexpectedHost && !state.acceptedUnexpectedHost) {
        finish({ type: 'unexpected-host' });
        return;
      }

      finish({
        type: 'process-error',
        reason: error.message,
      });
    });

    child.on('exit', (code) => {
      currentChild = currentChild === child ? null : currentChild;

      if (state.sawUnexpectedHost && !state.acceptedUnexpectedHost) {
        finish({ type: 'unexpected-host' });
        return;
      }

      if (state.becameStable || code === 0) {
        finish({
          type: 'exit',
          code: code || 0,
        });
        return;
      }

      if (state.pendingUrlLine) {
        writeLine(
          process.stderr,
          'localtunnel disconnected before the URL became stable; ignoring that temporary loca.lt address'
        );
        state.pendingUrlLine = '';
      }

      if (state.sawBackendRefusal) {
        finish({ type: 'backend-refusal' });
        return;
      }

      finish({
        type: 'disconnect',
        code: code || 1,
      });
    });
  });
};

const main = async () => {
  for (let attempt = 1; attempt <= config.maxAttempts; attempt += 1) {
    const result = await runLocaltunnelAttempt({
      allowUnexpectedHost: config.acceptAssignedHostOnMismatch && attempt >= config.maxAttempts,
    });

    if (result.type === 'exit') {
      process.exit(result.code);
      return;
    }

    if (result.type === 'unexpected-host') {
      if (attempt >= config.maxAttempts) {
        await startCloudflared(
          `requested subdomain ${config.expectedLocaltunnelHost} was not honored after ${attempt} attempts`
        );
        return;
      }

      writeLine(
        process.stderr,
        `localtunnel assigned an unexpected hostname on attempt ${attempt}/${config.maxAttempts}, retrying in ${config.retryDelayMs / 1000}s...`
      );
      await wait(config.retryDelayMs);
      continue;
    }

    if (result.type === 'backend-refusal') {
      await startCloudflared('backend refused the connection');
      return;
    }

    if (result.type === 'start-error') {
      if (attempt >= config.maxAttempts) {
        await startCloudflared(result.reason);
        return;
      }

      writeLine(
        process.stderr,
        `localtunnel failed to start on attempt ${attempt}/${config.maxAttempts}: ${result.reason}`
      );
      await wait(config.retryDelayMs);
      continue;
    }

    if (result.type === 'process-error') {
      if (attempt >= config.maxAttempts) {
        await startCloudflared(result.reason);
        return;
      }

      writeLine(
        process.stderr,
        `localtunnel process error on attempt ${attempt}/${config.maxAttempts}: ${result.reason}`
      );
      await wait(config.retryDelayMs);
      continue;
    }

    if (attempt >= config.maxAttempts) {
      await startCloudflared(`failed after ${attempt} attempts`);
      return;
    }

    writeLine(
      process.stderr,
      `localtunnel disconnected on attempt ${attempt}/${config.maxAttempts}, retrying in ${config.retryDelayMs / 1000}s...`
    );
    await wait(config.retryDelayMs);
  }
};

main().catch((error) => {
  writeLine(process.stderr, `tunnel script failed: ${error.message}`);
  process.exit(1);
});