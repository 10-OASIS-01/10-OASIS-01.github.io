import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import {
  personalInfo,
  news,
  publications,
  researchExperiences,
  industryExperiences,
  // talks,        // hidden — re-add with the Talks section below
  academicService,
  awards,
  projects,
  // technologies, // hidden — re-add with the Technologies section below
} from "@/config/siteConfig";
import RichText from "./RichText";

const NEWS_VISIBLE_COUNT = 5;

// ── Typography scale ──────────────────────────────────────────────
// Hierarchy comes from size + weight + color, not a grab-bag of sizes.
//   24px bold  section headings
//   16px bold  entry titles (one step above body)
//   15px       lead prose (About Me)
//   14px       body / list content  (muted gray for secondary meta)
//   12px       footnotes
const SECTION_HEADING =
  "text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6 border-b border-gray-300 dark:border-gray-700 pb-2";
const ENTRY_TITLE = "text-base font-bold text-gray-900 dark:text-gray-100";
// Primary body / list content (descriptions, news, talks, service).
const BODY_TEXT = "text-sm leading-relaxed text-gray-700 dark:text-gray-300";
// Secondary metadata (authors, venue, dates, advisor, location) — recedes.
const META_TEXT = "text-sm text-gray-600 dark:text-gray-400";
const ENTRY_LINK =
  "inline-flex items-center gap-1 text-sm text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 font-medium";
const INLINE_LINK = "text-blue-900 dark:text-blue-300 hover:underline";

