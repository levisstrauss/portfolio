'use client';

import dynamic from 'next/dynamic';

// Dynamically import the BlogContent component with no SSR
const BlogContent = dynamic(() => import("@/components/blog-content"), {
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
});

interface ClientBlogWrapperProps {
    content: string;
}

export default function ClientBlogWrapper({ content }: ClientBlogWrapperProps) {
    return <BlogContent content={content} />;
}