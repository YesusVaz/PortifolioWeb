"use client";

import Link from "next/link";

type LandingButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "md";
};

const SHADOW_STYLE = { boxShadow: "0px 5px 0px 0px var(--landing-shadow)" } as const;

export function LandingButton({ children, href, className = "", size = "md" }: LandingButtonProps) {
  const base =
    "cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-full bg-primary text-foreground font-bold tracking-[0.015em] transition-transform duration-200 ease-in-out hover:scale-105";
  const sizes = size === "sm" ? "h-10 px-4 text-sm" : "h-12 px-5 text-base";

  if (href) {
    return (
      <Link href={href} className={`${base} ${sizes} ${className}`} style={SHADOW_STYLE}>
        <span className="truncate">{children}</span>
      </Link>
    );
  }

  return (
    <button className={`${base} ${sizes} ${className}`} style={SHADOW_STYLE}>
      <span className="truncate">{children}</span>
    </button>
  );
}
