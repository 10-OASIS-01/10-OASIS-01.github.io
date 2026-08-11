import { useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileCode2,
  FolderTree,
  Github,
  Globe2,
  HeartHandshake,
  LayoutDashboard,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/lib/usePageMetadata";

const SITE_URL = "https://10-oasis-01.github.io";
const PAGE_PATH = "/skills/cs-phd-application-coach/";
const REPOSITORY_URL = "https://github.com/10-OASIS-01/cs-phd-application-coach";
const SOURCE_URL = REPOSITORY_URL;
const DESCRIPTION =
  "An open, access-conscious skill for planning, writing, tracking, and evaluating global CS and AI PhD applications in Codex and Claude Code.";

const capabilities = [
  {
    icon: SearchCheck,
    title: "Research and program fit",
    description: "Turn broad interests into durable questions, find multiple plausible advisors, and verify current program facts.",
  },
  {
    icon: FileCode2,
    title: "Materials with evidence",
    description: "Develop SOPs, proposals, CVs, letters, and outreach from real contributions while preserving the applicant's voice.",
  },
  {
    icon: LayoutDashboard,
    title: "One application workspace",
    description: "Manage programs, faculty, deadlines, materials, recommenders, interviews, and offers from one visual dashboard.",
  },
  {
    icon: Globe2,
    title: "Global application routes",
    description: "Separate program, supervisor, vacancy, and scholarship models across North America, Europe, the UK, Asia, and Oceania.",
  },
  {
    icon: HeartHandshake,
    title: "Access and wellbeing",
    description: "Search fees and support without assuming citizenship, money, academic connections, identity disclosure, or one researcher archetype.",
  },
  {
    icon: ShieldCheck,
    title: "Current facts, honest limits",
    description: "Record official URLs and last-checked dates, distinguish evidence from inference, and never invent fit or outcomes.",
  },
];

const prompts = [
  "I am an international undergraduate with limited research access and a small application budget. Help me decide what to strengthen and build a realistic global list.",
  "I am moving from industry into research without publications. Audit my evidence and create a six-month plan for a CS PhD application.",
  "I have several research projects and two offers. Help me compare advisors, funding, lab climate, accessibility, and unresolved risks.",
];

const fileTree = `phd-applications-2027/
├── profile.json
├── data/
│   ├── programs.csv
│   ├── faculty.csv
│   ├── materials.csv
│   ├── recommenders.csv
│   ├── tasks.csv
│   ├── contacts.csv
│   ├── interviews.csv
│   └── offers.csv
├── notes/
│   ├── research-narrative.md
│   ├── offer-decision.md
│   └── wellbeing-plan.md
├── materials/
│   ├── shared/
│   └── programs/
├── evidence/
└── archive/`;

function GitHubStar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={REPOSITORY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-10 items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900"
      >
        <Star className="h-4 w-4" aria-hidden="true" /> Star on GitHub
      </a>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=10-OASIS-01&repo=cs-phd-application-coach&type=star&count=true&size=large"
        width="170"
        height="30"
        title="Star cs-phd-application-coach on GitHub"
        className="overflow-hidden border-0"
        loading="lazy"
      />
      <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 px-1 text-sm font-semibold text-blue-900 hover:text-blue-700">
        <Github className="h-4 w-4" aria-hidden="true" /> Source
      </a>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f5ef] shadow-[0_28px_80px_-45px_rgba(15,23,42,0.6)]">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-xs font-medium text-slate-500">127.0.0.1 · private application workspace</span>
      </div>
      <div className="grid min-h-[430px] grid-cols-[92px_minmax(0,1fr)] sm:grid-cols-[190px_minmax(0,1fr)]">
        <div className="bg-[#102342] p-4 text-slate-300">
          <div className="mb-6 flex items-center gap-2 font-semibold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f3d59b] font-serif text-[#102342]">A</span>
            <span className="hidden text-sm sm:inline">Application OS</span>
          </div>
          {["Overview", "Programs", "Faculty", "Materials", "Letters", "Interviews", "Offers"].map((item, index) => (
            <div key={item} className={`mb-1 rounded-lg px-2 py-2 text-xs ${index === 0 ? "bg-white/10 text-white" : "text-slate-400"}`}>
              <span className="hidden sm:inline">{item}</span><span className="sm:hidden">{item.slice(0, 1)}</span>
            </div>
          ))}
        </div>
        <div className="min-w-0 p-4 sm:p-6">
          <p className="text-[10px] font-bold tracking-[0.16em] text-blue-800">2027 APPLICATION CYCLE</p>
          <h3 className="article-serif mt-2 text-2xl font-semibold text-slate-950">Overview</h3>
          <p className="mt-1 text-xs text-slate-500">Deadlines, materials, and risks in one place.</p>
          <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {[["Programs", "8"], ["Faculty matches", "21"], ["Open materials", "5"], ["Deadlines soon", "2"]].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-[10px] text-slate-500">{label}</p>
                <p className="article-serif mt-1 text-2xl font-semibold text-blue-950">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div><h4 className="font-semibold text-slate-900">Attention queue</h4><p className="mt-1 text-xs text-slate-500">Risks to verify before they become emergencies.</p></div>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-900">3 ITEMS</span>
            </div>
            <div className="mt-3 space-y-2 text-xs">
              <div className="rounded-lg bg-slate-50 p-3"><strong>English-test waiver needs confirmation</strong><span className="mt-1 block text-slate-500">Official page last checked 42 days ago</span></div>
              <div className="rounded-lg bg-slate-50 p-3"><strong>Research statement is not final</strong><span className="mt-1 block text-slate-500">Deadline in 12 days</span></div>
              <div className="rounded-lg bg-slate-50 p-3"><strong>Second plausible advisor missing</strong><span className="mt-1 block text-slate-500">Check rotations and co-advising</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhDApplicationCoach() {
  const canonical = `${SITE_URL}${PAGE_PATH}`;
  const image = `${SITE_URL}/assets/cs-phd-application-coach-card.png`;

  usePageMetadata({
    title: "CS PhD Application Coach | Yibin (Leon) Liu",
    description: DESCRIPTION,
    canonical,
    image,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "phd-application-coach-structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: "CS PhD Application Coach",
      description: DESCRIPTION,
      codeRepository: REPOSITORY_URL,
      url: canonical,
      author: { "@type": "Person", name: "Yibin (Leon) Liu", url: SITE_URL },
      programmingLanguage: ["Markdown", "Python", "JavaScript"],
      license: "https://opensource.org/license/mit",
      runtimePlatform: ["Codex", "Claude Code"],
    });
    document.getElementById(script.id)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [canonical]);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-900">
      <Navigation />
      <main className="pt-16">
        <section className="overflow-hidden border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.85fr)] lg:items-center lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-950">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> OPEN AGENT SKILL
              </div>
              <h1 className="article-serif mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] text-slate-950 sm:text-6xl">
                CS PhD Application Coach
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
                A practical, access-conscious application system for Codex and Claude Code—from first research questions to statements, interviews, and offer decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">
                  Explore the source <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/blog/the-hidden-curriculum-of-cs-phd-applications/" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-900">
                  Read the complete guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="mb-3 text-sm font-semibold text-slate-700">Useful? Star the repository so more applicants can find it.</p>
                <GitHubStar />
              </div>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-[#eef4fb] p-6 shadow-[0_30px_80px_-45px_rgba(30,64,175,0.48)] sm:p-8">
              <p className="text-xs font-bold tracking-[0.16em] text-blue-900">WHAT IT DOES FIRST</p>
              <ol className="mt-5 space-y-5">
                {[
                  ["01", "Understand the applicant", "Goals, research evidence, constraints, region, timeline, and preferred management interface."],
                  ["02", "Diagnose—not rank", "Make strengths, missing evidence, uncertainty, and the next three actions concrete."],
                  ["03", "Build a verified system", "Keep every changing requirement attached to an official URL and last-checked date."],
                  ["04", "Coach the whole cycle", "Materials, letters, outreach, interviews, offers, rejection, reapplication, and wellbeing."],
                ].map(([number, title, text]) => (
                  <li key={number} className="grid grid-cols-[42px_1fr] gap-3">
                    <span className="article-serif text-xl font-semibold text-blue-800">{number}</span>
                    <div><strong className="text-slate-950">{title}</strong><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.16em] text-blue-900">ONE MODEL, TWO INTERFACES</p>
            <h2 className="article-serif mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">Use the interface that feels natural.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Coding comfort is not research ability. The skill offers a local dashboard for people who work with Codex or Claude Code, and a no-code Notion path for applicants who prefer databases and views.</p>
          </header>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-200 bg-blue-950 p-7 text-white">
              <LayoutDashboard className="h-7 w-7 text-blue-200" aria-hidden="true" />
              <h3 className="article-serif mt-5 text-2xl font-semibold">Local visual dashboard</h3>
              <p className="mt-3 leading-7 text-blue-100">Best for applicants comfortable starting a local tool. Edit everything in the browser while the underlying CSV, JSON, and Markdown stay readable to agents and ordinary editors.</p>
              <ul className="mt-5 space-y-2 text-sm text-blue-100"><li>Local-only server with no analytics</li><li>Automatic backups before edits</li><li>Works with private Git or plain folders</li></ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <BookOpen className="h-7 w-7 text-blue-900" aria-hidden="true" />
              <h3 className="article-serif mt-5 text-2xl font-semibold text-slate-950">No-code Notion workspace</h3>
              <p className="mt-3 leading-7 text-slate-600">Best for applicants who prefer visual databases without local files or commands. Programs, faculty, materials, letters, and tasks keep the same relations and verification fields.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600"><li>Guided setup and views</li><li>Optional confirmed AI-assisted updates</li><li>Exportable to the portable schema</li></ul>
            </article>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-blue-900">VISUAL WORKSPACE</p>
                <h2 className="article-serif mt-3 text-4xl font-semibold text-slate-950">Human-friendly on top. Agent-friendly underneath.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">The browser view manages the same folder that Codex and Claude Code inspect. Nothing is trapped in a proprietary database, and nobody has to edit a CSV by hand.</p>
                <div className="mt-6 space-y-3">
                  {["Deadline and source-freshness warnings", "Program, advisor, material, letter, interview, and offer views", "Research, offer-decision, and wellbeing notes", "Backups before every dashboard write"].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-800" aria-hidden="true" /><span>{item}</span></div>
                  ))}
                </div>
              </div>
              <DashboardPreview />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3"><FolderTree className="h-6 w-6 text-blue-900" aria-hidden="true" /><p className="text-xs font-bold tracking-[0.16em] text-blue-900">PORTABLE FILE MODEL</p></div>
            <h2 className="article-serif mt-4 text-4xl font-semibold text-slate-950">One private folder for the entire cycle.</h2>
            <p className="mt-4 leading-7 text-slate-600">Structured data stays separate from drafts and evidence. That makes audits reliable, prevents SOP and proposal prompts from being merged, and lets any compatible agent pick up where another stopped.</p>
          </div>
          <pre className="overflow-x-auto rounded-2xl border border-slate-700 bg-[#102342] p-6 text-sm leading-6 text-blue-50 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.75)]"><code>{fileTree}</code></pre>
        </section>

        <section className="border-y border-slate-200 bg-[#f5f2ea]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <header className="max-w-3xl"><p className="text-xs font-bold tracking-[0.16em] text-blue-900">COMPLETE APPLICATION COACHING</p><h2 className="article-serif mt-3 text-4xl font-semibold text-slate-950">The process around the documents matters.</h2></header>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><Icon className="h-6 w-6 text-blue-900" aria-hidden="true" /><h3 className="article-serif mt-4 text-xl font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-blue-900">INSTALL THE SAME OPEN SKILL</p>
              <h2 className="article-serif mt-3 text-4xl font-semibold text-slate-950">Codex or Claude Code</h2>
              <p className="mt-4 leading-7 text-slate-600">Clone the repository, then copy the skill folder into the personal skills directory for your tool. The core package follows the open Agent Skills structure; Codex-specific UI metadata is optional.</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5"><strong className="text-slate-950">1. Clone once</strong><pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`git clone --depth 1 https://github.com/10-OASIS-01/cs-phd-application-coach.git`}</code></pre></div>
                <div className="rounded-xl border border-slate-200 bg-white p-5"><strong className="text-slate-950">2A. Install for Codex</strong><pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`mkdir -p ~/.agents/skills\ncp -R skills/cs-phd-application-coach ~/.agents/skills/`}</code></pre></div>
                <div className="rounded-xl border border-slate-200 bg-white p-5"><strong className="text-slate-950">2B. Install for Claude Code</strong><pre className="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-4 text-xs leading-5 text-slate-100"><code>{`mkdir -p ~/.claude/skills\ncp -R skills/cs-phd-application-coach ~/.claude/skills/`}</code></pre></div>
              </div>
              <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-900 hover:text-blue-700">Open the skill folder <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-blue-900">EVALUATION SCENARIOS</p>
              <h2 className="article-serif mt-3 text-4xl font-semibold text-slate-950">Tested against different starting points.</h2>
              <div className="mt-6 space-y-4">
                {prompts.map((prompt, index) => (
                  <article key={prompt} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex gap-4"><span className="article-serif text-xl font-semibold text-blue-800">0{index + 1}</span><p className="leading-7 text-slate-700">“{prompt}”</p></div></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
            <ShieldCheck className="mx-auto h-8 w-8 text-blue-900" aria-hidden="true" />
            <h2 className="article-serif mt-4 text-4xl font-semibold text-slate-950">Supportive does not mean uncritical.</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">The skill will not promise admission, fabricate a stronger persona, reduce research to prestige, force a trauma narrative, or submit anything without confirmation. Requirements and funding still need current official verification.</p>
            <div className="mt-8 flex justify-center"><GitHubStar /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
