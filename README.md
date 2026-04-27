# Kabanchik

React frontend for the BusyBee/Kabanchik project.

## Local Run

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

## VPS + Nginx

This project can be deployed as a static React build behind Nginx.

Files added for deployment:

- `deploy/nginx/kabanchik.conf` - Nginx site config
- `deploy/bootstrap-vps.sh` - installs Nginx and Node.js on Ubuntu VPS
- `deploy/publish-build.sh` - builds the project and publishes `build/` to `/var/www/kabanchik/current`

### 1. Upload project to server

Example:

```bash
git clone <YOUR_REPO_URL> kabanchik
cd kabanchik
```

### 2. Bootstrap server

Run on the VPS from the project root:

```bash
sudo bash deploy/bootstrap-vps.sh
```

### 3. Update domain or IP in Nginx

Edit:

```bash
sudo nano /etc/nginx/sites-available/kabanchik
```

Replace:

```text
YOUR_DOMAIN_OR_IP
```

with your real domain or server IP.

### 4. Publish build

```bash
bash deploy/publish-build.sh
```

Nginx serves the app from:

```text
/var/www/kabanchik/current
```

### 5. Optional SSL

If your domain already points to the VPS:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## React Router Support

The Nginx config already includes:

```nginx
try_files $uri $uri/ /index.html;
```

This is required so routes like `/SpecPage`, `/services`, and `/userpage` open correctly after refresh.