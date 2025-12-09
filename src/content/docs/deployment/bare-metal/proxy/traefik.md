---
title: Traefik
description: Modern cloud-native reverse proxy with auto SSL
---

## Why Traefik?

| Feature | Traefik | Nginx |
|---------|---------|-------|
| Auto SSL | ✅ Built-in | Manual |
| Dashboard | ✅ Built-in | ❌ |
| Docker Auto-discovery | ✅ | Manual |
| Config | YAML | Custom syntax |

## traefik.yml (Static Config)

```yaml
entryPoints:
  web:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https
  websecure:
    address: ":443"

api:
  dashboard: true

providers:
  file:
    filename: /etc/traefik/dynamic.yml
    watch: true

certificatesResolvers:
  letsencrypt:
    acme:
      email: your-email@example.com
      storage: /etc/traefik/acme.json
      httpChallenge:
        entryPoint: web
```

## dynamic.yml (Dynamic Config)

```yaml
http:
  routers:
    snapcode:
      rule: "Host(`snapcode.yourdomain.com`)"
      service: snapcode-service
      entryPoints:
        - websecure
      tls:
        certResolver: letsencrypt
      middlewares:
        - compression
        - ratelimit

  services:
    snapcode-service:
      loadBalancer:
        servers:
          - url: "http://localhost:8000"
          - url: "http://localhost:8001"
        healthCheck:
          path: /
          interval: 10s

  middlewares:
    compression:
      compress: {}
    ratelimit:
      rateLimit:
        average: 100
        burst: 50
```

## Quick Start

```bash
# Install
wget https://github.com/traefik/traefik/releases/download/v2.10.0/traefik_v2.10.0_linux_amd64.tar.gz
tar -xzf traefik_v2.10.0_linux_amd64.tar.gz
sudo mv traefik /usr/local/bin/

# Run
traefik --configFile=/etc/traefik/traefik.yml
```

## Features

- ✅ Auto SSL (Let's Encrypt)
- ✅ Built-in dashboard
- ✅ Dynamic configuration
- ✅ Service discovery
- ✅ Rate limiting middleware
