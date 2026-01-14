"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/skills";
import { useLanguage } from "@/contexts/language-context";

export function SkillsSection() {
  const { t, language } = useLanguage();

  const getCategoryName = (category: typeof SKILL_CATEGORIES[0]) => {
    switch (language) {
      case "es":
        return category.nameEs;
      case "pt":
        return category.namePt;
      default:
        return category.nameEn;
    }
  };

  return (
    <section id="skills" className="py-10 sm:py-16">
      <div className="px-2 sm:px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-foreground dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {t("skillsTitle")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            {t("skillsSubtitle")}
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-8 sm:space-y-10">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Category Label */}
              <h3 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {getCategoryName(category)}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark hover:border-primary dark:hover:border-primary transition-all duration-200 hover:shadow-md dark:hover:shadow-primary/10"
                    >
                      <Icon className="size-4 sm:size-5 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors" />
                      <span className="text-xs sm:text-sm font-medium text-foreground dark:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
