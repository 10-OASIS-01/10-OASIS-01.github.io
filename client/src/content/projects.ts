/**
 * Open-source / side projects and the skills list.
 */
import type { Project, Technologies } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title:
      "RDK Copilot: LLM-powered Development Copilot for Robotics at Horizon Robotics",
    description:
      "Developed and deployed a VSCode plugin that assists robotic system development using LLMs. Supported features include automatic coding, environment setup, code completion, test generation, and documentation assistance.",
    link: "https://zhuanlan.zhihu.com/p/967513363",
  },
  {
    id: 2,
    title: "MinRL: Minimal, Clean Code for Reinforcement Learning",
    description:
      'Recognized and pinned by MathFoundationRL, the most popular RL course on Chinese platforms, under "Third-party code and materials."',
    githubStars: "https://img.shields.io/github/stars/10-OASIS-01/minrl",
    link: "https://github.com/10-OASIS-01/minrl",
  },
  {
    id: 3,
    title: "Bencao RAG Medical Intelligent Assistant",
    description:
      "Developed a medical knowledge question-answering system that integrates context awareness, internet access, knowledge graphs, and RAG method to provide accurate and personalized medical knowledge.",
    githubStars: "https://img.shields.io/github/stars/10-OASIS-01/BenCao_RAG",
    link: "https://github.com/10-OASIS-01/BenCao_RAG",
  },
];

export const technologies: Technologies = {
  languages:
    "Python, C++, C, HTML/CSS, JavaScript, Swift, SQL, MATLAB/Simulink, LaTeX",
  technologies:
    "PyTorch, Hugging Face, scikit-learn, ROS, Isaac Sim, MuJoCo, OpenCV, NumPy, Git, Linux, iOS Development (SwiftUI, UIKit, ARKit)",
};
