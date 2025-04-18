import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Zakaria Coulibaly",
  description: "Articles and insights on AI, machine learning, and software development by Zakaria Coulibaly",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="min-h-screen bg-background">{children}</main>
}
