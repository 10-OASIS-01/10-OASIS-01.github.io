import type { TableOfContentsItem } from "@/lib/blog";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  compact?: boolean;
}

export default function TableOfContents({
  items,
  compact = false,
}: TableOfContentsProps) {
  const links = (
    <ol className="space-y-2.5 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
          <a href={`#${item.id}`} className="block leading-5 toc-link">
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );

  if (compact) {
    return (
      <details className="toc-compact lg:hidden">
        <summary className="cursor-pointer font-semibold">On this page</summary>
        <div className="mt-4 border-t border-border pt-4">{links}</div>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <p className="mb-4 text-sm font-semibold text-foreground">ON THIS PAGE</p>
      {links}
    </nav>
  );
}
