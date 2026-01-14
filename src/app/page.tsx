import { TopNav } from "@/components/landing/top-nav";
import { BottomNav } from "@/components/landing/bottom-nav";
import { HeroSection } from "@/components/landing/hero-section";
import { SkillsSection } from "@/components/landing/skills-section";
import { ExperienceSection } from "@/components/landing/experience-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-2 sm:px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-3 sm:py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
            <TopNav />
            <main className="pb-20 md:pb-0">
              <HeroSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
