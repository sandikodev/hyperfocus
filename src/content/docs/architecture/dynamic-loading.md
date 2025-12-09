---
title: Dynamic File Loading
description: How SnapCode handles file loading with smart fallback
---

## Two Modes

### Mode 1: Dynamic (with server.py) ⭐
```bash
python3 server.py
# API: http://localhost:8000/api/files/content
```

**Pros:** Auto-detect files, real-time updates, no code changes needed

**Cons:** Requires Python server running

### Mode 2: Static (without server)
```bash
open index.html
```

**Pros:** No server needed, works offline

**Cons:** File list hardcoded, manual updates

## Smart Fallback System

```javascript
async loadFolder(folder) {
  try {
    // 1. Try dynamic API first
    const api = await fetch(`/api/files/${folder}`);
    if (api.ok) return await api.json();
  } catch {
    // 2. Fallback to hardcoded list
    return hardcodedFiles[folder];
  }
}
```

## API Response Format

```json
[
  { "name": "INDEX.md", "size": 1100 },
  { "name": "QUICKSTART.md", "size": 4500 }
]
```

## Comparison

| Feature | Dynamic | Static |
|---------|---------|--------|
| Auto-detect files | ✅ | ❌ |
| No server needed | ❌ | ✅ |
| Real-time updates | ✅ | ❌ |
| Offline support | ❌ | ✅ |
| Maintenance | Low | High |

## Recommendation

| Use Case | Mode |
|----------|------|
| Development | `python3 server.py` (dynamic) |
| Production | Deploy with web server |
| Demo/Offline | Static mode |
