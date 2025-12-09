---
title: Firewall
description: UFW configuration for server security
---

## UFW (Uncomplicated Firewall)

### Basic Setup

```bash
# Install
sudo apt install ufw

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (important!)
sudo ufw allow ssh
# or: sudo ufw allow 22

# Allow HTTP/HTTPS
sudo ufw allow http
sudo ufw allow https
# or: sudo ufw allow 80,443/tcp

# Enable firewall
sudo ufw enable
```

### Check Status

```bash
sudo ufw status verbose
sudo ufw status numbered
```

### Common Rules

```bash
# Allow specific port
sudo ufw allow 8000

# Allow from specific IP
sudo ufw allow from 192.168.1.100

# Allow port from specific IP
sudo ufw allow from 192.168.1.100 to any port 22

# Deny specific port
sudo ufw deny 3306

# Delete rule
sudo ufw delete allow 8000
# or by number: sudo ufw delete 3
```

### Application Profiles

```bash
# List available profiles
sudo ufw app list

# Allow Nginx
sudo ufw allow 'Nginx Full'

# Allow OpenSSH
sudo ufw allow 'OpenSSH'
```

## Recommended Rules for SnapCode

```bash
# Reset (careful!)
sudo ufw reset

# Basic setup
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Essential
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

# Optional: Allow app port (if not using reverse proxy)
# sudo ufw allow 8000

# Enable
sudo ufw enable
```

## iptables (Advanced)

```bash
# View rules
sudo iptables -L -n -v

# Allow established connections
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow SSH
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Drop all other incoming
sudo iptables -A INPUT -j DROP
```

## Best Practices

- ✅ Always allow SSH before enabling
- ✅ Use reverse proxy (Nginx) instead of exposing app port
- ✅ Limit SSH to specific IPs if possible
- ✅ Regularly audit rules
- ✅ Log denied connections
