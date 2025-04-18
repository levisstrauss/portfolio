"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

type Certification = {
  id: number
  name: string
  issuer: string
  date: string
  score: string
  skills: string[]
  category: "ai" | "programming" | "math" | "other"
  certificateUrl: string
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "AI Programming with Python Nanodegree",
    issuer: "Udacity",
    date: "Dec 2024",
    score: "100%",
    skills: [
      "Numpy",
      "Matplotlib",
      "Vector Visualization",
      "Python data types",
      "Control flow",
      "Python Operators",
      "Training Neural Networks",
      "Backpropagation",
      "PyTorch",
    ],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 2,
    name: "Generative AI for Software Development",
    issuer: "DeepLearning.AI",
    date: "Oct 2024",
    score: "99%",
    skills: [
      "Software Engineering",
      "Large Language Models",
      "Software Development",
      "Generative AI",
      "Machine Learning",
    ],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 3,
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    date: "Jun 2024",
    score: "100%",
    skills: ["Python Programming", "Machine Learning", "Large Language Models", "LLMs", "Generative AI"],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 4,
    name: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    date: "Jun 2024",
    score: "97%",
    skills: ["Machine Translation", "Transformers", "Sentiment Analysis", "Word2vec", "Attention Models"],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 5,
    name: "Machine Learning in Production",
    issuer: "DeepLearning.AI",
    date: "Jun 2024",
    score: "98%",
    skills: ["Machine Translation", "Transformers", "Sentiment Analysis", "Word2vec", "Attention Models"],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 6,
    name: "Programming in Python",
    issuer: "Meta",
    date: "Jun 2024",
    score: "99%",
    skills: [
      "Computer Programming",
      "Django (Web Framework)",
      "Python Programming",
      "Application Programming Interfaces (API)",
      "Cloud Hosting",
    ],
    category: "programming",
    certificateUrl: "#",
  },
  {
    id: 7,
    name: "C Programming with Linux Specialization",
    issuer: "Dartmouth College",
    date: "May 2024",
    score: "98%",
    skills: [
      "Software Engineering",
      "Computer Science",
      "Computer Programming",
      "Algorithms",
      "C Programming",
      "Compiler",
      "Debugging",
      "Linux",
    ],
    category: "programming",
    certificateUrl: "#",
  },
  {
    id: 8,
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "May 2024",
    score: "97%",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Neural Networks",
      "Machine Learning Algorithms",
      "Applied Machine Learning",
      "Python Programming",
      "Algorithms",
      "Computer Programming",
      "Computer Vision",
    ],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 9,
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "May 2024",
    score: "98%",
    skills: [
      "Logistic Regression",
      "Artificial Neural Network",
      "Linear Regression",
      "Decision Trees",
      "Recommender Systems",
    ],
    category: "ai",
    certificateUrl: "#",
  },
  {
    id: 10,
    name: "Minor in mathematics",
    issuer: "Penn State University",
    date: "May 2024",
    score: "97%",
    skills: ["Linear Algebra", "Calculus I, II, III", "Probability"],
    category: "math",
    certificateUrl: "#",
  },
]

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
      >
        <Card className="h-full flex flex-col card-hover">
          <CardHeader className="pb-2 px-4 pt-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-base">{certification.name}</CardTitle>
                <div className="text-muted-foreground text-sm mt-1">{certification.issuer}</div>
              </div>
              <Badge variant="outline" className="text-primary border-primary text-xs">
                {certification.score}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-2">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{certification.date}</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow px-4 pb-4 pt-0">
            <div className="flex flex-wrap gap-1 mb-3">
              {certification.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
              ))}
              {certification.skills.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{certification.skills.length - 3} more
                  </Badge>
              )}
            </div>
            <Button asChild variant="outline" size="sm" className="w-full h-8 text-xs">
              <Link href={certification.certificateUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
  )
}

const Certifications = () => {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", name: "All Certifications" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "programming", name: "Programming" },
    { id: "math", name: "Mathematics" },
  ]

  const filteredCertifications =
      filter === "all" ? certifications : certifications.filter((cert) => cert.category === filter)

  return (
      <section id="certifications" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center section-heading">
            <h2 className="text-3xl font-bold mb-3">
              <span className="gradient-text">Professional Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning is essential in the rapidly evolving field of AI and machine learning. Here are some of
              the professional certifications I've earned to stay at the cutting edge.
            </p>
            <div className="flex items-center justify-center mt-3">
              <Award className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">{certifications.length} Professional Certifications</span>
            </div>
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCertifications.map((certification) => (
                    <CertificationCard key={certification.id} certification={certification} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}

export default Certifications
