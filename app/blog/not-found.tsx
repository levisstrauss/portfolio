import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The blog post you're looking for doesn't exist or has been moved to a different location.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild>
          <Link href="/blog">View All Blog Posts</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
