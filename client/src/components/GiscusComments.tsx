import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { giscusConfig } from "@/config/blogConfig";

export default function GiscusComments() {
  const { theme } = useTheme();
  const currentTheme = useRef(theme);
  currentTheme.current = theme;
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !giscusConfig.categoryId) return;
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    Object.assign(script.dataset, {
      repo: giscusConfig.repo,
      repoId: giscusConfig.repoId,
      category: giscusConfig.category,
      categoryId: giscusConfig.categoryId,
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "bottom",
      theme: currentTheme.current,
      lang: "en",
      loading: "lazy",
    });
    const syncTheme = () =>
      container
        .querySelector<HTMLIFrameElement>("iframe.giscus-frame")
        ?.contentWindow?.postMessage(
          { giscus: { setConfig: { theme: currentTheme.current } } },
          "https://giscus.app",
        );
    container.addEventListener("load", syncTheme, true);
    container.appendChild(script);
    return () => {
      container.removeEventListener("load", syncTheme, true);
      container.replaceChildren();
    };
  }, []);
  useEffect(() => {
    containerRef.current
      ?.querySelector<HTMLIFrameElement>("iframe.giscus-frame")
      ?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme } } },
        "https://giscus.app",
      );
  }, [theme]);
  return (
    <section aria-labelledby="comments-title" className="comments-section">
      <h2 id="comments-title">Comments</h2>
      <p>Join the conversation with a GitHub account.</p>
      <div ref={containerRef} className="comments-embed" />
      <p className="comments-fallback">
        You can also{" "}
        <a
          className="text-link"
          href={`https://github.com/${giscusConfig.repo}/discussions`}
          target="_blank"
          rel="noopener noreferrer"
        >
          read and discuss on GitHub
        </a>
        .
      </p>
    </section>
  );
}
