# Development Documentation

This document provides comprehensive technical information for developers working on the Yibin (Leon) Liu Academic Personal Website project.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Development Environment Setup](#development-environment-setup)
4. [Project Structure](#project-structure)
5. [Configuration System](#configuration-system)
6. [Component Development](#component-development)
7. [Styling Guidelines](#styling-guidelines)
8. [Build System](#build-system)
9. [Deployment](#deployment)
10. [Testing](#testing)
11. [Performance Optimization](#performance-optimization)
12. [SEO Implementation](#seo-implementation)
13. [Troubleshooting](#troubleshooting)

## Project Overview

This is a modern academic personal website built as a single-page application (SPA) using React 19, TypeScript, and Vite. The site is deployed as a static website on GitHub Pages with automated CI/CD.

### Technology Stack

**Core Framework:**
- React 19.1.1 - Latest React with concurrent features
- TypeScript 5.9.3 - Type safety and developer experience
- Vite 7.2.2 - Fast build tool and development server

**Styling:**
- Tailwind CSS 4.1.14 - Utility-first CSS framework
- @tailwindcss/vite - Vite plugin for Tailwind CSS 4
- Radix UI - Accessible component primitives
- Framer Motion 12.23.22 - Animation library

**Routing:**
- Wouter 3.7.1 - Lightweight client-side router (3.3kb)

**UI Components:**
- shadcn/ui components built on Radix UI
- Lucide React - Icon library
- Embla Carousel - Carousel functionality

**Form Handling:**
- React Hook Form 7.64.0 - Performant form validation

**Data Fetching:**
- @tanstack/react-query 5.90.2 - Server state management

**Utilities:**
- date-fns 4.1.0 - Date manipulation
- zod 4.1.12 - Schema validation
- nanoid 5.1.5 - Unique ID generation

## Architecture

### Single-Page Application (SPA)

The application uses client-side routing with Wouter. All routing is handled in the browser without server-side rendering.

**Routing Structure:**
```
/ - Home page
/blog - Blog listing page
/cv - Opens CV PDF in new tab
/showcase - Component showcase (development)
* - 404 Not Found page
```

### State Management

- **React Context** - Global theme and UI state
- **React Query** - Server state and data fetching
- **Local State** - Component-level state with hooks

### Component Architecture

Components follow a composition pattern with:
- Presentational components in `client/src/components/`
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Configuration-driven content

## Development Environment Setup

### Prerequisites

**Required:**
- Node.js 18.x or higher
- pnpm 10.x (recommended) or npm 8.x+

**Optional:**
- VS Code with recommended extensions
- Git for version control

### Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/10-OASIS-01/10-OASIS-01.github.io.git
cd 10-OASIS-01.github.io
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

The development server will start at `http://localhost:5173` (or next available port).

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm preview          # Preview production build locally

# Build
pnpm build            # Build for production
pnpm check            # TypeScript type checking

# Code Quality
pnpm format           # Format code with Prettier
pnpm test             # Run tests with Vitest
```

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
VITE_APP_TITLE=Yibin (Leon) Liu - Academic Homepage
VITE_APP_LOGO=/favicon.ico
```

## Project Structure

```
.
├── client/                          # Frontend application
│   ├── public/                      # Static assets
│   │   ├── assets/                  # Images, PDFs, etc.
│   │   ├── sitemap.xml             # SEO sitemap
│   │   └── robots.txt              # Search engine crawler config
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Navigation.tsx      # Main navigation
│   │   │   ├── HeroSection.tsx     # Hero banner
│   │   │   ├── SidebarProfile.tsx  # Profile sidebar
│   │   │   └── ...
│   │   ├── content/                # Site content (one file per section)
│   │   │   ├── types.ts            # Content type definitions
│   │   │   ├── personal.ts         # Name, title, affiliation, hero
│   │   │   ├── about.ts            # About-me, research, advisors
│   │   │   ├── news.ts             # News / updates (newest first)
│   │   │   ├── publications.ts     # Publications list
│   │   │   ├── experience.ts       # Research & industry experience
│   │   │   ├── activities.ts       # Talks, service, awards
│   │   │   ├── projects.ts         # Projects & skills
│   │   │   ├── site.ts             # Assets, social, nav, metadata
│   │   │   └── index.ts            # Barrel re-export
│   │   ├── config/                 # Configuration files
│   │   │   ├── siteConfig.ts       # Shim re-exporting content/
│   │   │   └── blogConfig.ts       # Blog posts data
│   │   ├── contexts/               # React contexts
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/                    # Utility functions
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.tsx            # Home page
│   │   │   ├── Blog.tsx            # Blog page
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles
│   └── index.html                  # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD
├── dist/                           # Build output (generated)
│   └── public/                     # Deployable files
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build configuration
└── vitest.config.ts               # Vitest test configuration
```

## Configuration System

### Site content (`client/src/content/`)

All content lives under `client/src/content/`, split into one typed file per
section (`personal.ts`, `about.ts`, `news.ts`, `publications.ts`,
`experience.ts`, `activities.ts`, `projects.ts`, `site.ts`), with shared
interfaces in `types.ts`. `client/src/config/siteConfig.ts` is a thin shim that
re-exports this folder, so existing `@/config/siteConfig` imports keep working.

Because every export is typed, malformed edits fail `pnpm check`, which runs in
CI **before** the build/deploy step — broken edits can't reach production.

Inline links within prose use the `RichText` type (an array of plain strings and
`{ text, url }` segments) so links are declared in data and rendered by the
shared `RichText` component — no runtime string parsing in the views.

Uploaded assets go in `client/public/assets/` and are referenced via
`/assets/<file>`; the avatar / hero background / CV paths are centralized in
`content/site.ts` under `assets`. The footer's "last updated" date is injected
at build time from the last git commit (`vite.config.ts`).

The examples below show the field shapes.

All shapes below are enforced by the interfaces in `content/types.ts`; a bad
edit fails `pnpm check`.

**Personal Information (`personal.ts` + `about.ts`):**
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  chineseName: "中文名",
  pronouns: "he/him",
  title: "Your Title",
  university: "Your University",
  location: "City, Country",
  email: "your.email@example.com", // rendered with @→😊 anti-crawler trick
  heroQuote: "…",
  heroAttribution: "…",
  aboutMe,   // from about.ts
  advisors,  // from about.ts
};
```

**Inline links — the `RichText` type.** Anywhere prose needs links (the intro
paragraph, news items, academic-service entries), the value is an array of
plain strings and `{ text, url }` segments, rendered by `components/RichText`.
No runtime string-splitting:
```typescript
intro: [
  "I will begin my Ph.D. under the supervision of ",
  { text: "Prof. Weiyu Liu", url: "https://www.weiyuliu.com/" },
  ".",
],
```

**News (`news.ts`)** — listed newest-first (sorted by `date`), collapses past 5:
```typescript
export const news: NewsItem[] = [
  {
    id: 1,
    date: "2026-04", // YYYY-MM or YYYY-MM-DD; sort/display key
    content: [
      { text: "RoboTwin 2.0", url: "https://robotwin-platform.github.io" },
      " was accepted to ICML 2026.",
    ],
  },
];
```

**Publications (`publications.ts`):** `links` is an **array** of `{ text, url }`.
```typescript
export const publications: Publication[] = [
  {
    id: 1,
    title: "Paper Title",
    authors: "Author 1, Yibin Liu, Author 3", // "Yibin Liu" is auto-bolded
    venue: "Conference/Journal Name",
    year: 2026,
    links: [
      { text: "Paper", url: "https://arxiv.org/..." },
      { text: "Code", url: "https://github.com/..." },
    ],
    githubStars: "https://img.shields.io/github/stars/org/repo", // optional badge
  },
];
```

**Experience (`experience.ts`):** industry entries use structured `org` /
`parentOrg` / `mentor` and optional `highlights` bullets:
```typescript
export const industryExperiences: IndustryExperience[] = [
  {
    id: 1,
    role: "Research Intern",
    org: { name: "Robbyant", url: "https://technology.robbyant.com/" },
    parentOrg: { name: "Ant Group", url: "https://www.antgroup.com/..." },
    highlights: ["Focus: Large-scale Foundation Models for mobile manipulation…"],
    location: "Shanghai, China",
    duration: "March 2026 – Present",
  },
];
```

**Social Links (`site.ts`):**
```typescript
export const socialLinks: SocialLinks = {
  googleScholar: "https://scholar.google.com/...",
  github: "https://github.com/...",
  // …
};
```

**Navigation & assets (`site.ts`):** the CV path lives in `assets` and is
reused by the menu.
```typescript
export const assets = {
  heroBackground: "/assets/tebet3.jpg",
  profileAvatar: "/assets/avatar.jpg",
  cv: "/assets/Leon_s_CV.pdf",
} as const;

export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/#news" },
  { label: "CV", href: assets.cv, external: true },
];
```

**Awards (`activities.ts`):**
```typescript
export const awards: Award[] = [
  { id: 1, year: "2025-07", title: "Award name and details." },
];
```

### Blog Configuration (`client/src/config/blogConfig.ts`)

```typescript
export const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Brief description...",
    date: "2025-01-15",
    readTime: "5 min read",
    tags: ["AI", "Research"],
    slug: "blog-post-slug",
  },
];

export const blogConfig = {
  title: "Blog",
  description: "Thoughts on AI research and technology",
  comingSoonMessage: "More posts coming soon...",
};
```

## Component Development

### Creating New Components

1. Create component file in `client/src/components/`:
```typescript
// components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
}

export function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
```

2. Export from index if creating a UI component library
3. Import and use in page components

### UI Components

The project uses shadcn/ui components. To add a new component:

1. Check available components in `client/src/components/ui/`
2. Use existing components or create new ones following the same pattern
3. All UI components should support className prop for customization

### Component Guidelines

- Use TypeScript interfaces for props
- Implement proper accessibility (ARIA labels, keyboard navigation)
- Support dark mode through theme context
- Keep components focused and single-purpose
- Use composition over inheritance

## Styling Guidelines

### Tailwind CSS

The project uses Tailwind CSS 4 with the Vite plugin. All styling should use Tailwind utility classes.

**Common Patterns:**
```tsx
// Layout
<div className="container mx-auto px-4">

// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Spacing
<div className="space-y-4">

// Typography
<h1 className="text-4xl font-bold tracking-tight">

// Colors
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

### Custom Styles

Global styles are in `client/src/index.css`. Add custom CSS only when Tailwind utilities are insufficient.

### Theme Configuration

Customize colors, fonts, and other design tokens in `tailwind.config.js`.

## Build System

### "Last updated" date

`vite.config.ts` injects a build-time constant `__LAST_UPDATED__` from the last
git commit date (`git log -1 --format=%cI`), exposed via `siteMetadata.lastUpdated`
and shown in the footer. It updates automatically on every push/deploy — do not
hard-code it. Falls back to the build date if git is unavailable.

### Vite Configuration

The build system is configured in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'radix-ui': [/* Radix UI components */],
          'vendor': ['react', 'react-dom', 'wouter']
        }
      }
    }
  }
});
```

### Code Splitting

The build system uses manual chunk splitting to optimize loading:

- **vendor chunk**: React core libraries (4KB gzipped)
- **radix-ui chunk**: UI component library (57KB gzipped)
- **main chunk**: Application code (315KB gzipped)

### Build Output

Production builds are output to `dist/public/`:
```
dist/public/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── vendor-[hash].js
│   ├── radix-ui-[hash].js
│   └── index-[hash].css
├── sitemap.xml
└── robots.txt
```

### Path Aliases

TypeScript path aliases are configured:
```typescript
// Use @ to reference src directory
import { Component } from "@/components/Component";
```

## Deployment

### GitHub Pages Deployment

This repository uses the custom GitHub Actions workflow at `.github/workflows/deploy.yml` to build and deploy GitHub Pages.

The workflow runs on pushes to `main` and `master` (for site/build-related files) and also supports manual runs via `workflow_dispatch`. It runs `pnpm check` (TypeScript) **before** the build, so a content edit that breaks the types fails the check and is never deployed — making web-UI edits safe.

To enable deployment after GitHub Pages was disabled:

1. Go to your repository's Pages settings at `https://github.com/<owner>/<repo>/settings/pages`
2. In **Build and deployment** → **Source**, select **GitHub Actions**
3. Save settings and trigger the deploy workflow (push a change or run it manually from the **Actions** tab)

