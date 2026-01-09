import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { Preloader } from "@/components/preloader"
import { AvailabilityBadge } from "@/components/availability-badge"
import { BackToTop } from "@/components/back-to-top"
import { CertificationsSection } from "@/components/certifications-section"
import { SnowEffect } from "@/components/snow-effect"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
    return (
        <>
            <Preloader />
            {/*<CustomCursor />*/}
            <ScrollProgress />
            <AvailabilityBadge />
            <BackToTop />
            {/*<SnowEffect />*/}

            <main className="min-h-screen bg-background">
                <Navigation />
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <CertificationsSection />
                <ContactSection />
                <Footer />
            </main>
        </>
    )
}
