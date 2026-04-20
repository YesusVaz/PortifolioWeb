"use server";

import { Resend } from "resend";

export type EmailActionResult = { success: true } | { success: false; error: string };

export async function sendEmail(
  _prevState: EmailActionResult | null,
  formData: FormData
): Promise<EmailActionResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set — logged:", { name, email, messageLength: message.length });
    return { success: true };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "yesuslucas@gmail.com",
      subject: `Portfolio: message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return { success: true };
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
