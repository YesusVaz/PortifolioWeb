"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { useLanguage } from "@/contexts/language-context";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const getTitle = (project: (typeof PROJECTS)[0]) => {
    switch (language) {
      case "es":
        return project.titleEs;
      case "pt":
        return project.titlePt;
      default:
        return project.titleEn;
    }
  };

  const getDescription = (project: (typeof PROJECTS)[0]) => {
    switch (language) {
      case "es":
        return project.descriptionEs;
      case "pt":
        return project.descriptionPt;
      default:
        return project.descriptionEn;
    }
  };

  return (
    <section id="projects" className="py-10 sm:py-16 overflow-hidden">
      {/* Header */}
      <div className="flex items-end justify-between px-2 sm:px-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-foreground dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {t("projectsTitle")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            {t("projectsSubtitle")}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="size-9 sm:size-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <ChevronLeft className="size-4 sm:size-5 text-foreground dark:text-white" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="size-9 sm:size-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <ChevronRight className="size-4 sm:size-5 text-foreground dark:text-white" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden px-2 sm:px-4" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)] min-w-0"
            >
              <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark overflow-hidden group h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="relative h-44 sm:h-52 w-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-4 sm:p-5 flex-1">
                  <h3 className="text-foreground dark:text-white text-lg sm:text-xl font-semibold">
                    {getTitle(project)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
                    {getDescription(project)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    {project.liveHref !== "#" && (
                      <a
                        href={project.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <ExternalLink className="size-4" />
                        {t("viewLive")}
                      </a>
                    )}
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Github className="size-4" />
                      {t("repository")}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pt-6">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`size-2 rounded-full transition-all duration-200 ${
              index === selectedIndex
                ? "bg-primary w-6"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
