export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  projectUrl?: string;
};

export type Skill = {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
};

export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  location: string;
};