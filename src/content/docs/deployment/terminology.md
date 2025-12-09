---
title: Deployment Terminology
description: Industry-standard terms for deployment types
---

## Deployment Types Hierarchy

```
Deployment Types
│
├── Bare Metal / Native
│   ├── Physical Server
│   ├── VPS (Virtual Private Server)
│   └── Dedicated Server
│
├── Virtualized
│   ├── Virtual Machines (VM)
│   └── Hypervisor-based
│
├── Containerized
│   ├── Docker
│   ├── Kubernetes
│   └── Container Orchestration
│
├── Serverless / FaaS
│   ├── AWS Lambda
│   ├── Vercel Functions
│   └── Cloudflare Workers
│
└── Static Hosting / JAMstack
    ├── GitHub Pages
    ├── Vercel
    └── Netlify
```

## Term Definitions

### Bare Metal / Native
```
Physical Server → OS → Application
```
Deploy langsung di server tanpa kontainer/virtualisasi. Full control, no overhead.

### Containerized
```
Physical Server → OS → Container Runtime → Container → Application
```
Deploy dalam container (Docker, Podman). Isolated, portable, scalable.

### Static Hosting / JAMstack
```
CDN → Static Files → Browser
```
Deploy sebagai static files tanpa server-side processing. Auto-scaling, free tier.

## Correct Usage

| ❌ Incorrect | ✅ Correct |
|-------------|-----------|
| "Deploy di host langsung" | "Bare metal deployment" |
| "Deploy tanpa Docker" | "Native deployment" |
| "Deploy biasa" | "Self-hosted deployment" |

## SnapCode Supports

| Type | Method | Command |
|------|--------|---------|
| **Bare Metal** | Supervisor on VPS | `supervisorctl start snapcode` |
| **Containerized** | Docker Compose | `docker-compose up -d` |
| **Static** | GitHub Pages | `git push origin main` |
