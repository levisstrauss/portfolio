"use client";
import Image from 'next/image';
import Section from '@/app/components/section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle=""
            bgColor="bg-gradient-to-b from-white to-gray-100"
        >
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg">
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                    {/* Profile Image with Animation */}
                    <div className="lg:w-1/3 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
                            }}
                            className="relative w-64 h-64 md:w-72 md:h-72 mt-20"
                        >
                            {/* Animated Image */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: 2.4,
                                        duration: 0.4,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="w-full h-full overflow-hidden rounded-full shadow-xl transform
                                transition-all duration-500 hover:scale-105"
                            >
                                <Image
                                    src="/profile.webp"
                                    fill
                                    alt="Zakaria Coulibaly"
                                    className="object-cover transition-transform duration-700 ease-in-out mix-blend-lighten"
                                    sizes="(max-width: 768px) 100vw, 288px"
                                />
                            </motion.div>

                            {/* Animated SVG Circle */}
                            <motion.svg
                                className="absolute top-0 left-0 w-full h-full"
                                fill="transparent"
                                viewBox="0 0 506 506"
                                xmlns="http://www.w3.org/2000/svg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                <defs>
                                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" style={{stopColor: "#4151E8", stopOpacity: 1}}/>
                                        <stop offset="100%" style={{stopColor: "#4151E8", stopOpacity: 1}}/>
                                    </radialGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <motion.circle
                                    cx="253"
                                    cy="253"
                                    r="248"
                                    stroke="url(#grad1)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{
                                        pathLength: 0,
                                        rotate: 0,
                                    }}
                                    animate={{
                                        pathLength: [0.2, 1, 0.8, 0.2], // Dynamic stroke progression
                                        rotate: [0, 120, 360],
                                        scale: [1, 1.02, 1],
                                        strokeDasharray: ["20 80 40 40", "60 40 60 80", "4 200 100 150"],
                                        filter: ["blur(0px)", "url(#glow)", "blur(0px)"],
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        strokeWidth: 6,
                                        strokeDashoffset: 20,
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        repeatType: "mirror",
                                    }}
                                />
                            </motion.svg>
                        </motion.div>
                    </div>

                    {/* Bio Content */}
                    <div className="lg:w-2/3 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 hidden lg:block">My Journey</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            As a Full-Stack Developer with deep expertise in AI/ML, my career path has been defined by building production-ready intelligent systems that solve complex business challenges. My technical foundation combines advanced computer vision and NLP capabilities with software engineering best practices, allowing me to develop AI solutions that scale effectively in real-world environments.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            At UIUC's MCS program, I'm expanding my knowledge of how AI/ML can transform healthcare outcomes and business operations. My hands-on experience with PyTorch and TensorFlow enables me to implement end-to-end ML pipelines that deliver measurable impact. I've developed a particular strength in model optimization, deployment infrastructure, and long-term monitoring systems that ensure AI continues to provide value over time.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            I'm passionate about technical leadership that bridges the gap between cutting-edge research and practical implementation, creating AI systems that not only perform well in controlled environments but thrive when solving real problems for real users.
                        </p>

                        {/* Focus Areas */}
                        <div className="pt-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                                <span className="w-8 h-8 inline-flex items-center justify-center bg-indigo-600 text-white rounded-full mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </span>
                                Technical Specializations
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                <FocusCard
                                    title="AI/ML Engineering"
                                    description="Building production-ready machine learning systems with a focus on scalability and business impact"
                                    skills={[
                                        'Computer Vision & NLP expertise',
                                        'Deep Learning Model Architecture design',
                                        'PyTorch & TensorFlow implementation',
                                        'MLOps & Model Deployment optimization',
                                        'Distributed Training & Optimization techniques',
                                        'Cloud ML Infrastructure (AWS SageMaker)',
                                        'Data Pipeline Engineering'
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

interface FocusCardProps {
    title: string;
    description: string;
    skills: string[];
}

const FocusCard = ({ title, description, skills }: FocusCardProps) => (
    <div className="bg-gray-50 rounded-lg p-5 shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-all duration-300">
        <h4 className="font-semibold text-indigo-600 text-lg mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
            {skills.map(skill => (
                <span key={skill} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default About;
