---
title: Python HTTP Server
description: Dynamic file loading with Python server
---

## Quick Start

```bash
python3 server.py
# 🚀 Server running at http://localhost:8000
# 📁 API: http://localhost:8000/api/files/content
```

## How It Works

```
1. Start Server
   python3 server.py

2. Click "Docs" Button
   Browser → GET /api/files/docs
   Server → Scan docs/ folder
   Server → Return JSON list
   Browser → Load each file

3. Add New File
   echo "# New" > docs/NEW.md
   Click "Docs" → NEW.md appears!
```

## API Endpoint

### GET /api/files/{folder}

```bash
curl http://localhost:8000/api/files/docs
```

Response:
```json
[
  { "name": "INDEX.md", "size": 1100 },
  { "name": "QUICKSTART.md", "size": 4500 }
]
```

## Benefits

### Dynamic Loading
- ✅ Auto-detect new files
- ✅ No code updates needed
- ✅ Real-time file list
- ✅ Scalable to any number of files

### Smart Fallback
- ✅ Works with server (dynamic)
- ✅ Works without server (hardcoded)
- ✅ Automatic detection

## Server Features

- **CORS enabled** for localhost
- **JSON API** for file listing
- **Static file serving** for HTML/CSS/JS
- **Error handling** for missing folders
- **Sorted output** by filename

## Comparison

| Mode | Setup | Auto-detect | Offline |
|------|-------|-------------|---------|
| **Dynamic** | `python3 server.py` | ✅ | ❌ |
| **Static** | `open index.html` | ❌ | ✅ |

## Recommendation

| Use Case | Mode |
|----------|------|
| Development | `python3 server.py` |
| Production | Deploy with web server |
| Demo/Offline | Static mode |
