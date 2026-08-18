import type { IconType } from "react-icons";
import {
  SiAngular,
  SiClaude,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGitlab,
  SiGooglechrome,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { LuBraces, LuCircleHelp } from "react-icons/lu";

export interface TechData {
  id: number;
  name: string;
  logo: IconType;
  color: string;
  lottie: string;
  mastery: number;
  familiarity: number;
  favorability: number;
  mobileHidden?: boolean;
}

export const techStack: TechData[] = [
  { id: 1,  name: "Figma",       logo: SiFigma,       color: "#F24E1E",    lottie: "", mastery: 7, familiarity: 8,  favorability: 7 },
  { id: 2,  name: "Kotlin",      logo: SiKotlin,      color: "#7F52FF",    lottie: "", mastery: 6, familiarity: 7,  favorability: 7 },
  { id: 3,  name: "Flutter",     logo: SiFlutter,     color: "#54C5F8",    lottie: "", mastery: 9, familiarity: 9,  favorability: 9 },
  { id: 4,  name: "React",       logo: SiReact,       color: "#61DAFB",    lottie: "", mastery: 9, familiarity: 10, favorability: 9 },
  { id: 5,  name: "Angular",     logo: SiAngular,     color: "#DD0031",    lottie: "", mastery: 6, familiarity: 7,  favorability: 6 },
  { id: 6,  name: "Next.js",     logo: SiNextdotjs,   color: "#D1D5DB",    lottie: "", mastery: 8, familiarity: 9,  favorability: 8 },
  { id: 7,  name: "TypeScript",  logo: SiTypescript,  color: "#3178C6",    lottie: "", mastery: 7, familiarity: 8,  favorability: 9 },
  { id: 8,  name: "Python",      logo: SiPython,      color: "#3776AB",    lottie: "", mastery: 7, familiarity: 8,  favorability: 7 },
  { id: 9,  name: "Java",        logo: SiOpenjdk,     color: "#F89820",    lottie: "", mastery: 6, familiarity: 7,  favorability: 6 },
  { id: 10, name: "PostgreSQL",  logo: SiPostgresql,  color: "#4169E1",    lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
  { id: 11, name: "Tailwind",    logo: SiTailwindcss, color: "#38BDF8",    lottie: "", mastery: 8, familiarity: 9,  favorability: 7 },
  { id: 12, name: "Node.js",     logo: SiNodedotjs,   color: "#339933",    lottie: "", mastery: 7, familiarity: 8,  favorability: 8 },
  { id: 13, name: "Vue.js",      logo: SiVuedotjs,    color: "#4FC08D",    lottie: "", mastery: 6, familiarity: 7,  favorability: 7 },
  { id: 14, name: "JavaScript",  logo: SiJavascript,  color: "#F7DF1E",    lottie: "", mastery: 9, familiarity: 10, favorability: 9 },
  { id: 15, name: "HTML",        logo: SiHtml5,       color: "#E34F26",    lottie: "", mastery: 8, familiarity: 9,  favorability: 8 },
  { id: 16, name: "Git",         logo: SiGit,         color: "#F05032",    lottie: "", mastery: 8, familiarity: 9,  favorability: 8 },
  { id: 17, name: "Docker",      logo: SiDocker,      color: "#2496ED",    lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
  { id: 18, name: "Claude",      logo: SiClaude,      color: "#D97757",    lottie: "", mastery: 6, familiarity: 7,  favorability: 7 },
  { id: 19, name: "REST API",    logo: LuBraces,      color: "#8B5CF6",    lottie: "", mastery: 7, familiarity: 8,  favorability: 7 },
  { id: 20, name: "Plasmo",      logo: SiGooglechrome,color: "#E5E7EB",    lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
  { id: 21, name: "Nuxt.js",     logo: SiNuxt,        color: "#00DC82",    lottie: "", mastery: 6, familiarity: 7,  favorability: 7 },
  { id: 22, name: "Play Store",  logo: SiGoogleplay,  color: "#00D4FF",    lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
  { id: 23, name: "Supabase",    logo: SiSupabase,    color: "#3ECF8E",    lottie: "", mastery: 5, familiarity: 6,  favorability: 6 },
  { id: 24, name: "GitLab",      logo: SiGitlab,      color: "#FC6D26",    lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
  { id: 25, name: "More?",       logo: LuCircleHelp,  color: "#F59E0B",    lottie: "", mastery: 5, familiarity: 5,  favorability: 5, mobileHidden: true },
];