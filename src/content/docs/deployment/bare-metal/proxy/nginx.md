---
title: Nginx
description: High-performance reverse proxy and load balancer
---

## Basic Reverse Proxy

```nginx
server {
    listen 80;
    server_name snapcode.yourdomain.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## With SSL (Let's Encrypt)

```nginx
server {
    listen 443 ssl http2;
    server_name snapcode.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/snapcode.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/snapcode.yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        proxy_pass http://localhost:8000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Load Balancing

```nginx
upstream snapcode_backend {
    least_conn;
    server localhost:8000 weight=3;
    server localhost:8001 weight=2;
    server localhost:8002 weight=1;
    server localhost:8003 backup;
    keepalive 32;
}

server {
    listen 80;
    server_name snapcode.yourdomain.com;

    location / {
        proxy_pass http://snapcode_backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_next_upstream error timeout http_500 http_502 http_503;
    }
}
```

## Setup SSL with Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d snapcode.yourdomain.com
```
