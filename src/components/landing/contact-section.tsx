"use client";

import { sendEmail } from "@/actions/send-email";
import { useRef } from "react";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-10 sm:py-16">
      <div className="px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/50 bg-gradient-to-br from-white to-gray-50 dark:from-background-dark dark:to-gray-900/50 p-6 sm:p-10 md:p-12"
        >
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-foreground dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {t("contactTitle")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto">
                {t("contactDescription")}
              </p>
            </div>

            {/* Form */}
            <form ref={formRef} className="space-y-4 sm:space-y-5" action={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <input
                    className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-foreground dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                    placeholder={t("yourName")}
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-foreground dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                    placeholder={t("yourEmail")}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-foreground dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm sm:text-base"
                  placeholder={t("yourMessage")}
                  rows={5}
                  name="message"
                  required
                />
              </div>

              <div className="pt-2 flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-10 sm:h-12 px-6 sm:px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors"
                >
                  {t("sendMessage")}
                  <Send className="ml-2 size-4 flex-shrink-0" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
