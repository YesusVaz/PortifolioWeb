import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiPhp,
  SiDbeaver,
  SiGrafana,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type SkillCategory = {
  name: string;
  nameEn: string;
  nameEs: string;
  namePt: string;
  skills: {
    icon: IconType;
    name: string;
  }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    nameEn: "Frontend",
    nameEs: "Frontend",
    namePt: "Frontend",
    skills: [
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiCss3, name: "CSS3" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiAngular, name: "Angular" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  {
    name: "Backend",
    nameEn: "Backend",
    nameEs: "Backend",
    namePt: "Backend",
    skills: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiNestjs, name: "NestJS" },
      { icon: SiPhp, name: "PHP" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    name: "DevOps & Tools",
    nameEn: "DevOps & Tools",
    nameEs: "DevOps y Herramientas",
    namePt: "DevOps & Ferramentas",
    skills: [
      { icon: SiDocker, name: "Docker" },
      { icon: SiGit, name: "Git" },
      { icon: SiGrafana, name: "Grafana" },
      { icon: SiDbeaver, name: "DBeaver" },
    ],
  },
];
