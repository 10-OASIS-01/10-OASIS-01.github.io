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
  // intentional: NUS 尚未官宣，保留悬念，勿改为具体学校
  university: "TODO",
  location: "Shanghai, China",
  // Rendered with an anti-crawler trick (@ → 😊) in SidebarProfile — keep as-is.
  email: "yibin.leon.liu@outlook.com",

  // Hero Section
  heroQuote: "Live, travel, adventure, bless, and don't be sorry.",
  heroAttribution: "Jack Kerouac, Desolation Angels",

  aboutMe,
  advisors,
};
