"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Star, GitFork, Layers, Globe, Brain, Sparkles, ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import Link from "next/link"
import { ShareButtons } from "@/components/share-buttons"

const categories = [
  { id: "all", label: "All", icon: Layers },
  { id: "ai", label: "AI / ML", icon: Brain },
  { id: "web", label: "Web", icon: Globe },
  { id: "fullstack", label: "Full Stack", icon: Sparkles },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

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
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Projects</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg">
            A collection of projects showcasing my expertise in AI/ML and full-stack development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass inline-flex p-1.5 rounded-full gap-1">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-foreground/60 dark:text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {category.label}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className="glass p-6 rounded-2xl h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 dark:group-hover:bg-primary/20 transition-colors">
                      <Github className="text-primary" size={24} />
                    </div>
                    <div className="flex items-center gap-3">
                      <ShareButtons
                        title={project.title}
                        url={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                      />
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/50 dark:text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ y: -2 }}
                          aria-label="View on GitHub"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/50 dark:text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ y: -2 }}
                          aria-label="View demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 dark:text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                    {project.description}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60 dark:text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star size={14} className="text-primary" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} className="text-primary" />
                        {project.stats.forks}
                      </span>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary text-foreground/70 dark:text-secondary-foreground rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Link */}
                  <Link
                    href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link mt-auto"
                  >
                    View Case Study
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* Hover Gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at ${hoveredIndex === index ? "50%" : "100%"} 50%, rgba(120, 90, 40, 0.03) 0%, transparent 50%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <p className="text-foreground/60 dark:text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
