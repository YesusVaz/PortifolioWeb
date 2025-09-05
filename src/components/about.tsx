"use client";

import { useLanguage } from "@/contexts/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.about.title}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="w-64 h-64 mx-auto bg-primary rounded-full flex items-center justify-center text-6xl font-bold text-primary-foreground">
              Y
            </div>
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              {t.about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t.about.description2}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
