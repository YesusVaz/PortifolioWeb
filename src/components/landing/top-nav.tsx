"use client";

import { LandingButton } from "@/components/landing/landing-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/contexts/language-context";

export function TopNav() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-700/50 px-2 sm:px-4 lg:px-10 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4 text-foreground dark:text-primary">
        <div className="size-5 sm:size-6" aria-hidden="true">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-foreground dark:text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">YV</h2>
      </div>

      {/* Mobile: apenas toggles */}
      <div className="flex md:hidden items-center gap-1">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Desktop: navegação completa */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-6 lg:gap-9">
          <button
            onClick={scrollToSection("start")}
            className="text-foreground dark:text-background-light text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            {t("start")}
          </button>
          <button
            onClick={scrollToSection("skills")}
            className="text-foreground dark:text-background-light text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            {t("skills")}
          </button>
          <button
            onClick={scrollToSection("experience")}
            className="text-foreground dark:text-background-light text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            {t("experience")}
          </button>
          <button
            onClick={scrollToSection("projects")}
            className="text-foreground dark:text-background-light text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            {t("projects")}
          </button>
          <button
            onClick={scrollToSection("contact")}
            className="text-foreground dark:text-background-light text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            {t("contact")}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <div onClick={scrollToSection("contact")}>
            <LandingButton size="sm" className="min-w-[84px] max-w-[480px]">
              {t("getInTouch")}
            </LandingButton>
          </div>
        </div>
      </div>
    </header>
  );
}
