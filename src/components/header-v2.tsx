"use client";

import Link from "next/link";
import { Menu, X, Code2, Sparkles, Download, Mail, ArrowRight, Terminal, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/language-context";

// Magnetic Button Component
const MagneticButton = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Navigation Link with animated underline
const NavLink = ({ href, children, index, onClick }: { href: string; children: React.ReactNode; index: number; onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-primary"
          initial={{ width: 0, x: "-50%" }}
          animate={{ width: isHovered ? "70%" : 0, x: "-50%" }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

// Animated Logo Component
const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href="/" 
      className="flex items-center gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Container */}
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 blur-xl"
          animate={{ 
            opacity: isHovered ? 0.8 : 0.2,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Main logo box */}
        <motion.div
          className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden"
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Inner pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? -360 : 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Code2 className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Online indicator */}
        <motion.div
          className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-background"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
        </motion.div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <motion.span
          className="text-lg font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: isHovered ? "200% center" : "0% center"
          }}
          style={{ backgroundSize: "200% auto" }}
          transition={{ duration: 0.5 }}
        >
          Yesus Vaz
        </motion.span>
        <motion.span
          className="text-xs text-muted-foreground flex items-center gap-1"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          <Terminal className="w-3 h-3" />
          Full Stack Developer
        </motion.span>
      </div>
    </Link>
  );
};

// Animated CTA Button
const CTAButton = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "secondary") {
    return (
      <MagneticButton>
        <Link
          href={href}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ duration: 0.3 }}
          />
          <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="relative z-10 group-hover:text-foreground transition-colors">CV</span>
        </Link>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton>
      <Link
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg overflow-hidden group"
      >
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
          animate={{ 
            backgroundPosition: isHovered ? "200% center" : "0% center"
          }}
          style={{ backgroundSize: "200% auto" }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "200%" : "-100%" }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Content */}
        <Mail className="w-4 h-4 relative z-10" />
        <span className="relative z-10">{children}</span>
        <motion.div
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 relative z-10" />
        </motion.div>
      </Link>
    </MagneticButton>
  );
};

export function HeaderV2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);
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
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <AnimatedLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <NavLink key={item.name} href={item.href} index={index}>
                {item.name}
              </NavLink>
            ))}
            
            {/* CTA Buttons */}
            <div className="ml-6 flex items-center gap-3">
              <CTAButton href="#cv" variant="secondary">CV</CTAButton>
            </div>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <LanguageToggle 
                currentLanguage={language} 
                onLanguageChange={setLanguage} 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle 
              currentLanguage={language} 
              onLanguageChange={setLanguage} 
            />
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container mx-auto px-4 py-6">
                <div className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all group"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        />
                        {item.name}
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 pt-6 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="#cv"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
