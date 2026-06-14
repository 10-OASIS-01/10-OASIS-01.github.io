/**
 * Content barrel — single import surface for all site content.
 *
 * Components import from here (or from `@/config/siteConfig`, a thin shim that
 * re-exports this module). Each named export below lives in its own file under
 * `content/`, so editing one section never touches another.
 */
export type * from "./types";

export { personalInfo } from "./personal";
export { aboutMe, advisors } from "./about";
export { news } from "./news";
export { publications } from "./publications";
export { researchExperiences, industryExperiences } from "./experience";
export { talks, academicService, awards } from "./activities";
export { projects, technologies } from "./projects";
export { assets, images, socialLinks, navigationMenu, siteMetadata } from "./site";
