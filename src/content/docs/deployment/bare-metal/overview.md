---
title: Bare Metal Overview
description: Process managers and reverse proxies for VPS deployment
---

## Process Managers

### Supervisor (Python Ecosystem)
```bash
sudo apt install supervisor
sudo cp snapcode.conf /etc/supervisor/conf.d/
sudo supervisorctl start snapcode
```
✅ Native Python, simple INI config, auto-restart, log management

### PM2 (JavaScript Ecosystem)
```bash
npm install -g pm2
pm2 start server.py --name snapcode --interpreter python3
pm2 save && pm2 startup
```
✅ Cluster mode, zero-downtime reload, built-in monitoring

## Reverse Proxies

### Why Reverse Proxy?
```
Client → Reverse Proxy → Backend Server(s)
```
Benefits: SSL termination, load balancing, caching, security

### Comparison

| Feature | Nginx | Traefik | HAProxy |
|---------|-------|---------|---------|
| **Performance** | High | Medium | Highest |
| **Config** | Simple | YAML | Complex |
| **Auto SSL** | Manual | ✅ Built-in | Manual |
| **Docker** | Manual | ✅ Auto | Manual |
| **Best for** | General | Microservices | High traffic |

## Recommended Stacks

| Stack | Components | Best For |
|-------|------------|----------|
| **Simple** | Supervisor + Nginx | Easy to learn, production ready |
| **Modern** | PM2 + Traefik | Auto SSL, zero-downtime |
| **Performance** | Supervisor + HAProxy | Maximum performance, enterprise |

## Quick Start: Nginx + Supervisor

```bash
# 1. Start app with Supervisor
sudo supervisorctl start snapcode

# 2. Setup Nginx
sudo cp snapcode.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/snapcode.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 3. Setup SSL
sudo certbot --nginx -d snapcode.yourdomain.com
```
