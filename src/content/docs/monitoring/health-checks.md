---
title: Health Checks
description: Application and service health monitoring
---

## Simple Health Endpoint

### Python

```python
@app.route('/health')
def health():
    return {'status': 'healthy'}, 200
```

### Node.js

```javascript
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});
```

### Go

```go
http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    w.Write([]byte(`{"status":"healthy"}`))
})
```

## Docker Health Check

### Dockerfile

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1
```

### docker-compose.yml

```yaml
services:
  snapcode:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
```

```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' snapcode
```

## Nginx Health Check

```nginx
location /health {
    access_log off;
    return 200 "healthy\n";
    add_header Content-Type text/plain;
}
```

## Load Balancer Health Checks

### HAProxy

```haproxy
backend snapcode_backend
    option httpchk GET /health
    http-check expect status 200
    server app1 localhost:8000 check
```

### Nginx Upstream

```nginx
upstream backend {
    server localhost:8000 max_fails=3 fail_timeout=30s;
    server localhost:8001 max_fails=3 fail_timeout=30s;
}
```

## Monitoring Script

```bash
#!/bin/bash
# health-check.sh

URL="http://localhost:8000/health"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ $RESPONSE -ne 200 ]; then
    echo "Service unhealthy: $RESPONSE"
    # Send alert
    systemctl restart snapcode
fi
```

Cron:
```bash
* * * * * /path/to/health-check.sh
```

## Comprehensive Health Check

```python
@app.route('/health')
def health():
    checks = {
        'database': check_db(),
        'cache': check_redis(),
        'disk': check_disk_space(),
    }
    
    status = 'healthy' if all(checks.values()) else 'unhealthy'
    code = 200 if status == 'healthy' else 503
    
    return {'status': status, 'checks': checks}, code
```
