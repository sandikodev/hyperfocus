---
title: PHP-FPM
description: PHP FastCGI Process Manager for web applications
---

## What is PHP-FPM?

PHP-FPM (FastCGI Process Manager) is an alternative PHP FastCGI implementation with features useful for high-load websites.

## Installation

```bash
# Ubuntu/Debian
sudo apt install php-fpm

# Check version
php-fpm -v

# Check status
sudo systemctl status php8.2-fpm
```

## Nginx + PHP-FPM

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

## Pool Configuration

`/etc/php/8.2/fpm/pool.d/www.conf`:

```ini
[www]
user = www-data
group = www-data
listen = /var/run/php/php8.2-fpm.sock

; Process management
pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35

; Logging
access.log = /var/log/php-fpm/access.log
slowlog = /var/log/php-fpm/slow.log
request_slowlog_timeout = 5s
```

## Process Modes

| Mode | Description | Best For |
|------|-------------|----------|
| `static` | Fixed number of children | Predictable load |
| `dynamic` | Scales based on demand | Most cases |
| `ondemand` | Spawns on request | Low traffic |

## Management

```bash
sudo systemctl start php8.2-fpm
sudo systemctl stop php8.2-fpm
sudo systemctl restart php8.2-fpm
sudo systemctl reload php8.2-fpm  # Graceful reload
```

## vs Python/Node

| Aspect | PHP-FPM | Python | Node.js |
|--------|---------|--------|---------|
| Model | Process pool | Single process | Event loop |
| Memory | Per-request | Persistent | Persistent |
| Scaling | FPM handles | Supervisor/PM2 | PM2 cluster |
| Best For | Web pages | APIs, scripts | Real-time |
