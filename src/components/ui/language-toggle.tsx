"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState, useEffect, useRef } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const languages = [
    { code: "en" as const, flag: "🇺🇸", label: "English" },
    { code: "es" as const, flag: "🇪🇸", label: "Español" },
    { code: "pt" as const, flag: "🇧🇷", label: "Português" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Change language"
        className="size-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Languages className="size-5 text-gray-700 dark:text-gray-300" />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-2 flex rounded-lg bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-1 z-50 gap-1"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={language === lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              className={`px-3 py-2 text-sm rounded-md transition-colors whitespace-nowrap ${
                language === lang.code
                  ? "bg-gray-800 dark:bg-gray-700 text-white font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {lang.flag} {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
