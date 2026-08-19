import type { MiscContent } from "./types";

export const misc: MiscContent = {
  intro:
    "In my free time, I enjoy hiking, running, and playing tennis. I also love exploring great food, coffee, and drinks. Beyond that, I genuinely enjoy spending time with animals — well, most of them :)",
  journeyHeading: "A few milestones I’ve completed along my journey so far.",
  journeyHint: "Click the mountain to reveal the trail",
  milestones: [
    {
      year: 2022,
      title: "45 Days on the Tibetan Plateau",
      description:
        "Traveled solo across the Tibetan Plateau for 45 days at age 18, reaching elevations above 5,000 m — still my favorite place in China.",
      location: "Tibetan Plateau, China",
      metrics: ["Age 18", "45 days", "5,000 m+"],
      icon: "plateau",
    },
    {
      year: 2025,
      title: "First Half Marathon",
      description: "Completed my first half marathon in Shenyang, China.",
      location: "Shenyang, China",
      metrics: ["21.1 km"],
      icon: "run",
    },
    {
      year: 2025,
      title: "First 20 km+ Hike",
      description:
        "Completed my first 20 km+ hike on the MacLehose Trail in Hong Kong.",
      location: "MacLehose Trail, Hong Kong",
      metrics: ["20 km+"],
      icon: "hike",
    },
    {
      year: 2026,
      title: "First 5,000 m+ Snow Mountain",
      description:
        "Summited the 5,276 m Second Peak of Mount Siguniang in western Sichuan, China.",
      location: "Mount Siguniang, Western Sichuan, China",
      metrics: ["5,276 m", "First snow summit"],
      icon: "summit",
    },
  ],
};
