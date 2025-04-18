"use client"

import type React from "react"
import {useCallback} from "react"

interface SmoothScrollOptions {
  offset?: number
  behavior?: ScrollBehavior
}

export function useSmoothScroll({ offset = 80, behavior = "smooth" }: SmoothScrollOptions = {}) {
  const scrollToElement = useCallback(
    (elementId: string) => {
      // Prevent default hash change behavior
      return (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        // Get the target element
        const targetId = elementId.replace("#", "")
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Calculate position with offset
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          // Scroll smoothly to the target
          window.scrollTo({
            top: offsetPosition,
            behavior,
          })

          // Update URL without causing a jump (optional)
          if (window.history.pushState) {
            window.history.pushState(null, "", elementId)
          }
        }
      }
    },
    [offset, behavior],
  )

  // Direct scroll function that can be called without an event
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const targetId = sectionId.replace("#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Calculate position with offset
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        // Scroll smoothly to the target
        window.scrollTo({
          top: offsetPosition,
          behavior,
        })

        // Update URL without causing a jump (optional)
        if (window.history.pushState) {
          window.history.pushState(null, "", `#${targetId}`)
        }
      }
    },
    [offset, behavior],
  )

  return { scrollToElement, scrollToSection }
}
