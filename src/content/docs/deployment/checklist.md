---
title: Deployment Checklist
description: Pre-deployment verification for all methods
---

## Core Application ✅

- ✅ index.html (56KB) - Single file app
- ✅ Client-side rendering only
- ✅ No build process required
- ✅ CDN dependencies
- ✅ Works offline

## File Loading (3-Tier Fallback) ✅

- ✅ Tier 1: files.json (GitHub Pages)
- ✅ Tier 2: /api/files/ (Server API)
- ✅ Tier 3: Hardcoded (Fallback)

## GitHub Pages ✅

| File | Status |
|------|--------|
| `.github/workflows/build.yml` | ✅ |
| `CNAME` | ✅ |
| `build.py` | ✅ |
| `content/files.json` | ✅ |

```bash
python3 build.py && git push
```

## Docker ✅

| File | Status |
|------|--------|
| `Dockerfile` | ✅ |
| `docker-compose.yml` | ✅ |
| `deployment/docker/nginx.conf` | ✅ |

```bash
docker-compose up -d
```

## Supervisor ✅

| File | Status |
|------|--------|
| `deployment/supervisor/snapcode.conf` | ✅ |
| `server.py` | ✅ |

```bash
sudo supervisorctl restart snapcode
```

## Compatibility Matrix

| Environment | Works | File Loading |
|-------------|-------|--------------|
| Direct Open | ✅ | Hardcoded |
| Static Server | ✅ | files.json |
| GitHub Pages | ✅ | files.json |
| Python Server | ✅ | API endpoint |
| Docker | ✅ | API endpoint |
| Supervisor | ✅ | API endpoint |

## Production Checklist

- [ ] Generate file lists (`python3 build.py`)
- [ ] Test locally (`python3 server.py`)
- [ ] Configure environment variables
- [ ] Set up SSL certificate
- [ ] Configure firewall
- [ ] Set up monitoring
- [ ] Test deployment
- [ ] Monitor logs

## Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Configure firewall (ufw)
- [ ] Set proper file permissions
- [ ] Use non-root user
- [ ] Enable rate limiting
- [ ] Regular updates
