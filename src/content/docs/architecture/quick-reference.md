---
title: Quick Reference
description: One-page cheat sheet for SnapCode deployment
---

## One-Line Deployments

```bash
# GitHub Pages
python3 build.py && git add . && git commit -m "Deploy" && git push

# Docker
docker-compose up -d --build

# Supervisor
sudo supervisorctl restart snapcode
```

## Management Commands

| Action | GitHub Pages | Supervisor | Docker |
|--------|-------------|------------|--------|
| **Deploy** | `git push` | `supervisorctl restart` | `docker-compose up -d` |
| **Logs** | GitHub Actions | `tail -f /var/log/snapcode/access.log` | `docker-compose logs -f` |
| **Status** | GitHub Pages tab | `supervisorctl status` | `docker ps` |
| **Stop** | - | `supervisorctl stop snapcode` | `docker-compose down` |

## Quick Decisions

| Need | Solution |
|------|----------|
| Free hosting? | GitHub Pages |
| Have VPS? | Supervisor |
| Learning DevOps? | Docker |
| Need scaling? | Docker |
| Want simplicity? | GitHub Pages |

## Quick Fixes

### Port already in use
```bash
sudo lsof -i :8000
sudo kill -9 <PID>
```

### Docker not starting
```bash
docker-compose down
docker-compose up -d --build --force-recreate
```

### Supervisor not working
```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl restart snapcode
```

## Health Checks

```bash
# Local
curl http://localhost:8000

# Docker
docker inspect --format='{{.State.Health.Status}}' snapcode

# Supervisor
sudo supervisorctl status snapcode
```
