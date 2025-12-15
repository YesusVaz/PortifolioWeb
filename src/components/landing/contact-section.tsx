"use client";

import { LandingButton } from "@/components/landing/landing-button";
import { sendEmail } from "@/actions/send-email";
import { useRef } from "react";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="px-4 py-10">
      <div className="rounded-[2rem] border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-background-dark p-8 text-center flex flex-col items-center gap-6">
        <h2 className="text-foreground dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
          START A NEW GAME?
        </h2>
        <p className="max-w-md text-gray-600 dark:text-gray-400">
          Got a project, a challenge, or just want to connect? Send a mission brief and let&apos;s team up!
        </p>

        <form ref={formRef} className="w-full max-w-md flex flex-col gap-4" action={sendEmail}>
          <input
            className="w-full rounded-[1rem] border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 focus:ring-primary focus:border-primary dark:text-white"
            placeholder="Your Name"
            type="text"
            name="name"
            autoComplete="name"
          />
          <input
            className="w-full rounded-[1rem] border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 focus:ring-primary focus:border-primary dark:text-white"
            placeholder="Your Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <textarea
            className="w-full rounded-[1rem] border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 focus:ring-primary focus:border-primary dark:text-white"
            placeholder="Your Message"
            rows={4}
            name="message"
          />

          <div onClick={() => formRef.current?.requestSubmit()} className="self-center">
            <LandingButton className="min-w-[84px] max-w-[480px]">SEND MISSION BRIEF</LandingButton>
          </div>
        </form>
      </div>
    </section>
  );
}
