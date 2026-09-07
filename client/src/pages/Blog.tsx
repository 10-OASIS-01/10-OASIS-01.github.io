import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  blogMetadata as blogPosts,
  blogConfig,
} from "@/features/blog/metadata";
import { formatBlogDate } from "@/features/blog/utils";
import { usePageMetadata } from "@/lib/usePageMetadata";

const SITE_URL = "https://10-oasis-01.github.io";
const APPLICATION_COACH_URL =
  "https://10-oasis-01.github.io/cs-phd-application-coach/";

export default function Blog() {
  usePageMetadata({
    title: "Blog | Yibin (Leon) Liu",
    description: blogConfig.description,
    canonical: `${SITE_URL}/blog/`,
  });
  return (
    <div className="site-page">
      <Navigation />
      <main id="main-content" className="site-shell blog-index">
        <header className="blog-heading">
          <p className="eyebrow">Writing & resources</p>
          <h1>Blog</h1>
          <p>{blogConfig.description}</p>
        </header>
        <div className="blog-layout">
          <section className="blog-posts" aria-label="Articles">
            {blogPosts.map((post) => (
              <article className="blog-entry" key={post.id}>
                <div className="entry-meta">
                  <time dateTime={post.publishedAt}>
                    {formatBlogDate(post.publishedAt)}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <h2>
                  <a href={`/blog/${post.slug}/`}>{post.title}</a>
                </h2>
                <p className="entry-excerpt">{post.excerpt}</p>
                <a
                  className="blog-entry-image"
                  href={`/blog/${post.slug}/`}
                  aria-label={`Read ${post.title}`}
                >
                  <img
                    src={
                      post.ogImage === "/assets/long-journey.jpg"
                        ? "/assets/optimized/long-journey-1280.webp"
                        : post.ogImage
                    }
                    srcSet={
                      post.ogImage === "/assets/long-journey.jpg"
                        ? "/assets/optimized/long-journey-640.webp 640w, /assets/optimized/long-journey-1280.webp 1280w"
                        : undefined
                    }
                    sizes="(min-width: 1024px) 65vw, 100vw"
                    width="1200"
                    height="630"
                    alt="A long mountain trail leading toward distant peaks"
                  />
                </a>
                <div className="entry-bottom">
                  <ul className="plain-tags" aria-label="Topics">
                    {post.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link inline-link"
                    href={`/blog/${post.slug}/`}
                  >
                    Read article <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </section>
          <aside className="blog-resources" aria-labelledby="resources-title">
            <h2 id="resources-title">Resources</h2>
            <article className="resource-card">
              <p className="eyebrow">NEW PROJECT</p>
              <h3>CS PhD Application Coach</h3>
              <p>
                A practical system for research fit, requirements, statements,
                letters, interviews, and offers.
              </p>
              <p className="resource-meta">
                Open source. Built for Codex, Claude Code, and Notion workflows.
              </p>
              <a
                href={APPLICATION_COACH_URL}
                className="text-link inline-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open project <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
            <a href="/" className="resource-home">
              About Leon <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
