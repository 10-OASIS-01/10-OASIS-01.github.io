import { useEffect, useMemo } from "react";
import { motion, useScroll } from "framer-motion";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, CalendarDays, Clock3, RefreshCw } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import GiscusComments from "@/features/blog/GiscusComments";
import ShareButtons from "@/features/blog/ShareButtons";
import TableOfContents from "@/features/blog/TableOfContents";
import { getBlogPost } from "@/features/blog/config";
import {
  extractTableOfContents,
  formatBlogDate,
  headingToId,
  reactNodeToText,
} from "@/features/blog/utils";
import { usePageMetadata } from "@/lib/usePageMetadata";
import NotFound from "@/pages/NotFound";

const SITE_URL = "https://10-oasis-01.github.io";

const markdownComponents: Components = {
  h2: ({ node: _node, children, ...props }) => (
    <h2 id={headingToId(reactNodeToText(children))} {...props}>
      {children}
    </h2>
  ),
  h3: ({ node: _node, children, ...props }) => (
    <h3 id={headingToId(reactNodeToText(children))} {...props}>
      {children}
    </h3>
  ),
  a: ({ node: _node, href = "", children, ...props }) => {
    const external = href.startsWith("http://") || href.startsWith("https://");
    return (
      <a
        href={href}
        {...props}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  table: ({ node: _node, children, ...props }) => (
    <div className="blog-table-wrap">
      <table {...props}>{children}</table>
    </div>
  ),
};

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getBlogPost(slug);
  const { scrollYProgress } = useScroll();
  const canonical = `${SITE_URL}/blog/${slug}/`;
  const absoluteImage = post ? `${SITE_URL}${post.ogImage}` : undefined;
  const tableOfContents = useMemo(
    () => extractTableOfContents(post?.content ?? ""),
    [post?.content],
  );

  usePageMetadata({
    title: post
      ? `${post.title} | Yibin (Leon) Liu`
      : "Article not found | Yibin (Leon) Liu",
    description: post?.excerpt ?? "The requested article could not be found.",
    canonical,
    image: absoluteImage,
    type: post ? "article" : "website",
  });

  useEffect(() => {
    if (!post) return;
    const id = window.location.hash.slice(1);
    if (id)
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, [post]);

  useEffect(() => {
    if (!post) return;
    const script = document.createElement("script");
    script.id = "blog-post-structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Person", name: post.author, url: SITE_URL },
      image: absoluteImage,
      mainEntityOfPage: canonical,
    });
    document.getElementById(script.id)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [absoluteImage, canonical, post]);

  if (!post) return <NotFound />;

  return (
    <div className="site-page">
      <div className="reading-progress" aria-hidden="true">
        <motion.div style={{ scaleX: scrollYProgress }} />
      </div>
      <Navigation />
      <main id="main-content" className="article-page">
        <header className="article-header site-shell">
          <a href="/blog/" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to the blog
          </a>
          <ul className="plain-tags" aria-label="Topics">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <h1>{post.title}</h1>
          <p className="article-subtitle">{post.subtitle}</p>
          <div className="article-meta">
            <span>
              By <strong>{post.author}</strong>
            </span>
            <span>
              <CalendarDays size={15} aria-hidden="true" />
              <time dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
            </span>
            <span>
              <Clock3 size={15} aria-hidden="true" />
              {post.readTime}
            </span>
            {post.updatedAt !== post.publishedAt && (
              <span>
                <RefreshCw size={15} aria-hidden="true" />
                Updated {formatBlogDate(post.updatedAt)}
              </span>
            )}
          </div>
          <ShareButtons
            title={post.title}
            text={post.excerpt}
            url={canonical}
          />
        </header>
        <div className="site-shell article-layout">
          <div className="article-body">
            <img
              src={
                post.ogImage === "/assets/long-journey.jpg"
                  ? "/assets/optimized/long-journey-1280.webp"
                  : post.ogImage
              }
              alt="A long mountain trail leading toward distant peaks"
              width="1200"
              height="630"
              className="article-cover"
            />
            <div className="article-notice">
              <strong>Last checked: {post.lastChecked}.</strong> Requirements,
              deadlines, funding programs, and fee-waiver rules change every
              cycle. Treat this guide as a map, then verify every decision on
              current department and university websites.
            </div>
            <TableOfContents items={tableOfContents} compact />
            <article className="blog-prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {post.content}
              </ReactMarkdown>
            </article>
            <div className="article-share">
              <h2>Was this guide useful?</h2>
              <p>
                Share it with someone navigating the same hidden curriculum.
              </p>
              <ShareButtons
                title={post.title}
                text={post.excerpt}
                url={canonical}
              />
            </div>
            <GiscusComments />
          </div>
          <aside className="article-toc">
            <TableOfContents items={tableOfContents} />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
