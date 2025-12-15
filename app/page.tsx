import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Features
import { ScrollProgress } from "@/components/scroll-progress"
import { CustomCursor } from "@/components/custom-cursor"



export default function Home() {
  return (
      <>
          <ScrollProgress />
          <CustomCursor />

          <main className="min-h-screen bg-background">
              <Navigation />
              <HeroSection />
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <CertificationsSection />
              <BlogSection />
              <ContactSection />
              <Footer />
          </main>
      </>
  )
}
