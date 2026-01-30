/**
 * Site Configuration File
 * 
 * This file contains all the configurable content for the personal academic homepage.
 * Update this file to modify site content without touching the component code.
 <!-- Cache bust: 2025-11-15 17:06:43 -->
 */

// ===========================
// Personal Information
// ===========================
export const personalInfo = {
  name: "Yibin (Leon) Liu",
  chineseName: "刘艺彬",
  pronouns: "he/him",
  title: "Undergraduate Student",
  university: "Northeastern University",
  location: "Shenyang, China",
  email: "kevin.lau.stu@gmail.com",
  
  // Hero Section
  heroQuote: "Live, travel, adventure, bless, and don't be sorry.",
  heroAttribution: "Jack Kerouac, Desolation Angels",
  
  // About Me
  aboutMe: {
    intro: `I am a senior undergraduate student majoring in Artificial Intelligence at Northeastern University, China. Currently, I have been working as a Research Assistant under the supervision of Prof. Mingyu Ding at UNC-Chapel Hill and Prof. Yao (Mark) Mu at Shanghai Jiao Tong University.`,
    
    researchFocus: `My research lies at the intersection of Language Grounding, Multimodal Reasoning and Planning, and Human-Robot Interaction. I am particularly interested in developing foundation models that ground language and perception in real-world physical understanding, enabling robots to reason, plan, and act effectively in complex environments. Ultimately, my goal is to build embodied agents that learn from real-world interactions, developing causal reasoning and compositional skills for generalizable mobile manipulation.`,
    
    researchInterests: [
      {
        title: "Language Grounding and Spatial Manipulation",
        description: "Connecting structured representations with spatial reasoning and physically grounded robotic actions."
      },
      {
        title: "Multimodal Reasoning and Planning",
        description: "Enabling embodied agents to integrate vision, language, and action for structured decision-making and open-world generalization."
      },
      {
        title: "Human–Robot Collaborative Intelligence",
        description: "Designing interactive systems that support safe and adaptive collaboration between humans and robots in real–simulation hybrid environments."
      }
    ],
    
    goal: `Guided by the principle of creating technology with everyone, for everyone, my research aims to advance accessible, human-centered AI that enhances daily life and broadens equitable access to intelligent systems.`,
    
    lookingFor: "✨ I am looking for a Ph.D. position starting in 2026 Fall. Please feel free to reach out!"
  },
  
  advisors: [
    {
      name: "Prof. Mingyu Ding",
      url: "https://dingmyu.github.io"
    },
    {
      name: "Prof. Yao (Mark) Mu",
      url: "https://yaomarkmu.github.io"
    }
  ]
};

// ===========================
// Images and Assets
// ===========================
export const images = {
  heroBackground: "/assets/tebet3.jpg",
  profileAvatar: "/assets/avatar.jpg",
};

// ===========================
// Social Media Links
// ===========================
export const socialLinks = {
  googleScholar: "https://scholar.google.com/citations?user=WbnbTWoAAAAJ",
  github: "https://github.com/10-OASIS-01",
  linkedin: "https://www.linkedin.com/in/yibin-leon-liu",
  bluesky: "https://bsky.app/profile/yibinleonliu.bsky.social",
  email: "mailto:liuyibin@stumail.neu.edu.cn",
};

// ===========================
// Navigation Menu
// ===========================
export const navigationMenu = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/#publications" },
  { label: "Awards", href: "/#awards" },
  { label: "Misc", href: "/#misc" },
  { label: "Blog", href: "https://yibinleonliu.substack.com", external: true },
  { label: "CV", href: "/assets/Leon_s_CV-20.pdf", external: true },
];


