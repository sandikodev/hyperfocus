---
title: Architecture Diagram
description: Visual representation of SnapCode's client-side architecture
---

## Main Flow (100% Client-Side)

```
┌─────────────┐
│   User      │
│ Opens HTML  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────┐
│         Browser (Client-Side)           │
├─────────────────────────────────────────┤
│  1. Load index.html (56KB)              │
│  2. Load CDN dependencies               │
│     ├─ Alpine.js (15KB)                 │
│     ├─ Tailwind CSS                     │
│     ├─ Marked.js (20KB)                 │
│     └─ html2canvas (50KB)               │
│  3. User types markdown                 │
│  4. JavaScript parses markdown          │
│  5. Browser renders preview             │
│  6. User exports PNG                    │
└─────────────────────────────────────────┘
       │
       ▼
┌─────────────┐
│  PNG Image  │
│  Downloaded │
└─────────────┘

✅ NO SERVER NEEDED!
✅ NO BUILD PROCESS!
✅ WORKS OFFLINE!
```

## Optional: Python Server (Study Case)

```
┌─────────────────────────────────────────┐
│      Python HTTP Server (Optional)      │
├─────────────────────────────────────────┤
│  Endpoints:                             │
│  ├─ GET /api/files/content              │
│  └─ GET /api/files/docs                 │
│                                         │
│  NOT REQUIRED FOR MAIN APP!             │
└─────────────────────────────────────────┘
```

## Size Comparison

```
Traditional React App:        SnapCode:
├─ node_modules/  200 MB      ├─ index.html  56 KB
├─ dist/bundle.js 2 MB        ├─ Build time  0 sec
├─ Build time     30 sec      └─ Setup time  0 sec
└─ Setup time     5 min

🎉 3,571x SMALLER!
```

## Deployment Options

```
Option 1: Pure Static (Recommended)
┌─────────────────────────────────────────┐
│  GitHub Pages / Any Static Host         │
│  ├─ Serve index.html                    │
│  ├─ Serve content/files.json            │
│  └─ Serve docs/files.json               │
│  NO SERVER RUNNING!                     │
└─────────────────────────────────────────┘

Option 2: With Server (Study Case)
┌─────────────────────────────────────────┐
│  VPS / Docker / Supervisor              │
│  ├─ Run server.py                       │
│  └─ Provide /api/files/ endpoint        │
│  For learning backend/DevOps            │
└─────────────────────────────────────────┘
```

## Key Points

- ✅ Main app = 100% client-side
- ✅ Python server = Optional learning
- ✅ No build process needed
- ✅ No npm install needed
- ✅ Works in any browser
- ✅ Can be deployed as static files
