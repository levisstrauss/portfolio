"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft, Search } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] font-serif font-bold leading-none">
            <span className="text-gradient glow-text">4</span>
            <motion.span
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="inline-block text-primary"
            >
              0
            </motion.span>
            <span className="text-gradient glow-text">4</span>
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-foreground">Oops! Page Not Found</h2>
          <p className="text-foreground/60 dark:text-muted-foreground text-lg max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.
          </p>
        </motion.div>

        {/* Animated Search Icon */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-12">
          <motion.div
            animate={{
              x: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <div className="w-16 h-16 rounded-full glass border border-border/50 dark:border-white/10 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="/"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </MagneticButton>

          <MagneticButton
            href="/#projects"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            View Projects
          </MagneticButton>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-foreground/30 dark:text-muted-foreground/30"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </motion.div>
      </div>
    </main>
  )
}
