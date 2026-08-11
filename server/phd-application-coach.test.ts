import { describe, expect, it } from "vitest";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

describe("CS PhD Application Coach project page", () => {
  it("links the public page to the source, dashboard model, and GitHub star action", async () => {
    const page = await readFile(path.join(root, "client/src/pages/PhDApplicationCoach.tsx"), "utf8");
    expect(page).toContain("ghbtns.com/github-btn.html");
    expect(page).toContain("10-OASIS-01/cs-phd-application-coach");
    expect(page).toContain("phd-applications-2027/");
    expect(page).toContain("~/.agents/skills");
    expect(page).toContain("~/.claude/skills");
  });

  it("promotes the standalone Skill from the blog index", async () => {
    const blogPage = await readFile(path.join(root, "client/src/pages/Blog.tsx"), "utf8");
    expect(blogPage).toContain('href="/skills/cs-phd-application-coach/"');
    expect(blogPage).toContain("NEW PROJECT");
    expect(blogPage).toContain("Open project");
  });
});
