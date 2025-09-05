export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Yesus Vaz",
      title: "Desenvolvedor Full Stack",
      description: "Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis com React, Next.js e TypeScript.",
      cta1: "Ver Projetos",
      cta2: "Entrar em Contato",
    },
    about: {
      title: "Sobre Mim",
      description1: "Sou um desenvolvedor full stack com experiência criando aplicações web modernas e escaláveis. Especializado em React, Next.js, TypeScript e Node.js.",
      description2: "Apaixonado por tecnologia e sempre em busca de aprender novas ferramentas para entregar soluções de alta qualidade.",
    },
    projects: {
      title: "Projetos",
    },
    contact: {
      title: "Entre em Contato",
      description: "Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos conversar!",
      location: "São Paulo, Brasil",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Yesus Vaz",
      title: "Full Stack Developer",
      description: "Full Stack Developer passionate about creating amazing digital experiences with React, Next.js and TypeScript.",
      cta1: "View Projects",
      cta2: "Get in Touch",
    },
    about: {
      title: "About Me",
      description1: "I'm a full stack developer with experience creating modern and scalable web applications. Specialized in React, Next.js, TypeScript and Node.js.",
      description2: "Passionate about technology and always looking to learn new tools to deliver high-quality solutions.",
    },
    projects: {
      title: "Projects",
    },
    contact: {
      title: "Get in Touch",
      description: "I'm always open to new opportunities and interesting projects. Let's talk!",
      location: "São Paulo, Brazil",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.pt;