// ===========================
// Publications
// ===========================
export const publications = [
  {
    id: 1,
    authors: "Ganlin Yang, Tianyi Zhang, Haoran Hao, Weiyun Wang, Yibin Liu, Dehui Wang, Guanzhou Chen, Zijian Cai, Junting Chen, Weijie Su, Wengang Zhou, Yu Qiao, Jifeng Dai, Jiangmiao Pang, Gen Luo, Wenhai Wang, Yao Mu†, Zhi Hou†",
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
    id: 2,
    authors: "Tianxing Chen*, Zanxin Chen*, Baijun Chen*, Zijian Cai*, Yibin Liu*, Zixuan Li* ... Ping Luo†, Yao Mu†",
    title: "RoboTwin 2.0: A Scalable Data Generator and Benchmark with Strong Domain Randomization for Robust Bimanual Robotic Manipulation",
    venue: "arXiv 2025, Under Review",
    year: 2025,
    githubStars: "https://img.shields.io/github/stars/RoboTwin-Platform/RoboTwin",
    links: [
      { text: "Paper", url: "https://arxiv.org/pdf/2506.18088" },
      { text: "Webpage", url: "https://robotwin-platform.github.io" },
      { text: "Repo", url: "https://github.com/RoboTwin-Platform/RoboTwin" },
    ],
  },
  {
    id: 3,
    authors: "Xin Tang*, Yibin Liu*, Ruiwen Zhang, Ran Xu, Yanyan Liu, Yuntao Wang, Yuanchun Shi, Haining Zhang, Chun Yu, Nan Gao†",
    title: "EduHome: Leveraging LLMs for Human Behavioural Insights and Strategy Development through Parent–Child Homework Conversations",
    venue: "Under Review",
    year: 2025,
    links: [
      { text: "Paper", url: "https://github.com/10-OASIS-01/10-OASIS-01.github.io/blob/master/assets/Family_educantion_strategy_CHI_2026-2.pdf" },
    ],
  },
  {
    id: 4,
    authors: "Nan Gao†, Yibin Liu, Xin Tang, Yanyan Liu, Chun Yu, Yun Huang, Yuntao Wang, Flora D. Salim, Xuhai Orson Xu, Jun Wei, Yuanchun Shi",
    title: "The Homework Wars: Exploring Emotions, Behaviours, and Conflicts in Parent-Child Homework Interactions",
    venue: "ACM IMWUT/UbiComp 2025",
    year: 2025,
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2502.01325v2" },
    ],
  },
  {
    id: 5,
    authors: "Yibin Liu*, Zhixuan Liang*, Zanxing Chen*, Tianxing Chen, Mengkang Hu, Wanxi Dong, Congsheng Xu, Zhaoming Han, Yusen Qin, Yao Mu†",
    title: "HyCodePolicy: Hybrid Language Controllers for Multimodal Monitoring and Decision in Embodied Agents",
    venue: "ICCV 2025 Workshop on Multi-Modal Reasoning for Agentic Intelligence",
    year: 2025,
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2508.02629" },
      { text: "Code", url: "https://robotwin-platform.github.io/doc/usage/expert-code-gen.html" },
    ],
  },
  {
    id: 6,
    authors: "Yibin Liu, Zhenghao Liu†, Yukun Yan, Shi Yu, Shuo Wang, Liner Yang, Yu Gu, Ge Yu, Huimin Chen",
    title: "Self-Guide: A LLM Reasoning Enhancement Method Based on Self-Guided Planning",
    venue: "CCL 2024 / Journal of Chinese Information Processing",
    year: 2024,
    links: [
      { text: "Paper EN", url: "https://github.com/10-OASIS-01/10-OASIS-01.github.io/blob/master/assets/_CCL2024__Self_Guide__A_LLM_Reasoning_Enhancement_Method_Based_on_Self_Guided_Planning_EN_-4.pdf" },
      { text: "Paper CN", url: "https://aclanthology.org/2024.ccl-1.67/" },
      { text: "Code", url: "https://github.com/NEUIR/Self-Guide" },
    ],
  },
];

// ===========================
// Research Experiences
// ===========================
export const researchExperiences = [
  {
    id: 1,
    title: "University of North Carolina at Chapel Hill – Research Intern",
    period: "Advisor: Prof. Mingyu Ding",
    advisorLinks: [
      { name: "Prof. Mingyu Ding", url: "https://dingmyu.github.io/" }
    ],
    location: "Remote / Chapel Hill, NC, USA",
    duration: "June 2025 – Present"
  },
  {
    id: 2,
    title: "Shanghai Jiao Tong University – Research Assistant",
    period: "Advisor: Prof. Yao (Mark) Mu",
    advisorLinks: [
      { name: "Prof. Yao (Mark) Mu", url: "https://yaomarkmu.github.io/" }
    ],
    location: "Onsite / Shanghai, China",
    duration: "March 2025 – Present"
  },
  {
    id: 3,
    title: "Tsinghua University – Pervasive HCI Lab – Research Assistant",
    titleLink: "https://pi.cs.tsinghua.edu.cn/",
    period: "Advisor: Prof. Nan Gao, Prof. Chun Yu",
    advisorLinks: [
      { name: "Prof. Nan Gao", url: "https://nancygao.com/" },
      { name: "Prof. Chun Yu", url: "https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" }
    ],
    location: "Onsite / Beijing, China",
    duration: "June 2024 – January 2025"
  },
];

// ===========================
// Industry Experiences
// ===========================
export const industryExperiences = [
  {
    id: 1,
    title: "Horizon Robotics – Cloud Platform Intern",
    period: "Mentor: Yusen Qin (VP of Technology, D-Robotics)",
    mentorLink: "https://www.linkedin.com/in/yusen-qin-5b23345b/?originalSubdomain=cn",
    location: "Beijing, China",
    duration: "June 2025 – Present"
  },
];

