"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navItems, personalInfo } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
              isScrolled ? "glass py-4" : "py-6 bg-transparent",
          )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <motion.a
              href="#"
              className="font-serif text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <li key={item.href}>
                  <motion.a
                      href={item.href}
                      className={cn(
                          "relative text-sm font-medium transition-colors",
                          activeSection === item.href.replace("#", "")
                              ? "text-primary"
                              : "text-muted-foreground hover:text-foreground",
                      )}
                      whileHover={{ y: -2 }}
                  >
                    {item.label}
                    {activeSection === item.href.replace("#", "") && (
                        <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </motion.a>
                </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden glass border-t border-border"
              >
                <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
                  {navItems.map((item, index) => (
                      <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                      >
                        <a
                            href={item.href}
                            className="block py-2 text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                  ))}
                </ul>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
  )
}
