---
title: Rust (Tokio)
description: Zero-cost abstractions with async runtime
---

## Why Rust?

- ✅ Memory safety without garbage collector
- ✅ Zero-cost abstractions
- ✅ Compiled to single binary
- ✅ Fastest performance
- ✅ No runtime dependencies

## Simple HTTP Server (Axum + Tokio)

```rust
use axum::{routing::get, Router};

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello from Rust!" }));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8000")
        .await
        .unwrap();
    
    println!("Server running on :8000");
    axum::serve(listener, app).await.unwrap();
}
```

## Cargo.toml

```toml
[package]
name = "snapcode"
version = "0.1.0"
edition = "2021"

[dependencies]
axum = "0.7"
tokio = { version = "1", features = ["full"] }
```

## Build & Deploy

```bash
# Development
cargo run

# Release build (optimized)
cargo build --release

# Binary location
./target/release/snapcode
```

## Systemd Service

```ini
[Unit]
Description=SnapCode Rust Server
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/snapcode
ExecStart=/var/www/snapcode/snapcode
Restart=always
Environment=RUST_LOG=info

[Install]
WantedBy=multi-user.target
```

## Tokio Runtime

```rust
// Async/await with Tokio
#[tokio::main]
async fn main() {
    // Spawns tasks on thread pool
    tokio::spawn(async {
        // Background task
    });
}
```

## Performance Comparison

| Metric | Rust | Go | Node.js | Python |
|--------|------|-----|---------|--------|
| Requests/sec | ~500K | ~300K | ~50K | ~10K |
| Memory | ~5MB | ~10MB | ~50MB | ~30MB |
| Startup | ~5ms | ~10ms | ~50ms | ~100ms |
| Binary size | ~5MB | ~10MB | N/A | N/A |

## When to Use Rust?

- ✅ Performance critical applications
- ✅ System programming
- ✅ WebAssembly targets
- ✅ Memory-constrained environments
- ⚠️ Steeper learning curve
