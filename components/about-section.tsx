"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Code, Sparkles } from "lucide-react"
import { personalInfo, education } from "@/lib/data"
import { AnimatedCounter } from "@/components/animated-counter"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stats = [
    { icon: Code, value: personalInfo.stats.repositories, suffix: "+", label: "Repositories" },
    { icon: Sparkles, value: personalInfo.stats.stars, suffix: "", label: "GitHub Stars", isLarge: true },
    { icon: Award, value: personalInfo.stats.publications, suffix: "", label: "Paper Read" },
    { icon: GraduationCap, value: personalInfo.stats.contributions, suffix: "+", label: "Contributions" },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Passionate About <span className="text-gradient">Innovation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stats Grid - Using AnimatedCounter */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, suffix, label, isLarge }, index) => (
              <motion.div
                key={label}
                className="glass p-6 rounded-2xl text-center group hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 dark:group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="font-serif text-3xl font-bold text-gradient mb-1">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="text-sm text-foreground/60 dark:text-muted-foreground font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
              <GraduationCap className="inline-block mr-3 text-primary" size={28} />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <span className="text-xs px-3 py-1 bg-primary/15 dark:bg-primary/10 text-primary font-medium rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary font-medium">{edu.school}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-foreground/60 dark:text-muted-foreground">
                  <span>GPA: {edu.gpa}</span>
                  <span>•</span>
                  <span>{edu.focus}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
