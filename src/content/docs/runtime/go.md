---
title: Go (Goroutines)
description: Compiled binary deployment with built-in concurrency
---

## Why Go?

- ✅ Compiled to single binary
- ✅ No runtime dependencies
- ✅ Built-in concurrency (goroutines)
- ✅ Fast startup time
- ✅ Low memory footprint

## Simple HTTP Server

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello from Go!")
    })
    
    fmt.Println("Server running on :8000")
    http.ListenAndServe(":8000", nil)
}
```

## Build & Deploy

```bash
# Build binary
go build -o server main.go

# Build for Linux (cross-compile)
GOOS=linux GOARCH=amd64 go build -o server main.go

# Run
./server
```

## Systemd Service

`/etc/systemd/system/snapcode.service`:

```ini
[Unit]
Description=SnapCode Go Server
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/snapcode
ExecStart=/var/www/snapcode/server
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable snapcode
sudo systemctl start snapcode
```

## Goroutines

```go
// Concurrent request handling (built-in)
http.ListenAndServe(":8000", nil)
// Each request runs in its own goroutine automatically!

// Manual goroutine
go func() {
    // Background task
}()
```

## vs Other Runtimes

| Aspect | Go | Python | Node.js | Rust |
|--------|-----|--------|---------|------|
| Deployment | Binary | Interpreter | Runtime | Binary |
| Dependencies | None | pip | npm | None |
| Startup | ~10ms | ~100ms | ~50ms | ~5ms |
| Memory | Low | Medium | Medium | Lowest |
| Concurrency | Goroutines | Async/Threads | Event loop | Async/Threads |

## No Process Manager Needed!

Go binaries are self-contained. Just use systemd:
- ✅ Auto-restart on crash
- ✅ Log management (journald)
- ✅ No Supervisor/PM2 needed
