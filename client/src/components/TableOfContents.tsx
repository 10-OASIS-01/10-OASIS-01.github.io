import type { TableOfContentsItem } from "@/lib/blog";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  compact?: boolean;
}

export default function TableOfContents({ items, compact = false }: TableOfContentsProps) {
  const links = (
    <ol className="space-y-2.5 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
          <a href={`#${item.id}`} className="block leading-5 text-slate-600 hover:text-blue-900">
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );

  if (compact) {
    return (
      <details className="rounded-xl border border-slate-200 bg-white p-4 lg:hidden">
        <summary className="cursor-pointer font-semibold text-slate-900">On this page</summary>
        <div className="mt-4 border-t border-slate-100 pt-4">{links}</div>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <p className="mb-4 text-xs font-bold tracking-[0.16em] text-blue-900">ON THIS PAGE</p>
      {links}
    </nav>
  );
}
