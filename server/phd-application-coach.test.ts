import { describe, expect, it } from "vitest";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

describe("CS PhD Application Coach promotion", () => {
  it("promotes the standalone Skill from the blog index", async () => {
    const blogPage = await readFile(path.join(root, "client/src/pages/Blog.tsx"), "utf8");
    expect(blogPage).toContain('const APPLICATION_COACH_URL = "https://10-oasis-01.github.io/cs-phd-application-coach/"');
    expect(blogPage).toContain("href={APPLICATION_COACH_URL}");
    expect(blogPage).toContain("NEW PROJECT");
    expect(blogPage).toContain("Open project");
  });

  it("does not expose the Skill as a personal-site navigation route", async () => {
    const [app, site] = await Promise.all([
      readFile(path.join(root, "client/src/App.tsx"), "utf8"),
      readFile(path.join(root, "client/src/content/site.ts"), "utf8"),
    ]);
    expect(app).not.toContain("PhDApplicationCoach");
    expect(site).not.toContain('{ label: "Skills"');
  });
});
