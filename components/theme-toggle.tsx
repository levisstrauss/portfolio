"use client"

import {useEffect, useState} from "react";
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure the component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Render a placeholder div until the component is mounted on the client
  if (!mounted) {
    return (
        <div className="p-2 rounded-full bg-secondary/50 opacity-0 pointer-events-none">
          <div className="w-4.5 h-4.5" />
        </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/*{theme === "dark" ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}*/}
        {theme === "dark" ? (
            <Moon size={18} className="text-primary" />
        ) : (
            <Sun size={18} className="text-primary" />
        )}
      </motion.div>
    </motion.button>
  )
}
