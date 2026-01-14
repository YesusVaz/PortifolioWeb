"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    start: "Home",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    getInTouch: "Get in Touch",

    // Hero Section
    heroGreeting: "Hello, I'm",
    heroName: "Yesus Vaz",
    heroRole: "Full-Stack Developer",
    heroDescription: "I build modern, scalable web applications with clean code and great user experiences.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",

    // Skills Section
    skillsTitle: "Tech Stack",
    skillsSubtitle: "Technologies I work with",

    // Experience Section
    experienceTitle: "Experience",
    experienceSubtitle: "My professional journey",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Some of my recent work",
    viewLive: "Live Demo",
    repository: "Source Code",

    // Contact Section
    contactTitle: "Let's Work Together",
    contactDescription: "Have a project in mind? Let's discuss how I can help bring your ideas to life.",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Tell me about your project...",
    sendMessage: "Send Message",
  },
  es: {
    // Navigation
    start: "Inicio",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    getInTouch: "Contactar",

    // Hero Section
    heroGreeting: "Hola, soy",
    heroName: "Yesus Vaz",
    heroRole: "Desarrollador Full-Stack",
    heroDescription: "Construyo aplicaciones web modernas y escalables con código limpio y excelentes experiencias de usuario.",
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",

    // Skills Section
    skillsTitle: "Tech Stack",
    skillsSubtitle: "Tecnologías con las que trabajo",

    // Experience Section
    experienceTitle: "Experiencia",
    experienceSubtitle: "Mi trayectoria profesional",

    // Projects Section
    projectsTitle: "Proyectos Destacados",
    projectsSubtitle: "Algunos de mis trabajos recientes",
    viewLive: "Demo en Vivo",
    repository: "Código Fuente",

    // Contact Section
    contactTitle: "Trabajemos Juntos",
    contactDescription: "¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a dar vida a tus ideas.",
    yourName: "Tu Nombre",
    yourEmail: "Tu Email",
    yourMessage: "Cuéntame sobre tu proyecto...",
    sendMessage: "Enviar Mensaje",
  },
  pt: {
    // Navigation
    start: "Início",
    skills: "Habilidades",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
    getInTouch: "Entre em Contato",

    // Hero Section
    heroGreeting: "Olá, eu sou",
    heroName: "Yesus Vaz",
    heroRole: "Desenvolvedor Full-Stack",
    heroDescription: "Construo aplicações web modernas e escaláveis com código limpo e ótimas experiências de usuário.",
    viewProjects: "Ver Projetos",
    downloadCV: "Baixar CV",

    // Skills Section
    skillsTitle: "Tech Stack",
    skillsSubtitle: "Tecnologias que utilizo",

    // Experience Section
    experienceTitle: "Experiência",
    experienceSubtitle: "Minha trajetória profissional",

    // Projects Section
    projectsTitle: "Projetos em Destaque",
    projectsSubtitle: "Alguns dos meus trabalhos recentes",
    viewLive: "Demo ao Vivo",
    repository: "Código Fonte",

    // Contact Section
    contactTitle: "Vamos Trabalhar Juntos",
    contactDescription: "Tem um projeto em mente? Vamos conversar sobre como posso ajudar a dar vida às suas ideias.",
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    yourMessage: "Conte-me sobre seu projeto...",
    sendMessage: "Enviar Mensagem",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "es" || saved === "pt")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
