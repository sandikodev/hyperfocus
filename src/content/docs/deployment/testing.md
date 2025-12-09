---
title: Deployment Testing
description: Verify all deployment methods work correctly
---

## Support Matrix

| Feature | Status | File |
|---------|--------|------|
| GitHub Pages | ✅ | `.github/workflows/build.yml` |
| files.json | ✅ | `content/files.json` |
| Docker | ✅ | `Dockerfile`, `docker-compose.yml` |
| Supervisor | ✅ | `deployment/supervisor/snapcode.conf` |
| 3-Tier Fallback | ✅ | `index.html` loadFolder() |

## 3-Tier Fallback System

```javascript
async loadFolder(folder) {
  // Tier 1: files.json (GitHub Pages)
  const json = await fetch(`${folder}/files.json`);
  if (json.ok) return;
  
  // Tier 2: API (Local server)
  const api = await fetch(`/api/files/${folder}`);
  if (api.ok) return;
  
  // Tier 3: Hardcoded (Fallback)
  return hardcodedFiles[folder];
}
```

## Test Scenarios

### Test 1: Pure Static
```bash
open index.html
# ✅ App loads, uses hardcoded list
```

### Test 2: With files.json
```bash
python3 -m http.server 8000
# ✅ Loads from files.json
```

### Test 3: With Python Server
```bash
python3 server.py
# ✅ Loads from /api/files/
```

### Test 4: Docker
```bash
docker-compose up -d
# ✅ Container starts, health check passes
```

### Test 5: GitHub Pages
```bash
git push origin main
# ✅ Actions runs, deploys, works with files.json
```

## Deployment Method Support

| Method | Command | Files Needed |
|--------|---------|--------------|
| Direct Open | `open index.html` | index.html only |
| Static Server | `python3 -m http.server` | + files.json |
| GitHub Pages | `git push` | + .github/workflows |
| Docker | `docker-compose up` | + Dockerfile |
| Supervisor | `supervisorctl start` | + supervisor conf |

## Conclusion

**All deployment methods supported!** The 3-tier fallback automatically adapts:
- GitHub Pages → files.json
- Local server → API
- Direct open → hardcoded
