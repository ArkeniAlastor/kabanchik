const { spawn } = require('child_process');

const port = process.env.LOCALTUNNEL_PORT || '3000';
const subdomain = process.env.LOCALTUNNEL_SUBDOMAIN || 'mykabanchik';
const maxAttempts = Number(process.env.LOCALTUNNEL_MAX_ATTEMPTS || 10);
const retryDelayMs = Number(process.env.LOCALTUNNEL_RETRY_DELAY_MS || 2000);
const stableAfterMs = Number(process.env.LOCALTUNNEL_STABLE_MS || 15000);
const enableCloudflaredFallback = process.env.TUNNEL_CLOUDFLARED_FALLBACK !== 'false';
const isWindows = process.platform === 'win32';

let attempt = 0;
let currentChild = null;
let isUsingFallback = false;

const localtunnelArgs = ['localtunnel', '--port', port, '--subdomain', subdomain];
const cloudflaredCommand = 'cloudflared';
const cloudflaredArgs = ['tunnel', '--url', `http://localhost:${port}`, '--no-autoupdate'];

const spawnLocaltunnel = () => {
  if (isWindows) {
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

const stopChild = (signal) => {
  if (currentChild && !currentChild.killed) {
    currentChild.kill(signal);
  }
};

process.on('SIGINT', () => {
  stopChild('SIGINT');
  process.exit(130);
});

process.on('SIGTERM', () => {
  stopChild('SIGTERM');
  process.exit(143);
});

const pipeOutput = (child, handlers = {}) => {
  child.stdout.on('data', (chunk) => {
    const text = chunk.toString();
    process.stdout.write(text);

    if (handlers.stdout) {
      handlers.stdout(text);
    }
  });

  child.stderr.on('data', (chunk) => {
    const text = chunk.toString();
    process.stderr.write(text);

    if (handlers.stderr) {
      handlers.stderr(text);
    }
  });
};

const startCloudflared = (reason) => {
  if (!enableCloudflaredFallback) {
    process.stderr.write(`localtunnel failed: ${reason}\n`);
    process.exit(1);
    return;
  }

  if (isUsingFallback) {
    return;
  }

  isUsingFallback = true;
  process.stderr.write(
    `localtunnel is unavailable (${reason}). Switching to cloudflared quick tunnel...\n`
  );

  let child;

  try {
    child = spawn(cloudflaredCommand, cloudflaredArgs, {
      stdio: ['inherit', 'pipe', 'pipe'],
    });
  } catch (error) {
    process.stderr.write(`cloudflared failed to start: ${error.message}\n`);
    process.exit(1);
    return;
  }

  currentChild = child;

  let printedQuickUrl = false;
  let sawQuickTunnelTimeout = false;
  const printQuickUrl = (text) => {
    if (printedQuickUrl) {
      return;
    }

    const match = text.match(/https:\/\/(?!api\.)[a-z0-9-]+\.trycloudflare\.com\b/i);

    if (match) {
      printedQuickUrl = true;
      process.stdout.write(`your url is: ${match[0]}\n`);
    }
  };

  pipeOutput(child, {
    stdout: printQuickUrl,
    stderr: (text) => {
      printQuickUrl(text);

      if (/api\.trycloudflare\.com\/tunnel/i.test(text) || /context deadline exceeded/i.test(text)) {
        sawQuickTunnelTimeout = true;
      }
    },
  });

  child.on('error', (error) => {
    process.stderr.write(`cloudflared tunnel failed: ${error.message}\n`);
    process.exit(1);
  });

  child.on('exit', (code) => {
    if (!printedQuickUrl && sawQuickTunnelTimeout) {
      process.stderr.write(
        'cloudflared quick tunnel could not reach api.trycloudflare.com. Check firewall, proxy, or network restrictions.\n'
      );
    }

    process.exit(code || 1);
  });
};

const startTunnel = () => {
  attempt += 1;
  let child;

  try {
    child = spawnLocaltunnel();
  } catch (error) {
    if (attempt >= maxAttempts) {
      startCloudflared(error.message);
      return;
    }

    process.stderr.write(
      `localtunnel failed to start on attempt ${attempt}/${maxAttempts}: ${error.message}\n`
    );
    setTimeout(startTunnel, retryDelayMs);
    return;
  }

  currentChild = child;

  let becameStable = false;
  let sawBackendRefusal = false;
  const stableTimer = setTimeout(() => {
    becameStable = true;
  }, stableAfterMs);

  pipeOutput(child, {
    stderr: (text) => {
      if (/connection refused: .*localtunnel\.me:9327/i.test(text) || /check your firewall settings/i.test(text)) {
        sawBackendRefusal = true;
      }
    },
  });

  child.on('error', (error) => {
    clearTimeout(stableTimer);

    if (attempt >= maxAttempts) {
      startCloudflared(error.message);
      return;
    }

    process.stderr.write(
      `localtunnel process error on attempt ${attempt}/${maxAttempts}: ${error.message}\n`
    );

    setTimeout(startTunnel, retryDelayMs);
  });

  child.on('exit', (code) => {
    clearTimeout(stableTimer);

    if (becameStable || code === 0) {
      process.exit(code || 0);
      return;
    }

    if (sawBackendRefusal) {
      startCloudflared('backend refused the connection');
      return;
    }

    if (attempt >= maxAttempts) {
      startCloudflared(`failed after ${attempt} attempts`);
      return;
    }

    process.stderr.write(
      `localtunnel disconnected on attempt ${attempt}/${maxAttempts}, retrying in ${retryDelayMs / 1000}s...\n`
    );

    setTimeout(startTunnel, retryDelayMs);
  });
};

startTunnel();