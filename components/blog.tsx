"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { SafeImage } from "@/components/ui/safe-image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { blogPosts } from "@/lib/blog"

const Blog = () => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("All")
  const [isNavigating, setIsNavigating] = useState(false)

  // Extract all unique categories
  const categories = ["All", ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))]

  // Filter posts based on active category
  const filteredPosts =
      activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.tags.includes(activeCategory))

  const handleBlogNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsNavigating(true)

    // Add a small delay before navigation to allow exit animations to complete
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  return (
      <section id="blog" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center section-heading">
            <h2 className="text-3xl font-bold mb-3">
              <span className="gradient-text">Technical Blog</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and deep dives into AI and machine learning concepts, techniques, and
              applications.
            </p>
          </div>

          {/* Add category filters */}
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map((category) => (
                <Badge
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
            ))}
          </div>

          <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isNavigating ? "pointer-events-none" : ""}`}
          >
            {filteredPosts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, y: -20 }}
                >
                  <Card className="h-full flex flex-col card-hover overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <SafeImage
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          fallbackSrc="/colorful-abstract-blog.png"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className={activeCategory === tag ? "bg-primary/20" : ""}>
                              {tag}
                            </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="ghost" className="p-0 h-auto group">
                        <Link
                            href={`/blog/${post.slug}`}
                            onClick={(e) => handleBlogNavigation(e, `/blog/${post.slug}`)}
                            className="flex items-center text-primary transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button asChild variant="outline">
              <Link href="/blog" onClick={(e) => handleBlogNavigation(e, "/blog")}>
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Blog
