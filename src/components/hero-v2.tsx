"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { MagneticButton, GradientText } from "@/components/ui/magic-ui";
import { TextGenerateEffect } from "@/components/ui/text-effects";

export function Hero() {
  const { t } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Splash screen
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const textVariations = [
    "Yesus Vaz",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "Desarrollador Full Stack",
    "const dev = 'Yesus';",
    "console.log('Hello!');",
  ];

  useEffect(() => {
    const currentText = textVariations[currentTextIndex];
    const isCodeText = currentText.includes("(") || currentText.includes("=");

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), isCodeText ? 3000 : 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % textVariations.length);
          }
        }
      },
      isDeleting ? 30 : isCodeText ? 80 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/50 to-purple-600/50 animate-pulse-glow" />
              
              <h1 className="relative text-5xl md:text-8xl font-black">
                <GradientText gradient="from-primary via-purple-500 to-pink-500">
                  Yesus Vaz
                </GradientText>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-1 bg-gradient-to-r from-primary to-purple-600 mt-4 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spotlight effect */}
        {mounted && <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />}

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px] animate-pulse-glow"
          />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={!showSplash ? "visible" : "hidden"}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-7xl font-black mb-4">
                <span className="text-foreground">Olá, eu sou </span>
                <br />
                <span className="relative inline-block min-h-[1.2em]">
                  <GradientText
                    gradient="from-primary via-purple-500 to-pink-500"
                    className="font-mono"
                  >
                    {displayText}
                  </GradientText>
                  <span
                    className={`inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle transition-opacity ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-10 max-w-2xl mx-auto">
              <TextGenerateEffect
                words={t.hero.description}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              />
            </motion.div>

            {/* 3D Image */}
            <motion.div 
              variants={itemVariants} 
              className="mb-10 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <img
                  src="/971.jpg"
                  alt="3D Visual"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <MagneticButton className="group">
                <a href="#projetos" className="flex items-center gap-2">
                  {t.hero.cta1}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-medium"
              >
                {t.hero.cta2}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/yesusvaz", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/yesusvaz", label: "LinkedIn" },
                { icon: Mail, href: "mailto:contato@yesus.dev", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-muted/50 hover:bg-muted border border-border/50 hover:border-primary/30 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
