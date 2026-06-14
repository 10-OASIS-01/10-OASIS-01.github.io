/**
 * Site Configuration (compatibility shim).
 *
 * Content now lives in `client/src/content/` — one file per section, each with
 * TypeScript types so a bad edit fails `pnpm check` in CI before it can deploy.
 * This file simply re-exports everything so existing `@/config/siteConfig`
 * imports keep working. To edit content, open the matching file in `content/`.
 */
export * from "../content";
