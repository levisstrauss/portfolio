import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Zakaria Coulibaly | AI/ML Engineer & Full-Stack Developer",
  description:
      "Personal portfolio of Zakaria Coulibaly - AI/ML Engineer, Full-Stack Developer, and Data Scientist specializing " +
      "in cutting-edge AI solutions and scalable web applications.",
  keywords: ["AI Engineer", "ML Engineer", "Full-Stack Developer", "React", "Next.js", "Python", "Machine Learning"],
  authors: [{ name: "Zakaria Coulibaly" }],
  openGraph: {
    title: "Zakaria Coulibaly | AI/ML Engineer & Full-Stack Developer",
    description: "Building the future with AI and elegant code",
    type: "website",
  }
}

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
      </ThemeProvider>
      </body>
      </html>
  )
}
