# HyperFocus

<div align="center">

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/sandikodev/hyperfocus?style=social)](https://github.com/sandikodev/hyperfocus)

**A 10-Year Gift to the Web Technology Community (2016-2026)**

*Based on SnapCode Study Case*

[Live Site](https://sandikodev.github.io/hyperfocus) • [Documentation](https://sandikodev.github.io/hyperfocus) • [Contributing](CONTRIBUTING.md) • [Discussions](https://github.com/sandikodev/hyperfocus/discussions)

</div>

---

## 🎁 The Gift

This is **Sandikodev's 10-year journey gift** to the open-source community—for enthusiasts and beginners who want to learn web technology collaboratively, from the ground up.

## 🧠 The ADHD Paradox: HyperFocus

**HyperFocus** - The paradox of ADHD: intensely focused on one thing, yet exploring every layer beneath it.

This documentation reflects how an ADHD mind works—**never satisfied with understanding just one layer**. We hyperfocus on SnapCode (a simple client-side app), but can't stop exploring everything beneath it:

- 🎨 **Client-Side Rendering** - Where it all begins
- 🔄 **Server-Side Rendering** - When and why we need it
- 🏗️ **Infrastructure** - Bare metal, containers, orchestration
- 🔒 **Security** - Hardening, authentication, best practices
- 📊 **Monitoring** - Observability, logging, metrics
- ☁️ **Cloud & Edge** - Modern deployment strategies

**We don't stop at one layer. We explore them all.**

## 🌟 What's Inside

### The Journey
10 years of Computer Science. From SMK to DevOps. ADHD, dropouts, failures, and the RUH philosophy. A story of passion over profit, knowledge over certificates.

### The Architecture
Starting with **SnapCode** (56KB, buildless, client-side only), we progressively explore:
- Why buildless? When to use build tools?
- Client-side vs Server-side rendering
- When to involve the backend
- Infrastructure considerations

### The Deployment
Three progressive paths:
1. **Static Hosting** - GitHub Pages, Vercel (free, simple)
2. **Bare Metal** - VPS, Supervisor, PM2, Nginx (full control)
3. **Containerized** - Docker, Kubernetes (modern DevOps)

### The Runtime
Multiple server implementations to understand different approaches:
- ✅ Python HTTP Server
- ✅ Node.js with PM2
- 📝 PHP-FPM (planned)
- 📝 Go binaries (planned)
- 📝 Rust (planned)

### The Roadmap
Progressive learning from beginner to advanced, covering security, monitoring, CI/CD, and cloud platforms.

## 🚀 Quick Start

```bash
# Clone repository
git clone git@github.com:sandikodev/hyperfocus.git
cd hyperfocus

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Visit `http://localhost:4321`

## 📦 Tech Stack

- **Framework:** [Astro](https://astro.build) v5.6.1
- **Theme:** [Starlight](https://starlight.astro.build) v0.37.0
- **Package Manager:** pnpm
- **Deployment:** GitHub Pages
- **Analytics:** Plausible (privacy-friendly)

## 🤝 Contributing

This is a **collaborative learning resource**. Your contributions help others learn!

### Ways to Contribute

- 📝 **Documentation** - Fix typos, improve clarity, add examples
- 🐛 **Bug Reports** - Found something broken? Let us know
- 💡 **New Topics** - Suggest areas to explore
- 🌍 **Translations** - Help make this accessible globally
- 🎨 **Design** - Improve UX, accessibility, dark mode
- 📚 **Case Studies** - Share your own deployment experiences

### How to Contribute

1. Fork this repository
2. Create a branch (`git checkout -b feature/amazing-addition`)
3. Make your changes
4. Test locally (`pnpm dev`)
5. Commit (`git commit -m 'feat: add amazing addition'`)
6. Push (`git push origin feature/amazing-addition`)
7. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📁 Project Structure

```
.
├── public/              # Static assets
│   ├── favicon.svg     # Custom favicon
│   └── og-image.png    # Social sharing image
├── src/
│   ├── assets/         # Logo and images
│   ├── components/     # Custom components
│   │   ├── Head.astro  # SEO meta tags
│   │   └── Footer.astro # Custom footer
│   ├── content/
│   │   └── docs/       # Markdown documentation
│   │       ├── journey/        # The story
│   │       ├── architecture/   # Technical design
│   │       ├── deployment/     # Hosting strategies
│   │       ├── runtime/        # Server implementations
│   │       ├── security/       # Security practices
│   │       ├── monitoring/     # Observability
│   │       └── roadmap.md      # Learning path
│   ├── styles/         # Custom CSS (dark mode support)
│   └── content.config.ts
├── astro.config.mjs    # Astro + Starlight config
└── package.json
```

## 🎯 Philosophy

### For Beginners
Start with client-side rendering. Understand the basics. Deploy for free. Build confidence.

### For Intermediate
Explore when and why server-side rendering matters. Learn infrastructure. Understand trade-offs.

### For Advanced
Dive into security, monitoring, orchestration, and cloud platforms. Never stop exploring.

### The ADHD Way
Don't be satisfied with surface-level knowledge. Explore every layer. Connect the dots. See the full picture.

## 🎓 Learning Path

| Level | Focus | Outcome |
|-------|-------|---------|
| **Beginner** | Client-side, static hosting | Deploy your first app |
| **Intermediate** | Server-side, VPS, reverse proxy | Production deployment |
| **Advanced** | Containers, security, monitoring | DevOps mastery |

## 📄 License

MIT License - Use freely, modify, share, learn together.

See [LICENSE](LICENSE) for details.

## 💫 Acknowledgments

- **SnapCode** - The main gift, the case study
- **Open Source Community** - For 10 years of free knowledge
- **Everyone with ADHD** - Who explores deeply, never satisfied with one layer
- **Beginners** - Who dare to start, fail, and try again

## 🔗 Links

- **Live Site:** [sandikodev.github.io/hyperfocus](https://sandikodev.github.io/hyperfocus)
- **Main Project:** [SnapCode](https://github.com/sandikodev/snapcode)
- **Author:** [@sandikodev](https://github.com/sandikodev)
- **Twitter:** [@sandikodev](https://twitter.com/sandikodev)

## 💖 Support

If this project helps you, consider:

- ⭐ [Star on GitHub](https://github.com/sandikodev/hyperfocus)
- 💬 [Join Discussions](https://github.com/sandikodev/hyperfocus/discussions)
- 💖 [Sponsor](https://github.com/sponsors/sandikodev)
- ☕ [Buy Me a Coffee](https://ko-fi.com/sandikodev)

---

## 🌟 The Vision

**This is not just documentation. This is a journey.**

From a simple 56KB HTML file to full-stack infrastructure. From client-side rendering to server-side rendering. From free hosting to bare metal servers. From beginner to DevOps engineer.

**Layer by layer. Concept by concept. Together.**

---

<div align="center">

**ngode-ngide kode ngadi-ngadi** 🚀

*Not for profit, but for passion.*  
*Not for certificates, but for knowledge.*  
*Not for one layer, but for all layers.*

Made with ❤️ by [@sandikodev](https://github.com/sandikodev)

</div>
