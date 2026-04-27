#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="/var/www/kabanchik"
TARGET_DIR="${APP_ROOT}/current"

npm ci
npm run build

sudo mkdir -p "${TARGET_DIR}"
sudo rsync -av --delete build/ "${TARGET_DIR}/"
sudo nginx -t
sudo systemctl reload nginx

echo "Build published to ${TARGET_DIR}."