import type { RichText as RichTextData } from "@/config/siteConfig";

const LINK_CLASS =
  "text-blue-900 dark:text-blue-300 hover:underline";

/**
 * Renders a RichText value: plain strings as text, `{ text, url }` segments as
 * external links. Replaces the old approach of splitting strings at runtime to
 * inject links — link positions are now declared in the content data itself.
 */
export default function RichText({ content }: { content: RichTextData }) {
  return (
    <>
      {content.map((segment, idx) =>
        typeof segment === "string" ? (
          <span key={idx}>{segment}</span>
        ) : (
          <a
            key={idx}
            href={segment.url}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            {segment.text}
          </a>
        )
      )}
    </>
  );
}
