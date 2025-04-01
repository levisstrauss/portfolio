"use client";
import { useState } from 'react';
import Section from '@/app/components/section';
import { educationData } from './education-data';
import EducationCard from './education-card';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';


const Education = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Section
            id="education"
            title="Education"
            subtitle="Academic foundation that equipped me with theoretical knowledge and practical skills"
            bgColor="bg-gray-100"
        >
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-10">
                <div className="inline-flex bg-white p-1.5 rounded-xl shadow-md relative">
                    {/* Animated background for active tab */}
                    <motion.div
                        className={`absolute top-1.5 bottom-1.5 rounded-lg z-0 ${
                            educationData[activeIndex].color === 'orange'
                                ? 'bg-gradient-to-r from-orange-600 to-amber-600'
                                : educationData[activeIndex].color === 'blue'
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                    : 'bg-gradient-to-r from-yellow-500 to-amber-500'
                        }`}
                        initial={false}
                        animate={{
                            x: `calc(${activeIndex} * 90%)`,
                            width: `calc(100% / ${educationData.length})`,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    />

                    {/* Buttons */}
                    {educationData.map((edu, index) => (
                        <motion.button
                            key={edu.id}
                            onClick={() => setActiveIndex(index)}
                            className={`px-6 py-3 rounded-lg font-medium relative z-10 transition-colors duration-300 ${
                                activeIndex === index
                                    ? 'text-white'
                                    : 'text-gray-700'
                            }`}
                            whileHover={{
                                scale: activeIndex === index ? 1.05 : 1.02
                            }}
                            whileTap={{
                                scale: 0.98
                            }}
                            aria-label={`View ${edu.degree} education details`}
                        >
                            {edu.id}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Main Education Cards with Animation - Updated to match Skills layout */}
            <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg mb-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-indigo-50 rounded-lg transition-colors">
                        <GraduationCap className="w-4 h-4 text-indigo-600 " />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors">
                        Academic Background
                    </h3>
                </div>

                <div className="w-full">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={false}
                            animate={{
                                opacity: activeIndex === index ? 1 : 0,
                                scale: activeIndex === index ? 1 : 0.98,
                            }}
                            transition={{
                                opacity: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
                                scale: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                            }}
                            className={`w-full ${activeIndex === index ? "block" : "hidden"}`}
                        >
                            <EducationCard
                                education={edu}
                                isActive={true} // Always render as active to prevent size changes
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;
