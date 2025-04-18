"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, FileText, BookOpen } from "lucide-react"


type ResearchInterest = {
  id: number
  title: string
  description: string
  relatedAreas: string[]
  icon: "concept" | "application" | "theory"
}

const researchInterests: ResearchInterest[] = [
  {
    id: 1,
    title: "Computer Vision & Deep Learning for Healthcare Applications",
    description:
        "Exploring how computer vision techniques can improve medical imaging analysis, disease detection, and patient monitoring systems. Particularly interested in developing models that can work with limited labeled data and provide explainable results for clinical settings.",
    relatedAreas: ["Medical Imaging", "Explainable AI", "Few-Shot Learning"],
    icon: "application",
  },
  {
    id: 2,
    title: "Efficient Deep Learning & Machine Learning Architectures",
    description:
        "Investigating methods to create more efficient neural network & ML architectures that maintain high accuracy while reducing computational requirements. Focus on model compression, knowledge distillation, and hardware-aware neural architecture search.",
    relatedAreas: ["Model Optimization", "Neural Architecture Search", "Edge AI"],
    icon: "concept",
  },
  {
    id: 3,
    title: "Multi-Modal Learning Systems",
    description:
        "Researching approaches that combine multiple data modalities (vision, text, audio) to create more robust and comprehensive AI systems. Interested in cross-modal transfer learning and attention mechanisms for integrating information across modalities.",
    relatedAreas: ["Vision-Language Models", "Cross-Modal Learning", "Attention Mechanisms"],
    icon: "theory",
  },
]

const ResearchInterestCard = ({ interest }: { interest: ResearchInterest }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
      >
        <Card className="h-full flex flex-col card-hover">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                {interest.icon === "concept" && <Lightbulb className="h-5 w-5 text-primary" />}
                {interest.icon === "application" && <FileText className="h-5 w-5 text-primary" />}
                {interest.icon === "theory" && <BookOpen className="h-5 w-5 text-primary" />}
              </div>
              <div>
                <h3 className="text-xl font-bold">{interest.title}</h3>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground mb-4">{interest.description}</p>
            <div className="flex flex-wrap gap-2">
              {interest.relatedAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
  )
}

const Publications = () => {
  return (
      <section id="publications" className="section-padding bg-muted/30 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center section-heading">
            <h2 className="text-3xl font-bold mb-3">
              <span className="gradient-text">Research Interests</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My current research interests in artificial intelligence and computer vision, focusing on areas where I aim
              to make future contributions.
            </p>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchInterests.map((interest) => (
                  <ResearchInterestCard key={interest.id} interest={interest} />
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Publications
