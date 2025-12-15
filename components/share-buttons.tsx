"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Share2, X, Twitter, Linkedin, Link2, Check } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
  url?: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${title}`)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#0A66C2]",
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground/50 dark:text-muted-foreground hover:text-primary transition-colors p-1"
        whileHover={{ y: -2 }}
        aria-label="Share project"
      >
        {isOpen ? <X size={18} /> : <Share2 size={18} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 z-50 glass rounded-xl p-2 flex items-center gap-1 shadow-xl"
          >
            {shareLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg text-foreground/60 dark:text-muted-foreground ${link.color} transition-colors hover:bg-primary/10`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Share on ${link.name}`}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
            <motion.button
              onClick={copyToClipboard}
              className={`p-2 rounded-lg transition-colors hover:bg-primary/10 ${copied ? "text-green-500" : "text-foreground/60 dark:text-muted-foreground hover:text-primary"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Copy link"
            >
              {copied ? <Check size={18} /> : <Link2 size={18} />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
