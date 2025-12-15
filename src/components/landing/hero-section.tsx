"use client";

import Image from "next/image";
import { LandingButton } from "@/components/landing/landing-button";

const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpl7SU0g9UKIzh6Hahz-TsDFvovCYIVvxlzVxYqNqMAb4eRT8KkB_1hFhqy2H1vOm6pnkzngJxXEj8GlOLVvy2c4GGFk7Q9WGbKlwZt0P397aLzSDaBGW-Tfgr9C5Y5f4PKDlZb2VGiKrGWiYHxDfoQuHsfOsIgdxn34ZZlsDQeDnMEOZu9K0r8BkQyY9t4SYMDsQf_IkBFbhQjQZfRpJBYn-K8Zd92ThwEl_Y1HHzKi7DdeymlfdqCMJo7DZFXvjKYNJ8WAcQeq4";

export function HeroSection() {
  return (
    <section id="start" className="@container">
      <div className="flex flex-col gap-6 px-4 py-10 sm:gap-8 lg:flex-row items-center">
        <div className="w-full flex-shrink-0 lg:w-1/3">
          <div className="relative aspect-square w-full overflow-hidden rounded-[3rem] border-4 border-foreground dark:border-primary">
            <Image
              src={AVATAR_URL}
              alt="Pop-art style avatar of a man with glasses"
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 text-center lg:text-left sm:min-w-[400px] sm:gap-8 lg:justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-foreground dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
              LEVEL UP YOUR NEXT PROJECT
            </h1>
            <h2 className="text-foreground dark:text-background-light/80 text-sm sm:text-base font-normal leading-normal">
              Yesus Vaz: Full-Stack Developer Crafting Interactive Web Experiences.
            </h2>
          </div>

          <LandingButton href="#projects" className="self-center lg:self-start min-w-[84px] max-w-[480px]">
            VIEW MY WORK
          </LandingButton>
        </div>
      </div>
    </section>
  );
}