// ===========================
// Talks
// ===========================
export const talks = [
  {
    id: 1,
    date: "2024.08",
    title: "Retrieval-Augmented Generation Modeling",
    event: "Mingtong Weilai (Beijing) Digital Health Science & Technology Research Institute",
    location: ""
  },
];

// ===========================
// Academic Service
// ===========================
export const academicService = [
  {
    id: 1,
    role: "Co-Founder of VapourX",
    description: "an open community for embodied AI beginners, enthusiasts, and researchers.",
    descriptionLink: "https://vapour-x.cn",
    linkText: "VapourX"
  },
  {
    id: 2,
    role: "Student Committee",
    description: "of TriFusion Workshop @ SIGGRAPH Asia 2025 — Towards Embodied Intelligence Across Humans, Avatars, and Humanoid Robotics (responsible for workshop email communications).",
    descriptionLink: "https://sa2025.siggraph.org/"
  },
  {
    id: 3,
    role: "Contributor",
    description: "of Embodied-AI-Guide GitHub repo.",
    descriptionLink: "https://github.com/TianxingChen/Embodied-AI-Guide",
    githubBadge: "https://img.shields.io/github/stars/TianxingChen/Embodied-AI-Guide",
    linkText: "Embodied-AI-Guide"
  },
  {
    id: 4,
    role: "Reviewer",
    description: "for CHI 2025, Chinese CHI 2024."
  },
];

// ===========================
// Awards
// ===========================
export const awards = [
  {
    id: 1,
    year: "2025-07",
    title: "Outstanding Poster at ChinaSI 2025 (Ranking 1st among 61 posters, RoboTwin 2.0)."
  },
  {
    id: 2,
    year: "2024-11",
    title: "Outstanding Individual in Technological Innovation of Northeastern University."
  },
  {
    id: 3,
    year: "2024-05",
    title: "Finalist of Mathematical Contest in Modeling (MCM/ICM 2024, Top 1.69% in 10,387 teams)."
  },
  {
    id: 4,
    year: "2023-11",
    title: "Future Technology Taihu Scholarship."
  },
  {
    id: 5,
    year: "2023-10",
    title: "National Level Third Prize in 2023 RoboCup China Competition Simulation 3D League Simulation (RoboCup 2023)."
  },
  {
    id: 6,
    year: "2023-10",
    title: "National Level Second Prize in 2023 FIRA SimuroSot China Competition (RoboCup 2023)."
  },
  {
    id: 7,
    year: "2023-09",
    title: "Excellent Student Scholarship in Northeastern University."
  },
];

// ===========================
// Projects
// ===========================
export const projects = [
  {
    id: 1,
    title: "RDK Copilot: LLM-powered Development Copilot for Robotics at Horizon Robotics",
    description: "Developed and deployed a VSCode plugin that assists robotic system development using LLMs. Supported features include automatic coding, environment setup, code completion, test generation, code explanation, and manipulation data acquisition.",
    link: "https://zhuanlan.zhihu.com/p/967513363"
  },
  {
    id: 2,
    title: "MinRL: Minimal, Clean Code for Reinforcement Learning",
    description: "Recognized and pinned by MathFoundationRL, the most popular RL course on Chinese platforms, under \"Third-party code and materials.\"",
    githubStars: "https://img.shields.io/github/stars/10-OASIS-01/minrl",
    link: "https://github.com/10-OASIS-01/minrl"
  },
  {
    id: 3,
    title: "Bencao RAG Medical Intelligent Assistant",
    description: "Developed a medical knowledge question-answering system that integrates context awareness, internet access, knowledge graphs, and RAG method to provide accurate and personalized medical information.",
    githubStars: "https://img.shields.io/github/stars/10-OASIS-01/BenCao_RAG",
    link: "https://github.com/10-OASIS-01/BenCao_RAG"
  },
];

// ===========================
// Technologies / Skills
// ===========================
export const technologies = {
  languages: "Python, C++, C, HTML/CSS, JavaScript, Swift, SQL, MATLAB/Simulink, LaTeX",
  technologies: "PyTorch, Hugging Face, scikit-learn, ROS, Isaac Sim, MuJoCo, OpenCV, NumPy, Git, Linux, iOS Development (SwiftUI, UIKit, ARKit)"
};

// ===========================
// Theme Configuration
// ===========================
export const themeConfig = {
  colors: {
    primary: "blue-900",
    secondary: "blue-800",
    accent: "blue-700",
    text: "gray-900",
    textLight: "gray-700",
    background: "gray-50",
    backgroundDark: "gray-900",
  },
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    mono: "'Courier New', Courier, monospace",
  },
};
