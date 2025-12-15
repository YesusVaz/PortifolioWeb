"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="text-foreground dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        SKILLS UNLOCKED
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              className="flex flex-1 gap-3 rounded-[1rem] border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark p-4 flex-col hover:border-primary dark:hover:border-primary transition-all duration-200 hover:scale-105 hover:shadow-lg dark:hover:shadow-primary/20"
            >
              <Icon className="text-primary w-6 h-6" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground dark:text-white text-base font-bold leading-tight">{skill.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{skill.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
