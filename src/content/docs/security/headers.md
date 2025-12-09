---
title: Security Headers
description: HTTP security headers for web applications
---

## Essential Headers

| Header | Purpose |
|--------|---------|
| `X-Frame-Options` | Prevent clickjacking |
| `X-Content-Type-Options` | Prevent MIME sniffing |
| `X-XSS-Protection` | XSS filter (legacy) |
| `Strict-Transport-Security` | Force HTTPS |
| `Content-Security-Policy` | Control resource loading |

## Nginx Configuration

```nginx
server {
    # Prevent clickjacking
    add_header X-Frame-Options "SAMEORIGIN" always;
    
    # Prevent MIME type sniffing
    add_header X-Content-Type-Options "nosniff" always;
    
    # XSS protection (legacy browsers)
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Force HTTPS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Referrer policy
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Permissions policy
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
}
```

## Content Security Policy (CSP)

```nginx
# Basic CSP
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.jsdelivr.net unpkg.com; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net; img-src 'self' data:; font-src 'self' cdn.jsdelivr.net;" always;
```

### CSP Directives

| Directive | Controls |
|-----------|----------|
| `default-src` | Fallback for all |
| `script-src` | JavaScript sources |
| `style-src` | CSS sources |
| `img-src` | Image sources |
| `font-src` | Font sources |
| `connect-src` | AJAX/WebSocket |
| `frame-ancestors` | Who can embed |

## Traefik Middleware

```yaml
http:
  middlewares:
    security-headers:
      headers:
        customResponseHeaders:
          X-Frame-Options: "SAMEORIGIN"
          X-Content-Type-Options: "nosniff"
          X-XSS-Protection: "1; mode=block"
          Strict-Transport-Security: "max-age=31536000"
```

## Test Headers

```bash
# Check headers
curl -I https://snapcode.yourdomain.com

# Online tools
# - securityheaders.com
# - observatory.mozilla.org
```

## SnapCode Specific

Since SnapCode uses CDN libraries, CSP needs to allow:
- `cdn.jsdelivr.net` (Alpine.js, Tailwind)
- `unpkg.com` (alternative CDN)
- `'unsafe-inline'` (inline scripts/styles)
