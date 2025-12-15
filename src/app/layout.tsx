import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Yesus Vaz - Full-Stack Developer",
  description: "Yesus Vaz: Full-Stack Developer Crafting Interactive Web Experiences.",
  openGraph: {
    title: "Yesus Vaz - Full-Stack Developer",
    description: "Yesus Vaz: Full-Stack Developer Crafting Interactive Web Experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yesus Vaz - Full-Stack Developer",
    description: "Yesus Vaz: Full-Stack Developer Crafting Interactive Web Experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light !scroll-smooth" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="yesus-portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