The workflow already includes the required Pages deployment actions:
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3` (artifact path: `dist/public`)
- `actions/deploy-pages@v4`

### Manual Deployment

1. Build the project:
```bash
pnpm build
```

2. Deploy the `dist/public/` directory to your hosting provider

### Base URL Configuration

For deployment to subdirectories, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/subdirectory/',
  // ... rest of config
});
```

## Testing

### Unit Tests

The project uses Vitest for testing:

```bash
pnpm test        # Run tests once
pnpm test:watch  # Run tests in watch mode
```

**Example Test:**
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders title correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Type Checking

Run TypeScript compiler in check mode:
```bash
pnpm check
```

## Performance Optimization

### Current Optimizations

1. **Code Splitting**: Separate vendor and UI library chunks
2. **Tree Shaking**: Unused code is removed during build
3. **Asset Optimization**: Images and static assets are optimized
4. **Lazy Loading**: Routes and components can be lazy loaded

### Performance Best Practices

- Use React.memo() for expensive components
- Implement virtualization for long lists
- Optimize images (WebP format, proper sizing)
- Minimize bundle size by auditing dependencies
- Use Lighthouse to measure performance

### Bundle Analysis

Analyze bundle size:
```bash
pnpm build
npx vite-bundle-visualizer
```

