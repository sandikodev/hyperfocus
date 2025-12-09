---
title: Supervisor
description: Python-native process manager for self-hosted deployment
---

## Prerequisites

```bash
sudo apt update
sudo apt install supervisor python3
sudo mkdir -p /var/log/snapcode
sudo chown www-data:www-data /var/log/snapcode
```

## Setup

### 1. Clone Repository
```bash
cd /var/www
sudo git clone https://github.com/sandikodev/snapcode.git
```

### 2. Configure Supervisor
```bash
sudo cp deployment/supervisor/snapcode.conf /etc/supervisor/conf.d/
sudo nano /etc/supervisor/conf.d/snapcode.conf
# Change: /path/to/snapcode.me → /var/www/snapcode
```

### 3. Start Service
```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start snapcode
```

## Management

```bash
sudo supervisorctl start snapcode     # Start
sudo supervisorctl stop snapcode      # Stop
sudo supervisorctl restart snapcode   # Restart
sudo supervisorctl status snapcode    # Status
sudo tail -f /var/log/snapcode/access.log  # Logs
```

## Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name snapcode.yourdomain.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Features

- ✅ Auto-restart on crash
- ✅ Log management
- ✅ Process monitoring
- ✅ Production-ready
- ✅ Native Python tool
