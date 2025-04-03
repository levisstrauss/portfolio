"use client";
import { useState } from 'react';
import Section from '@/app/components/section';
import ProjectCard from '@/app/components/project-card';
import { projectsData } from '../projects/projects-data';
import {AnimatePresence, motion} from "framer-motion";

const Projects = () => {
    // State for active filter
    const [activeFilter, setActiveFilter] = useState('All');
    // Filter options
    const filters =
        ['All', 'Computer Vision', 'NLP','ML/DL', 'MLOps', 'Generative AI', 'Data Science'];

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    return (
        <Section
            id="projects"
            title="Featured Projects"
            subtitle="Explore my work across AI/ML "
            bgColor="bg-gray-50"
        >
            {/* Filter buttons with motion */}
            <div className="flex justify-center flex-wrap gap-3 mb-12 relative">
                {filters.map(filter => (
                    <div key={filter} className="relative">
                        {activeFilter === filter && (
                            <motion.div
                                layoutId="activeFilterBackground"
                                className="absolute inset-0 bg-indigo-600 rounded-full"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30
                                }}
                            />
                        )}
                        <button
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full transition-all relative z-10 ${
                                activeFilter === filter
                                    ? 'text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {filter}
                        </button>
                    </div>
                ))}
            </div>

            {/* Projects grid with animated cards - preserving original layout */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.05,
                                        duration: 0.3
                                    }
                                }}
                                exit={{ opacity: 0 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Empty state message if no projects match the filter */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <p className="text-gray-500 text-lg">No projects found in this category.</p>
                </motion.div>
            )}
        </Section>
    );
};

export default Projects;
