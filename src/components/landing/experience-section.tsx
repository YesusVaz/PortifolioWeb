"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experiences";
import { useLanguage } from "@/contexts/language-context";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const { t, language } = useLanguage();

  const getRole = (exp: (typeof EXPERIENCES)[0]) => {
    switch (language) {
      case "es":
        return exp.roleEs;
      case "pt":
        return exp.rolePt;
      default:
        return exp.roleEn;
    }
  };

  const getDescription = (exp: (typeof EXPERIENCES)[0]) => {
    switch (language) {
      case "es":
        return exp.descriptionEs;
      case "pt":
        return exp.descriptionPt;
      default:
        return exp.descriptionEn;
    }
  };

  if (EXPERIENCES.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-10 sm:py-16">
      <div className="px-2 sm:px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-foreground dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {t("experienceTitle")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            {t("experienceSubtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 sm:left-2 top-1 size-8 sm:size-8 rounded-full flex items-center justify-center ${
                    experience.current
                      ? "bg-primary text-primary-foreground"
                      : "bg-white dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <Briefcase className="size-4" />
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-background-dark rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700/50 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="text-foreground dark:text-white text-lg sm:text-xl font-semibold">
                      {getRole(experience)}
                    </h3>
                    <span
                      className={`text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full w-fit ${
                        experience.current
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-primary font-medium text-sm sm:text-base mb-3">
                    {experience.company}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {getDescription(experience)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
