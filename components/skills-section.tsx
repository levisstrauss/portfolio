"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Globe, Cloud, Database, Terminal } from "lucide-react"

const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    description: "Core languages I use daily for building robust applications",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Go", "Rust"],
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Frameworks and tools for building intelligent systems",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "OpenCV", "NLTK", "Keras"],
  },
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    description: "Modern frameworks for building exceptional user experiences",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Django", "Tailwind CSS", "GraphQL", "REST APIs"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment at scale",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Nginx"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    description: "Data storage and management solutions",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Supabase", "Pinecone", "MySQL", "DynamoDB"],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: Terminal,
    description: "Development tools and best practices",
    skills: [
      "Git",
      "Agile",
      "System Design",
      "Testing",
      "Documentation",
      "Code Review",
      "Performance Optimization",
      "Security",
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />

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
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Skills</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg">
            A comprehensive toolkit built over years of hands-on experience
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-2xl hover:border-primary/40 transition-all group hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 dark:group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <p className="text-sm text-foreground/60 dark:text-muted-foreground mb-4">{category.description}</p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-foreground/70 dark:text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
