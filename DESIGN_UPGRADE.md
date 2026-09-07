# Personal website design upgrade

Implemented and reviewed locally on 2026-09-07. The user approved pushing the reviewed changes with the 10-OASIS-01 GitHub account. Publishing uses the existing GitHub Pages workflow.

## Preview

- Production build: http://127.0.0.1:4173/
- Blog: http://127.0.0.1:4173/blog/
- Development server: http://127.0.0.1:5173/
- Restart production preview: `pnpm build` followed by `pnpm preview --host 127.0.0.1`.

## Design and content

Following the user's layout preference, the homepage retains the original mountain photograph and personal motto opening, followed by a traditional academic two-column layout: a sticky personal profile on the left and academic content on the right. On mobile, the profile and content stack below the scenic opening. Improvements focus on typography, spacing, publication hierarchy, and responsive behavior. News initially shows three updates. All five publications, eight awards, research and industry experiences, service records, and four travel milestones remain available.

The blog index puts article titles and summaries first, with a smaller resource column. Article text, tables, dates, permanent links, sharing, comments, and table of contents are preserved. The existing academic article has not been rewritten.

Colors, spacing, image corners, links, navigation, and footer are shared across pages. The sun/moon button switches directly between Light and Dark; the duplicate system button was removed at the user’s request. First-time visitors still follow the system until they make a manual choice. Saved choices apply before first paint and synchronize with Giscus. Theme changes interpolate registered palette colors once at the document root over 300ms, avoiding nested inherited-color transitions and the end-of-transition flash. Rapid toggles reverse the active transition; reduced-motion preferences disable it. Profile links use accessible icons with hover labels. The homepage and blog use locally served IBM Plex Sans Latin WOFF2 files (400, 500, 600, and 700, with real italics) from the official IBM/plex repository; the license is in `client/public/fonts/IBM-Plex-Sans-LICENSE.txt`. Only regular roman is preloaded. Chinese uses system fallbacks, code retains monospace, and the mountain quote retains its original Courier New styling.

Contact buttons display `yibin.leon.liu😊outlook.com` and reconstruct the email address only on click. The full address is absent from contact hrefs, hover text, and the homepage bundle; this deters simple scraping but is not comprehensive bot protection. Homepage metadata distinguishes the current JD.COM internship, incoming NUS PhD status in Spring 2027, and completed Northeastern University education.

## Maintenance

- Profile identity and introductory copy: `client/src/content/personal.ts`.
- About, publications, experiences, news, and awards remain in `client/src/content/`.
- Blog previews read lightweight metadata; article Markdown and rendering dependencies load only on article routes.
- Palette, typography, breakpoints, and component styles: `client/src/index.css`.
- Original photographs and paper figures are preserved. WebP derivatives live in `client/public/assets/optimized/`; regenerate them with `python3 scripts/optimize-images.py` in a Python environment containing Pillow.
- Homepage image preload is removed from generated blog HTML so blog visitors do not download an unrelated hero image.

## Verification

- TypeScript check passed.
- Four existing tests passed. The application-coach test now accepts whitespace around the URL assignment, so formatting does not cause a false failure.
- Production build and static blog-page generation passed.
- Whitespace/diff check passed.
- Before the layout restoration, checked all three page types at 390, 768, 1280, and 1440 CSS pixels in both light and dark modes: no document-level horizontal overflow and one main heading per page. Article tables remain within their scrollable containers.
- After restoring the scenic opening and academic columns, repeated the TypeScript check and production build, and visually checked the homepage at 1280 and 390 CSS pixels. The mobile page has no horizontal overflow; the homepage retains one H1 and all five publications. Checked the desktop publications anchor and sticky profile position.
- Verified mobile menu opening/closing, Escape returning focus, news expansion/collapse, all four travel milestones, theme persistence across reload, and System matching the browser's color preference.
- Verified direct homepage anchor loading with the section heading below the navigation, direct article loading and refresh, canonical URLs, and the CV PDF response.
- Verified article table-of-contents navigation, Copy link success feedback, existing Giscus comment loading, and light/dark comment synchronization. No comment or share was submitted.
- Reduced-motion stylesheet disables transitions and animations, including smooth scrolling. No automatic decorative animation is used. An OS-level reduced-motion preference was not changed during testing.
- Compared publication data against HEAD: only thumbnail paths changed; order, titles, authors, venues, years, contributions, links, and star-badge URLs are preserved. Blog body/manifest, awards, service, experiences, and news source files are unchanged.

Earlier-layout performance baseline, measured before restoring the scenic opening and academic columns. These results have not been remeasured for the restored layout. Lighthouse 13.4.1 CLI, local production build, default simulated mobile throttling / desktop preset:

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 90 | 99 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| Largest Contentful Paint | 3.6 s | 0.8 s |
| Cumulative Layout Shift | 0 | 0 |
| Total Blocking Time | 0 ms | 0 ms |

Mobile LCP remains above the 2.5 s optimization target; this is recorded rather than treated as a passed target. These are local lab measurements, not production field measurements or an INP measurement. The initial homepage JavaScript decreased from about 224 KB to 95 KB gzipped during implementation. The desktop hero derivative is about 86 KB; the smaller responsive variants are about 23 KB and 51 KB.

Full Lighthouse HTML/JSON reports are local artifacts under `.cache/design-audit/` (excluded from Git).

## Follow-up refinements

- Restored icon presentation for CV, Google Scholar, GitHub, LinkedIn, and X. X now links to the user-confirmed `https://x.com/yibinleonliu`.
- Replaced the theme select with a one-click light/dark toggle with no second theme button.
- The original MapMyVisitors script and site identifier were retained throughout the redesign. Its external service timed out during local verification, leaving the old container empty. The footer now explicitly displays a Visitors section, reserves space for the map, and provides loading, failure, and retry states. Live visitor data could not be verified while the provider was unreachable.
- TypeScript, four existing tests, and the production build passed after these refinements.

- Moved Visitors into the center footer column, aligned with the left profile and right links on desktop; smaller screens reflow the columns.
- Browser, touch, and app icons now use only the NUS shield, without the wordmark. Source artwork: https://en.wikipedia.org/wiki/File:NationalUniversityofSingapore.svg (NUS logo); SVG is clipped to the shield and raster icons packaged at standard sizes.

- Research and industry summaries now align dates at the right of their titles, and locations at the right of the advisor/role row. Phones stack these details for readability. The sidebar no longer shows pronouns.
- All publications sits immediately to the left of Selected publications.
- Fixed excess transparent padding in multi-resolution ICO generation: the shield now scales up as well as down before icon packaging. SVG also has explicit square dimensions; the icon cache version is updated.

- At the user’s request, the scenic hero now loads the original 5548 × 2065 JPEG (about 2.7 MB), including its preload. Responsive compressed hero variants are no longer selected.

- Homepage title, Open Graph title, X/Twitter title, search description, and Person description now use the requested NUS-focused identity, explicitly retaining incoming status and Spring 2027. Public search results will require publication and recrawling.

- The portrait now loads the original 2981 × 2981 JPEG and retains a square aspect ratio at every breakpoint. Theme changes fade colors over 300 ms, skip animation on first paint, and respect reduced motion. Default system preference and saved manual choices remain supported.

## Preserved content notes

Robbyant and Joy Future Academy / JD.COM are both still marked Present. JD.COM also contains the existing manually written duration “1 mo”. These facts were not inferred or changed during the design update.

The deployment status is tracked by the repository’s Deploy to GitHub Pages workflow.
