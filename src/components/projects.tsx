"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/language-context";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicação de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Blog Platform",
      description: "Plataforma de blog com sistema de comentários e autenticação de usuários.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Auth0"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Chat Application",
      description: "Aplicação de chat em tempo real com salas privadas e públicas.",
      tech: ["React", "Socket.io", "Express", "Redis"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com previsões detalhadas e mapas interativos.",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Leaflet"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Ferramenta de análise de redes sociais com gráficos e relatórios detalhados.",
      tech: ["Angular", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.projects.title}
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="p-0">
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 pb-0">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        {/* Indicador para mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-sm text-muted-foreground">
             Deslize para ver mais projetos -/ 
          </p>
        </div>
      </div>
    </section>
  );
}
