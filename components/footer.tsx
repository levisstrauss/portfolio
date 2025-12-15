"use client"

import { motion } from "framer-motion"
import { personalInfo, navItems } from "@/lib/data"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a href="#" className="font-serif text-2xl font-bold text-gradient" whileHover={{ scale: 1.05 }}>
            {personalInfo.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made in {personalInfo.location}
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
