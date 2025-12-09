---
title: Vercel
description: Zero-config deployment platform with edge functions
---

## Why Vercel?

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Edge Functions | ✅ | ❌ |
| Preview Deploys | ✅ | ❌ |
| Analytics | ✅ | ❌ |
| Custom Domains | ✅ | ✅ |
| Free Tier | ✅ | ✅ |

## Quick Deploy

### Option 1: Git Integration
```txt
# Push to GitHub
git push origin main

# Connect repo in Vercel dashboard
# Auto-deploys on every push
```

### Option 2: Vercel CLI
```bash
# Install
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## vercel.json (Optional)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

## Features

- ✅ Zero config deployment
- ✅ Automatic HTTPS
- ✅ Global CDN (Edge Network)
- ✅ Preview deployments per PR
- ✅ Serverless functions support
- ✅ Analytics dashboard

## Comparison with GitHub Pages

| Aspect | Vercel | GitHub Pages |
|--------|--------|--------------|
| Setup | Connect repo | Enable in settings |
| Build | Auto-detect | GitHub Actions |
| Preview | Per PR | ❌ |
| Functions | ✅ Serverless | ❌ |
| Best For | Modern apps | Simple static |
