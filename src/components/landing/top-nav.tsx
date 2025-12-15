"use client";

import { LandingButton } from "@/components/landing/landing-button";

export function TopNav() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-700/50 px-4 sm:px-6 lg:px-10 py-3">
      <div className="flex items-center gap-4 text-foreground dark:text-primary">
        <div className="size-6" aria-hidden="true">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-foreground dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">YV</h2>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-foreground dark:text-background-light text-sm font-medium leading-normal" href="#start">
            Start
          </a>
          <a className="text-foreground dark:text-background-light text-sm font-medium leading-normal" href="#skills">
            Skills
          </a>
          <a className="text-foreground dark:text-background-light text-sm font-medium leading-normal" href="#projects">
            Projects
          </a>
          <a className="text-foreground dark:text-background-light text-sm font-medium leading-normal" href="#contact">
            Contact
          </a>
        </nav>

        <LandingButton href="#contact" size="sm" className="min-w-[84px] max-w-[480px]" >
          Get in Touch
        </LandingButton>
      </div>
    </header>
  );
}
