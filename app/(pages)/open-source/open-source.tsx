"use client";
import Section from '@/app/components/section';
import { GitFork, Star, GitPullRequest, Github, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const OpenSource = () => {
    const contributions = [
        {
            project: "React",
            organization: "facebook",
            description: "Core contributor focusing on performance optimizations and bug fixes",
            stats: {
                commits: 45,
                prs: 12,
                issues: 8,
                stars: 203
            },
            contributions: [
                "Improved render performance by 25%",
                "Fixed memory leaks in useEffect",
                "Added new testing utilities"
            ],
            tags: ["JavaScript", "Core", "Performance"],
            repoUrl: "https://github.com/facebook/react",
            role: "Core Contributor"
        },
        {
            project: "Next.js",
            organization: "vercel",
            description: "Regular contributor to documentation and examples",
            stats: {
                commits: 28,
                prs: 8,
                issues: 5,
                stars: 156
            },
            contributions: [
                "Enhanced API documentation",
                "Created example templates",
                "Fixed routing edge cases"
            ],
            tags: ["TypeScript", "Documentation", "Examples"],
            repoUrl: "https://github.com/vercel/next.js",
            role: "Contributor"
        }
    ];

    return (
        <Section
            id="open-source"
            title="Open Source"
            subtitle="Contributing to the developer community"
            bgColor="bg-gradient-to-b from-white to-gray-100"
        >
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <GitFork className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Open Source</h2>
                </div>
                <div className="space-y-6">
                    {contributions.map((contrib, index) => (
                        <motion.div
                            key={index}
                            className="p-4 border border-gray-100 rounded-lg hover:border-indigo-100
                                    transition-all duration-300 group hover:shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600
                                                    transition-colors">
                                            {contrib.project}
                                        </h3>
                                        <span className="text-sm text-gray-500">by {contrib.organization}</span>
                                    </div>
                                    <span className="inline-block px-2 py-1 text-xs font-medium text-indigo-600
                                                bg-indigo-50 rounded-full">
                                        {contrib.role}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <a
                                        href={contrib.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50
                                                rounded-lg transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">{contrib.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                {[
                                    { icon: <Code2 className="w-4 h-4" />, value: contrib.stats.commits, label: "Commits" },
                                    { icon: <GitPullRequest className="w-4 h-4" />, value: contrib.stats.prs, label: "PRs" },
                                    { icon: <GitFork className="w-4 h-4" />, value: contrib.stats.issues, label: "Issues" },
                                    { icon: <Star className="w-4 h-4" />, value: contrib.stats.stars, label: "Stars" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        <div className="text-indigo-600">{stat.icon}</div>
                                        <div className="text-sm">
                                            <span className="font-semibold">{stat.value}</span>
                                            <span className="text-gray-500 text-xs ml-1">{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Key Contributions */}
                            <div className="space-y-2 mb-4">
                                {contrib.contributions.map((contribution, i) => (
                                    <div key={i} className="flex gap-2 text-sm text-gray-600">
                                        <span className="w-1 h-1 rounded-full bg-indigo-600 mt-2 shrink-0" />
                                        {contribution}
                                    </div>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {contrib.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full
                                                transition-colors hover:bg-indigo-100"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 max-w-4xl mx-auto bg-indigo-600 bg-opacity-10 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-indigo-600 p-3">
                        <GitFork className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Looking to collaborate</h4>
                        <p className="text-gray-600">Interested in contributing to open source projects in AI and web development</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default OpenSource;
