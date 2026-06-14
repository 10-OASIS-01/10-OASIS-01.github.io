/**
 * Content type definitions.
 *
 * These interfaces are the safety net for editing content on GitHub's web UI:
 * `pnpm check` (run in CI before every deploy) will reject a commit that
 * drops a required field, mistypes a value, or truncates a string literal.
 *
 * Design note: anything that needs an inline hyperlink (an advisor's name in a
 * paragraph, a linked phrase in a description) is modeled as `RichText` — an
 * explicit array of plain strings and `{ text, url }` links. Rendering just
 * maps over the array, so there is NO runtime string-splitting / regex /
 * indexOf guessing in the components.
 */

/** A hyperlink: visible `text` pointing at `url`. */
export interface Link {
  text: string;
  url: string;
}

/**
 * A run of text that may contain inline links. Plain `string` items render as
 * text; `Link` items render as `<a>`. Concatenate items in order to read the
 * full sentence.
 */
export type RichText = Array<string | Link>;

/** A named organization with an optional link (company, university, lab). */
export interface Org {
  name: string;
  url?: string;
}

// ===========================
// Personal / About
// ===========================
export interface ResearchInterest {
  title: string;
  description: string;
}

export interface AboutMe {
  /** Opening paragraph; use Link segments for the advisor mention, etc. */
  intro: RichText;
  researchFocus: string;
  researchInterests: ResearchInterest[];
  goal: string;
}

export interface PersonalInfo {
  name: string;
  chineseName: string;
  pronouns: string;
  title: string;
  university: string;
  location: string;
  email: string;
  heroQuote: string;
  heroAttribution: string;
  aboutMe: AboutMe;
  /** Advisors referenced elsewhere (e.g. linked in the intro). */
  advisors: Org[];
}

// ===========================
// News
// ===========================
export interface NewsItem {
  id: number;
  /** Sort key + display source. Format: "YYYY-MM" or "YYYY-MM-DD". */
  date: string;
  /** Headline with optional inline links (paper / company / school names). */
  content: RichText;
}

// ===========================
// Publications
// ===========================
export interface Publication {
  id: number;
  authors: string;
  title: string;
  venue: string;
  year: number;
  links: Link[];
  /** Optional shields.io badge URL for repo stars. */
  githubStars?: string;
}

// ===========================
// Experience
// ===========================
export interface ResearchExperience {
  id: number;
  title: string;
  /** Optional link wrapping the whole title (e.g. a lab homepage). */
  titleLink?: string;
  location: string;
  duration: string;
  advisors?: Org[];
}

export interface IndustryExperience {
  id: number;
  /** Role only, e.g. "Research Intern" (the org is rendered separately). */
  role: string;
  /** Employing organization. */
  org: Org;
  /** Optional parent company, rendered as "(part of …)". */
  parentOrg?: Org;
  /** Optional mentor, rendered as "Mentor: …". */
  mentor?: Org;
  /** Optional one-line focus summary, rendered as "Focus: …". */
  focus?: string;
  /** Optional bullet points describing the work done. */
  highlights?: string[];
  location: string;
  duration: string;
}

// ===========================
// Talks / Service / Awards
// ===========================
export interface Talk {
  id: number;
  date: string;
  title: string;
  event: string;
  location: string;
}

export interface AcademicService {
  id: number;
  role: string;
  /** Description with optional inline links (no string-splitting needed). */
  description: RichText;
  /** Optional shields.io badge URL appended after the description. */
  githubBadge?: string;
}

export interface Award {
  id: number;
  year: string;
  title: string;
}

// ===========================
// Projects / Skills
// ===========================
export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  githubStars?: string;
}

export interface Technologies {
  languages: string;
  technologies: string;
}

// ===========================
// Site chrome
// ===========================
export interface SiteImages {
  heroBackground: string;
  profileAvatar: string;
}

export interface SocialLinks {
  googleScholar?: string;
  github?: string;
  linkedin?: string;
  bluesky?: string;
  email?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteMetadata {
  /** Last updated date, format YYYY-MM-DD. */
  lastUpdated: string;
}
