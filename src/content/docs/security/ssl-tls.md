---
title: SSL/TLS
description: HTTPS setup with Let's Encrypt
---

## Why HTTPS?

- ✅ Encrypted data in transit
- ✅ Browser trust (no warnings)
- ✅ SEO ranking boost
- ✅ Required for modern APIs

## Let's Encrypt + Certbot

### Nginx

```bash
# Install
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d snapcode.yourdomain.com

# Auto-renewal (already configured)
sudo certbot renew --dry-run
```

### Standalone

```bash
# Stop web server first
sudo systemctl stop nginx

# Get certificate
sudo certbot certonly --standalone -d snapcode.yourdomain.com

# Start web server
sudo systemctl start nginx
```

## Certificate Locations

```
/etc/letsencrypt/live/snapcode.yourdomain.com/
├── fullchain.pem   # Certificate + chain
├── privkey.pem     # Private key
├── cert.pem        # Certificate only
└── chain.pem       # Chain only
```

## Nginx SSL Config

```nginx
server {
    listen 443 ssl http2;
    server_name snapcode.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/snapcode.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/snapcode.yourdomain.com/privkey.pem;
    
    # Modern SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=31536000" always;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name snapcode.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

## Auto-Renewal

```bash
# Test renewal
sudo certbot renew --dry-run

# Cron job (auto-added by certbot)
# 0 0,12 * * * certbot renew --quiet
```

## Verify SSL

```bash
# Check certificate
openssl s_client -connect snapcode.yourdomain.com:443

# Check expiry
sudo certbot certificates
```
