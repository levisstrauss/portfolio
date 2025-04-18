"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5

        // Adjust particle color based on theme
        const isDark =
          theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        this.color = isDark
          ? `rgba(123, 97, 255, ${Math.random() * 0.5 + 0.1})`
          : `rgba(123, 97, 255, ${Math.random() * 0.3 + 0.05})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 100)

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Connect particles with lines
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Adjust line color based on theme
            const isDark =
              theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
            ctx.beginPath()
            ctx.strokeStyle = isDark
              ? `rgba(123, 97, 255, ${0.2 - distance / 500})`
              : `rgba(123, 97, 255, ${0.15 - distance / 600})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [theme])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="gradient-text">Zakaria Coulibaly</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI/ML Engineer Building the Future</h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Crafting intelligent systems that solve real-world problems through machine learning, deep learning, and
              artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/resume.pdf" download="Zakaria_Coulibaly_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
