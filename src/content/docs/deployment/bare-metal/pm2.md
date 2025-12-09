---
title: PM2
description: JavaScript ecosystem process manager with advanced features
---

## PM2 vs Supervisor

| Feature | PM2 | Supervisor |
|---------|-----|------------|
| **Ecosystem** | JavaScript | Python |
| **Cluster Mode** | ✅ | ❌ |
| **Zero-downtime** | ✅ | ❌ |
| **Load Balancing** | ✅ Built-in | ❌ |
| **Dashboard** | ✅ Built-in | ❌ |

## Installation

```bash
npm install -g pm2
pm2 --version
```

## Quick Start

```bash
# Start app
pm2 start server.py --name snapcode --interpreter python3

# View status
pm2 status

# View logs
pm2 logs snapcode
```

## With Config File

### ecosystem.config.js
```javascript
module.exports = {
  apps: [{
    name: 'snapcode',
    script: 'server.py',
    interpreter: 'python3',
    instances: 1,
    autorestart: true,
    max_memory_restart: '500M',
    env: { PORT: 8000 }
  }]
};
```

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Management

```bash
pm2 start snapcode      # Start
pm2 stop snapcode       # Stop
pm2 restart snapcode    # Restart
pm2 reload snapcode     # Zero-downtime reload
pm2 delete snapcode     # Remove
pm2 logs snapcode       # Logs
pm2 monit               # Dashboard
```

## Features

- ✅ Cluster mode (multiple instances)
- ✅ Zero-downtime reload
- ✅ Built-in load balancing
- ✅ Built-in monitoring dashboard
- ✅ Auto-restart on crash
