// Declaring a type for experiences for the experience page
export type Experience = {
  date: string;
  title: string;
  location: string;
  company: string;
  points: string[];
  logo: string;
};

// Declaring a type for technologies for the skills page
export type Technology = {
  name: string;
  icon: string;
  hasRoundedCorners?: boolean;
};

// Declaring a type for projects for the projects page
export type Project = {
  id: number;
  title: string;
  category: string;
  image?: string;
  videoUrl?: string;
  link?: string;
  description: string;
};

// Declaring a type for education for the education page
export type Education = {
  school: string;
  degree: string;
  major: string;
  expectedGraduation: string;
  logo: string;
};

export type Category = "languages" | "frameworks" | "tools";
