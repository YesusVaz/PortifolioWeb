import { HeaderV2 } from "@/components/header-v2";
import { Hero } from "@/components/hero-v2";
import { About } from "@/components/about-v2";
import { Projects } from "@/components/projects-v2";
import { Contact } from "@/components/contact-v2";
import FooterV2 from "@/sections/footer-v2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderV2 />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <FooterV2 />
    </div>
  );
}
