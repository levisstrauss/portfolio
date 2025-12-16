"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Snowflake {
    id: number
    x: number
    size: number
    duration: number
    delay: number
    opacity: number
}

export function SnowEffect() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

    useEffect(() => {
        // Generate snowflakes
        const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100, // Random horizontal position (%)
            size: Math.random() * 4 + 2, // Size between 2-6px
            duration: Math.random() * 3 + 5, // Fall duration 5-8s
            delay: Math.random() * 5, // Random delay 0-5s
            opacity: Math.random() * 0.6 + 0.4, // Opacity 0.4-1
        }))
        setSnowflakes(flakes)
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute rounded-full bg-white dark:bg-white/90"
                    style={{
                        left: `${flake.x}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        top: "-10px",
                    }}
                    animate={{
                        y: ["0vh", "110vh"],
                        x: [0, Math.sin(flake.id) * 50, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: flake.duration,
                        delay: flake.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}
