# Yibin (Leon) Liu - Academic Personal Website

A modern, responsive academic personal website built with React and deployed as a static site on GitHub Pages.


Visit the live website: [https://10-oasis-01.github.io](https://10-oasis-01.github.io)

Also check out these incredible researchers' homepages based on Yibin's version: 

[Buqiang Xu, Zhejiang University](https://xubqpanda.github.io/),

[Jingqi Fan, UMass Amherst](https://jingqi-fan.github.io),


> **For detailed development information, see [DEVELOPMENT.md](DEVELOPMENT.md)**

## Features

- **Modern Tech Stack**: Built with React 19, Vite, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices using Radix UI components
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Fast Performance**: Static site generation with optimized builds
- **Academic Focus**: Designed specifically for academic professionals and researchers

## Architecture

This is a **single-page application (SPA)** deployed as a static website:

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with Radix UI components  
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: GitHub Pages with automated CI/CD

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── content/       # Site content, one file per section (edit here)
│   │   ├── config/        # siteConfig.ts shim (re-exports content/)
│   │   ├── pages/         # Page components
│   │   └── styles/        # Global styles
│   ├── public/
│   │   └── assets/        # Uploaded files: avatar, backgrounds, CV, PDFs
│   └── index.html         # HTML template
├── .github/workflows/     # GitHub Actions
└── package.json           # Dependencies and scripts
```

## Quick Start

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

For detailed development documentation, including architecture, configuration, and deployment guides, see [DEVELOPMENT.md](DEVELOPMENT.md).

## Customization

### Editing content
All site content lives in `client/src/content/`, **one file per section** — edit
the file you care about, nothing else:

| File | Controls |
|------|----------|
| `personal.ts` | Name, title, affiliation, hero quote, email |
| `about.ts` | About-me intro, research focus & interests, advisors |
| `news.ts` | News / updates (newest first, collapses past 5) |
| `publications.ts` | Publications list |
| `experience.ts` | Research & industry experience |
| `activities.ts` | Talks, academic service, awards |
| `projects.ts` | Projects and the skills list |
| `site.ts` | Asset paths, social links, navigation menu |
| `types.ts` | Field definitions (the safety net — see below) |

Every file is typed, so a bad edit (a dropped field, a truncated string) is
caught by `pnpm check`, which **runs in CI before each deploy** — a broken edit
fails the check instead of breaking the live site. You can edit these files
directly in the GitHub web UI and the site auto-deploys on commit.

Inline links inside a paragraph (e.g. an advisor's name in the intro, or a
linked phrase in an academic-service entry) are declared as data: a list of
plain strings and `{ text, url }` segments. No need to touch component code to
add or move a link.

> `client/src/config/siteConfig.ts` still works as an import path — it simply
> re-exports everything from `content/`.

### Uploaded files (avatar, backgrounds, CV, PDFs)
Put files in `client/public/assets/` and reference them by the absolute path
`/assets/<filename>`. The key paths (avatar, hero background, CV) are centralized
in **`client/src/content/site.ts`** under `assets` — to swap one, drop in the new
file and update that single line. The CV menu item reuses `assets.cv`
automatically.

### "Last updated" date
Shown in the footer and set **automatically** to the date of the last git commit
at build time (injected via `vite.config.ts`). It updates on every push/deploy —
no manual editing needed.

### Blog Posts
Edit `client/src/config/blogConfig.ts` to:
- Add new blog posts
- Modify existing content
- Update blog metadata

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the `main` or `master` branch. The workflow runs a **type check (`pnpm check`) before building**, so a malformed content edit (a dropped field, a truncated string) fails the check instead of breaking the live site — safe to edit content directly in the GitHub web UI.

For manual deployment and advanced configuration, see the [Deployment section in DEVELOPMENT.md](DEVELOPMENT.md#deployment).

## SEO Features

- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing  
- Twitter Card support
- JSON-LD structured data for academic profiles
- XML sitemap generation
- Robots.txt for crawler guidance
- Canonical URLs and proper heading hierarchy

## Performance

- Static site generation for fast loading
- Code splitting and lazy loading
- Optimized images and assets
- Minimal bundle size
- Progressive Web App features

## Technology Stack

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

## Documentation

- [README.md](README.md) - This file, quick start and overview
- [DEVELOPMENT.md](DEVELOPMENT.md) - Comprehensive development documentation
- [FILE_STORAGE_GUIDE.md](FILE_STORAGE_GUIDE.md) - File storage and asset management

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions, issues, and feature requests are welcome! Please read [DEVELOPMENT.md](DEVELOPMENT.md) for development guidelines.

## Contact

**Yibin (Leon) Liu**
- Email: kevin.lau.stu@gmail.com
- GitHub: [@10-OASIS-01](https://github.com/10-OASIS-01)
- LinkedIn: [yibin-leon-liu](https://www.linkedin.com/in/yibin-leon-liu)

---

*This website serves as a professional academic portfolio showcasing research, publications, and professional experience in the field of Artificial Intelligence and Robotics.*
