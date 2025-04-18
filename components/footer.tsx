"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    if (href === "/") {
      router.push(href)
      return
    }

    if (href.startsWith("#")) {
      if (isHomePage) {
        // If already on home page, just scroll to the section
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // If on another page, navigate to home with the hash
        router.push(`/${href}`)
      }
    } else {
      // Regular navigation to other pages
      router.push(href)
    }
  }

  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold gradient-text" onClick={(e) => handleNavigation(e, "/")}>
              Zakaria Coulibaly
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Building intelligent systems that solve real-world problems
            </p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleNavigation(e, "#about")}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleNavigation(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleNavigation(e, "#skills")}
            >
              Skills
            </Link>
            <Link
              href="/blog-site"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleNavigation(e, "/blog-site")}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleNavigation(e, "#contact")}
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Zakaria Coulibaly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
