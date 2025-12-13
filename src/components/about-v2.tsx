"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/language-context";
import { GradientText, AnimatedBorder } from "@/components/ui/magic-ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Coffee,
  Rocket,
} from "lucide-react";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL / MongoDB", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Docker / AWS", level: 75 },
  ];

  const features = [
    {
      title: "Frontend Development",
      description: "React, Next.js, Vue.js com foco em performance e UX",
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Interfaces modernas, responsivas e acessíveis",
      icon: <Palette className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Backend & APIs",
      description: "Node.js, Python, REST e GraphQL",
      icon: <Database className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Mobile Development",
      description: "React Native para apps iOS e Android",
      icon: <Smartphone className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD e infraestrutura",
      icon: <Cloud className="h-6 w-6 text-sky-500" />,
    },
    {
      title: "Performance",
      description: "Otimização, SEO e Core Web Vitals",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
  ];

  const stats = [
    { number: "5+", label: "Anos de Experiência" },
    { number: "50+", label: "Projetos Concluídos" },
    { number: "30+", label: "Clientes Satisfeitos" },
    { number: "∞", label: "Xícaras de Café" },
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
    <section id="sobre" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transformando ideias em{" "}
            <GradientText gradient="from-primary via-purple-500 to-pink-500">
              realidade digital
            </GradientText>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/20"
              />
              
              {/* Avatar */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-black text-white">Y</span>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 right-0 p-3 rounded-xl bg-background shadow-lg border"
              >
                <Coffee className="w-6 h-6 text-yellow-600" />
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 left-0 p-3 rounded-xl bg-background shadow-lg border"
              >
                <Rocket className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Skills with progress */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <AnimatedBorder className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <GradientText>{stat.number}</GradientText>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedBorder>
            </motion.div>
          ))}
        </motion.div>

        {/* Services/Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">O que eu faço</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-muted/50 w-fit group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
