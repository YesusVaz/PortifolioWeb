"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-foreground dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        COMPLETED QUESTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            className="flex flex-col gap-4 rounded-[2rem] border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark p-4 group"
          >
            <div className="relative overflow-hidden rounded-[1rem]">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-foreground dark:text-white text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
            </div>

            <div className="flex gap-4 mt-auto">
              <a className="text-primary font-bold text-sm hover:underline" href={project.liveHref}>
                View Live
              </a>
              <a className="text-primary font-bold text-sm hover:underline" href={project.repoHref}>
                Repository
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
