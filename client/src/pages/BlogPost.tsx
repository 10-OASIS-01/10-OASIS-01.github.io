import { useEffect, useMemo, useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, CalendarDays, Clock3, RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GiscusComments from "@/components/GiscusComments";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import { getBlogPost } from "@/config/blogConfig";
import { extractTableOfContents, formatBlogDate, headingToId, reactNodeToText } from "@/lib/blog";
import { usePageMetadata } from "@/lib/usePageMetadata";
import NotFound from "@/pages/NotFound";

const SITE_URL = "https://10-oasis-01.github.io";

const markdownComponents: Components = {
  h2: ({ node: _node, children, ...props }) => (
    <h2 id={headingToId(reactNodeToText(children))} {...props}>{children}</h2>
  ),
  h3: ({ node: _node, children, ...props }) => (
    <h3 id={headingToId(reactNodeToText(children))} {...props}>{children}</h3>
  ),
  a: ({ node: _node, href = "", children, ...props }) => {
    const external = href.startsWith("http://") || href.startsWith("https://");
    return (
      <a href={href} {...props} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
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
  const [progress, setProgress] = useState(0);
  const canonical = `${SITE_URL}/blog/${slug}/`;
  const absoluteImage = post ? `${SITE_URL}${post.ogImage}` : undefined;
  const tableOfContents = useMemo(() => extractTableOfContents(post?.content ?? ""), [post?.content]);

  usePageMetadata({
    title: post ? `${post.title} | Yibin (Leon) Liu` : "Article not found | Yibin (Leon) Liu",
    description: post?.excerpt ?? "The requested article could not be found.",
    canonical,
    image: absoluteImage,
    type: post ? "article" : "website",
  });

  useEffect(() => {
    if (!post) return;

    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
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
    <div className="min-h-screen bg-[#fbfaf7] text-slate-900">
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent" aria-hidden="true">
        <div className="h-full bg-blue-800 transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
      <Navigation />

      <main className="pt-16">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <a href="/blog/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the blog
            </a>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">{tag}</span>
              ))}
            </div>

            <h1 className="article-serif mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-slate-950 sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">{post.subtitle}</p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-800">By {post.author}</span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              </span>
              <span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4" aria-hidden="true" />{post.readTime}</span>
              {post.updatedAt !== post.publishedAt && (
                <span className="flex items-center gap-1.5"><RefreshCw className="h-4 w-4" aria-hidden="true" />Updated {formatBlogDate(post.updatedAt)}</span>
              )}
            </div>

            <div className="mt-7">
              <ShareButtons title={post.title} text={post.excerpt} url={canonical} />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:grid lg:grid-cols-[minmax(0,760px)_240px] lg:justify-center lg:gap-16 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <img
              src={post.ogImage}
              alt="A long mountain trail leading toward distant peaks"
              className="mb-8 aspect-[1200/630] w-full rounded-2xl border border-slate-200 object-cover object-bottom shadow-[0_18px_55px_-38px_rgba(15,23,42,0.55)] sm:mb-10"
            />

            <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-6 text-slate-700 sm:text-base">
              <strong className="text-blue-950">Last checked: {post.lastChecked}.</strong>{" "}
              Requirements, deadlines, funding programs, and fee-waiver rules change every cycle. Treat this guide as a map, then verify every decision on current department and university websites.
            </div>

            <TableOfContents items={tableOfContents} compact />

            <article className="blog-prose mt-9 sm:mt-11">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {post.content}
              </ReactMarkdown>
            </article>

            <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="article-serif text-2xl font-semibold leading-snug text-slate-950">Was this guide useful?</p>
              <p className="mt-2 leading-7 text-slate-600">Share it with someone navigating the same hidden curriculum.</p>
              <div className="mt-5"><ShareButtons title={post.title} text={post.excerpt} url={canonical} /></div>
            </div>

            <GiscusComments />
          </div>

          <aside className="sticky top-24 hidden h-fit max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-slate-200 pl-7 lg:block">
            <TableOfContents items={tableOfContents} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
