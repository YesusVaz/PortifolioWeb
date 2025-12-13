"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Card3D, GlowingCard } from "@/components/ui/cards";
import { GradientText, AnimatedBorder } from "@/components/ui/magic-ui";
import { useState } from "react";

export function Projects() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Aplicação de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Platform",
      description: "Plataforma de blog com sistema de comentários e autenticação de usuários.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Auth0"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Chat Application",
      description: "Aplicação de chat em tempo real com salas privadas e públicas.",
      tech: ["React", "Socket.io", "Express", "Redis"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com previsões detalhadas e mapas interativos.",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Leaflet"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Ferramenta de análise de redes sociais com gráficos e relatórios detalhados.",
      tech: ["Angular", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos{" "}
            <GradientText gradient="from-primary via-purple-500 to-pink-500">
              em Destaque
            </GradientText>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma seleção dos meus trabalhos mais recentes e relevantes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <AnimatedBorder containerClassName="h-full" className="h-full p-0 overflow-hidden">
                <div className="relative group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                      animate={{
                        opacity: hoveredIndex === index ? 0.9 : 0.6,
                      }}
                    />
                    
                    {/* Quick actions */}
                    <motion.div
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : -10,
                      }}
                    >
                      <a
                        href={project.github}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedBorder>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yesusvaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-medium group"
          >
            Ver todos no GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
