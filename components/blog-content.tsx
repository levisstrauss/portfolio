"use client"

import { useEffect, useRef } from "react"

interface BlogContentProps {
  content: string
}

const BlogContent = ({ content }: BlogContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  // Process the markdown content into HTML
  const processMarkdown = (markdown: string): string => {
    // Basic markdown to HTML conversion
    let html = markdown
      // Headers
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-bold mt-4 mb-2">$1</h4>')

      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")

      // Lists
      .replace(/^\s*\d+\.\s+(.*$)/gm, "<li>$1</li>")
      .replace(/^\s*\*\s+(.*$)/gm, "<li>$1</li>")

    // Fix for images - using a different approach
    const imageRegex = /!\[(.*?)\]$$(.*?)$$/g
    html = html.replace(imageRegex, '<img src="$2" alt="$1" class="rounded-lg my-6 mx-auto" />')

    // Fix for links - using a different approach
    const linkRegex = /\[(.*?)\]$$(.*?)$$/g
    html = html.replace(linkRegex, '<a href="$2" class="text-primary hover:underline">$1</a>')

    // Code blocks
    html = html.replace(
      /```(.*?)\n([\s\S]*?)```/g,
      '<pre class="bg-muted p-4 overflow-x-auto my-6 rounded-lg"><code>$2</code></pre>',
    )

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>')

    // Process paragraphs (must come last)
    const paragraphs = html.split(/\n\n+/)
    return paragraphs
      .map((p) => {
        if (
          !p.trim() ||
          p.startsWith("<h") ||
          p.startsWith("<li") ||
          p.startsWith("<blockquote") ||
          p.startsWith("<pre") ||
          p.startsWith("<img") ||
          p.startsWith("<ul") ||
          p.startsWith("<ol")
        ) {
          return p
        }
        return `<p class="mb-4">${p.replace(/\n/g, "<br />")}</p>`
      })
      .join("\n\n")
  }

  // Add anchor links to headings
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
      headings.forEach((heading) => {
        const id =
          heading.textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") || ""
        heading.setAttribute("id", id)

        const anchor = document.createElement("a")
        anchor.href = `#${id}`
        anchor.className = "anchor-link"
        anchor.innerHTML = '<span class="opacity-0 group-hover:opacity-100 ml-2">#</span>'
        heading.classList.add("group")
        heading.appendChild(anchor)
      })
    }
  }, [content])

  return (
    <div ref={contentRef} className="blog-content" dangerouslySetInnerHTML={{ __html: processMarkdown(content) }} />
  )
}

export default BlogContent
