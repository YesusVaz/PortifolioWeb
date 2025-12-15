"use client";

import { MaterialSymbol } from "@/components/landing/material-symbol";

type Skill = {
  icon: string;
  title: string;
  description: string;
};

const SKILLS: Skill[] = [
  { icon: "javascript", title: "JavaScript", description: "ES6+, Async/Await" },
  { icon: "developer_mode", title: "React", description: "Hooks, Redux, Next.js" },
  { icon: "code", title: "Python", description: "Django, Flask" },
  { icon: "http", title: "Node.js", description: "Express.js, APIs" },
  { icon: "deployed_code", title: "Docker", description: "Containerization" },
  { icon: "database", title: "SQL", description: "PostgreSQL, MySQL" },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="text-foreground dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        SKILLS UNLOCKED
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-1 gap-3 rounded-[1rem] border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark p-4 flex-col hover:border-primary dark:hover:border-primary transition-all duration-200 hover:scale-105 hover:shadow-lg dark:hover:shadow-primary/20"
          >
            <MaterialSymbol name={skill.icon} className="text-primary text-2xl" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground dark:text-white text-base font-bold leading-tight">{skill.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
