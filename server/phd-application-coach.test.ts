import { describe, expect, it } from "vitest";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import os from "node:os";
import path from "node:path";

const run = promisify(execFile);
const root = process.cwd();
const skill = path.join(root, "skills/cs-phd-application-coach");

describe("CS PhD Application Coach skill", () => {
  it("uses a portable Agent Skills entrypoint with progressive disclosure", async () => {
    const content = await readFile(path.join(skill, "SKILL.md"), "utf8");
    expect(content).toMatch(/^---\nname: cs-phd-application-coach\ndescription:/);
    expect(content.split("\n").length).toBeLessThan(500);
    expect(content).toContain("global-application-systems.md");
    expect(content).toContain("serve_application_dashboard.py");
    expect(content).not.toMatch(/CLAUDE_SKILL_DIR|CODEX_HOME|allowed-tools/);
  });

  it("bundles the local dashboard and structured application folder", async () => {
    const required = [
      "assets/dashboard/index.html",
      "assets/dashboard/app.js",
      "assets/dashboard/styles.css",
      "assets/workspace/profile.json",
      "assets/workspace/data/programs.csv",
      "assets/workspace/data/materials.csv",
      "assets/workspace/notes/research-narrative.md",
      "assets/workspace/notes/offer-decision.md",
      "scripts/init_application_workspace.py",
      "scripts/audit_application_workspace.py",
      "scripts/serve_application_dashboard.py",
    ];
    await Promise.all(required.map((file) => stat(path.join(skill, file))));
  });

  it("initializes a workspace without overwriting it and audits the result", async () => {
    const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "phd-coach-test-"));
    const workspace = path.join(temporaryRoot, "cycle");
    const initializer = path.join(skill, "scripts/init_application_workspace.py");
    const auditor = path.join(skill, "scripts/audit_application_workspace.py");

    try {
      await run("python3", [initializer, "--destination", workspace, "--cycle", "2027", "--timezone", "Asia/Shanghai"]);
      const profile = JSON.parse(await readFile(path.join(workspace, "profile.json"), "utf8"));
      expect(profile).toMatchObject({ cycle: "2027", home_timezone: "Asia/Shanghai" });
      await expect(run("python3", [initializer, "--destination", workspace, "--cycle", "2027"])).rejects.toMatchObject({ code: 2 });
      const audit = await run("python3", [auditor, workspace, "--today", "2026-08-12", "--json"]);
      const report = JSON.parse(audit.stdout);
      expect(report.counts).toMatchObject({ programs: 0, errors: 0 });
    } finally {
      await rm(temporaryRoot, { recursive: true, force: true });
    }
  });

  it("audits duplicate programs, stale sources, and invalid deadline time zones", async () => {
    const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "phd-coach-audit-"));
    const workspace = path.join(temporaryRoot, "cycle");
    const initializer = path.join(skill, "scripts/init_application_workspace.py");
    const auditor = path.join(skill, "scripts/audit_application_workspace.py");

    try {
      await run("python3", [initializer, "--destination", workspace, "--cycle", "2027"]);
      const programsPath = path.join(workspace, "data/programs.csv");
      const header = (await readFile(programsPath, "utf8")).trim();
      const fields = header.split(",");
      const makeRow = (values: Record<string, string>) => fields.map((field) => values[field] ?? "").join(",");
      await writeFile(
        programsPath,
        `${header}\n${makeRow({ program_id: "duplicate", institution: "Sample A", program: "CS PhD", official_url: "not-a-url", deadline_date: "2026-08-20", deadline_timezone: "Mars/Olympus", status: "researching", last_checked: "2026-01-01" })}\n${makeRow({ program_id: "duplicate", institution: "Sample B", program: "AI PhD", official_url: "https://example.edu/phd", deadline_date: "2026-12-01", deadline_timezone: "America/New_York", status: "researching", verification_status: "verified", last_checked: "2027-01-01" })}\n`,
        "utf8",
      );

      let stdout = "";
      try {
        await run("python3", [auditor, workspace, "--today", "2026-08-12", "--json"]);
      } catch (error) {
        stdout = (error as { stdout?: string }).stdout ?? "";
      }
      const report = JSON.parse(stdout);
      const messages = report.findings.map((finding: { message: string }) => finding.message);
      expect(messages).toContain("Duplicate program_id");
      expect(messages).toContain("Unknown IANA time zone: Mars/Olympus");
      expect(messages).toContain("Source check is 223 days old");
      expect(messages).toContain("last_checked is in the future");
      expect(messages).toContain("Missing verification status");
    } finally {
      await rm(temporaryRoot, { recursive: true, force: true });
    }
  });

  it("links the public page to the source, dashboard model, and GitHub star action", async () => {
    const page = await readFile(path.join(root, "client/src/pages/PhDApplicationCoach.tsx"), "utf8");
    expect(page).toContain("ghbtns.com/github-btn.html");
    expect(page).toContain("phd-applications-2027/");
    expect(page).toContain("~/.agents/skills");
    expect(page).toContain("~/.claude/skills");
  });
});
