import { useState } from "react";
import {
  ChevronDown,
  Flag,
  Footprints,
  MapPin,
  Mountain,
  Route,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type {
  JourneyMilestone,
  JourneyMilestoneIcon,
  MiscContent,
} from "@/content/types";

const iconMap: Record<
  JourneyMilestoneIcon,
  React.ComponentType<{ className?: string }>
> = {
  plateau: MapPin,
  run: Footprints,
  hike: Route,
  summit: Mountain,
};

function MountainArtwork() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 900 260"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="journey-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="0.58" stopColor="#eff6ff" />
          <stop offset="1" stopColor="#ecfdf5" />
        </linearGradient>
        <linearGradient id="journey-ridge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#315c50" />
          <stop offset="1" stopColor="#183d35" />
        </linearGradient>
        <linearGradient id="journey-summit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#64748b" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
      </defs>

      <rect width="900" height="260" fill="url(#journey-sky)" />
      <circle cx="735" cy="57" r="30" fill="#fbbf24" opacity="0.78" />

      <g fill="none" stroke="#2563eb" strokeWidth="1.2" opacity="0.13">
        <path d="M-30 58c170-62 258 45 420 1s289-60 550 15" />
        <path d="M-20 78c170-62 259 44 421 0s289-58 550 16" />
        <path d="M-15 98c170-61 259 44 421 1s289-59 550 15" />
      </g>

      <path
        d="M205 220 454 35l80 76 57-42 188 151Z"
        fill="url(#journey-summit)"
      />
      <path d="m454 35 80 76-38-12-28 31-28-31-34 17Z" fill="#f8fafc" />
      <path
        d="M0 224c130-84 230-58 354-7 148-81 250-80 356 2 64-34 126-39 190-13v54H0Z"
        fill="url(#journey-ridge)"
      />
      <path
        d="M0 240c138-44 258-15 382-6 145-36 313-28 518 8v18H0Z"
        fill="#102f2a"
        opacity="0.82"
      />

      <g fill="#102f2a" opacity="0.82">
        <path d="m90 222 15-42 15 42h-9v18h-12v-18Z" />
        <path d="m145 225 13-36 13 36h-8v16h-10v-16Z" />
        <path d="m790 224 16-44 16 44h-10v17h-12v-17Z" />
        <path d="m842 228 12-34 13 34h-8v14h-10v-14Z" />
      </g>

      <path
        d="M390 246c28-24 58-31 84-50 24-18 14-37 40-50 18-9 31-8 43-21"
        fill="none"
        stroke="#fbbf24"
        strokeDasharray="6 7"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <Flag x="548" y="106" width="22" height="22" color="#fbbf24" />
    </svg>
  );
}

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: JourneyMilestone;
  index: number;
}) {
  const Icon = iconMap[milestone.icon];
  const cardPosition =
    index % 2 === 0
      ? "md:col-start-1 md:text-right"
      : "md:col-start-3 md:text-left";
  const metricPosition =
    index % 2 === 0 ? "md:justify-end" : "md:justify-start";

  return (
    <li className="relative grid min-h-44 grid-cols-[3rem_minmax(0,1fr)] items-center gap-3 md:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] md:gap-5">
      <div
        className={`col-start-2 row-start-1 rounded-2xl border border-emerald-900/10 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900/88 ${cardPosition}`}
      >
        <div
          className={`mb-2 flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-200">
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-mono text-xs font-bold tracking-[0.16em] text-amber-700 dark:text-amber-300">
            {milestone.year}
          </span>
        </div>
        <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-slate-100">
          {milestone.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {milestone.description}
        </p>
        <div
          className={`mt-3 flex flex-wrap items-center gap-1.5 ${metricPosition}`}
        >
          {milestone.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-emerald-800/15 bg-emerald-50/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-900 dark:border-emerald-300/15 dark:bg-emerald-950/70 dark:text-emerald-200"
            >
              {metric}
            </span>
          ))}
        </div>
        <p className="mt-2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 md:justify-[inherit]">
          <MapPin className="h-3 w-3 shrink-0" /> {milestone.location}
        </p>
      </div>

      <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#f4f7f2] bg-blue-900 text-xs font-bold text-white shadow-md ring-2 ring-blue-900/15 dark:border-slate-950 dark:bg-blue-500 dark:text-slate-950 dark:ring-blue-300/20">
          {index + 1}
        </span>
      </div>
    </li>
  );
}

export default function JourneyTrail({ content }: { content: MiscContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
      <CollapsibleTrigger asChild>
        <button
          type="button"
          aria-controls="journey-milestones"
          aria-expanded={isOpen}
          className="group relative min-h-44 w-full overflow-hidden rounded-2xl border border-blue-900/10 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-900/20 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:hover:border-blue-300/25"
        >
          <MountainArtwork />
          <div className="absolute inset-0 bg-gradient-to-r from-white/94 via-white/76 to-white/18 dark:from-slate-950/94 dark:via-slate-950/76 dark:to-slate-950/18" />

          <div className="relative z-10 flex min-h-44 max-w-2xl items-center gap-4 px-5 py-6 sm:px-8">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-900/10 bg-white/75 text-blue-900 shadow-sm backdrop-blur-sm sm:flex dark:border-white/10 dark:bg-slate-900/70 dark:text-blue-200">
              <Mountain className="h-7 w-7" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
                Trail log
              </span>
              <span className="mt-1 block text-lg font-bold leading-snug text-blue-950 sm:text-xl dark:text-blue-100">
                {content.journeyHeading}
              </span>
              <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                {isOpen ? "Hide the trail" : content.journeyHint}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
            </span>
          </div>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent
        id="journey-milestones"
        className="journey-collapsible-content overflow-hidden"
      >
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-blue-50 via-[#f4f7f2] to-emerald-50 px-4 py-8 shadow-inner dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/40 sm:px-6 md:px-8">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-25 dark:opacity-15"
            viewBox="0 0 900 900"
            preserveAspectRatio="none"
          >
            <g fill="none" stroke="#2563eb" strokeWidth="1.2">
              <path d="M-100 90c210-120 380 90 590-15s350-98 540 15" />
              <path d="M-80 125c210-120 380 90 590-15s350-98 540 15" />
              <path d="M-60 160c210-120 380 90 590-15s350-98 540 15" />
              <path d="M-100 740c200-95 365 76 550-18s356-74 530 15" />
              <path d="M-80 775c200-95 365 76 550-18s356-74 530 15" />
              <path d="M-60 810c200-95 365 76 550-18s356-74 530 15" />
            </g>
          </svg>

          <div className="mb-6 text-center">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
              Base camp → summit
            </span>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute bottom-10 left-2 top-10 h-[calc(100%-5rem)] w-10 -translate-x-1/2 md:left-1/2 md:w-24"
              viewBox="0 0 96 760"
              preserveAspectRatio="none"
            >
              <path
                className="journey-route"
                d="M48 0C4 90 89 147 42 245S84 397 45 500s27 174 3 260"
                fill="none"
                stroke="#1e3a8a"
                strokeDasharray="9 10"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>

            <ol className="relative space-y-3">
              {content.milestones.map((milestone, index) => (
                <MilestoneCard
                  key={`${milestone.year}-${milestone.title}`}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </ol>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-900 dark:text-emerald-200">
            <Flag className="h-4 w-4 text-amber-600 dark:text-amber-300" />
            More trails ahead.
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
