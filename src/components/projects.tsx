"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    },
    {
      title: "Task Management App",
      description: "Aplicação de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Blog Platform",
      description: "Plataforma de blog com sistema de comentários e autenticação de usuários.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Auth0"],
    },
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    P{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
