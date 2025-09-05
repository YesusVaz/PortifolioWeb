"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Sparkles, Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/language-context";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Efeito de scroll para mudar aparência do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: t.nav.about, href: "#sobre" },
    { name: t.nav.projects, href: "#projetos" },
    { name: t.nav.contact, href: "#contato" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Sofisticado */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            {/* Efeito de glow animado */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
            
            {/* Logo principal */}
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Code className="w-5 h-5 text-white" />
            </div>
            
            {/* Indicador de status */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-600 transition-all duration-300">
              Yesus Vaz
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">
              Full Stack Developer
            </span>
          </div>
        </Link>     
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground group rounded-lg hover:bg-muted/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-6 rounded-full"></span>
            </Link>
          ))}
          
          {/* CTA Button */}
          <div className="ml-4 flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden lg:flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>CV</span>
            </Button>
            <Button size="sm" asChild className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="#contato">
                <Mail className="w-4 h-4 mr-2" />
                Contato
              </Link>
            </Button>
          </div>
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageToggle 
            currentLanguage={language} 
            onLanguageChange={setLanguage} 
          />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageToggle 
            currentLanguage={language} 
            onLanguageChange={setLanguage} 
          />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative"
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button asChild className="w-full justify-center bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                <Link href="#contato">
                  <Mail className="w-4 h-4 mr-2" />
                  Entre em Contato
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
