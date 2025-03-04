import Image from 'next/image';
import Link from 'next/link';
import { ProjectCardProps } from './project-card.types';
import { categoryConfig } from './category-config';
import ProjectPlaceholder from './project-placeholder';
import React from "react";

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { title, description, image, category, technologies, links } = project;
    const categoryStyle = categoryConfig[category]

    return (
        <div
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
            flex flex-col h-full transform hover:-translate-y-2"
        >
            {/* Project image or placeholder */}
            <div className="relative h-48 w-full overflow-hidden">
                {image ? (
                    <div className="relative h-full w-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                ) : (
                    <ProjectPlaceholder category={category} config={categoryConfig} />
                )}

                {/* Category badge */}
                <div className="absolute top-3 right-3">
                    {categoryStyle ? (
                        <span className={`${categoryStyle.bgColor
                        || 'bg-gray-100'} ${categoryStyle.color ||
                        'text-gray-800'} text-xs font-medium px-2.5 py-1.5 rounded-full`}
                        >
                          {categoryStyle.tag}
                        </span>
                    ) : (
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded-full">
                          {category}
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {description}
                </p>

                {/* Technologies used */}
                {technologies && technologies.length > 0 && (
                    <div className="mt-auto mb-4">
                        <div className="flex flex-wrap gap-1.5">
                            {technologies.map(tech => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md
                                    hover:bg-gray-200 transition-colors"
                                >
                                  {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Project links */}
                {links && (
                    <div className="mt-4 flex gap-3">
                        {links.demo && (
                            <ProjectLink
                                href={links.demo}
                                external={true}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                }
                                label="Demo"
                            />
                        )}

                        {links.github && (
                            <ProjectLink
                                href={links.github}
                                external={true}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                }
                                label="Code"
                            />
                        )}

                        {links.moreInfo && (
                            <ProjectLink
                                href={links.moreInfo}
                                external={false}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                }
                                label="More Details"
                                className="ml-auto"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// Helper component for project links
interface ProjectLinkProps {
    href: string;
    external?: boolean;
    icon: React.ReactNode;
    label: string;
    className?: string;
}

const ProjectLink = ({ href, external = false, icon, label, className = '' }: ProjectLinkProps) => (
    <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center gap-1 ${className}`}
    >
        {icon}
        {label}
    </Link>
);

export default ProjectCard;
