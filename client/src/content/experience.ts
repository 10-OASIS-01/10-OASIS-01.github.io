/**
 * Research and industry experience.
 *
 * Industry entries use structured `org` / `parentOrg` / `mentor` fields so the
 * renderer can build links directly — no splitting the title on " – " or
 * stripping a "Mentor: " prefix at runtime.
 */
import type { IndustryExperience, ResearchExperience } from "./types";

export const researchExperiences: ResearchExperience[] = [
  {
    id: 1,
    title: "University of North Carolina at Chapel Hill – Research Intern",
    location: "Remote / Chapel Hill, NC, USA",
    duration: "June 2025 – March 2026",
    advisors: [{ name: "Prof. Mingyu Ding", url: "https://dingmyu.github.io/" }],
  },
  {
    id: 2,
    title: "Shanghai Jiao Tong University – Research Assistant",
    location: "Onsite / Shanghai, China",
    duration: "March 2025 – Jan 2026",
    advisors: [{ name: "Prof. Yao (Mark) Mu", url: "https://yaomarkmu.github.io/" }],
  },
  {
    id: 3,
    title: "Tsinghua University – Pervasive HCI Lab – Research Assistant",
    titleLink: "https://pi.cs.tsinghua.edu.cn/",
    location: "Onsite / Beijing, China",
    duration: "June 2024 – January 2025",
    advisors: [
      { name: "Prof. Nan Gao", url: "https://nancygao.com/" },
      {
        name: "Prof. Chun Yu",
        url: "https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/",
      },
    ],
  },
];

export const industryExperiences: IndustryExperience[] = [
  {
    id: 1,
    role: "Research Intern",
    org: { name: "Robbyant", url: "https://technology.robbyant.com/" },
    parentOrg: { name: "Ant Group", url: "https://www.antgroup.com/en/technology/" },
    highlights: [
      "Focus: Large-scale Foundation Models for mobile manipulation, including VLA pre-training, post-training, real-robot deployment, and automated benchmark verification.",
    ],
    location: "Shanghai, China",
    duration: "March 2026 – Present",
  },
  {
    id: 2,
    role: "Cloud Platform Intern",
    org: { name: "Horizon Robotics" },
    mentor: {
      name: "Yusen Qin (VP of Technology, D-Robotics)",
      url: "https://www.linkedin.com/in/yusen-qin-5b23345b/?originalSubdomain=cn",
    },
    highlights: [
      "Developing the RDK-agent, building an LLM-powered Copilot for robotics development.",
    ],
    location: "Beijing, China · Hybrid",
    duration: "June 2025 – Jan 2026",
  },
];
