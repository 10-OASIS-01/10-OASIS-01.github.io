import type { ReactNode } from "react";

export interface TableOfContentsItem {
  id: string;
  label: string;
  level: 2 | 3;
}

export function headingToId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
  return markdown
    .split("\n")
    .map((line) => {
      const match = /^(##|###)\s+(.+)$/.exec(line);
      if (!match) return null;

      const label = match[2].replace(/[*_`]/g, "").trim();
      return {
        id: headingToId(label),
        label,
        level: match[1].length as 2 | 3,
      };
    })
    .filter((item): item is TableOfContentsItem => item !== null);
}

export function reactNodeToText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return reactNodeToText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export function formatBlogDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
