const { spawn } = require('child_process');

const port = process.env.LOCALTUNNEL_PORT || '3000';
const subdomain = process.env.LOCALTUNNEL_SUBDOMAIN || 'mykabanchik';
const maxAttempts = Number(process.env.LOCALTUNNEL_MAX_ATTEMPTS || 10);
const retryDelayMs = Number(process.env.LOCALTUNNEL_RETRY_DELAY_MS || 2000);
const stableAfterMs = Number(process.env.LOCALTUNNEL_STABLE_MS || 15000);

let attempt = 0;
let currentChild = null;

const command = 'npx';
const args = ['localtunnel', '--port', port, '--subdomain', subdomain];

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

const startTunnel = () => {
  attempt += 1;
  let child;

  try {
    child = spawn(command, args, {
      stdio: ['inherit', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
    });
  } catch (error) {
    if (attempt >= maxAttempts) {
      throw error;
    }

    process.stderr.write(
      `localtunnel failed to start on attempt ${attempt}/${maxAttempts}: ${error.message}\n`
    );
    setTimeout(startTunnel, retryDelayMs);
    return;
  }

  currentChild = child;

  let becameStable = false;
  const stableTimer = setTimeout(() => {
    becameStable = true;
  }, stableAfterMs);

  child.stdout.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  child.stderr.on('data', (chunk) => {
    process.stderr.write(chunk);
  });

  child.on('exit', (code) => {
    clearTimeout(stableTimer);

    if (becameStable || code === 0) {
      process.exit(code || 0);
      return;
    }

    if (attempt >= maxAttempts) {
      process.exit(code || 1);
      return;
    }

    process.stderr.write(
      `localtunnel disconnected on attempt ${attempt}/${maxAttempts}, retrying in ${retryDelayMs / 1000}s...\n`
    );

    setTimeout(startTunnel, retryDelayMs);
  });
};

startTunnel();