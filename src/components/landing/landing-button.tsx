"use client";

import Link from "next/link";

type LandingButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "md";
};

export function LandingButton({ children, href, className = "", size = "md" }: LandingButtonProps) {
  const root =
    "group relative inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark";
  const faceBase =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground font-bold tracking-[0.015em] select-none";
  const sizes = size === "sm" ? "h-10 px-4 text-sm" : "h-12 px-5 text-base";

  // Depth values intentionally mirror the 3D-button pattern:
  // - Shadow sits below (translate-y)
  // - Face floats slightly up on hover
  // - Face moves down on active to look pressed
  const shadow =
    "absolute inset-0 rounded-full bg-[var(--landing-shadow)] dark:bg-yellow-700 translate-y-[6px] transition-transform duration-150 ease-out group-hover:translate-y-[7px] group-active:translate-y-[6px]";
  const face =
    `${faceBase} ${sizes} transition-transform duration-150 ease-out translate-y-0 group-hover:-translate-y-[1px] group-active:translate-y-[6px]`;

  if (href) {
    return (
      <Link href={href} className={`${root} ${className}`}>
        <span aria-hidden="true" className={shadow} />
        <span className={face}>
          <span className="truncate">{children}</span>
        </span>
      </Link>
    );
  }

  return (
    <button type="button" className={`${root} ${className}`}>
      <span aria-hidden="true" className={shadow} />
      <span className={face}>
        <span className="truncate">{children}</span>
      </span>
    </button>
  );
}
