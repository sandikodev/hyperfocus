---
title: Metrics
description: System and application metrics with Prometheus
---

## Basic System Metrics

```bash
# CPU usage
top
htop

# Memory
free -h

# Disk
df -h

# Network
netstat -tulpn
ss -tulpn
```

## Docker Stats

```bash
# Container resources
docker stats

# Specific container
docker stats snapcode

# Health check
docker inspect --format='{{.State.Health.Status}}' snapcode
```

## Nginx Status

Enable status module in nginx.conf:

```nginx
location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
}
```

```bash
curl http://localhost/nginx_status
```

## Prometheus (Advanced)

### prometheus.yml

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
  
  - job_name: 'nginx'
    static_configs:
      - targets: ['localhost:9113']
```

### Node Exporter

```bash
# Install
wget https://github.com/prometheus/node_exporter/releases/download/v1.6.0/node_exporter-1.6.0.linux-amd64.tar.gz
tar xvfz node_exporter-*.tar.gz
./node_exporter

# Metrics at
curl http://localhost:9100/metrics
```

## Key Metrics to Monitor

| Metric | Description | Alert Threshold |
|--------|-------------|-----------------|
| CPU Usage | Processor load | > 80% |
| Memory | RAM usage | > 85% |
| Disk | Storage usage | > 90% |
| Response Time | Request latency | > 500ms |
| Error Rate | 5xx responses | > 1% |
| Uptime | Service availability | < 99.9% |

## Grafana Dashboard

```bash
# Docker
docker run -d -p 3000:3000 grafana/grafana

# Access
http://localhost:3000
# Default: admin/admin
```

## Simple Health Check

```bash
# Cron job every 5 minutes
*/5 * * * * curl -sf http://localhost:8000/health || echo "Service down" | mail -s "Alert" admin@example.com
```

## Application Metrics (Python)

```python
from prometheus_client import Counter, Histogram, start_http_server

REQUEST_COUNT = Counter('requests_total', 'Total requests')
REQUEST_LATENCY = Histogram('request_latency_seconds', 'Request latency')

@REQUEST_LATENCY.time()
def handle_request():
    REQUEST_COUNT.inc()
    # ... handle request

start_http_server(9090)  # Metrics endpoint
```
