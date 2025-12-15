"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration])

  // Format large numbers
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
