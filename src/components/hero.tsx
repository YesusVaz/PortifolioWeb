"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const textVariations = [
    "Olá, eu sou Yesus Vaz",
    "Hello, I'm Yesus Vaz", 
    "Hola, soy Yesus Vaz",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "Desarrollador Full Stack",
    "const developer = 'Yesus Vaz';",
    "print('Hello, World! - Yesus')",
    "console.log('Yesus Vaz');",
    "echo 'Coding with passion'",
    "function getName() { return 'Yesus'; }",
    "SELECT 'Yesus Vaz' AS developer;",
    "# Yesus Vaz - Programador",
    "<h1>Yesus Vaz</h1>",
    "¡Hola mundo! - Yesus",
    "Olá mundo! - Yesus"
  ];

  useEffect(() => {
    const currentText = textVariations[currentTextIndex];
    const isCodeText = currentText.includes('(') || currentText.includes('{') || currentText.includes('<') || currentText.includes('=');
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Pausa mais longa para código, menor para texto normal
          const pauseTime = isCodeText ? 3000 : 2000;
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textVariations.length);
        }
      }
    }, isDeleting ? 30 : (isCodeText ? 80 : 100)); // Velocidades diferentes para código

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, textVariations]);

  // Cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="py-20 text-center relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <span className={`font-mono transition-all duration-500 relative ${
            textVariations[currentTextIndex].includes('(') || 
            textVariations[currentTextIndex].includes('{') || 
            textVariations[currentTextIndex].includes('<') || 
            textVariations[currentTextIndex].includes('=')
              ? 'bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent px-4 py-2 rounded-lg bg-slate-900/10 dark:bg-slate-100/10'
              : 'bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent'
          }`}>
            {displayText}
            <span 
              className={`inline-block w-1 h-8 md:h-12 ml-1 transition-all duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              } ${
                textVariations[currentTextIndex].includes('(') || 
                textVariations[currentTextIndex].includes('{') || 
                textVariations[currentTextIndex].includes('<') || 
                textVariations[currentTextIndex].includes('=')
                  ? 'bg-green-400'
                  : 'bg-primary'
              }`}
              style={{ animation: 'blink 1s infinite' }}
            />
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
