"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2, Sparkles, MapPin, Clock, Coffee } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

// Animated Social Link
const SocialLink = ({ href, icon: Icon, label, delay }: { href: string; icon: any; label: string; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      aria-label={label}
    >
      <motion.div
        className="absolute -inset-3 rounded-xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ scale: isHovered ? 1.2 : 1 }}
      />
      <motion.div
        className="relative w-11 h-11 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all duration-300"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.div>
    </motion.a>
  );
};

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white shadow-lg shadow-primary/25 flex items-center justify-center hover:shadow-xl hover:shadow-primary/30 transition-shadow"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

// Quick Link
const QuickLink = ({ href, children, delay }: { href: string; children: React.ReactNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
  >
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
      {children}
    </Link>
  </motion.div>
);

export default function FooterV2() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  const socialLinks = [
    { href: "https://github.com/yesusvaz", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/yesusvaz", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:contato@yesusvaz.com", icon: Mail, label: "Email" },
  ];

  return (
    <>
      <ScrollToTop />
      
      <footer ref={ref} className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold">Yesus Vaz</span>
                  <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                </div>
              </Link>

              <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
                {t.about.description1}
              </p>

              {/* Status indicators */}
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <motion.span
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="w-3 h-3" />
                  Brasil
                </motion.span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Links Rápidos
              </h4>
              <nav className="space-y-3">
                <QuickLink href="#sobre" delay={0.1}>{t.nav.about}</QuickLink>
                <QuickLink href="#projetos" delay={0.15}>{t.nav.projects}</QuickLink>
                <QuickLink href="#contato" delay={0.2}>{t.nav.contact}</QuickLink>
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-primary" />
                Conecte-se
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    delay={0.1 * index}
                  />
                ))}
              </div>
              
              {/* Newsletter teaser */}
              <motion.div
                className="mt-6 p-4 rounded-xl bg-muted/30 border border-border/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-muted-foreground mb-2">
                  Vamos construir algo incrível juntos?
                </p>
                <Link
                  href="#contato"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Entre em contato
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-border/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span>&copy; {currentYear} Yesus Vaz.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  Feito com <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> no Brasil
                </span>
              </p>
              
              <motion.p
                className="text-xs text-muted-foreground/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Construído com Next.js, Tailwind CSS & Framer Motion
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </footer>
    </>
  );
}
