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
import { Preloader } from "@/components/preloader"
import { AvailabilityBadge } from "@/components/availability-badge"
import { BackToTop } from "@/components/back-to-top"
import { SnowEffect } from "@/components/snow-effect"


import {
    getPersonalInfo,
    getExperience,
    // getProjects,
    getSkills,
    getCertifications,
    getBlogPosts
} from "@/lib/contentful"


export default async function Home() {

    const [
        personalInfo,
        // experience,
        // projects,
        // skills,
        // certifications,
        // blogs
    ] = await Promise.all([
        getPersonalInfo(),
        // getExperience(),
        // getProjects(),
        // getSkills(),
        // getCertifications(),
        // getBlogPosts()
    ]);

  return (
      <>
          {/*<Preloader />*/}
          <AvailabilityBadge />
          <ScrollProgress />
          {/*<CustomCursor />*/}
          <BackToTop />
          {/*<SnowEffect />*/}

          <main className="min-h-screen bg-background">
              <Navigation personalInfo={personalInfo} />
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
