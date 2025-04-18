import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog | Zakaria Coulibaly",
  description: "Articles and insights on AI, machine learning, and software development by Zakaria Coulibaly",
}

export default function BlogPage() {
  return <BlogClientPage />
}
