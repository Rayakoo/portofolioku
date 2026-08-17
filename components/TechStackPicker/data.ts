export interface TechData {
  id: number;
  name: string;
  logo: string;
  lottie: string;
  mastery: number;
  familiarity: number;
  favorability: number;
}

export const techStack: TechData[] = [
  { id: 1,  name: "Flutter",    logo: "https://placehold.co/80x80/02569b/ffffff?text=Flutter",    lottie: "", mastery: 9, familiarity: 9,  favorability: 9 },
  { id: 2,  name: "React",      logo: "https://placehold.co/80x80/61dafb/000000?text=React",        lottie: "", mastery: 9, familiarity: 10, favorability: 9 },
  { id: 3,  name: "Next.js",    logo: "https://placehold.co/80x80/000000/ffffff?text=Next",         lottie: "", mastery: 8, familiarity: 9,  favorability: 8 },
  { id: 4,  name: "TypeScript", logo: "https://placehold.co/80x80/3178c6/ffffff?text=TS",           lottie: "", mastery: 7, familiarity: 8,  favorability: 9 },
  { id: 5,  name: "Tailwind",   logo: "https://placehold.co/80x80/06b6d4/ffffff?text=Tailwind",     lottie: "", mastery: 8, familiarity: 9,  favorability: 7 },
  { id: 6,  name: "Node.js",    logo: "https://placehold.co/80x80/339933/ffffff?text=Node",         lottie: "", mastery: 7, familiarity: 8,  favorability: 8 },
  { id: 7,  name: "Git",        logo: "https://placehold.co/80x80/f05032/ffffff?text=Git",          lottie: "", mastery: 8, familiarity: 9,  favorability: 8 },
  { id: 8,  name: "Figma",      logo: "https://placehold.co/80x80/f24e1e/ffffff?text=Figma",        lottie: "", mastery: 7, familiarity: 8,  favorability: 7 },
  { id: 9,  name: "API Design", logo: "https://placehold.co/80x80/6b21a8/ffffff?text=API",          lottie: "", mastery: 7, familiarity: 8,  favorability: 7 },
  { id: 10, name: "Postgres",   logo: "https://placehold.co/80x80/4169e1/ffffff?text=PG",           lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
  { id: 11, name: "Laravel",    logo: "https://placehold.co/80x80/ff2d20/ffffff?text=Laravel",      lottie: "", mastery: 5, familiarity: 6,  favorability: 5 },
];
