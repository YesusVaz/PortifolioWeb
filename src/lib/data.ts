import { Project, Skill } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Plataforma de blog com sistema de comentários e autenticação de usuários.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Auth0"],
  },
];

export const skills: Skill[] = [
  { name: "React", level: "advanced" },
  { name: "Next.js", level: "advanced" },
  { name: "TypeScript", level: "advanced" },
  { name: "Node.js", level: "intermediate" },
  { name: "PostgreSQL", level: "intermediate" },
  { name: "MongoDB", level: "intermediate" },
  { name: "Tailwind CSS", level: "advanced" },
  { name: "Docker", level: "beginner" },
  { name: "Git", level: "advanced" },
];