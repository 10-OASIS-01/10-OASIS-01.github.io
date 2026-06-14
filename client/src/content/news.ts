/**
 * News / updates. Listed newest-first in the UI (sorted by `date`); the page
 * shows the 5 most recent and collapses the rest behind a toggle.
 *
 * Use RichText segments to link paper / company / school names.
 */
import type { NewsItem } from "./types";

export const news: NewsItem[] = [
  {
    id: 1,
    date: "2026-01",
    content: [
      { text: "Vlaser", url: "https://internvl.github.io/blog/2025-10-11-Vlaser/" },
      " was accepted to ICLR 2026.",
    ],
  },
  {
    id: 2,
    date: "2026-03",
    content: [
      "Started my internship at ",
      { text: "Robbyant", url: "https://technology.robbyant.com/" },
      ".",
    ],
  },
  {
    id: 3,
    date: "2026-04",
    content: [
      { text: "RoboTwin 2.0", url: "https://robotwin-platform.github.io" },
      " was accepted to ICML 2026.",
    ],
  },
];
