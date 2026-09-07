/**
 * Core personal information: name, title, affiliation, hero quote.
 * The About Me content lives in `./about` and is composed in here.
 */
import type { PersonalInfo } from "./types";
import { aboutMe, advisors } from "./about";

export const personalInfo: PersonalInfo = {
  name: "Yibin (Leon) Liu",
  chineseName: "刘艺彬",
  pronouns: "he/him",
  title: "Incoming PhD Student",
  heroSummary: "I study how robots learn, reason, and act in an open world.",
  arrival: "Spring 2027",
  currentRole: [
    "Currently a Tech Genius Team Intern (TGT) at ",
    {
      text: "Joy Future Academy, JD.COM",
      url: "https://research.joyai.com/career",
    },
    ", working on compositional generation for long-horizon and mobile manipulation.",
  ],
  university: "National University of Singapore",
  location: "Shenzhen, China",
  email: "yibin.leon.liu😊outlook.com",

  // Hero Section
  heroQuote: "Live, travel, adventure, bless, and don't be sorry.",
  heroAttribution: "Jack Kerouac, Desolation Angels",

  aboutMe,
  advisors,
};
