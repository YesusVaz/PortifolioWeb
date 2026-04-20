"use client";

import { LandingButton } from "@/components/landing/landing-button";
import { sendEmail } from "@/actions/send-email";
import { useRef, useEffect, useActionState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  const inputClass =
    "w-full px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-foreground dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base disabled:opacity-60";

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
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-foreground dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {t("contactTitle")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto">
                {t("contactDescription")}
              </p>
            </div>

            {state?.success && (
              <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
                <CheckCircle2 className="size-5 flex-shrink-0" />
                <span className="text-sm font-medium">{t("formSuccess")}</span>
              </div>
            )}
            {state?.success === false && (
              <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
                <AlertCircle className="size-5 flex-shrink-0" />
                <span className="text-sm font-medium">{state.error ?? t("formError")}</span>
              </div>
            )}

            <form ref={formRef} className="space-y-4 sm:space-y-5" action={formAction}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  className={`${inputClass} h-11 sm:h-12`}
                  placeholder={t("yourName")}
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  disabled={isPending}
                />
                <input
                  className={`${inputClass} h-11 sm:h-12`}
                  placeholder={t("yourEmail")}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  disabled={isPending}
                />
              </div>

              <textarea
                className={`${inputClass} py-3 resize-none`}
                placeholder={t("yourMessage")}
                rows={5}
                name="message"
                required
                disabled={isPending}
              />

              <div className="pt-2">
                <LandingButton type="submit" className="w-full sm:w-auto" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      {t("formSending")}
                    </>
                  ) : (
                    <>
                      {t("sendMessage")}
                      <Send className="ml-2 size-4 flex-shrink-0" />
                    </>
                  )}
                </LandingButton>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
