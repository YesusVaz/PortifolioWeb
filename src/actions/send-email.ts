"use server";

export async function sendEmail(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Minimal implementation for now: keeps the project production-buildable
  // and demonstrates Server Actions usage. We can wire Resend/Nodemailer later.
  console.log("[contact]", { name, email, messageLength: message.length });
}
