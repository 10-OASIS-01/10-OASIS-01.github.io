import { useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  personalInfo,
  news,
  publications,
  researchExperiences,
  industryExperiences,
  academicService,
  awards,
  misc,
  socialLinks,
} from "@/content";
import { blogMetadata as blogPosts } from "@/features/blog/metadata";
import { formatBlogDate } from "@/features/blog/utils";
import type { Org, ExperienceLogo } from "@/content/types";
import RichText from "./RichText";
import JourneyTrail from "./JourneyTrail";
import OutreachNote from "./OutreachNote";

const NEWS_VISIBLE_COUNT = 3;
function Section({
  id,
  title,
  children,
  note,
  inlineNote = false,
}: {
  id: string;
  title: string;
  children: ReactNode;
  note?: ReactNode;
  inlineNote?: boolean;
}) {
  return (
    <section
      id={id}
      className="content-section"
      aria-labelledby={`${id}-title`}
    >
      <header
        className={`section-label${inlineNote ? " section-label-inline" : ""}`}
      >
        <h2 id={`${id}-title`}>{title}</h2>
        {note}
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
}
function Organization({ org }: { org: Org }) {
  return org.url ? (
    <a
      className="text-link"
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {org.name}
    </a>
  ) : (
    <>{org.name}</>
  );
}
function Logo({ logo }: { logo: ExperienceLogo }) {
  return (
    <div
      className="experience-logo"
      style={{ backgroundColor: logo.background ?? "#fff" }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        width="64"
        height="48"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
export default function MainContent() {
  const [newsExpanded, setNewsExpanded] = useState(false);
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const shownNews = newsExpanded
    ? sortedNews
    : sortedNews.slice(0, NEWS_VISIBLE_COUNT);
  const awardYears = Array.from(
    new Set(awards.map((award) => award.year.slice(0, 4))),
  ).sort((a, b) => b.localeCompare(a));
  const latestPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 2);
  return (
    <div className="home-content">
      <Section id="about" title="About me">
        <div className="about-prose">
          <p>
            <RichText content={personalInfo.aboutMe.intro} />
          </p>
          <p>
            <RichText content={personalInfo.currentRole} />
          </p>
          <p>{personalInfo.aboutMe.researchFocus}</p>
        </div>
        <dl className="research-interests">
          {personalInfo.aboutMe.researchInterests.map((interest) => (
            <div key={interest.title}>
              <dt>{interest.title}</dt>
              <dd>{interest.description}</dd>
            </div>
          ))}
        </dl>
        {personalInfo.aboutMe.goal && <p>{personalInfo.aboutMe.goal}</p>}
        <OutreachNote />
      </Section>
      {sortedNews.length > 0 && (
        <Section id="news" title="News">
          <ul className="news-list" id="news-list">
            {shownNews.map((item) => (
              <li key={item.id}>
                <time dateTime={item.date}>{item.date}</time>
                <div>
                  <RichText content={item.content} />
                </div>
              </li>
            ))}
          </ul>
          {sortedNews.length > NEWS_VISIBLE_COUNT && (
            <button
              className="disclosure-button"
              aria-expanded={newsExpanded}
              aria-controls="news-list"
              onClick={() => setNewsExpanded(!newsExpanded)}
            >
              {newsExpanded ? (
                <>
                  Show less <ChevronUp size={15} />
                </>
              ) : (
                <>
                  All {sortedNews.length} updates <ChevronDown size={15} />
                </>
              )}
            </button>
          )}
        </Section>
      )}
      <Section
        id="publications"
        inlineNote
        title="Selected publications"
        note={
          <a
            className="section-more"
            href={socialLinks.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
          >
            All publications <ArrowUpRight size={14} />
          </a>
        }
      >
        <p className="publication-note">
          * Equal contribution &nbsp; † Corresponding author
        </p>
        <div className="publication-list">
          {publications.map((pub) => (
            <article className="publication" key={pub.id}>
              <a
                className="publication-image"
                href={pub.links[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${pub.title}`}
              >
                <img
                  src={pub.thumbnail.src}
                  alt={pub.thumbnail.alt}
                  width="720"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="publication-details">
                <p className="publication-venue">{pub.venue}</p>
                <h3>
                  <a
                    href={pub.links[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                  </a>
                </h3>
                <p className="publication-authors">
                  {pub.authors.split("Yibin Liu").map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && <strong>Yibin Liu</strong>}
                    </span>
                  ))}
                </p>
                {pub.contribution && (
                  <p className="publication-contribution">
                    Contribution: {pub.contribution}
                  </p>
                )}
                <div className="publication-links">
                  {pub.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  ))}
                  {pub.githubStars && (
                    <img
                      className="stars-badge"
                      src={pub.githubStars}
                      alt="GitHub repository stars"
                      width="90"
                      height="20"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="research" title="Research experience">
        <div className="experience-list">
          {researchExperiences.map((exp) => (
            <article className="experience" key={exp.id}>
              <Logo logo={exp.logo} />
              <div className="experience-body">
                <div className="experience-summary">
                  <h3>
                    {exp.titleLink ? (
                      <a
                        href={exp.titleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.title}
                      </a>
                    ) : (
                      exp.title
                    )}
                  </h3>
                  <p className="experience-date">{exp.duration}</p>
                  {exp.advisors && exp.advisors.length > 0 && (
                    <p className="experience-advisors">
                      Advisor:{" "}
                      {exp.advisors.map((advisor, index) => (
                        <span key={advisor.name}>
                          {index > 0 && ", "}
                          <Organization org={advisor} />
                        </span>
                      ))}
                    </p>
                  )}
                  <p className="meta-text experience-location">
                    {exp.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="industry" title="Industry experience">
        <div className="experience-list">
          {industryExperiences.map((exp) => (
            <article className="experience" key={exp.id}>
              <Logo logo={exp.logo} />
              <div className="experience-body">
                <div className="experience-summary">
                  <h3>
                    <Organization org={exp.org} />
                    {exp.parentOrg && (
                      <span className="parent-org">
                        {exp.parentOrgOpen ?? " ("}
                        {exp.parentOrgPrefix ?? "part of "}
                        <Organization org={exp.parentOrg} />
                        {exp.parentOrgClose ?? ")"}
                      </span>
                    )}
                  </h3>
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-date">
                    {exp.employmentType && `${exp.employmentType} · `}
                    {exp.duration}
                  </p>
                  <p className="meta-text experience-location">
                    {exp.location}
                  </p>
                </div>
                {exp.mentor && (
                  <p>
                    Mentor: <Organization org={exp.mentor} />
                  </p>
                )}
                {exp.focus && <p>Focus: {exp.focus}</p>}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="experience-highlights">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="service" title="Academic service">
        <ul className="service-list">
          {academicService.map((service) => (
            <li key={service.id}>
              <strong>{service.role}</strong>{" "}
              <RichText content={service.description} />
              {service.githubBadge && (
                <img
                  className="stars-badge"
                  src={service.githubBadge}
                  alt="GitHub repository stars"
                  width="90"
                  height="20"
                  loading="lazy"
                />
              )}
            </li>
          ))}
        </ul>
      </Section>
      <Section id="awards" title="Awards">
        <div className="awards-list">
          {awardYears.map((year) => (
            <div className="award-year" key={year}>
              <h3>{year}</h3>
              <ul>
                {awards
                  .filter((award) => award.year.startsWith(year))
                  .map((award) => (
                    <li key={award.id}>
                      <time dateTime={award.year}>
                        {award.year.length > 4
                          ? new Date(
                              `${award.year}-01T00:00:00Z`,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              timeZone: "UTC",
                            })
                          : award.year}
                      </time>
                      <span>{award.title}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      {latestPosts.length > 0 && (
        <Section
          id="writing"
          title="Latest writing"
          note={
            <a className="section-more" href="/blog/">
              Visit the blog <ArrowUpRight size={14} />
            </a>
          }
        >
          <div className="writing-list">
            {latestPosts.map((post) => (
              <article key={post.id}>
                <time dateTime={post.publishedAt}>
                  {formatBlogDate(post.publishedAt)}
                </time>
                <h3>
                  <a href={`/blog/${post.slug}/`}>
                    {post.title}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </Section>
      )}
      <Section id="misc" title="Beyond research">
        <p className="misc-intro">{misc.intro}</p>
        <JourneyTrail content={misc} />
      </Section>
    </div>
  );
}
