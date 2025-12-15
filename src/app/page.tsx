import { TopNav } from "@/components/landing/top-nav";
import { HeroSection } from "@/components/landing/hero-section";
import { SkillsSection } from "@/components/landing/skills-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <TopNav />
            <main>
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
