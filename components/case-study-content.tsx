"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  category: string
  stats: { stars: number; forks: number }
}

interface CaseStudyContentProps {
  project: Project
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          {/* Back button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/#projects">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 capitalize">
              {project.category === "ai" ? "AI / ML" : project.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
            <p className="text-xl text-foreground/70 dark:text-muted-foreground max-w-3xl mb-8">
              {project.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-foreground/60 dark:text-muted-foreground">
                <Calendar size={18} />
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60 dark:text-muted-foreground">
                <Clock size={18} />
                <span>3 months</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60 dark:text-muted-foreground">
                <Users size={18} />
                <span>Solo Project</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-background">
                    <Github size={18} className="mr-2" />
                    View Code
                  </Button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
        >
          <div className="text-center p-8">
            <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-4xl font-bold text-primary">{project.title.charAt(0)}</span>
            </div>
            <p className="text-foreground/50 dark:text-muted-foreground">Project Screenshot</p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Overview */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Overview</h2>
              <div className="prose prose-lg dark:prose-invert text-foreground/70 dark:text-muted-foreground">
                <p>
                  {project.description} This project showcases my ability to design and implement complex systems from
                  the ground up, focusing on scalability, performance, and user experience.
                </p>
                <p>
                  The goal was to create a solution that not only works but excels in production environments, handling
                  real-world edge cases and maintaining high availability.
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Key Challenges</h2>
              <div className="space-y-4">
                {["Scalability & Performance", "Complex State Management", "Real-time Data Processing"].map(
                  (challenge, i) => (
                    <div key={i} className="glass p-4 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-2">{challenge}</h3>
                      <p className="text-sm text-foreground/60 dark:text-muted-foreground">
                        Implemented innovative solutions to overcome technical hurdles and deliver a robust,
                        production-ready application.
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-serif font-bold text-gradient mb-2">{project.stats.stars}+</div>
                  <div className="text-sm text-foreground/60 dark:text-muted-foreground">GitHub Stars</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-serif font-bold text-gradient mb-2">{project.stats.forks}+</div>
                  <div className="text-sm text-foreground/60 dark:text-muted-foreground">Forks</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-serif font-bold text-gradient mb-2">99%</div>
                  <div className="text-sm text-foreground/60 dark:text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-4">Project Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/60 dark:text-muted-foreground">Category</span>
                  <span className="text-foreground capitalize">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60 dark:text-muted-foreground">Status</span>
                  <span className="text-green-500">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60 dark:text-muted-foreground">License</span>
                  <span className="text-foreground">MIT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
