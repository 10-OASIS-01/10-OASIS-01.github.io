import { personalInfo } from "@/config/siteConfig";

export default function EmailContact({ className }: { className: string }) {
  return (
    <button
      type="button"
      className={className}
      aria-label="Email Leon"
      title={personalInfo.email}
      onClick={() => {
        window.location.href = `mailto:${personalInfo.email.replace("😊", String.fromCharCode(64))}`;
      }}
    >
      {personalInfo.email}
    </button>
  );
}
