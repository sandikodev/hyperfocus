---
title: Node.js
description: JavaScript runtime with event-driven architecture
---

## Why Node.js?

- ✅ Same language frontend & backend
- ✅ Event-driven, non-blocking I/O
- ✅ Huge npm ecosystem
- ✅ Great for real-time apps
- ✅ Easy to learn for JS developers

## Simple HTTP Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js!');
});

server.listen(8000, () => {
    console.log('Server running on :8000');
});
```

## Express.js

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(8000, () => {
    console.log('Server running on :8000');
});
```

## PM2 Deployment

```bash
# Install PM2
npm install -g pm2

# Start app
pm2 start server.js --name snapcode

# Cluster mode (use all CPUs)
pm2 start server.js -i max --name snapcode

# Save & startup
pm2 save
pm2 startup
```

## ecosystem.config.js

```javascript
module.exports = {
    apps: [{
        name: 'snapcode',
        script: 'server.js',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
            PORT: 8000
        }
    }]
};
```

## Event Loop

```javascript
// Non-blocking I/O
const fs = require('fs');

// Async (non-blocking)
fs.readFile('file.txt', (err, data) => {
    console.log(data);
});

// This runs immediately, doesn't wait
console.log('Reading file...');
```

## vs Other Runtimes

| Aspect | Node.js | Python | Go | PHP |
|--------|---------|--------|-----|-----|
| Model | Event loop | Sync/Async | Goroutines | Process pool |
| Best For | Real-time, APIs | Scripts, ML | Microservices | Web pages |
| Scaling | PM2 cluster | Gunicorn | Built-in | FPM |
| Memory | Medium | Medium | Low | Per-request |
