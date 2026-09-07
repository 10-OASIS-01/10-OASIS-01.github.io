# Yibin (Leon) Liu — Academic Homepage

Personal academic website for Yibin (Leon) Liu, built with React, TypeScript,
Vite, and Tailwind CSS. The site includes the academic homepage, publication
record, experience, blog, dark mode, and static metadata for GitHub Pages.

[View the live website](https://10-oasis-01.github.io/)

## Project structure

```text
client/
├── public/                 Static assets, fonts, favicons, and SEO files
└── src/
    ├── components/
    │   ├── layout/         Shared navigation, footer, and error boundary
    │   └── ui/             The two Radix primitives used by the site
    ├── content/            Typed homepage content and blog source files
    ├── contexts/           Theme state
    ├── features/
    │   ├── blog/           Blog components, metadata, and helpers
    │   └── home/           Homepage sections and interactions
    ├── lib/                Shared utilities
    ├── pages/              Route-level components
    ├── App.tsx             Router and providers
    ├── index.css           Global styles and design tokens
    └── main.tsx            Browser entry point
docs/                       Development notes
scripts/                    Image optimization and static-page generation
source-assets/              Original images kept outside the deployed bundle
tests/                      Content and route regression tests
```

## Local development

Node.js 22 and pnpm are recommended.

```bash
pnpm install
pnpm dev
```

Useful commands:

```bash
pnpm check       # TypeScript validation
pnpm test        # Vitest regression tests
pnpm build       # Production build and static blog pages
pnpm preview     # Preview dist/public locally
pnpm format      # Format tracked source files
```

## Editing content

Homepage content is maintained in `client/src/content/`:

| File              | Content                                              |
| ----------------- | ---------------------------------------------------- |
| `personal.ts`     | Name, affiliation, status, location, and hero quote  |
| `about.ts`        | Introduction, research directions, and outreach note |
| `news.ts`         | News items in reverse chronological order            |
| `publications.ts` | Selected publications and resource links             |
| `experience.ts`   | Research and industry experience                     |
| `activities.ts`   | Talks, service, and awards                           |
| `misc.ts`         | Interests and travel milestones                      |
| `site.ts`         | Asset paths, social links, navigation, and metadata  |

Shared field definitions live in `client/src/content/types.ts`. Run
`pnpm check` after editing content so malformed entries are caught before
deployment.

Blog articles live in `client/src/content/blog/`. To add an article:

1. Add its metadata to `posts.json`.
2. Add the Markdown file and register it in `client/src/features/blog/config.ts`.
3. Add its permanent URL to `client/public/sitemap.xml`.

## Static assets

Public files live in `client/public/`. The main profile image, hero photograph,
CV, and social URLs are centralized in `client/src/content/site.ts`. Keep the
original publication images in `source-assets/publications/`; the image
optimization script uses them to regenerate WebP display assets without copying
the large source files into the deployed site.

```bash
python3 scripts/optimize-images.py
```

## Deployment

Pushes to `master` or `main` trigger `.github/workflows/deploy.yml`. The workflow
installs dependencies, runs type checks and tests, builds `dist/public`, creates
the SPA fallback, and deploys the result to GitHub Pages.

More implementation details are in [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## License

[MIT](LICENSE)
