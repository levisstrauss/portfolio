"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import Publications from "@/components/publications"
import Blog from "@/components/blog"
import ContactInfo from "@/components/contact"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import SectionConnector from "@/components/section-connector"

export default function Home() {
  // Handle hash navigation when the page loads
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Add a slight delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 300)
      }
    }
  }, [])

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Projects />
      <SectionConnector />
      <Skills />
      <Education />
      <Certifications />
      <Timeline />
      <Publications />
      <Blog />
      <ContactInfo />
    </div>
  )
}
