"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

type Education = {
  id: number
  degree: string
  field: string
  university: string
  location: string
  years: string
  description: string
  achievements: string[]
  courses: string[]
  logo: string
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science",
    field: "Computer Science",
    university: "University of Illinois at Urbana-Champaign",
    location: "Urbana-Champaign, IL",
    years: "2022 - Present",
    description:
      "Pursuing advanced studies in Computer Science with a focus on artificial intelligence and machine learning. Developing expertise in deep learning architectures, computer vision, and natural language processing.",
    achievements: [
      "GPA: 4.0/4.0",
      // "Graduate Research Assistant in AI Lab",
      // "Teaching Assistant for Machine Learning course",
      "Member of ACM Student Chapter",
    ],
    courses: [
      "Advanced Machine Learning",
      "Deep Learning for healthcare",
      "Natural Language Processing",
      "Computer Vision",
      "Data Mining & Cleaning",
      "Database Systems",
      "Statistics",
      "Internet of Things",
      "Distributed Systems",
    ],
    logo: "/uiuc-quad-autumn.png",
  },
  {
    id: 2,
    degree: "Bachelor of Science",
    field: "Computer Science",
    university: "Penn State University",
    location: "Peen State Harrisburg, PA",
    years: "2022 - 2024",
    description:
      "Completed undergraduate studies in Computer Science with a strong foundation in algorithms, data structures, and software engineering.",
    achievements: [
      "Minor: Mathematics",
      "Societies: NSLS, UPE, ACM",
      "Dean's List for some semesters",
    ],
    courses: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Discrete Mathematics",
        "Programming Language Concepts",
        "Web Development",
        "Calculus",
        "Linear Algebra",
        "Operating Systems",
        "Database Systems",
        "Software Engineering",
        "Compilers",
        "Probability",
    ],
    logo: "/nittany-lion-paw.png",
  },
]

const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center section-heading">
          <h2 className="text-3xl font-bold mb-3">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in Computer Science, where I built a strong foundation in algorithms, data structures,
            and specialized in artificial intelligence and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden card-hover">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                      <Image
                        src={education.logo || "/placeholder.svg"}
                        alt={education.university}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">
                          {education.degree} in {education.field}
                        </h3>
                      </div>
                      <div className="text-lg font-medium">{education.university}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {education.years}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {education.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{education.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wide mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2" /> Achievements
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-1">
                      {education.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide mb-2">Key Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course, i) => (
                        <Badge key={i} variant="outline">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
