# Personal Academic Homepage

A modern, minimalist personal academic homepage built with React, TypeScript, and Tailwind CSS. Inspired by Apple's design language, this website showcases research, publications, awards, and blog posts in a clean and professional manner.

## 🌟 Features

- **Apple-inspired Design**: Clean, minimalist UI with frosted glass navigation and smooth transitions
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Modular Architecture**: Easy-to-maintain configuration-based content management
- **Blog System**: Built-in blog with tag support and clean card layout
- **Dark Mode Ready**: Theme configuration supports dark mode (can be enabled)
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SidebarProfile.tsx
│   │   ├── MainContent.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   └── NotFound.tsx
│   ├── config/          # Configuration files
│   │   ├── siteConfig.ts  # **Main configuration file**
│   │   ├── blogConfig.ts  # Blog posts configuration
│   │   └── themeConfig.ts # Theme configuration (optional)
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles and theme
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-academic-homepage
```

2. Install dependencies:
```bash
cd client
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

The built files will be in the `client/dist` directory.

## ⚙️ Configuration

All website content can be easily modified through the configuration files located at:

```
client/src/config/siteConfig.ts   # Main site configuration
client/src/config/blogConfig.ts   # Blog posts configuration
```

### What You Can Configure

#### 1. Personal Information
```typescript
export const personalInfo = {
  name: "Your Name",
  chineseName: "中文名",
  title: "Your Title",
  university: "Your University",
  email: "your.email@example.com",
  bio: "Your bio...",
  // ... more fields
};
```

#### 2. Images and Assets
```typescript
export const images = {
  heroBackground: "https://your-image-url.jpg",
  profileAvatar: "https://your-avatar-url.jpg",
};
```

#### 3. Social Media Links
```typescript
export const socialLinks = {
  googleScholar: "https://scholar.google.com/...",
  github: "https://github.com/...",
  linkedin: "https://linkedin.com/in/...",
  // ... more links
};
```

#### 4. Publications
```typescript
export const publications = [
  {
    id: 1,
    title: "Paper Title",
    authors: "Author 1, Author 2",
    venue: "Conference Name",
    year: 2024,
    links: {
      paper: "https://arxiv.org/...",
      project: "https://project-page.com",
      code: "https://github.com/...",
    },
  },
  // ... more publications
];
```

#### 5. Research & Industry Experiences
```typescript
export const researchExperiences = [
  {
    id: 1,
    position: "Institution Name",
    role: "Your Role",
    duration: "Start - End",
    description: "Description...",
    highlights: ["Highlight 1", "Highlight 2"],
  },
];
```

#### 6. Awards
```typescript
export const awards = [
  {
    id: 1,
    title: "Award Name",
    year: "2024",
    description: "Award description...",
  },
];
```

#### 7. Projects
```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    link: "https://github.com/...",
    tags: ["Tag1", "Tag2"],
  },
];
```

#### 8. Blog Posts (in `blogConfig.ts`)
```typescript
export const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Short excerpt...",
    date: "2025-01-15",
    readTime: "5 min read",
    tags: ["Tag1", "Tag2"],
    slug: "blog-post-slug",
  },
];

export const blogConfig = {
  title: "📝 Blog",
  description: "Your blog description...",
  comingSoonMessage: "More blog posts coming soon...",
};
```

#### 9. Navigation Menu
```typescript
export const navigationMenu = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/#publications" },
  { label: "Blog", href: "/blog" },
  // ... more menu items
];
```

#### 10. Theme Configuration
```typescript
export const themeConfig = {
  colors: {
    primary: "blue-900",
    secondary: "blue-800",
    // ... more colors
  },
  fonts: {
    sans: "...",
    mono: "...",
  },
};
```

## 🎨 Customization

### Changing Colors

The website uses Tailwind CSS for styling. To change the color scheme:

1. Update `themeConfig.colors` in `client/src/config/siteConfig.ts`
2. Modify CSS variables in `client/src/index.css` for more advanced theming

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Import and use it in `client/src/pages/Home.tsx` or other pages
3. Add corresponding data to `client/src/config/siteConfig.ts`

### Enabling Dark Mode

1. Uncomment the `switchable` prop in `client/src/App.tsx`:
```typescript
<ThemeProvider
  defaultTheme="light"
  switchable  // Uncomment this line
>
```

2. Add a theme toggle button using the `useTheme` hook

## 📝 Adding Content

### Adding a New Publication

1. Open `client/src/config/siteConfig.ts`
2. Add a new entry to the `publications` array:
```typescript
{
  id: 7,  // Increment the ID
  title: "Your New Paper Title",
  authors: "Author Names",
  venue: "Conference/Journal Name",
  year: 2025,
  links: {
    paper: "https://arxiv.org/...",
    project: "https://project-page.com",  // Optional
    code: "https://github.com/...",        // Optional
  },
  note: "Optional note",  // Optional
}
```

### Adding a New Blog Post

1. Open `client/src/config/blogConfig.ts`
2. Add a new entry to the `blogPosts` array:
```typescript
{
  id: 3,
  title: "New Blog Post Title",
  excerpt: "Brief description of the post...",
  date: "2025-01-20",
  readTime: "6 min read",
  tags: ["Tag1", "Tag2", "Tag3"],
  slug: "new-blog-post-slug",
}
```

### Adding a New Award

1. Open `client/src/config/siteConfig.ts`
2. Add a new entry to the `awards` array:
```typescript
{
  id: 8,
  title: "New Award Name",
  year: "2025",
  description: "Award description and significance.",
}
```

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint

### Technology Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the root directory to `client`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Set the build command to `pnpm build`
4. Set the publish directory to `client/dist`
5. Deploy!

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
});
```

2. Build and deploy:
```bash
pnpm build
pnpm run deploy  # If you have gh-pages configured
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or feedback, please reach out via:
- Email: liuyibin@stumail.neu.edu.cn
- GitHub: [@10-OASIS-01](https://github.com/10-OASIS-01)
- LinkedIn: [Yibin (Leon) Liu](https://www.linkedin.com/in/yibin-leon-liu)

## 🙏 Acknowledgments

- Design inspired by Apple's design language
- Built with amazing open-source tools and libraries
- Special thanks to the React and Tailwind CSS communities

---

**Made with ❤️ by Yibin (Leon) Liu**
