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
    logo: {
      src: "/assets/organizations/unc.svg",
      alt: "University of North Carolina at Chapel Hill logo",
    },
    location: "Remote / Chapel Hill, NC, USA",
    duration: "June 2025 – March 2026",
    advisors: [
      { name: "Prof. Mingyu Ding", url: "https://dingmyu.github.io/" },
    ],
  },
  {
    id: 2,
    title: "Shanghai Jiao Tong University – Research Assistant",
    logo: {
      src: "/assets/organizations/sjtu.png",
      alt: "Shanghai Jiao Tong University logo",
    },
    location: "Onsite / Shanghai, China",
    duration: "March 2025 – Jan 2026",
    advisors: [
      { name: "Prof. Yao (Mark) Mu", url: "https://yaomarkmu.github.io/" },
    ],
  },
  {
    id: 3,
    title: "Tsinghua University – Pervasive HCI Lab – Research Assistant",
    logo: {
      src: "/assets/organizations/tsinghua.png",
      alt: "Tsinghua University logo",
    },
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
    id: 3,
    role: "TGT Intern",
    org: {
      name: "Joy Future Academy",
      url: "https://research.joyai.com/career",
    },
    parentOrg: { name: "JD.COM" },
    parentOrgPrefix: "",
    logo: {
      src: "/assets/organizations/jd-joyai.png",
      alt: "Joy Future Academy, JD.COM logo",
    },
    employmentType: "Internship",
    highlights: [
      "I am a Tech Genius Team Intern (TGT) at Joy Future Academy, JD.COM. Working on compositional generation for long-horizon manipulation and mobile manipulation.",
    ],
    location: "Shenzhen, Guangdong, China · On-site",
    duration: "Aug 2026 – Present · 1 mo",
  },
  {
    id: 1,
    role: "Research Intern",
    logo: {
      src: "/assets/organizations/robbyant.png",
      alt: "Robbyant logo",
    },
    org: { name: "Robbyant", url: "https://technology.robbyant.com/" },
    parentOrg: {
      name: "Ant Group",
      url: "https://www.antgroup.com/en/technology/",
    },
    highlights: [
      "Focus: Large-scale Foundation Models for mobile manipulation, including VLA pre-training, post-training, real-robot deployment, and automated benchmark verification.",
    ],
    location: "Shanghai, China",
    duration: "March 2026 – Present",
  },
  {
    id: 2,
    role: "Robotics Agent intern",
    logo: {
      src: "/assets/organizations/horizon.png",
      alt: "Horizon Robotics logo",
    },
    org: { name: "Horizon Robotics", url: "https://www.horizon.auto/" },
    parentOrg: { name: "D-Robotics", url: "https://en.d-robotics.cc/" },
    parentOrgOpen: "（",
    parentOrgPrefix: "",
    parentOrgClose: "）",
    titleSeparator: "- ",
    highlights: [
      "Developing the RDK-agent, building an LLM-powered Copilot for robotics development.",
    ],
    location: "Beijing, China · Hybrid",
    duration: "June 2025 – Jan 2026",
  },
];
