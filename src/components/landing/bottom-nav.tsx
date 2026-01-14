"use client";

import { useLanguage } from "@/contexts/language-context";
import { Home, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";

export function BottomNav() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "start", icon: Home, label: t("start") },
    { id: "skills", icon: Code2, label: t("skills") },
    { id: "experience", icon: Briefcase, label: t("experience") },
    { id: "projects", icon: FolderGit2, label: t("projects") },
    { id: "contact", icon: Mail, label: t("contact") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700/50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={scrollToSection(item.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 py-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors active:scale-95"
            >
              <Icon className="size-5" />
              <span className="text-[9px] sm:text-[10px] font-medium leading-none truncate max-w-full px-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
