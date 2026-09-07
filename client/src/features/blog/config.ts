import { blogMetadata } from "./metadata";
export { blogConfig } from "./metadata";
import hiddenCurriculum from "@/content/blog/the-hidden-curriculum-of-cs-phd-applications.md?raw";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  lastChecked: string;
  readTime: string;
  tags: string[];
  ogImage: string;
  featured: boolean;
  author: string;
  content: string;
}

const contentBySlug: Record<string, string> = {
  "the-hidden-curriculum-of-cs-phd-applications": hiddenCurriculum,
};

export const blogPosts: BlogPost[] = blogMetadata.map((post) => ({
  ...post,
  content: contentBySlug[post.slug] ?? "",
}));

export const giscusConfig = {
  repo: "10-OASIS-01/10-OASIS-01.github.io",
  repoId: "R_kgDOK77EmA",
  category: "Announcements",
  categoryId: "DIC_kwDOK77EmM4DDJb2",
} as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
