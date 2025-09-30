# GitHub Pages Deployment Configuration

## 🚀 **Deployment Setup for GitHub Pages**

### **Repository Configuration**

- **Repository**: `hectorfrancot/hectorfrancot.github.io`
- **URL**: https://hectorfrancot.github.io
- **Branch**: `main` (or `gh-pages`)

### **Vite Configuration for GitHub Pages**

Add to `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/", // For custom domain or '/repository-name/' for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
```

### **GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### **Package.json Scripts**

Add to package.json:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "deploy": "pnpm run build && gh-pages -d dist"
  }
}
```

### **Custom Domain Setup (Optional)**

If you want to use `hectorfranco.dev` later:

1. **Create CNAME file** in `public/` folder:

```
hectorfranco.dev
```

2. **Configure DNS** with your domain provider:

```
Type: CNAME
Name: @
Value: hectorfrancot.github.io
```

3. **GitHub Pages Settings**:
   - Go to repository Settings → Pages
   - Set custom domain to `hectorfranco.dev`
   - Enable "Enforce HTTPS"

### **SEO Considerations for GitHub Pages**

#### **Advantages**:

- ✅ Free hosting
- ✅ HTTPS by default
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Good SEO performance

#### **Optimizations**:

- 🎯 Add 404.html page for better UX
- 🎯 Optimize images for web
- 🎯 Use proper meta tags (already done)
- 🎯 Submit to Google Search Console

### **Performance Tips**

1. **Image Optimization**:

```bash
# Add to public/ folder
/public/
  ├── hector-franco-developer.jpg (1200x630 for OG)
  ├── hector-franco-twitter.jpg (1200x600 for Twitter)
  ├── android-chrome-192x192.png
  ├── android-chrome-512x512.png
  ├── apple-touch-icon.png
  ├── favicon-32x32.png
  └── favicon-16x16.png
```

2. **robots.txt Location**:

   - Must be in `/public/robots.txt`
   - Will be available at `https://hectorfrancot.github.io/robots.txt`

3. **sitemap.xml Location**:
   - Must be in `/public/sitemap.xml`
   - Will be available at `https://hectorfrancot.github.io/sitemap.xml`

### **Deployment Commands**

```bash
# Local development
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Deploy to GitHub Pages (if using gh-pages package)
pnpm deploy
```

### **Post-Deployment SEO Checklist**

1. **Google Search Console**:

   - Add property: `https://hectorfrancot.github.io`
   - Submit sitemap: `https://hectorfrancot.github.io/sitemap.xml`
   - Request indexing for main pages

2. **Testing**:

   - Test robots.txt: `https://hectorfrancot.github.io/robots.txt`
   - Test sitemap: `https://hectorfrancot.github.io/sitemap.xml`
   - Test OG tags with Facebook Debugger
   - Test Twitter Cards with Twitter Card Validator

3. **Analytics**:
   - Set up Google Analytics 4
   - Configure goals and conversions
   - Track portfolio performance

### **GitHub Repository Settings**

1. **Repository Description**:
   "Senior Full Stack Developer & Tech Lead portfolio. React, TypeScript, AI-assisted development specialist."

2. **Repository Topics**:

   - `portfolio`
   - `react`
   - `typescript`
   - `full-stack-developer`
   - `senior-developer`
   - `tech-lead`
   - `ai-development`
   - `github-pages`

3. **README.md** for repository:

```markdown
# Héctor Franco - Portfolio

Senior Full Stack Developer & Tech Lead specializing in React, Angular, TypeScript, and AI-assisted development.

🌐 **Live Site**: https://hectorfrancot.github.io

## Tech Stack

- React 19
- TypeScript 5.8
- Tailwind CSS
- Vite
- GitHub Pages

## Features

- 🎨 Modern glassmorphism design
- 🤖 AI-assisted development showcase
- 📱 Fully responsive
- ♿ Accessibility optimized
- 🚀 SEO optimized

## Contact

- 📧 hectorft.hf@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/h%C3%A9ctor-franco-3a6515171/)
- 🐙 [GitHub](https://github.com/hectorfrancot)
```

---

**🎯 Next Steps:**

1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Submit to Google Search Console
4. Monitor SEO performance
