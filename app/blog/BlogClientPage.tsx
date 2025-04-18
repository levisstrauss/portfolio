"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, ArrowRight, Search, X } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

export default function BlogClientPage() {
  // Add state for search and filtering
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Extract all unique categories from blog posts
  const categories = ["All", ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))]

  useEffect(() => {
    let result = blogPosts

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((post) => post.tags.includes(activeCategory))
    }

    setFilteredPosts(result)
  }, [searchQuery, activeCategory])

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Technical Blog</span>
          </h1>
          <p className="text-muted-foreground">
            Insights, tutorials, and deep dives into AI and machine learning concepts
          </p>
        </div>
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Search results summary */}
      {(searchQuery || activeCategory !== "All") && (
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredPosts.length === 0
              ? "No articles found matching your criteria."
              : `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""}`}
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
        </div>
      )}

      {/* Featured post - only show if no filters are applied */}
      {featuredPost && !searchQuery && activeCategory === "All" && (
        <Card key={featuredPost.id} className="mb-12 overflow-hidden border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredPost.coverImage || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <Badge className="mb-2">Featured</Badge>
                <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${featuredPost.slug}`} className="w-fit">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* All posts */}
      <h2 className="text-2xl font-bold mb-6">
        {searchQuery || activeCategory !== "All" ? "Search Results" : "All Articles"}
      </h2>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <Card className="h-full flex flex-col card-hover overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
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
                    <Button asChild variant="ghost" className="p-0 h-auto">
                      <Link href={`/blog/${post.slug}`} className="flex items-center text-primary">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No articles found matching your search criteria.</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setActiveCategory("All")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
