import { notFound } from "next/navigation"
import { projects } from "@/lib/data"


// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug)

  if (!project) {
    notFound()
  }

}
