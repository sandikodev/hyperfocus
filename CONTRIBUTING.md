# Contributing to SnapCode Onboards

Thank you for your interest in contributing! 🎉

## Ways to Contribute

### 📝 Documentation
- Fix typos or grammar
- Improve clarity and readability
- Add missing information
- Translate content to other languages

### 🐛 Bug Reports
- Check if issue already exists
- Provide clear description
- Include steps to reproduce
- Add screenshots if applicable

### 💡 Feature Requests
- Describe the feature clearly
- Explain why it's useful
- Provide examples if possible

### 🎨 Design Improvements
- UI/UX enhancements
- Accessibility improvements
- Dark mode optimizations
- Responsive design fixes

## Getting Started

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/onboards-site.git
   cd onboards-site
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**
   - Edit files in `src/content/docs/`
   - Test locally with `pnpm dev`

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes

## Commit Message Convention

Use clear, descriptive commit messages:

- `feat: add new deployment guide`
- `fix: correct typo in architecture docs`
- `docs: update contributing guidelines`
- `style: improve dark mode colors`
- `refactor: reorganize sidebar structure`

## Code Style

### Markdown
- Use proper heading hierarchy (h2, h3, h4)
- Add blank lines between sections
- Use tables for comparisons
- Include code blocks with language tags

### Example:
```markdown
---
title: Your Title
description: Brief description
---

## Section Title

Your content here...

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

\`\`\`bash
# Your code here
\`\`\`
```

## Testing

Before submitting PR:

1. **Run dev server**
   ```bash
   pnpm dev
   ```

2. **Check your changes**
   - Visit `http://localhost:4321`
   - Test in light and dark mode
   - Check mobile responsiveness

3. **Build test**
   ```bash
   pnpm build
   ```

## Need Help?

- Open an issue for questions
- Tag [@sandikodev](https://github.com/sandikodev) for guidance
- Join discussions in Issues tab

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on the content, not the person

---

**Thank you for contributing!** 🚀
