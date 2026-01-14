"use client";

import { LandingButton } from "@/components/landing/landing-button";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="start" className="min-h-[70vh] flex items-center">
      <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-4 py-10 sm:py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          {/* Greeting */}
          <p className="text-primary font-medium text-sm sm:text-base">
            {t("heroGreeting")}
          </p>

          {/* Name */}
          <h1 className="text-foreground dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            {t("heroName")}
          </h1>

          {/* Role */}
          <h2 className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl md:text-3xl font-semibold">
            {t("heroRole")}
          </h2>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            {t("heroDescription")}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 sm:gap-4"
        >
          <div onClick={scrollToProjects}>
            <LandingButton className="text-sm sm:text-base">
              {t("viewProjects")}
              <ArrowRight className="ml-2 size-4" />
            </LandingButton>
          </div>
          <a
            href="/cv-yesus-vaz.pdf"
            download
            className="inline-flex items-center justify-center h-10 sm:h-12 px-4 sm:px-6 rounded-full border-2 border-gray-300 dark:border-gray-600 text-foreground dark:text-white font-semibold text-sm sm:text-base hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors"
          >
            <Download className="mr-2 size-4" />
            {t("downloadCV")}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 pt-4"
        >
          <a
            href="https://github.com/yesusvaz"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yesus-vaz-0514a42a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="mailto:contact@yesusvaz.com"
            className="size-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
