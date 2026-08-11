import { describe, expect, it } from "vitest";
import { readFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const manifestPath = path.join(projectRoot, "client/src/content/blog/posts.json");
const articlePath = path.join(
  projectRoot,
  "client/src/content/blog/the-hidden-curriculum-of-cs-phd-applications.md",
);

describe("blog content", () => {
  it("registers the PhD application guide with a stable permalink", async () => {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    expect(manifest.posts).toHaveLength(1);
    expect(manifest.posts[0]).toMatchObject({
      slug: "the-hidden-curriculum-of-cs-phd-applications",
      publishedAt: "2026-08-11",
      lastChecked: "August 2026",
      ogImage: "/assets/long-journey.jpg",
    });
  });

  it("keeps the required application, access, and personal-advice sections", async () => {
    const article = await readFile(articlePath, "utf8");
    expect(article).toContain("## Build a school list around people and environments, not a prestige ladder");
    expect(article).toContain("PhD Application OS Notion template");
    expect(article).toContain("## A few things I learned while applying");
    expect(article).toContain("### Admission is a noisy matching process, not a leaderboard");
    expect(article).not.toMatch(/substack|pdfdrive|expires=/i);
  });
});
