"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BlogFallback from "@/components/blog-fallback"
import { blogPosts } from "@/lib/blog"

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  // Try to get the current slug from the URL
  const slug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : ""
  const post = slug ? blogPosts.find((p) => p.slug === slug) : null

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We encountered an error while rendering this blog post.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button onClick={reset}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>

      {post && (
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <h2 className="text-2xl font-bold mb-4">Fallback Content:</h2>
          <BlogFallback content={post.content} />
        </div>
      )}
    </div>
  )
}
