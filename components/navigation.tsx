"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollToElement } = useSmoothScroll({ offset: 80 })
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check for hash in URL on page load and scroll to that section
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [isHomePage, pathname])

  // Handle navigation with smooth transitions
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (href === "/") {
      // Navigate to home page top
      router.push(href)
      return
    }

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2) // Remove the '/#' part

      if (isHomePage) {
        // If already on home page, just scroll to the section
        scrollToElement(`#${sectionId}`)(e)
      } else {
        // If on another page, navigate to home with the hash
        // The hash will be handled by the useEffect above when the page loads
        router.push(href)
      }
    } else {
      // Regular navigation to other pages
      router.push(href)
    }
  }

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Timeline", href: "/#timeline" },
    { name: "Blog", href: "/blog-site" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold gradient-text"
          onClick={(e) => {
            e.preventDefault()
            router.push("/")
            window.scrollTo({ top: 0, behavior: "smooth" })
            setIsMenuOpen(false)
          }}
        >
          Zakaria Coulibaly
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navigation