export default function MainContent() {
  const [newsExpanded, setNewsExpanded] = useState(false);

  // Newest first, by date string (YYYY-MM[-DD] sorts lexicographically).
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const hasHiddenNews = sortedNews.length > NEWS_VISIBLE_COUNT;
  const visibleNews =
    hasHiddenNews && !newsExpanded
      ? sortedNews.slice(0, NEWS_VISIBLE_COUNT)
      : sortedNews;

  return (
    <div className="w-full space-y-12">
      {/* About Me Section */}
      <section id="about">
        <h2 className={SECTION_HEADING}>About Me</h2>
        <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p>
            <RichText content={personalInfo.aboutMe.intro} />
          </p>

          <p>{personalInfo.aboutMe.researchFocus}</p>

          <div className="pl-6 border-l-4 border-blue-900 dark:border-blue-300 bg-blue-50 dark:bg-blue-900/20 py-4 pr-4 rounded-r-lg">
            <p className="font-bold mb-3 text-blue-900 dark:text-blue-300">Research Interests:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {personalInfo.aboutMe.researchInterests.map((interest, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{interest.title}:</span> {interest.description}
                </li>
              ))}
            </ul>
          </div>

          <p>{personalInfo.aboutMe.goal}</p>
        </div>
      </section>

      {/* News Section */}
      {sortedNews.length > 0 && (
        <section id="news">
          <h2 className={SECTION_HEADING}>News</h2>
          <ul className="space-y-3">
            {visibleNews.map((item) => (
              <li key={item.id} className="flex gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-sm font-semibold text-blue-900 dark:text-blue-300 whitespace-nowrap min-w-[4.5rem]">
                  {item.date}
                </span>
                <span className="text-sm leading-relaxed">
                  <RichText content={item.content} />
                </span>
              </li>
            ))}
          </ul>
          {hasHiddenNews && (
            <button
              type="button"
              onClick={() => setNewsExpanded((v) => !v)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
            >
              {newsExpanded ? (
                <>
                  Show less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show all {sortedNews.length} <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </section>
      )}

      {/* Publications Section */}
      <section id="publications">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-2 border-b border-gray-300 dark:border-gray-700 pb-2">
          Publications
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 italic">
          (*: equal contribution; †: corresponding author)
        </p>
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="space-y-2">
              <h3 className={ENTRY_TITLE}>{pub.title}</h3>
              <p className={META_TEXT}>
                {pub.authors.split("Yibin Liu").map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <strong className="text-gray-800 dark:text-gray-200">Yibin Liu</strong>
                    )}
                  </span>
                ))}
              </p>
              <p className={`${META_TEXT} italic`}>
                {pub.venue}, {pub.year}
              </p>

              <div className="flex flex-wrap gap-2 mt-2 items-center">
                {pub.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className={ENTRY_LINK}
                  >
                    {link.text} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
                {pub.githubStars && (
                  <img alt="GitHub repo stars" src={pub.githubStars} className="h-5" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Experiences Section */}
      <section id="research">
        <h2 className={SECTION_HEADING}>Research Experiences</h2>
        <div className="space-y-4">
          {researchExperiences.map((exp) => (
            <div key={exp.id} className="space-y-1">
              <h3 className={ENTRY_TITLE}>
                {exp.titleLink ? (
                  <a
                    href={exp.titleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
                  >
                    {exp.title}
                  </a>
                ) : (
                  exp.title
                )}
              </h3>
              {exp.advisors && exp.advisors.length > 0 && (
                <p className={META_TEXT}>
                  Advisor:{" "}
                  {exp.advisors.map((advisor, idx) => (
                    <span key={idx}>
                      {idx > 0 && ", "}
                      {advisor.url ? (
                        <a
                          href={advisor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={INLINE_LINK}
                        >
                          {advisor.name}
                        </a>
                      ) : (
                        advisor.name
                      )}
                    </span>
                  ))}
                </p>
              )}
              <p className={META_TEXT}>
                {exp.location} • {exp.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Experiences Section */}
      <section id="industry">
        <h2 className={SECTION_HEADING}>Industry Experiences</h2>
        <div className="space-y-4">
          {industryExperiences.map((exp) => (
            <div key={exp.id} className="space-y-1">
              <h3 className={ENTRY_TITLE}>
                {exp.org.url ? (
                  <a
                    href={exp.org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={INLINE_LINK}
                  >
                    {exp.org.name}
                  </a>
                ) : (
                  exp.org.name
                )}
                {exp.parentOrg && (
                  <>
                    {" (part of "}
                    {exp.parentOrg.url ? (
                      <a
                        href={exp.parentOrg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={INLINE_LINK}
                      >
                        {exp.parentOrg.name}
                      </a>
                    ) : (
                      exp.parentOrg.name
                    )}
                    {")"}
                  </>
                )}
                {" – "}
                {exp.role}
              </h3>
              {exp.mentor && (
                <p className={META_TEXT}>
                  Mentor:{" "}
                  {exp.mentor.url ? (
                    <a
                      href={exp.mentor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={INLINE_LINK}
                    >
                      {exp.mentor.name}
                    </a>
                  ) : (
                    exp.mentor.name
                  )}
                </p>
              )}
              {exp.focus && (
                <p className={META_TEXT}>
                  Focus: {exp.focus}
                </p>
              )}
              <p className={META_TEXT}>
                {exp.location} • {exp.duration}
              </p>
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className={`list-disc list-outside ml-5 mt-1 space-y-1 ${META_TEXT}`}>
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Talks Section (hidden — uncomment to show)
      <section id="talks">
        <h2 className={SECTION_HEADING}>Talks</h2>
        <div className="space-y-3">
          {talks.map((talk) => (
            <div key={talk.id} className="space-y-1">
              <p className={BODY_TEXT}>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {talk.title}
                </span>
                {talk.event && `, ${talk.event}`}
                {talk.location && `, ${talk.location}`}
                {talk.date && ` • ${talk.date}`}
              </p>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Academic Service Section */}
      <section id="service">
        <h2 className={SECTION_HEADING}>Academic Service</h2>
        <div className="space-y-3">
          {academicService.map((service) => (
            <div key={service.id} className="space-y-1">
              <p className={BODY_TEXT}>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {service.role}
                </span>{" "}
                <RichText content={service.description} />
                {service.githubBadge && (
                  <>
                    {" "}
                    <img
                      src={service.githubBadge}
                      alt="GitHub stars"
                      className="inline-block ml-2"
                    />
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards">
        <h2 className={SECTION_HEADING}>Awards</h2>
        <div className="space-y-4">
          {awards.map((award) => (
            <div key={award.id} className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-blue-900 dark:text-blue-300 whitespace-nowrap min-w-[4rem]">
                  {award.year}
                </span>
                <span className={BODY_TEXT}>
                  {award.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className={SECTION_HEADING}>Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2">
              <h3 className={ENTRY_TITLE}>{project.title}</h3>
              <p className={BODY_TEXT}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className={ENTRY_LINK}
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.githubStars && (
                  <img
                    alt="GitHub repo stars"
                    src={project.githubStars}
                    className="h-5"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section (hidden — uncomment to show)
      <section id="technologies">
        <h2 className={SECTION_HEADING}>Technologies</h2>
        <div className="space-y-4">
          <div>
            <h3 className={`${ENTRY_TITLE} mb-2`}>Languages</h3>
            <p className={BODY_TEXT}>
              {technologies.languages}
            </p>
          </div>
          <div>
            <h3 className={`${ENTRY_TITLE} mb-2`}>Technologies</h3>
            <p className={BODY_TEXT}>
              {technologies.technologies}
            </p>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
