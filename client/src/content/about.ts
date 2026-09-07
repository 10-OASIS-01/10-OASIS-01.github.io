/**
 * About Me section: intro paragraph, research focus, interests, and goal.
 *
 * The advisor link in `intro` is declared explicitly as a RichText segment —
 * no runtime text searching. To change the linked name, edit the segment below.
 */
import type { AboutMe, Org } from "./types";

export const outreachNote = {
  introduction:
    "I’m always happy to connect and collaborate with people from all backgrounds.",
  invitation: "I’m especially glad to support students from",
  term: "underrepresented groups",
  closing: "so feel free to reach out for a chat about life, career plans, or research. 👋 🤗",
  definition:
    "Including, but not limited to, people with marginalized identities, gender, racial, and ethnic minorities, and people from economically disadvantaged backgrounds.",
};

/** Advisors (the first is linked in the intro below). */
export const advisors: Org[] = [
  { name: "Prof. Weiyu Liu", url: "https://www.weiyuliu.com/" },
  { name: "Prof. Kenneth Marino", url: "https://kennethmarino.com/" },
  { name: "Prof. Mingyu Ding", url: "https://dingmyu.github.io" },
  { name: "Prof. Yao (Mark) Mu", url: "https://yaomarkmu.github.io" },
];

export const aboutMe: AboutMe = {
  intro: [
    "I am an incoming Ph.D. student at the ",
    { text: "School of Computing", url: "https://www.comp.nus.edu.sg/" },
    ", ",
    {
      text: "National University of Singapore",
      url: "https://www.nus.edu.sg/",
    },
    ", starting in Spring 2027 under the supervision of Presidential Young Professor ",
    { text: "Prof. Weiyu Liu", url: "https://www.weiyuliu.com/" },
    ". I received my B.Eng. in Artificial Intelligence from Northeastern University, China.",
  ],
  researchFocus:
    "My long-term goal is to build agentic robots that learn from real-world interaction and transfer their knowledge reliably across new tasks, objects, and environments. My research connects three directions:",
  researchInterests: [
    {
      title: "Lifelong and Compositional Robot Learning",
      description:
        "Learning reusable skills and world knowledge that robots can combine to solve new tasks without retraining from scratch.",
    },
    {
      title: "Uncertainty-Aware Multimodal Reasoning and Planning",
      description:
        "Combining vision, language, memory, and action to plan over long horizons, gather information, and recover from failures.",
    },
    {
      title: "Grounded Program Synthesis for Embodied Agents",
      description:
        "Turning language, observations, demonstrations, and interaction into structured, interpretable programs that robots can execute.",
    },
  ],
};
