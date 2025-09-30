# My Resume - Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features comprehensive testing, Storybook component documentation, and automated GitHub Pages deployment.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest version of React with modern hooks
- 🔷 **TypeScript** - Full type safety throughout the application
- 📦 **PNPM** - Fast, efficient package manager
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧪 **Vitest** - Modern testing framework with 95%+ coverage
- � **Storybook** - Component documentation and testing
- �🔍 **ESLint** - Code linting and formatting
- 🌙 **Dark/Light Mode** - Theme switching with system preference detection
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🔄 **Smooth Animations** - Intersection Observer based animations
- 🚀 **GitHub Pages** - Automated deployment workflow

## 🌐 Live Demo

Visit the live portfolio: [https://hectorfrancot.github.io/my-resume](https://hectorfrancot.github.io/my-resume)

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/   # GitHub Actions for CI/CD
├── .storybook/      # Storybook configuration
├── public/          # Static assets (manifest, sitemap, etc.)
├── src/
│   ├── components/  # React components
│   ├── data/        # Resume data and configuration
│   ├── hooks/       # Custom React hooks
│   ├── test/        # Test files and setup
│   ├── types/       # TypeScript type definitions
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main App component
│   └── main.tsx     # Application entry point
├── coverage/        # Test coverage reports
├── storybook-static/ # Built Storybook documentation
└── dist/           # Production build output
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- PNPM (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:

```bash
pnpm install
```

### Development

1. Start the development server:

```bash
pnpm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. For component development with Storybook:

```bash
pnpm run storybook
```

4. View Storybook at `http://localhost:6006`

### Testing

Run the comprehensive test suite:

```bash
# Run tests in watch mode
pnpm run test

# Run tests once
pnpm run test:run

# Run tests with UI
pnpm run test:ui
```

View test coverage at `coverage/index.html` after running tests.

### Build

1. Build for production:

```bash
pnpm run build
```

2. Preview the production build:

```bash
pnpm run preview
```

### Linting

Run ESLint to check code quality:

```bash
pnpm run lint
```

## 🎯 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint
- `pnpm run test` - Run tests in watch mode
- `pnpm run test:run` - Run tests once
- `pnpm run test:ui` - Run tests with Vitest UI
- `pnpm run storybook` - Start Storybook development server
- `pnpm run build-storybook` - Build Storybook for production
- `pnpm run predeploy` - Build project for deployment
- `pnpm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your portfolio will be available at `https://hectorfrancot.github.io/my-resume`

### Manual Deployment

For manual deployment to GitHub Pages:

```bash
# Build and deploy to GitHub Pages
pnpm run deploy
```

### Initial Setup for GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Update the `homepage` field in `package.json` with your GitHub username

## 📊 Project Quality

- **Test Coverage**: 95%+ with comprehensive unit tests
- **Component Documentation**: Full Storybook coverage
- **Type Safety**: 100% TypeScript coverage
- **Performance**: Optimized Vite build with lazy loading
- **Accessibility**: WCAG compliant with a11y testing
- **SEO**: Comprehensive meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite with hot module replacement
- **Testing**: Vitest, Testing Library, Happy DOM
- **Documentation**: Storybook with accessibility addon
- **Deployment**: GitHub Pages with GitHub Actions
- **Package Manager**: PNPM for fast installs

## 🔧 Configuration

### Vite

The project uses Vite for fast development and building. Configuration can be found in `vite.config.ts`.

### TypeScript

TypeScript configuration is split into:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node.js specific settings

### ESLint

ESLint is configured with React and TypeScript rules in `eslint.config.js`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
