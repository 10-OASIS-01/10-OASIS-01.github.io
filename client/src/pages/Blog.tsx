import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import SidebarProfile from "@/components/SidebarProfile";
import Footer from "@/components/Footer";
import { blogPosts, blogConfig } from "@/config/blogConfig";
import { formatBlogDate } from "@/lib/blog";
import { usePageMetadata } from "@/lib/usePageMetadata";

const SITE_URL = "https://10-oasis-01.github.io";

export default function Blog() {
  usePageMetadata({
    title: "Blog | Yibin (Leon) Liu",
    description: blogConfig.description,
    canonical: `${SITE_URL}/blog/`,
  });

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-900">
      <Navigation />

      <main className="pt-16">
        <div className="container mx-auto max-w-7xl py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:gap-20">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <SidebarProfile />
              </div>
            </aside>

            <section className="lg:col-span-7" aria-labelledby="blog-title">
              <header className="mb-10 border-b border-slate-200 pb-8 sm:mb-12 sm:pb-10">
                <p className="mb-3 text-xs font-bold tracking-[0.18em] text-blue-900">
                  {blogConfig.eyebrow}
                </p>
                <h1 id="blog-title" className="article-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                  {blogConfig.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  {blogConfig.description}
                </p>
              </header>

              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id}>
                    <a
                      href={`/blog/${post.slug}/`}
                      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_-30px_rgba(30,64,175,0.38)]"
                    >
                      <div className="overflow-hidden border-b border-slate-100 bg-[#f6f2e9]">
                        <img
                          src={post.ogImage}
                          alt="A long mountain trail leading toward distant peaks"
                          className="aspect-[1200/630] w-full object-cover object-bottom transition duration-500 group-hover:scale-[1.015]"
                        />
                      </div>
                      <div className="p-6 sm:p-8">
                        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                          {post.featured && (
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-900">
                              FEATURED GUIDE
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="h-4 w-4" aria-hidden="true" />
                            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock3 className="h-4 w-4" aria-hidden="true" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="article-serif text-2xl font-semibold leading-tight text-slate-950 transition-colors group-hover:text-blue-900 sm:text-3xl">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-base leading-7 text-slate-600">{post.excerpt}</p>

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="flex items-center gap-1.5 font-semibold text-blue-900">
                            Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
