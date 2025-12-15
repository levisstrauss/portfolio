"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/*<motion.div*/}
      {/*  initial={false}*/}
      {/*  animate={{ rotate: theme === "dark" ? 0 : 180 }}*/}
      {/*  transition={{ duration: 0.3, ease: "easeInOut" }}*/}
      {/*>*/}
      {/*  /!*{theme === "dark" ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}*!/*/}
      {/*</motion.div>*/}
    </motion.button>
  )
}
