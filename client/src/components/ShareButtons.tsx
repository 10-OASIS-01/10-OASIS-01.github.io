import { Check, Link as LinkIcon, Share2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButtons({ title, text, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
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
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
