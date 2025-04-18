"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain } from "lucide-react"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center section-heading">
          <h2 className="text-3xl font-bold mb-3">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer with expertise in AI/ML, building intelligent systems that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Profile Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full overflow-hidden border-border/50 shadow-sm flex flex-col">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <Image src="/focused-ai-engineer.png" alt="Zakaria Coulibaly" fill className="object-cover" priority />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Zakaria C.</h3>
                  <p className="text-primary font-medium mb-6">Full-Stack Developer & AI/ML Specialist</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                        <Brain className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">AI/ML Expertise</span>
                        <p className="text-muted-foreground">Computer Vision, NLP, ML Pipelines</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Technical Stack</span>
                        <p className="text-muted-foreground">PyTorch, TensorFlow, React, Node.js</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Journey Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-border/50 shadow-sm flex flex-col">
              <CardContent className="p-6 md:p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="mb-4 text-muted-foreground">
                    As a Full-Stack Developer with deep expertise in AI/ML, my career path has been defined by building
                    production-ready intelligent systems that solve complex business challenges. My technical foundation
                    combines advanced computer vision and NLP capabilities with software engineering best practices,
                    allowing me to develop AI solutions that scale effectively in real-world environments.
                  </p>

                  <p className="mb-4 text-muted-foreground">
                    At UIUC's Computer Science program, I'm expanding my knowledge of how AI/ML can transform healthcare
                    outcomes and business operations. My hands-on experience with PyTorch and TensorFlow enables me to
                    implement end-to-end ML pipelines that deliver measurable impact. I've developed a particular
                    strength in model optimization, deployment infrastructure, and long-term monitoring systems that
                    ensure AI continues to provide value over time.
                  </p>

                  <p className="text-muted-foreground">
                    I'm passionate about technical leadership that bridges the gap between cutting-edge research and
                    practical implementation, creating AI systems that not only perform well in controlled environments
                    but thrive when solving real problems for real users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
