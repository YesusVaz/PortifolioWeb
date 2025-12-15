import { Braces, Atom, Code, Server, Container, Database } from "lucide-react";
import type { Skill } from "@/types/landing";

export const SKILLS: Skill[] = [
  { icon: Braces, title: "JavaScript", description: "ES6+, Async/Await" },
  { icon: Atom, title: "React", description: "Hooks, Redux, Next.js" },
  { icon: Code, title: "Python", description: "Django, Flask" },
  { icon: Server, title: "Node.js", description: "Express.js, APIs" },
  { icon: Container, title: "Docker", description: "Containerization" },
  { icon: Database, title: "SQL", description: "PostgreSQL, MySQL" },
];
