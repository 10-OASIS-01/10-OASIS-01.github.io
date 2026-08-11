import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const outputDirectory = path.join(projectRoot, "dist", "public");
const manifestPath = path.join(projectRoot, "client", "src", "content", "blog", "posts.json");
const siteUrl = "https://10-oasis-01.github.io";

const [template, manifestText] = await Promise.all([
  readFile(path.join(outputDirectory, "index.html"), "utf8"),
  readFile(manifestPath, "utf8"),
]);
const { posts } = JSON.parse(manifestText);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function renderPage({ title, description, canonical, image, type, keywords, structuredData }) {
  let html = template;
  const values = { title, description, canonical, image, type, keywords };

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(values.title)}</title>`);
  html = replaceOrInsert(html, /<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(values.description)}" />`);
  html = replaceOrInsert(html, /<meta\s+name="keywords"[^>]*>/i, `<meta name="keywords" content="${escapeHtml(values.keywords)}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(values.title)}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtml(values.description)}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:type"[^>]*>/i, `<meta property="og:type" content="${escapeHtml(values.type)}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeHtml(values.canonical)}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:image"[^>]*>/i, `<meta property="og:image" content="${escapeHtml(values.image)}" />`);
  html = replaceOrInsert(html, /<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(values.title)}" />`);
  html = replaceOrInsert(html, /<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(values.description)}" />`);
  html = replaceOrInsert(html, /<meta\s+name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${escapeHtml(values.image)}" />`);
  html = replaceOrInsert(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${escapeHtml(values.canonical)}" />`);

  const jsonLd = JSON.stringify(structuredData).replaceAll("<", "\\u003c");
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${jsonLd}</script>`);
  return html;
}

async function writeRoute(route, html) {
  const directory = path.join(outputDirectory, ...route.split("/").filter(Boolean));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
}

const blogDescription = "Practical guides, research notes, and reflections on building a life in AI and robotics.";
await writeRoute(
  "/blog/",
  renderPage({
    title: "Blog | Yibin (Leon) Liu",
    description: blogDescription,
    canonical: `${siteUrl}/blog/`,
    image: `${siteUrl}${posts[0]?.ogImage ?? "/assets/avatar.jpg"}`,
    type: "website",
    keywords: "Yibin Liu, Leon Liu, AI research blog, CS PhD applications, robotics",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Yibin (Leon) Liu — Blog",
      description: blogDescription,
      url: `${siteUrl}/blog/`,
      author: { "@type": "Person", name: "Yibin (Leon) Liu", url: siteUrl },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${siteUrl}/blog/${post.slug}/`,
        datePublished: post.publishedAt,
      })),
    },
  }),
);

for (const post of posts) {
  const canonical = `${siteUrl}/blog/${post.slug}/`;
  const image = `${siteUrl}${post.ogImage}`;
  await writeRoute(
    `/blog/${post.slug}/`,
    renderPage({
      title: `${post.title} | Yibin (Leon) Liu`,
      description: post.excerpt,
      canonical,
      image,
      type: "article",
      keywords: [...post.tags, "Yibin Liu", "CS PhD applications"].join(", "),
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: { "@type": "Person", name: post.author, url: siteUrl },
        image,
        mainEntityOfPage: canonical,
      },
    }),
  );
}

const skillPath = "/skills/cs-phd-application-coach/";
const skillCanonical = `${siteUrl}${skillPath}`;
const skillDescription = "An open, access-conscious skill for planning, writing, tracking, and evaluating global CS and AI PhD applications in Codex and Claude Code.";
await writeRoute(
  skillPath,
  renderPage({
    title: "CS PhD Application Coach | Yibin (Leon) Liu",
    description: skillDescription,
    canonical: skillCanonical,
    image: `${siteUrl}/assets/cs-phd-application-coach-card.png`,
    type: "website",
    keywords: "CS PhD applications, AI PhD applications, Agent Skills, Codex, Claude Code, application dashboard",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: "CS PhD Application Coach",
      description: skillDescription,
      codeRepository: "https://github.com/10-OASIS-01/cs-phd-application-coach",
      url: skillCanonical,
      author: { "@type": "Person", name: "Yibin (Leon) Liu", url: siteUrl },
      programmingLanguage: ["Markdown", "Python", "JavaScript"],
      license: "https://opensource.org/license/mit",
      runtimePlatform: ["Codex", "Claude Code"],
    },
  }),
);

console.log(`Generated static HTML for /blog/, ${posts.length} blog post(s), and ${skillPath}.`);
