# Yibin (Leon) Liu - Academic Personal Website

A modern, responsive academic personal website built with React and deployed as a static site on GitHub Pages.

## 🌟 Features

- **Modern Tech Stack**: Built with React 19, Vite, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices using Radix UI components
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Fast Performance**: Static site generation with optimized builds
- **Academic Focus**: Designed specifically for academic professionals and researchers

## 🚀 Live Website

Visit the live website: [https://10-oasis-01.github.io](https://10-oasis-01.github.io)

## 🏗️ Architecture

This is a **single-page application (SPA)** deployed as a static website:

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with Radix UI components  
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: GitHub Pages with automated CI/CD

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── config/        # Configuration files
│   │   ├── pages/         # Page components
│   │   └── styles/        # Global styles
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── .github/workflows/     # GitHub Actions
└── package.json           # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Getting Started
```bash
# Clone the repository
git clone https://github.com/10-OASIS-01/10-OASIS-01.github.io.git
cd 10-OASIS-01.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Type checking
- `pnpm format` - Format code with Prettier

## 🎨 Customization

### Personal Information
Edit `client/src/config/siteConfig.ts` to update:
- Personal details and bio
- Research interests  
- Social media links
- Academic affiliations

### Blog Posts
Edit `client/src/config/blogConfig.ts` to:
- Add new blog posts
- Modify existing content
- Update blog metadata

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch via GitHub Actions.

### Manual Deployment
```bash
pnpm build
# Upload contents of `dist/public/` to your hosting provider
```

## 🔍 SEO Features

- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing  
- Twitter Card support
- JSON-LD structured data for academic profiles
- XML sitemap generation
- Robots.txt for crawler guidance
- Canonical URLs and proper heading hierarchy

## 📱 Performance

- Static site generation for fast loading
- Code splitting and lazy loading
- Optimized images and assets
- Minimal bundle size
- Progressive Web App features

## 🧪 Technology Stack

### Core
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library

### Tools & Utilities
- **Wouter** - Lightweight router
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Date-fns** - Date utilities

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Yibin (Leon) Liu**
- Email: kevin.lau.stu@gmail.com
- GitHub: [@10-OASIS-01](https://github.com/10-OASIS-01)
- LinkedIn: [yibin-leon-liu](https://www.linkedin.com/in/yibin-leon-liu)

---

*This website serves as a professional academic portfolio showcasing research, publications, and professional experience in the field of Artificial Intelligence and Robotics.*
