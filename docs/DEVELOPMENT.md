# Development guide

## Architecture

The project is a static React 19 application. Vite serves `client/` as the app
root and writes production files to `dist/public/`. Wouter provides the three
public routes:

- `/` — academic homepage
- `/blog` — blog index
- `/blog/:slug` — article page

`scripts/generate-static-blog-pages.mjs` adds route-specific HTML files after
the Vite build. These files preserve direct article visits, canonical URLs,
Open Graph metadata, and structured data on GitHub Pages.

## Source boundaries

- `client/src/pages/` composes complete routes.
- `client/src/components/layout/` contains elements shared across routes.
- `client/src/components/ui/` contains only reusable interface primitives that
  are currently used.
- `client/src/features/home/` and `client/src/features/blog/` contain
  feature-specific components and helpers.
- `client/src/content/` is the source of truth for editable copy and records.
- `client/src/lib/` contains utilities shared by more than one feature.

Use the `@/` alias for imports rooted at `client/src`. Keep content out of page
components when it belongs in the typed content files.

## Content and assets

The barrel file `client/src/content/index.ts` is the public import surface for
homepage content. Types in `content/types.ts` make incomplete records fail the
TypeScript check.

Public asset paths begin with `/assets/`. Active profile paths are declared in
`content/site.ts`; publication records declare their own optimized image paths.
The original publication PNGs live in `source-assets/publications/` as source
material for `scripts/optimize-images.py`; only their WebP derivatives are
published.

The footer date is injected at build time from the latest Git commit by
`vite.config.ts`. If Git metadata is unavailable, the build date is used.

## Blog workflow

Metadata is stored in `client/src/content/blog/posts.json`; Markdown files live
beside it. `client/src/features/blog/metadata.ts` powers lightweight previews,
while `features/blog/config.ts` associates each slug with its Markdown source.

When adding or renaming an article, update the metadata, config mapping, and
sitemap together. Do not change an existing slug after publication unless a
redirect is also provided.

## Validation

Run the checks used by CI before committing:

```bash
pnpm check
pnpm test
pnpm build
git diff --check
```

`pnpm preview` serves the production output for final checks of the homepage,
blog index, article routes, light and dark modes, responsive layouts, and direct
page refreshes.

## Deployment

`.github/workflows/deploy.yml` runs on relevant pushes to `master` or `main`.
It installs from the frozen lockfile, validates the app, builds the static site,
adds `404.html` for SPA fallback routing, and publishes `dist/public` with the
official GitHub Pages actions.
