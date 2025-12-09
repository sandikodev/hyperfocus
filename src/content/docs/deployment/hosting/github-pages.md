---
title: GitHub Pages
description: Free static hosting with auto-deploy
---

## Why GitHub Pages?

GitHub Pages adalah **static hosting** - tidak bisa baca directory listing.

**Solusi:** Generate `files.json` saat build!

## 3-Tier Fallback System

```txt
1. Try files.json (GitHub Pages) ✅
   ↓ fail
2. Try /api/files/ (Local server) ✅
   ↓ fail
3. Use hardcoded list (Fallback) ✅
```

## Deployment Steps

### 1. Generate File Lists
```bash
python3 build.py
# Output: ✅ Generated content/files.json
```

### 2. Commit & Push
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Enable GitHub Pages
```txt
GitHub Repo → Settings → Pages
Source: Deploy from branch
Branch: main / (root)
```

## Auto-Build with GitHub Actions

File `.github/workflows/build.yml`:
```txt
1. **Trigger:** Setiap push ke main branch
2. **Run:** `python3 build.py`
3. **Generate:** `files.json` untuk setiap folder
4. **Commit:** Auto-commit file lists
5. **Deploy:** GitHub Pages auto-deploy
```

## files.json Format

```json
[
  { "name": "INDEX.md", "size": 1100 },
  { "name": "QUICKSTART.md", "size": 4500 }
]
```

## Adding New Files

```bash
# 1. Add file
echo "# New" > docs/NEW.md

# 2. Push (GitHub Actions auto-generates files.json)
git add docs/NEW.md
git commit -m "Add new doc"
git push
```

## Features

- ✅ Free hosting
- ✅ Auto SSL (HTTPS)
- ✅ CDN (fast worldwide)
- ✅ Auto-build with GitHub Actions
- ✅ Custom domain support
