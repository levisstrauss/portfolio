"use client";
import Section from '@/app/components/section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "AI/ML Engineer",
            company: "Open to Opportunities",
            location: "Remote / Hybrid / On-site",
            period: "Available Immediately",
            achievements: [
                "Developing production-ready ML systems with PyTorch and TensorFlow, focusing on computer vision and NLP applications",
                "Implementing end-to-end ML pipelines including data preprocessing, model training, evaluation, and deployment",
                "Optimizing model performance and addressing challenges in model latency and scalability"
            ],
            skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "NLP", "MLOps", "Docker", "Git", "Cloud ML Services", "Neural Networks", "Data Preprocessing"],
            type: "Full-time"
        }

    ];

    return (
        <Section
            id="experience"
            title="Experience"
            subtitle="My professional journey in software and AI"
            bgColor="bg-gradient-to-b from-gray-100 to-white"
        >
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Experience</h2>
                </div>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-6 bottom-6 w-px bg-indigo-200" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-12 group"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 w-2 h-2 -translate-x-1/2 rounded-full bg-indigo-600 top-3
                                          group-hover:scale-150 transition-transform" />

                                <div className="space-y-3 bg-gray-50 rounded-lg p-5 shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-all duration-300">
                                    <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600
                                                        transition-colors">
                                                {exp.title}
                                            </h3>
                                            <div className="text-indigo-600 font-medium">{exp.company}</div>
                                        </div>
                                        <span className="flex items-center gap-1 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-gray-600">
                                                <span className="w-1 h-1 rounded-full bg-indigo-600 mt-2 shrink-0" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full
                                                         transition-colors hover:bg-indigo-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
