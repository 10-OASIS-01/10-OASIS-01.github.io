import { Check, Link as LinkIcon, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ShareButtonsProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButtons({ title, text, url }: ShareButtonsProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyWithTextarea = () => {
    const textarea = document.createElement("textarea");
    textarea.value = url;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      textarea.remove();
    }
  };

  const copyLink = async (): Promise<boolean> => {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        copied = true;
      }
    } catch {
      // Embedded browsers and restrictive permission policies can reject the
      // modern Clipboard API. The textarea path works without that permission.
    }

    if (!copied) copied = copyWithTextarea();

    setCopyState(copied ? "copied" : "error");
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 2200);
    return copied;
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyLink();
  };

  return (
    <div className="flex flex-wrap gap-2" aria-label="Share this article">
      <button type="button" onClick={share} className="blog-action-button">
        <Share2 className="h-4 w-4" aria-hidden="true" />
        Share
      </button>
      <button type="button" onClick={copyLink} className="blog-action-button" aria-live="polite">
        {copyState === "copied" ? <Check className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
        {copyState === "copied" ? "Link copied" : copyState === "error" ? "Copy unavailable" : "Copy link"}
      </button>
    </div>
  );
}
