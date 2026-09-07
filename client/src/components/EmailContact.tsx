import { personalInfo } from "@/config/siteConfig";
import { useState } from "react";
import { Copy, Mail, Send } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function EmailContact({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setOpen(false);
    } catch {
      setCopyStatus(
        "Unable to copy. Select the address above to copy manually.",
      );
    }
  };

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        setCopyStatus("");
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`email-trigger ${className}`}
          aria-label="Email Leon"
          title="Email"
        >
          <Mail size={20} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="email-popover"
        sideOffset={8}
        collisionPadding={16}
        aria-label="Email options"
      >
        <p className="email-address">{personalInfo.email}</p>
        <p className="email-hint">Replace 😊 with @ before sending.</p>
        <div className="email-actions">
          <button type="button" onClick={copyEmail}>
            <Copy size={16} aria-hidden="true" /> Copy email
          </button>
          <a href={`mailto:${personalInfo.email}`} onClick={() => setOpen(false)}>
            <Send size={16} aria-hidden="true" /> Send email
          </a>
        </div>
        <p className="email-copy-status" role="status">
          {copyStatus}
        </p>
      </PopoverContent>
    </Popover>
  );
}
