"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-20 text-center relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
          {t.hero.greeting}{" "}
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-pulse">
            {t.hero.name}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <a href="#projetos">
              {t.hero.cta1}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 hover:bg-muted/50 transition-all duration-300">
            <a href="#contato">
              {t.hero.cta2}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
