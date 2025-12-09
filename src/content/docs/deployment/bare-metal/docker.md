---
title: Docker Deployment
description: Containerized deployment with Docker and Docker Compose
---

## Quick Start

### Option 1: Docker Compose (Recommended)
```bash
docker-compose up -d        # Build and start
docker-compose logs -f      # View logs
docker-compose down         # Stop
```

### Option 2: Docker Only
```bash
docker build -t snapcode .
docker run -d -p 8000:8000 --name snapcode snapcode
```

### Option 3: With Nginx
```bash
docker-compose --profile with-nginx up -d
```

## Management

```bash
docker ps                           # View running containers
docker-compose logs -f snapcode     # View logs
docker-compose restart snapcode     # Restart
docker exec -it snapcode sh         # Shell access
```

## Monitoring

```bash
docker stats snapcode                                      # Container stats
docker inspect --format='{{.State.Health.Status}}' snapcode # Health check
docker logs --tail 100 snapcode                            # Recent logs
```

## Production Setup

### Environment Variables
```bash
cat > .env << EOF
PORT=8000
ENVIRONMENT=production
EOF
```

### Resource Limits (docker-compose.override.yml)
```yaml
version: '3.8'
services:
  snapcode:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

## Features

- ✅ Isolated environment
- ✅ Easy deployment
- ✅ Auto-restart
- ✅ Health checks
- ✅ Resource limits
- ✅ Scalable

## Troubleshooting

```bash
# Check logs
docker-compose logs snapcode

# Rebuild
docker-compose up -d --build --force-recreate

# Clean up
docker system prune -a
```
