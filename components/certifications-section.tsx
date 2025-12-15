"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, CheckCircle } from "lucide-react"
import { certifications } from "@/lib/data"

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Credentials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg">
            Recognized achievements and professional certifications that validate my expertise.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-2xl group hover:border-primary/40 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Badge icon */}
              <div className={`w-14 h-14 rounded-xl ${cert.color} flex items-center justify-center mb-4`}>
                <Award className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-foreground mb-2">{cert.title}</h3>
              <p className="text-primary font-medium text-sm mb-3">{cert.issuer}</p>
              <p className="text-foreground/60 dark:text-muted-foreground text-sm mb-4">{cert.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-foreground/50 dark:text-muted-foreground">{cert.date}</span>
                <div className="flex items-center gap-2">
                  {cert.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-500">
                      <CheckCircle size={14} />
                      Verified
                    </span>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
