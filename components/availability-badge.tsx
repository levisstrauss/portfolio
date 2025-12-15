"use client"

import { motion } from "framer-motion"

export function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <motion.a
        href="#contact"
        className="group flex items-center gap-3 glass px-4 py-3 rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        whileHover={{ x: -5 }}
      >
        {/* Pulsing dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>

        {/* Text - vertical on hover expands */}
        <div className="flex flex-col">
          <span className="text-xs font-medium text-foreground whitespace-nowrap">Open to</span>
          <span className="text-xs font-bold text-primary whitespace-nowrap">Opportunities</span>
        </div>
      </motion.a>
    </motion.div>
  )
}
