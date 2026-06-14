/**
 * Talks, academic service, and awards.
 *
 * Academic-service descriptions use RichText so inline links are declared as
 * data segments rather than reconstructed by splitting the text at runtime.
 */
import type { AcademicService, Award, Talk } from "./types";

export const talks: Talk[] = [
  {
    id: 1,
    date: "2024.08",
    title: "Retrieval-Augmented Generation Modeling",
    event:
      "Mingtong Weilai (Beijing) Digital Health Science & Technology Research Institute",
    location: "",
  },
];

export const academicService: AcademicService[] = [
  {
    id: 1,
    role: "Co-Founder of VapourX",
    description: [
      { text: "VapourX", url: "https://vapour-x.cn" },
      ", an open community for embodied AI beginners, enthusiasts, and researchers.",
    ],
  },
  {
    id: 2,
    role: "Student Committee",
    description: [
      "of ",
      { text: "TriFusion Workshop @ SIGGRAPH Asia 2025", url: "https://sa2025.siggraph.org/" },
      " — Towards Embodied Intelligence Across Humans, Avatars, and Humanoid Robotics (responsible for workshop email communications).",
    ],
  },
  {
    id: 3,
    role: "Contributor",
    description: [
      "of ",
      { text: "Embodied-AI-Guide", url: "https://github.com/TianxingChen/Embodied-AI-Guide" },
      " GitHub repo.",
    ],
    githubBadge: "https://img.shields.io/github/stars/TianxingChen/Embodied-AI-Guide",
  },
  {
    id: 4,
    role: "Reviewer",
    description: ["for CHI 2025, Chinese CHI 2024."],
  },
];

export const awards: Award[] = [
  {
    id: 1,
    year: "2025-07",
    title:
      "Outstanding Poster at ChinaSI 2025 (Ranking 1st among 61 posters, RoboTwin 2.0).",
  },
  {
    id: 2,
    year: "2024-11",
    title:
      "Outstanding Individual in Technological Innovation of Northeastern University.",
  },
  {
    id: 3,
    year: "2024-05",
    title:
      "Finalist of Mathematical Contest in Modeling (MCM/ICM 2024, Top 1.69% in 10,387 teams).",
  },
  {
    id: 4,
    year: "2023-11",
    title: "Future Technology Taihu Scholarship.",
  },
  {
    id: 5,
    year: "2023-10",
    title:
      "National Level Third Prize in 2023 RoboCup China Competition Simulation 3D League Simulation (RoboCup 2023).",
  },
  {
    id: 6,
    year: "2023-10",
    title:
      "National Level Second Prize in 2023 FIRA SimuroSot China Competition (RoboCup 2023).",
  },
  {
    id: 7,
    year: "2023-09",
    title: "Excellent Student Scholarship in Northeastern University.",
  },
];
