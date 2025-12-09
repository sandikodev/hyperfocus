---
title: Architecture Overview
description: SnapCode's buildless, serverless architecture philosophy
---

## Core Philosophy

SnapCode is **100% CLIENT-SIDE** - no server required for main functionality.

| Principle | Description |
|-----------|-------------|
| **Buildless** | No npm, webpack, or build tools |
| **Serverless** | Runs entirely in browser |
| **Componentless** | No React/Vue/Svelte complexity |
| **Single File** | Just 56KB HTML file |
| **CDN Dependencies** | No node_modules bloat |

## Tech Stack

### Core (15KB total)
- **Alpine.js** - Reactive UI without build step
- **Tailwind CSS** (CDN) - Utility-first styling
- **Marked.js** - Markdown parsing
- **DOMPurify** - XSS protection

### Features
- **Prism.js** - Syntax highlighting
- **Mermaid.js** - Diagram rendering
- **KaTeX** - Math formula rendering
- **html2canvas** - PNG export
- **Fira Code** - Programming font with ligatures

## Why Buildless?

```
Traditional Stack:          SnapCode:
├── node_modules/ (200MB)   ├── index.html (56KB)
├── package.json            └── README.md
├── webpack.config.js
├── babel.config.js
├── src/
│   ├── components/
│   ├── styles/
│   └── index.js
└── dist/
```

**Result:** 56KB vs 200MB+ for the same functionality.

## Python Server?

The `server.py` is **OPTIONAL** and only for:
- 📚 Learning dynamic file loading
- 📚 Backend/DevOps study case
- 📚 REST API concepts

**Main app works perfectly without it!**
