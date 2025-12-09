---
title: HAProxy
description: High-performance TCP/HTTP load balancer
---

## Why HAProxy?

| Feature | HAProxy | Nginx | Traefik |
|---------|---------|-------|---------|
| Performance | Highest | High | Medium |
| Stats Dashboard | ✅ | ❌ | ✅ |
| Connection Pooling | ✅ Advanced | Basic | Basic |
| Best For | High traffic | General | Microservices |

## haproxy.cfg

```txt
global
    log /dev/log local0
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    user haproxy
    group haproxy
    daemon

defaults
    log     global
    mode    http
    option  httplog
    timeout connect 5000
    timeout client  50000
    timeout server  50000

# Frontend (HTTP → HTTPS redirect)
frontend http_front
    bind *:80
    redirect scheme https code 301 if !{ ssl_fc }

# Frontend (HTTPS)
frontend https_front
    bind *:443 ssl crt /etc/haproxy/certs/snapcode.pem
    default_backend snapcode_backend

# Backend (Load Balancing)
backend snapcode_backend
    balance roundrobin
    option httpchk GET /
    http-check expect status 200
    
    server snapcode1 localhost:8000 check weight=3
    server snapcode2 localhost:8001 check weight=2
    server snapcode3 localhost:8002 check weight=1
    server snapcode4 localhost:8003 check backup
    
    http-reuse safe

# Stats Page
listen stats
    bind *:8404
    stats enable
    stats uri /stats
    stats refresh 30s
    stats auth admin:password
```

## Quick Start

```bash
sudo apt install haproxy
sudo cp haproxy.cfg /etc/haproxy/
sudo systemctl restart haproxy

# View stats
http://your-server:8404/stats
```

## Load Balancing Strategies

| Strategy | Use Case |
|----------|----------|
| `roundrobin` | Default, equal distribution |
| `leastconn` | Long-lived connections |
| `source` | Sticky sessions (IP hash) |
