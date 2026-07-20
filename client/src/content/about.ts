/**
 * About Me section: intro paragraph, research focus, interests, and goal.
 *
 * The advisor link in `intro` is declared explicitly as a RichText segment —
 * no runtime text searching. To change the linked name, edit the segment below.
 */
import type { AboutMe, Org } from "./types";

/** Advisors (the first is linked in the intro below). */
export const advisors: Org[] = [
  { name: "Prof. Weiyu Liu", url: "https://www.weiyuliu.com/" },
  { name: "Prof. Kenneth Marino", url: "https://kennethmarino.com/" },
  { name: "Prof. Mingyu Ding", url: "https://dingmyu.github.io" },
  { name: "Prof. Yao (Mark) Mu", url: "https://yaomarkmu.github.io" },
];

export const aboutMe: AboutMe = {
  intro: [
    "I received my B.Eng. in Artificial Intelligence from Northeastern University, China. I am currently a Research Intern at ",
    { text: "Robbyant", url: "https://technology.robbyant.com/" },
    " (part of ",
    { text: "Ant Group", url: "https://www.antgroup.com/en/technology/" },
    "), where I work on large-scale foundation models for mobile manipulation. Starting in Fall 2026, I will begin my Ph.D. under the supervision of ",
    { text: "Prof. Weiyu Liu", url: "https://www.weiyuliu.com/" },
    ".",
  ],
  researchFocus: `My research focuses on lifelong and compositional robot learning, uncertainty-aware multimodal reasoning and planning, and grounded program synthesis for open-world mobile manipulation. My long-term goal is to build agentic robots that learn from real-world interaction and reliably transfer their knowledge across novel tasks, objects, and environments.`,
  researchInterests: [
    {
      title: "Lifelong and Compositional Robot Learning",
      description:
        "Developing embodied agents that continually acquire reusable skills, abstractions, and world knowledge, and compositionally recombine prior experience to solve novel tasks without retraining from scratch.",
    },
    {
      title: "Uncertainty-Aware Multimodal Reasoning and Planning",
      description:
        "Integrating vision, language, memory, and action to support physical reasoning, active information gathering, long-horizon planning, replanning, and failure recovery in partially observed open-world environments.",
    },
    {
      title: "Grounded Program Synthesis for Embodied Agents",
      description:
        "Learning structured and interpretable task and action programs from language, visual observations, demonstrations, and interaction, and grounding these programs into executable robot behaviors.",
    },
  ],
};
