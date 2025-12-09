---
title: Logging
description: Centralized logging and log management
---

## Log Locations

| Service | Log Path |
|---------|----------|
| Nginx | `/var/log/nginx/access.log`, `error.log` |
| Supervisor | `/var/log/supervisor/` |
| Docker | `docker logs <container>` |
| Systemd | `journalctl -u <service>` |
| PHP-FPM | `/var/log/php-fpm/` |

## Basic Commands

```bash
# Tail logs in real-time
tail -f /var/log/nginx/access.log

# Last 100 lines
tail -n 100 /var/log/nginx/error.log

# Search logs
grep "error" /var/log/nginx/error.log
grep -i "500" /var/log/nginx/access.log

# Journalctl (systemd)
journalctl -u snapcode -f
journalctl -u snapcode --since "1 hour ago"
```

## Log Rotation

`/etc/logrotate.d/snapcode`:

```
/var/log/snapcode/*.log {
    daily
    rotate 14
    compress
    delaycompress
    missingok
    notifempty
    create 0640 www-data www-data
    postrotate
        systemctl reload snapcode > /dev/null 2>&1 || true
    endscript
}
```

## Docker Logging

```bash
# View logs
docker logs snapcode
docker logs -f snapcode          # Follow
docker logs --tail 100 snapcode  # Last 100

# Docker Compose
docker-compose logs -f snapcode
```

## Structured Logging (JSON)

```python
import json
import logging

class JSONFormatter(logging.Formatter):
    def format(self, record):
        return json.dumps({
            'timestamp': self.formatTime(record),
            'level': record.levelname,
            'message': record.getMessage(),
            'module': record.module
        })
```

## Log Levels

| Level | Use Case |
|-------|----------|
| DEBUG | Development details |
| INFO | General information |
| WARNING | Potential issues |
| ERROR | Errors that need attention |
| CRITICAL | System failures |

## Centralized Logging (ELK)

```
App → Filebeat → Logstash → Elasticsearch → Kibana
```

For small projects, start with file-based logging and `tail -f`.
