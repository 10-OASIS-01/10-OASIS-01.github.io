/**
 * Site chrome: asset paths, images, social links, navigation, metadata.
 *
 * All uploaded files live in `client/public/assets/` and are referenced by the
 * absolute path `/assets/<file>` (GitHub Pages serves from base "/"). To swap an
 * avatar / background / CV, drop the new file in that folder and update the one
 * path below — nothing else needs to change.
 */
import type {
  NavItem,
  SiteImages,
  SiteMetadata,
  SocialLinks,
} from "./types";

/** Single source of truth for uploaded asset paths. */
export const assets = {
  heroBackground: "/assets/tebet3.jpg",
  profileAvatar: "/assets/avatar.jpg",
  cv: "/assets/Leon_s_CV.pdf",
} as const;

export const images: SiteImages = {
  heroBackground: assets.heroBackground,
  profileAvatar: assets.profileAvatar,
};

export const socialLinks: SocialLinks = {
  googleScholar: "https://scholar.google.com/citations?user=WbnbTWoAAAAJ",
  github: "https://github.com/10-OASIS-01",
  linkedin: "https://www.linkedin.com/in/yibin-leon-liu",
  bluesky: "https://bsky.app/profile/yibinleonliu.bsky.social",
  email: "mailto:liuyibin@stumail.neu.edu.cn",
};

export const navigationMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/#news" },
  { label: "Publications", href: "/#publications" },
  { label: "Awards", href: "/#awards" },
  { label: "Misc", href: "/#misc" },
  { label: "Blog", href: "https://yibinleonliu.substack.com", external: true },
  { label: "CV", href: assets.cv, external: true },
];

export const siteMetadata: SiteMetadata = {
  // Injected at build time from the last git commit date (see vite.config.ts).
  // Updates automatically on every push/deploy — no need to edit by hand.
  lastUpdated: __LAST_UPDATED__,
};
