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
  researchFocus: `My research lies at the intersection of Language Grounding, Multimodal Reasoning and Planning, and Human-Robot Interaction. I am particularly interested in developing foundation models that ground language and perception in real-world physical understanding, enabling robots to reason, plan, and act effectively in complex environments. Ultimately, my goal is to build embodied agents that learn from real-world interactions, developing causal reasoning and compositional skills for generalizable mobile manipulation.`,
  researchInterests: [
    {
      title: "Language Grounding and Spatial Manipulation",
      description:
        "Connecting structured representations with spatial reasoning and physically grounded robotic actions.",
    },
    {
      title: "Multimodal Reasoning and Planning",
      description:
        "Enabling embodied agents to integrate vision, language, and action for structured decision-making and open-world generalization.",
    },
    {
      title: "Human–Robot Collaborative Intelligence",
      description:
        "Designing interactive systems that support safe and adaptive collaboration between humans and robots in real–simulation hybrid environments.",
    },
  ],
  goal: `Guided by the principle of creating technology with everyone, for everyone, my research aims to advance accessible, human-centered AI that enhances daily life and broadens equitable access to intelligent systems.`,
};
