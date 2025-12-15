"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, ChevronRight, Calendar, MapPin } from "lucide-react"
import { experience } from "@/lib/data"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const activeExp = experience[activeIndex]

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Experience</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg">
            Building expertise through impactful roles at leading technology companies
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-6">
            {/* Left side - Company tabs */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {experience.map((exp, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all whitespace-nowrap md:whitespace-normal ${
                    activeIndex === index
                      ? "glass border-primary/40 bg-primary/5"
                      : "hover:bg-secondary/50 border border-transparent"
                  }`}
                >
                  {/* Active indicator */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full hidden md:block"
                    />
                  )}

                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeIndex === index ? "bg-primary/20" : "bg-secondary"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={
                        activeIndex === index ? "text-primary" : "text-foreground/50 dark:text-muted-foreground"
                      }
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-medium text-sm truncate ${
                        activeIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p className="text-xs text-foreground/50 dark:text-muted-foreground truncate">{exp.period}</p>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`hidden md:block flex-shrink-0 transition-transform ${
                      activeIndex === index
                        ? "text-primary rotate-0"
                        : "text-foreground/40 dark:text-muted-foreground -rotate-90"
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Right side - Experience details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass p-6 md:p-8 rounded-2xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{activeExp.title}</h3>
                    <p className="text-primary font-medium text-lg">{activeExp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-foreground/60 dark:text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" />
                      {activeExp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" />
                      Remote / On-site
                    </span>
                  </div>
                </div>

                <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed mb-6">
                  {activeExp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {activeExp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-foreground/70 dark:text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-xs px-3 py-1.5 bg-secondary text-foreground/70 dark:text-secondary-foreground rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
