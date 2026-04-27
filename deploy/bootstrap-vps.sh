#!/usr/bin/env bash
set -euo pipefail

APP_NAME="kabanchik"
APP_ROOT="/var/www/${APP_NAME}"
NGINX_AVAILABLE="/etc/nginx/sites-available/${APP_NAME}"
NGINX_ENABLED="/etc/nginx/sites-enabled/${APP_NAME}"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run this script with sudo."
  exit 1
fi

apt update
apt install -y nginx curl ca-certificates gnupg rsync

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
fi

mkdir -p "${APP_ROOT}/current"

if [[ ! -f "${NGINX_AVAILABLE}" ]]; then
  cp deploy/nginx/kabanchik.conf "${NGINX_AVAILABLE}"
fi

rm -f /etc/nginx/sites-enabled/default
ln -sf "${NGINX_AVAILABLE}" "${NGINX_ENABLED}"

nginx -t
systemctl enable nginx
systemctl reload nginx

echo "VPS bootstrap complete."
echo "Update server_name in ${NGINX_AVAILABLE} before enabling SSL."