import type { Language } from "@/contexts/language-context";

export function getLocalized(language: Language, en: string, es: string, pt: string): string {
  if (language === "es") return es;
  if (language === "pt") return pt;
  return en;
}
