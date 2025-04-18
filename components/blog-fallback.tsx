"use client"

interface BlogFallbackProps {
  content: string
}

const BlogFallback = ({ content }: BlogFallbackProps) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  )
}

export default BlogFallback
