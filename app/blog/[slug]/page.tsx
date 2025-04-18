

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SafeImage } from "@/components/ui/safe-image"
import dynamic from "next/dynamic"
import BlogContent from "@/components/blog-content";
// import BlogContent from "@/components/blog-content";

// // Dynamically import the BlogContent component with no SSR
// const BlogContent =
//     dynamic(() => import("@/components/blog-content"), {
//   ssr: false,
//   loading: () => (
//       <div className="animate-pulse">
//         <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
//         <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
//         <div className="h-4 bg-muted rounded w-full mb-2"></div>
//         <div className="h-4 bg-muted rounded w-full mb-2"></div>
//         <div className="h-4 bg-muted rounded w-2/3 mb-6"></div>
//       </div>
//   ),
// })

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Zakaria Coulibaly`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author.name],
      publishedTime: post.date,
      images: [
        {
          url: post.coverImage || "/writing-desk-inspiration.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  const defaultPlaceholder = "/writing-desk-inspiration.png"

  if (!post) {
    notFound()
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

  return (
      <div className="container mx-auto px-4 py-12">
        <Link
            href="/blog"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Articles
        </Link>

        {/* Hero section */}
        <div className="mb-8">
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
        </div>

        {/* Cover image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-lg overflow-hidden">
          <SafeImage
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              fallbackSrc={defaultPlaceholder}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <BlogContent content={post.content} />
            </div>

            <Separator className="my-12" />

            {/* Author bio */}
            <div className="flex items-start gap-4">
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
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                  {relatedPosts.length > 0 ? (
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                            <div key={relatedPost.id} className="flex gap-3">
                              <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                                <SafeImage
                                    src={relatedPost.coverImage}
                                    alt={relatedPost.title}
                                    fill
                                    className="object-cover"
                                    fallbackSrc={defaultPlaceholder}
                                />
                              </div>
                              <div>
                                <h4 className="font-medium line-clamp-2 text-sm">
                                  <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                                    {relatedPost.title}
                                  </Link>
                                </h4>
                                <div className="flex items-center text-xs text-muted-foreground mt-1">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>{relatedPost.date}</span>
                                </div>
                              </div>
                            </div>
                        ))}
                      </div>
                  ) : (
                      <p className="text-muted-foreground">No related articles found.</p>
                  )}

                  <Separator className="my-6" />

                  <h3 className="text-lg font-bold mb-4">Relevant Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {relevantTags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="outline"
                            className={`cursor-pointer hover:bg-primary/10 ${
                                post.tags.includes(tag) ? "border-primary/50 bg-primary/5" : ""
                            }`}
                        >
                          {tag}
                        </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
  )
}
