"use client"

import type React from "react"
import { use } from "react" // Add this import

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/lib/blog"
import { SafeImage } from "@/components/ui/safe-image"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import the BlogContent component with no SSR
const BlogContent =
    dynamic(() => import("@/components/blog-content"), {
  ssr: false,
  loading: () => (
      <div className="animate-pulse">
        <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
        <div className="h-4 bg-muted rounded w-full mb-2"></div>
        <div className="h-4 bg-muted rounded w-full mb-2"></div>
        <div className="h-4 bg-muted rounded w-2/3 mb-6"></div>
      </div>
  ),
})

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const router = useRouter()
  // @ts-ignore
  const resolvedParams = use(params)

  // @ts-ignore
  const { slug } = resolvedParams
  const post = blogPosts.find((post) => post.slug === slug)

  // Scroll to top on a page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    notFound()
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Add a small delay before navigation to allow exit animations to complete
    const target = e.currentTarget
    target.classList.add("pointer-events-none")

    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  // Improved related posts logic
  const relatedPosts = blogPosts
      .filter((p) => {
        // Don't include the current post
        if (p.id === post.id) return false

        // Check for tag overlap
        const hasCommonTags = p.tags.some((tag) => post.tags.includes(tag))

        // If the post has explicitly defined related posts, use those
        if (post.relatedPosts && post.relatedPosts.includes(p.id)) return true

        // Otherwise use tag matching
        return hasCommonTags
      })
      .slice(0, 3) // Limit to 3 related posts

  // Get relevant tags - include current post tags and tags from related posts
  const relevantTags = Array.from(new Set([...post.tags, ...relatedPosts.flatMap((p) => p.tags)])).slice(0, 10) // Limit to 10 tags

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="container mx-auto px-4 py-12"
      >
        <Link
            href="/blog-site"
            onClick={(e) => handleNavigation(e, "/blog-site")}
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Articles
        </Link>

        {/* Hero section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author.name}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
            ))}
          </div>
        </motion.div>

        {/* Cover image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-lg overflow-hidden"
        >
          <SafeImage
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              fallbackSrc="/colorful-abstract-blog.png"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-8"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <BlogContent content={post.content} />
            </div>

            <Separator className="my-12" />

            {/* Author bio */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
            >
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <SafeImage
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    fallbackSrc="/focused-ai-engineer.png"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{post.author.name}</h3>
                <p className="text-muted-foreground">
                  AI/ML Engineer and Full-Stack Developer specializing in building intelligent systems that solve
                  real-world problems.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-4"
          >
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                  {relatedPosts.length > 0 ? (
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost, index) => (
                            <motion.div
                                key={relatedPost.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                className="flex gap-3"
                            >
                              <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                                <SafeImage
                                    src={relatedPost.coverImage}
                                    alt={relatedPost.title}
                                    fill
                                    className="object-cover"
                                    fallbackSrc="/colorful-abstract-blog.png"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium line-clamp-2 text-sm">
                                  <Link
                                      href={`/blog-site/${relatedPost.slug}`}
                                      onClick={(e) => handleNavigation(e, `/blog-site/${relatedPost.slug}`)}
                                      className="hover:text-primary transition-colors"
                                  >
                                    {relatedPost.title}
                                  </Link>
                                </h4>
                                <div className="flex items-center text-xs text-muted-foreground mt-1">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>{relatedPost.date}</span>
                                </div>
                              </div>
                            </motion.div>
                        ))}
                      </div>
                  ) : (
                      <p className="text-muted-foreground">No related articles found.</p>
                  )}

                  <Separator className="my-6" />

                  <h3 className="text-lg font-bold mb-4">Relevant Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {relevantTags.map((tag, index) => (
                        <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        >
                          <Badge
                              variant="outline"
                              className={`cursor-pointer hover:bg-primary/10 ${
                                  post.tags.includes(tag) ? "border-primary/50 bg-primary/5" : ""
                              }`}
                              onClick={() => router.push(`/blog-site?tag=${tag}`)}
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
  )
}
