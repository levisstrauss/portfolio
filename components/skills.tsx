"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Calculator, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"

type SkillCategory = {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  skills: {
    name: string
    level: number
    description: string
  }[]
}

const skillsData: SkillCategory[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    description:
      "Expertise in various machine learning algorithms, techniques, and frameworks for building intelligent systems.",
    skills: [
      {
        name: "Supervised Learning",
        level: 90,
        description: "Classification, regression, ensemble methods",
      },
      {
        name: "Unsupervised Learning",
        level: 85,
        description: "Clustering, dimensionality reduction, anomaly detection",
      },
      {
        name: "Reinforcement Learning",
        level: 75,
        description: "Q-learning, policy gradients, deep RL",
      },
      {
        name: "Feature Engineering",
        level: 90,
        description: "Feature selection, extraction, and transformation techniques",
      },
      {
        name: "Model Evaluation",
        level: 85,
        description: "Cross-validation, metrics, hyperparameter tuning",
      },
    ],
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    icon: <Brain className="h-5 w-5" />,
    description:
      "Specialized knowledge in neural network architectures and deep learning frameworks for complex pattern recognition.",
    skills: [
      {
        name: "Neural Networks",
        level: 90,
        description: "Feedforward, CNN, RNN, LSTM, GRU",
      },
      {
        name: "Computer Vision",
        level: 85,
        description: "Object detection, segmentation, GANs",
      },
      {
        name: "NLP",
        level: 80,
        description: "Transformers, BERT, GPT, embeddings",
      },
      {
        name: "Transfer Learning",
        level: 85,
        description: "Fine-tuning pre-trained models",
      },
      {
        name: "Model Deployment",
        level: 75,
        description: "TensorFlow Serving, ONNX, TensorRT",
      },
    ],
  },
  {
    id: "programming",
    name: "Programming",
    icon: <Code className="h-5 w-5" />,
    description: "Strong programming skills across multiple languages and frameworks for implementing AI/ML solutions.",
    skills: [
      {
        name: "Python",
        level: 95,
        description: "NumPy, Pandas, scikit-learn, SciPy",
      },
      {
        name: "JavaScript/TypeScript",
        level: 85,
        description: "React, Next.js, Node.js, D3.js",
      },
      {
        name: "SQL",
        level: 80,
        description: "PostgreSQL, MySQL, query optimization",
      },
      {
        name: "Big Data",
        level: 70,
        description: "Spark, Hadoop, distributed computing",
      },
      {
        name: "Cloud Services",
        level: 75,
        description: "AWS, GCP, Azure ML services",
      },
    ],
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: <Calculator className="h-5 w-5" />,
    description: "Strong foundation in mathematical concepts essential for advanced machine learning and AI research.",
    skills: [
      {
        name: "Linear Algebra",
        level: 90,
        description: "Vector spaces, matrices, eigenvalues",
      },
      {
        name: "Calculus",
        level: 85,
        description: "Differential, integral, multivariate",
      },
      {
        name: "Statistics",
        level: 90,
        description: "Probability, hypothesis testing, Bayesian methods",
      },
      {
        name: "Optimization",
        level: 80,
        description: "Gradient descent, convex optimization",
      },
      {
        name: "Graph Theory",
        level: 75,
        description: "Network analysis, algorithms on graphs",
      },
    ],
  },
]

// Helper function to determine skill level text
const getSkillLevelText = (level: number) => {
  if (level >= 90) return "Expert"
  if (level >= 80) return "Advanced"
  if (level >= 70) return "Proficient"
  if (level >= 60) return "Intermediate"
  return "Beginner"
}

// Helper function to get color class based on skill level
const getColorClass = (level: number) => {
  if (level >= 90) return "bg-primary"
  if (level >= 80) return "bg-primary/80"
  if (level >= 70) return "bg-primary/60"
  return "bg-primary/40"
}

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      // If clicking the already expanded category, collapse it
      setExpandedCategory(null)
    } else {
      // Otherwise, expand this category (and collapse any other)
      setExpandedCategory(categoryId)
    }
  }

  return (
    <section id="skills" className="section-padding section-reduced-spacing bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center section-heading">
          <h2 className="text-3xl font-bold mb-3">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in AI, machine learning, and software
            development.
          </p>
        </div>

        <div className="space-y-4">
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              layout
            >
              <Card
                className={`transition-all duration-300 overflow-hidden cursor-pointer ${
                  expandedCategory === category.id ? "shadow-lg border-primary/50" : ""
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">{category.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <p className="text-muted-foreground text-sm">{category.description}</p>
                      </div>
                    </div>
                    <div>
                      {expandedCategory === category.id ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Top skills preview (always visible) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills
                      .filter((skill) => skill.level >= 85)
                      .map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          {skill.name}
                        </Badge>
                      ))}
                  </div>

                  {/* Expanded view with all skills */}
                  <AnimatePresence>
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-6 border-t mt-6">
                          {category.skills.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between mb-1">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-sm font-medium text-muted-foreground">
                                  {getSkillLevelText(skill.level)}
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${getColorClass(skill.level)}`}
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
