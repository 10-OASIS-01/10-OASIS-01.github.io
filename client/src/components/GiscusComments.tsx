import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { giscusConfig } from "@/config/blogConfig";

export default function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !giscusConfig.categoryId) return;

    container.replaceChildren();
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.repo = giscusConfig.repo;
    script.dataset.repoId = giscusConfig.repoId;
    script.dataset.category = giscusConfig.category;
    script.dataset.categoryId = giscusConfig.categoryId;
    script.dataset.mapping = "pathname";
    script.dataset.strict = "0";
    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "0";
    script.dataset.inputPosition = "bottom";
    script.dataset.theme = "light";
    script.dataset.lang = "en";
    script.dataset.loading = "lazy";
    container.appendChild(script);

    return () => container.replaceChildren();
  }, []);

  return (
    <section aria-labelledby="comments-title" className="mt-20 border-t border-slate-200 pt-10">
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-900">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 id="comments-title" className="text-2xl font-semibold text-slate-950">Comments</h2>
          <p className="mt-1 text-sm text-slate-600">Join the conversation with a GitHub account.</p>
        </div>
      </div>
      {giscusConfig.categoryId ? (
        <div ref={containerRef} className="min-h-24" />
      ) : (
        <p className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          Comments are being connected and will be available shortly.
        </p>
      )}
    </section>
  );
}
