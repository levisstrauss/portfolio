"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  githubUrl: string
  demoUrl: string
  complexity: "beginner" | "intermediate" | "advanced"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Advanced Flower Classification System",
    description:
      "An advanced flower classification system using EfficientNet-B0 with transfer learning. Fine-tuned on custom data for species identification with high accuracy.",
    image: "flower-classification.webp",
    tags: ["PyTorch", "React", "Next.js", "Computer Vision", "EfficientNet-B0", "Transfer Learning", "CNN"],
    category: "computer-vision",
    githubUrl: "https://github.com/levisstrauss/flower_classification",
    demoUrl: "https://demo.com",
    complexity: "intermediate",
  },
  {
    id: 2,
    title: "Multi-Architecture Dog Breed Classification",
    description:
        "A computer vision system comparing VGG, ResNet, and AlexNet architectures. Achieved 100% dog detection and 93.3% breed classification using optimized VGG with data augmentation and model ensembles..",
    image: "dog-breed-identification.png",
    tags: ["PyTorch", "Transfer Learning", "Model Ensembles", "CNN Architecture Design"],
    category: "computer-vision",
    githubUrl: "https://github.com/levisstrauss/Dog_breed_identification",
    demoUrl: "https://demo.com",
    complexity: "intermediate",
  },
  {
    id: 3,
    title: "FoodVision Big: 101-Class Food Classifier",
    description: "A food classification system identifying 101 food categories using fine-tuned EfficientNetB2. Achieved high performance in just 5 training epochs through feature extraction and data augmentation.",
    image: "food-identification.webp",
    tags: ["PyTorch", "Transfer Learning", "EfficientNet-B0", "React"],
    category: "computer-vision",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    complexity: "advanced",
  },
  {
    id: 4,
    title: "Real-time Face Mask Detection System",
    description: "Face mask detection system with 98.2% accuracy and 0.12s inference time using custom model head on ResNet18 backbone. Deployed to Hugging Face Spaces for accessibility and monitoring.",
    image: "face-mask-detection.webp",
    tags: ["PyTorch", "Model Optimization", "FastAPI", "React", "transfer learning", "Hugging Face Spaces", "Docker"],
    category: "computer-vision",
    githubUrl: "https://github.com/levisstrauss/food-vision-big",
    demoUrl: "https://demo.com",
    complexity: "intermediate",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full flex flex-col card-hover overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Badge
            variant={
              project.complexity === "beginner"
                ? "outline"
                : project.complexity === "intermediate"
                  ? "secondary"
                  : "default"
            }
          >
            {project.complexity.charAt(0).toUpperCase() + project.complexity.slice(1)}
          </Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "computer-vision", name: "Computer Vision" },
    // { id: "nlp", name: "NLP" },
    // { id: "time-series", name: "Time Series" },
    // { id: "recommendation", name: "Recommendation" },
    // { id: "anomaly-detection", name: "Anomaly Detection" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Ensure consistent height during filter changes
  useEffect(() => {
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.offsetHeight
      sectionRef.current.style.minHeight = `${sectionHeight}px`
    }
  }, [filter])

  return (
    <section id="projects" className="pb-4 md:pb-6 pt-10 md:pt-14 scroll-mt-20" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center section-heading">
          <h2 className="text-3xl font-bold mb-3">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI and machine learning projects, from computer vision applications to natural
            language processing systems.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList className="flex flex-wrap justify-center mb-6">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setFilter(category.id)}
                className="data-[state=active]:gradient-text"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={filter} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
