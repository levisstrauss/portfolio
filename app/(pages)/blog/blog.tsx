"use client";
import Section from '@/app/components/section';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
    const blogPosts = [
        {
            title: "Microservices Architecture Best Practices",
            date: "March 15, 2024",
            preview: "A deep dive into building scalable microservices architecture, covering patterns, pitfalls, and best practices...",
            readTime: "8 min read",
            tags: ["Architecture", "Microservices", "DevOps"],
            views: "1.2k",
            category: "System Design"
        },
        {
            title: "Modern Frontend Testing Strategies",
            date: "February 28, 2024",
            preview: "Comprehensive guide to testing React applications, from unit tests to end-to-end testing...",
            readTime: "6 min read",
            tags: ["Testing", "React", "Frontend"],
            views: "856",
            category: "Frontend"
        },
        {
            title: "Optimizing Node.js Performance",
            date: "February 15, 2024",
            preview: "Learn advanced techniques for optimizing Node.js applications, including memory management and clustering...",
            readTime: "10 min read",
            tags: ["Node.js", "Performance", "Backend"],
            views: "2.1k",
            category: "Backend"
        }
    ];

    return (
        <Section
            id="blog"
            title="Blog Posts"
            subtitle="Sharing knowledge and experiences"
            bgColor="bg-gradient-to-b from-gray-100 to-white"
        >
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Blog Posts</h2>
                    </div>
                </div>
                <div className="grid gap-4">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="group p-4 rounded-lg border border-gray-100 hover:border-indigo-100
                                     transition-all duration-300 hover:shadow-md cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-3">
                                {/* Category and Title */}
                                <div>
                                    <span className="text-sm text-indigo-600 font-medium">{post.category}</span>
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600
                                                 transition-colors flex items-center gap-2">
                                        {post.title}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100
                                                               transition-opacity" />
                                    </h3>
                                </div>

                                {/* Meta information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                    <span className="text-gray-400 hidden md:inline">•</span>
                                    <span>{post.views} views</span>
                                </div>

                                {/* Preview */}
                                <p className="text-sm text-gray-600 line-clamp-2">{post.preview}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full
                                                     transition-colors hover:bg-indigo-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-6 text-center">
                    <a
                        href="#blog"
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700
                        font-medium text-sm transition-colors"
                    >
                        View all posts
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 max-w-4xl mx-auto bg-indigo-600 bg-opacity-10 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-indigo-600 p-3">
                        <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Interested in my articles?</h4>
                        <p className="text-gray-600">I write about software engineering, AI/ML, and my experiences with various technologies</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Blog;
