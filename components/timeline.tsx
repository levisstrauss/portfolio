"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type TimelineItem = {
  id: number
  date: string
  title: string
  description: string
  icon: "education" | "project"
  location?: string
  tags?: string[]
}

// Update the timelineData array to only include education entries with the correct dates
const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "2025 - 2026",
    title: "MS in Computer Science",
    description:
        "Pursuing advanced studies at University of Illinois at Urbana-Champaign with focus on AI and machine " +
        "learning. Relevant coursework includes Deep Learning, Computer Vision, and Natural Language Processing.",
    icon: "education",
    location: "Urbana-Champaign, IL",
    tags: ["Machine Learning", "Computer Vision", "NLP"],
  },
  {
    id: 2,
    date: "2022 - 2024",
    title: "BSc in Computer Science",
    description:
        "Graduated from Penn State University with a strong foundation in computer science fundamentals, algorithms, " +
        "and data structures. Completed minor in Mathematics.",
    icon: "education",
    location: "University Park, PA",
    tags: ["Algorithms", "Data Structures", "Software Engineering"],
  },
]

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-8 last:mb-0"
      >
        <div className="flex items-start">
          {/* Timeline connector and dot */}
          <div className="relative mr-4 md:mr-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 z-10 shadow-sm">
              {item.icon === "education" ? (
                  <GraduationCap className="h-5 w-5 text-primary" />
              ) : (
                  <ImageIcon className="h-5 w-5 text-primary" />
              )}
            </div>
            {index !== timelineData.length - 1 && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/30 to-primary/5"></div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <Card className="overflow-hidden border border-border/50 shadow-sm hover:shadow transition-shadow duration-300">
              <CardContent className="p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      {item.location && (
                          <div className="flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            <span>{item.location}</span>
                          </div>
                      )}
                    </div>
                  </div>
                  <div className={cn("px-3 py-1 rounded-full text-xs font-medium", getIconBackground(item.icon))}>
                    {getIconLabel(item.icon)}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{item.description}</p>

                {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-background/80">
                            {tag}
                          </Badge>
                      ))}
                    </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
  )
}

// Helper function to get background color based on icon type
const getIconBackground = (icon: string) => {
  switch (icon) {
    case "education":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    case "project":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }
}

// Helper function to get label based on icon type
const getIconLabel = (icon: string) => {
  switch (icon) {
    case "education":
      return "Education"
    case "project":
      return "Computer Vision Project"
    default:
      return "Experience"
  }
}

// Update the section title and description to reflect education focus
const Timeline = () => {
  return (
      <section id="timeline" className="section-padding bg-muted/30 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center section-heading">
            <h2 className="text-3xl font-bold mb-3">
              <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey in computer science, building a strong foundation in algorithms, data structures, and
              specializing in artificial intelligence and machine learning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Timeline