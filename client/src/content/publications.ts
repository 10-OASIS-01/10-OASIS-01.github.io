/**
 * Publications. `*`: equal contribution; `†`: corresponding author.
 * "Yibin Liu" in the authors string is auto-bolded by the renderer.
 */
import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    id: 7,
    authors: "Robbyant Team",
    title:
      "LingBot-VLA 2.0: From Foundation to Application, Improving VLA Models in Practice",
    venue: "Technical Report",
    year: 2026,
    contribution:
      "Contribute to integrating mobile manipulation ability into Lingbot-VLA",
    links: [
      { text: "Project Page", url: "https://technology.robbyant.com/lingbot-vla-v2" },
      { text: "Paper", url: "https://arxiv.org/abs/2607.06403" },
      {
        text: "Model",
        url: "https://huggingface.co/collections/robbyant/lingbot-vla-v2",
      },
    ],
  },
  {
    id: 1,
    authors:
      "Yibin Liu*, Yaxing Lyu*, Daqi Gao*, Zhixuan Liang, Weiliang Tang, Shilong Mu, Xiaokang Yang, Yao Mu†",
    title:
      "From Passive Observer to Active Critic: Reinforcement Learning Elicits Process Reasoning for Robotic Manipulation (PRIMO R1)",
    venue: "ECCV 2026",
    year: 2026,
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2603.15600" },
      { text: "Project Page", url: "https://10-oasis-01.github.io/primo-r1-website/" },
      {
        text: "Model/Dataset",
        url: "https://huggingface.co/collections/LeonOverload/primo-r1",
      },
    ],
  },
  {
    id: 4,
    authors:
      "Yuhao Zhang, Wanxi Dong, Yue Shi, Yi Liang, Jingnan Gao, Qiaochu Yang, Yaxing Lyu, Zhixuan Liang, Yibin Liu, Congsheng Xu, Xianda Guo, Wei Sui, Yaohui Jin, Xiaokang Yang, Yanyan Xu, Yao Mu",
    title: "R3DP: Real-Time 3D-Aware Policy for Embodied Manipulation",
    venue: "ECCV 2026",
    year: 2026,
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2603.14498" },
      { text: "Project Page", url: "https://dazazh.github.io/r3dp-project-page/" },
    ],
  },
  {
    id: 2,
    authors:
      "Ganlin Yang, Tianyi Zhang, Haoran Hao, Weiyun Wang, Yibin Liu, Dehui Wang, Guanzhou Chen, Zijian Cai, Junting Chen, Weijie Su, Wengang Zhou, Yu Qiao, Jifeng Dai, Jiangmiao Pang, Geng Zhang†",
    title: "Vlaser: Vision-Language-Action Model with Synergistic Embodied Reasoning",
    venue: "ICLR 2026",
    year: 2025,
    githubStars: "https://img.shields.io/github/stars/OpenGVLab/Vlaser",
    links: [
      { text: "Paper", url: "https://arxiv.org/pdf/2510.11027" },
      { text: "Code", url: "https://github.com/OpenGVLab/Vlaser?tab=readme-ov-file" },
      { text: "Webpage", url: "https://internvl.github.io/blog/2025-10-11-Vlaser/" },
    ],
  },
  {
    id: 3,
    authors:
      "Tianxing Chen*, Zanxin Chen*, Baijun Chen*, Zijian Cai*, Yibin Liu*, Zixuan Li* ... Ping Luo†, Yao Mu†",
    title:
      "RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation",
    venue: "ICML 2026",
    year: 2026,
    githubStars: "https://img.shields.io/github/stars/RoboTwin-Platform/RoboTwin",
    links: [
      { text: "Paper", url: "https://arxiv.org/pdf/2506.18088" },
      { text: "Webpage", url: "https://robotwin-platform.github.io" },
      { text: "Repo", url: "https://github.com/RoboTwin-Platform/RoboTwin" },
    ],
  },
  {
    id: 5,
    authors:
      "Nan Gao†, Yibin Liu, Xin Tang, Yanyan Liu, Chun Yu, Yun Huang, Yuntao Wang, Flora D. Salim, Xuhai Orson Xu, Jun Wei, Yuanchun Shi",
    title:
      "The Homework Wars: Exploring Emotions, Behaviours, and Conflicts in Parent-Child Homework Interactions",
    venue: "ACM IMWUT/UbiComp 2025 [Rank A*, CCF A]",
    year: 2025,
    links: [{ text: "Paper", url: "https://arxiv.org/abs/2502.01325v2" }],
  },
  {
    id: 6,
    authors:
      "Yibin Liu*, Zhixuan Liang*, Zanxing Chen*, Tianxing Chen, Mengkang Hu, Wanxi Dong, Congsheng Xu, Zhaoming Han, Yusen Qin, Yao Mu†",
    title:
      "HyCodePolicy: Hybrid Language Controllers for Multimodal Monitoring and Decision in Embodied Agents",
    venue: "ICCV 2025 Workshop on Multi-Modal Reasoning for Agentic Intelligence",
    year: 2025,
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2508.02629" },
      {
        text: "Code",
        url: "https://robotwin-platform.github.io/doc/usage/expert-code-gen.html",
      },
    ],
  },
];
