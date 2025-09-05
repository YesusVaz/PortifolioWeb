"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">{t.contact.title}</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" asChild>
            <a href="mailto:contato@yesus.dev" className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              contato@yesus.dev
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/yesus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/yesus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{t.contact.location}</span>
        </div>
      </div>
    </section>
  );
}