## SEO Implementation

### Meta Tags

SEO meta tags are configured in `client/index.html`:

- Basic meta tags (description, keywords, author)
- Open Graph tags for social media
- Twitter Card tags
- Academic citation meta tags
- Canonical URL

### Structured Data

JSON-LD structured data is included for:
- Person schema (academic profile)
- Social media links
- Affiliations

### Sitemap

The sitemap is located at `client/public/sitemap.xml` and includes:
- Homepage (priority 1.0)
- CV page (priority 0.8)
- Blog page (priority 0.7)

Update the sitemap when adding new pages.

### Robots.txt

The `client/public/robots.txt` file configures crawler behavior:
- Allows all crawlers
- References sitemap.xml
- Sets crawl delay for politeness

## Troubleshooting

### Common Issues

**Issue: Build fails with TypeScript errors**
```bash
# Check TypeScript configuration
pnpm check

# Fix type errors or add type assertions
```

**Issue: Development server won't start**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Issue: Styles not applying**
```bash
# Ensure Tailwind is configured correctly
# Check tailwind.config.js and postcss.config.js
# Restart dev server
```

**Issue: Components not rendering**
- Check browser console for errors
- Verify import paths are correct
- Ensure all dependencies are installed

### Debug Mode

Enable verbose logging:
```bash
# Development with debug info
DEBUG=* pnpm dev

# Vite specific debugging
VITE_LOG_LEVEL=info pnpm dev
```

### Getting Help

- Check existing issues on GitHub
- Review documentation in this file
- Contact maintainers via email or GitHub issues

## Contributing

When contributing to this project:

1. Follow the existing code style
2. Add TypeScript types for all new code
3. Test changes locally before committing
4. Update documentation for new features
5. Keep commits focused and atomic
6. Write clear commit messages

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use double quotes for strings
- Use trailing commas in objects/arrays
- Run `pnpm format` before committing

### Commit Messages

Follow conventional commits:
```
feat: add new publication section
fix: correct navigation link
docs: update development documentation
style: format code with prettier
refactor: reorganize component structure
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Maintainer

**Yibin (Leon) Liu**
- Email: kevin.lau.stu@gmail.com
- GitHub: [@10-OASIS-01](https://github.com/10-OASIS-01)
- LinkedIn: [yibin-leon-liu](https://www.linkedin.com/in/yibin-leon-liu)
