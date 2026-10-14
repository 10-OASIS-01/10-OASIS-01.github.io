import XIcon from "./XIcon";
import EmailContact from "./EmailContact";
import { FileText, GraduationCap, Github, Linkedin } from "lucide-react";
import { personalInfo, images, socialLinks, assets } from "@/content";

export default function SidebarProfile() {
  return (
    <aside className="profile-sidebar" aria-label="Personal profile">
      <div className="profile-portrait">
        <img
          src={images.profileAvatar}
          width="3000"
          height="4000"
          alt="Leon with a hiking backpack in a mountain valley"
          decoding="async"
        />
      </div>
      <div className="profile-details">
        <h1>{personalInfo.name}</h1>
        <p className="profile-affiliation">{personalInfo.university}</p>
        <p className="profile-status">
          {personalInfo.title} · {personalInfo.arrival}
        </p>
        <p className="profile-location">{personalInfo.location}</p>
        <div className="profile-links" aria-label="Professional links">
          <EmailContact className="profile-email" />
          {[
            { label: "CV", href: assets.cv, Icon: FileText },
            {
              label: "Google Scholar",
              href: socialLinks.googleScholar,
              Icon: GraduationCap,
            },
            { label: "GitHub", href: socialLinks.github, Icon: Github },
            { label: "LinkedIn", href: socialLinks.linkedin, Icon: Linkedin },
            { label: "X", href: socialLinks.x, Icon: XIcon },
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-instant-label={label}
            >
              <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
