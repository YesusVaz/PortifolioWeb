"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientText({
  children,
  className,
  gradient = "from-primary via-purple-500 to-pink-500",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]",
        gradient,
        className
      )}
    >
      {children}
    </span>
  );
}

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  onClick,
}: ShimmerButtonProps) {
  return (
    <button
      onClick={onClick}
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--border-radius": borderRadius,
          "--shimmer-duration": shimmerDuration,
          "--background": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--background)] [border-radius:var(--border-radius)] dark:text-black",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
    >
      {/* Shimmer effect */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden [border-radius:var(--border-radius)]",
          "before:absolute before:inset-[-100%] before:animate-[shimmer_var(--shimmer-duration)_infinite]",
          "before:bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)]"
        )}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Inner glow */}
      <div
        className={cn(
          "absolute inset-[1px] [border-radius:var(--border-radius)]",
          "[background:var(--background)]"
        )}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-1 text-sm font-medium text-foreground backdrop-blur-3xl gap-2">
        {children}
      </span>
    </motion.button>
  );
}

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function AnimatedBorder({
  children,
  className,
  containerClassName,
}: AnimatedBorderProps) {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-xl", containerClassName)}>
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      </div>
      <div className={cn("relative bg-background rounded-xl", className)}>{children}</div>
    </div>
  );
}
