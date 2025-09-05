"use client";

import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    const mailtoLink = `mailto:contato@yesus.dev?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-muted/30 to-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de Contato */}
          <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-2xl text-center font-semibold">📧 Envie uma Mensagem</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Sobre o que você gostaria de falar?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-me mais sobre seu projeto ou ideia..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl text-center font-semibold">🤝 Vamos Conversar</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground">
                    Estou sempre interessado em novos projetos e oportunidades de colaboração.
                  </p>
                </div>
                
                {/* Botões de Contato Direto */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full justify-start" asChild>
                    <a href="mailto:contato@yesus.dev">
                      <Mail className="w-5 h-5 mr-3" />
                      contato@yesus.dev
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-5 h-5 mr-3" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Redes Sociais */}
                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Ou me encontre nas redes sociais:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://github.com/yesusvaz" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://linkedin.com/in/yesusvaz" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Localização */}
                <div className="pt-6 border-t text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{t.contact.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Disponível para projetos remotos e presenciais
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
