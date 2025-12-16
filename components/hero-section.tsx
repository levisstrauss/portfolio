"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, MapPin, Mail, Download } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { ParticleBackground } from "./particle-background"
import { MagneticButton } from "./magnetic-button"

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex]
    const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            if (displayedText.length < currentRole.length) {
              setDisplayedText(currentRole.slice(0, displayedText.length + 1))
            } else {
              setTimeout(() => setIsDeleting(true), 2000)
            }
          } else {
            if (displayedText.length > 0) {
              setDisplayedText(displayedText.slice(0, -1))
            } else {
              setIsDeleting(false)
              setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
            }
          }
        },
        isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Greeting */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-primary font-semibold mb-4 tracking-wider uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            {/* Name - FIXED LCP: Removed opacity: 0 from initial state so text shows instantly */}
            <motion.h1
                initial={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-foreground">{"I'm "}</span>
              <span className="text-gradient glow-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-12 md:h-16 mb-8"
            >
            <span className="text-xl md:text-3xl font-light text-foreground/70 dark:text-muted-foreground">
              {displayedText}
              <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 align-middle"
              />
            </span>
            </motion.div>

            {/* Location & Email */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-6 mb-8 text-foreground/60 dark:text-muted-foreground"
            >
            <span className="flex items-center gap-2 font-medium">
              <MapPin size={18} className="text-primary" />
              {personalInfo.location}
            </span>
              <span className="flex items-center gap-2 font-medium">
              <Mail size={18} className="text-primary" />
                {personalInfo.email}
            </span>
            </motion.div>

            {/* CTA Buttons - Added magnetic effect and resume download */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <MagneticButton
                  href="#projects"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                  href="#contact"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </MagneticButton>
              <MagneticButton
                  href="/resume.pdf"
                  className="px-8 py-4 glass border border-border/50 dark:border-white/10 text-foreground font-semibold rounded-lg hover:border-primary/50 transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </MagneticButton>
            </motion.div>

            {/* Social Links - FIXED ACCESSIBILITY: Added aria-label to map function */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center gap-6"
            >
              {[
                { icon: Github, href: personalInfo.social.github, label: "GitHub Profile" },
                { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn Profile" },
                { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter Profile" },
              ].map(({ icon: Icon, href, label }) => (
                  <MagneticButton
                      key={label}
                      href={href}
                      aria-label={label}
                      className="p-3 rounded-full glass text-foreground/60 dark:text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={22} />
                  </MagneticButton>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center gap-2 text-foreground/50 dark:text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </section>
  )
}
