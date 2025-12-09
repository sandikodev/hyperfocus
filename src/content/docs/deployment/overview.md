---
title: Deployment Overview
description: Three ways to deploy SnapCode - Static, Bare Metal, Containerized
---

import { Aside } from '@astrojs/starlight/components';

## Deployment Types

| Type | Example | Best For |
|------|---------|----------|
| **Static Hosting** | GitHub Pages, Vercel | Free, demos, frontend apps |
| **Bare Metal** | Supervisor on VPS | Full control, production |
| **Containerized** | Docker, Kubernetes | DevOps, scaling |

<Aside type="tip">
**New to deployment?** Start with GitHub Pages—it's free, automatic, and perfect for learning!
</Aside>

## Comparison

| Feature | GitHub Pages | Supervisor | Docker |
|---------|-------------|------------|--------|
| **Cost** | Free | VPS cost | VPS cost |
| **Setup** | Easy | Medium | Medium |
| **Control** | Limited | Full | Full |
| **Scalability** | Auto | Manual | Easy |
| **SSL** | Auto | Manual | Manual |
| **Best for** | Demos | Production | DevOps |

<Aside type="note">
All three methods are covered in detail in their respective sections.
</Aside>

## Which One to Choose?

### GitHub Pages
✅ Free hosting, no backend needed, auto-deploy, demos/portfolio

### Supervisor (Bare Metal)
✅ Have VPS, want full control, production stability, comfortable with Linux

### Docker
✅ Want containerization, need easy scaling, learning DevOps, modern deployment

<Aside type="caution">
**Production deployments** require proper security hardening. See the [Security](/hyperfocus/security/ssl-tls/) section.
</Aside>

## Learning Path

| Level | Stack | Learn |
|-------|-------|-------|
| **Beginner** | GitHub Pages | Git, GitHub Actions, static hosting |
| **Intermediate** | Supervisor + Nginx | Linux, process management, reverse proxy |
| **Advanced** | Docker + CI/CD | Containerization, orchestration, monitoring |

## Tech Stack Learned

- **Frontend:** HTML5, CSS3, JavaScript, Alpine.js, Tailwind CSS
- **Backend:** Python HTTP server, File API, JSON handling
- **DevOps:** Git, GitHub Actions, Supervisor, Docker, Nginx
- **Deployment:** Static hosting, VPS, Container orchestration
