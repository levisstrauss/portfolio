"use client";
import { useState } from 'react';
import {
    ExternalLink,
    ChevronDown,
    GraduationCap,
    Award,
    BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/app/components/section';
import { certificatesData } from "@/app/(pages)/certificates/certificates-data";

const CertificatesTimeline = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [expandedSkillCerts, setExpandedSkillCerts] = useState<Set<string>>(new Set());

    // Sort certificates by date (most recent first)
    const sortedCertificates = [...certificatesData].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const toggleSkills = (certId: string) => {
        setExpandedSkillCerts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(certId)) {
                newSet.delete(certId);
            } else {
                newSet.add(certId);
            }
            return newSet;
        });
    };

    return (
        <Section
            id="certificates"
            title="Professional Certifications"
            subtitle="Continuous learning and skill development through industry-recognized certifications"
            bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
        >
            <div className="w-full">
                {/* Main certificate card */}
                <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Card header */}
                    <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <div className="flex items-center">
                            <div className="bg-white/10 p-2 rounded-full mr-3">
                                <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Certificates</h3>
                                <p className="text-blue-100 text-sm mt-1">{certificatesData.length} professional certifications</p>
                            </div>
                        </div>

                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/10 rounded-full p-1.5"
                        >
                            <ChevronDown className="w-5 h-5 text-white" />
                        </motion.div>
                    </div>

                    {/* Expandable section */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                <div className="p-5 divide-y divide-gray-100">
                                    {sortedCertificates.map((cert, index) => {
                                        const isSkillsExpanded = expandedSkillCerts.has(cert.credentialId!);
                                        return (
                                            <motion.div
                                                key={cert.credentialId || index}
                                                className="py-4 first:pt-0 last:pb-0"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                            >
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                    <div className="flex-grow">
                                                        <div className="flex items-center">
                                                            <h4 className="font-medium text-gray-900">{cert.name}</h4>
                                                            {cert.grade && Number(cert.grade) > 90 && (
                                                                <span className="ml-2 inline-flex items-center">
                                                                  <Award className="w-4 h-4 text-amber-500" />
                                                                  <span className="text-xs font-semibold text-amber-600 ml-1">{cert.grade}%</span>
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="text-sm text-gray-500 mt-1 flex flex-col sm:flex-row sm:items-center">
                                                            <span className="font-medium">{cert.issuer}</span>
                                                            <span className="hidden sm:inline mx-2">•</span>
                                                            <span className="text-gray-400">{cert.date}</span>
                                                        </div>

                                                        {cert.skills && cert.skills.length > 0 && (
                                                            <>
                                                                <div className="mt-3 mb-1 flex items-center">
                                                                    <BookOpen className="w-4 h-4 text-blue-600 mr-1.5" />
                                                                    <span className="text-xs font-medium text-gray-600 uppercase">Skills</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {/* Always visible skills (first 3) */}
                                                                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                                                        skill && (
                                                                            <span
                                                                                key={skillIndex}
                                                                                className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-md border border-blue-100"
                                                                            >
                                                                                {skill}
                                                                            </span>
                                                                        )
                                                                    ))}

                                                                    {/* Toggle button for more skills */}
                                                                    {cert.skills.length > 3 && !isSkillsExpanded && (
                                                                        <span
                                                                            className="text-xs text-blue-600 font-medium cursor-pointer hover:text-blue-800 hover:underline flex items-center"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                toggleSkills(cert.credentialId!);
                                                                            }}
                                                                        >
                                                                          +{cert.skills.length - 3} more
                                                                        </span>
                                                                    )}

                                                                    {/* Animated container for additional skills */}
                                                                    <AnimatePresence>
                                                                        {isSkillsExpanded && (
                                                                            <motion.div
                                                                                className="flex flex-wrap gap-1.5 w-full mt-1.5"
                                                                                initial={{ opacity: 0, height: 0 }}
                                                                                animate={{ opacity: 1, height: "auto" }}
                                                                                exit={{ opacity: 0, height: 0 }}
                                                                                transition={{ duration: 0.3 }}
                                                                            >
                                                                                {cert.skills.slice(3).map((skill, skillIndex) => (
                                                                                    skill && (
                                                                                        <motion.span
                                                                                            key={`extra-${skillIndex}`}
                                                                                            className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-md border border-blue-100"
                                                                                            initial={{ opacity: 0, y: 10 }}
                                                                                            animate={{ opacity: 1, y: 0 }}
                                                                                            transition={{ delay: skillIndex * 0.05, duration: 0.2 }}
                                                                                        >
                                                                                            {skill}
                                                                                        </motion.span>
                                                                                    )
                                                                                ))}

                                                                                <motion.span
                                                                                    className="text-xs text-blue-600 font-medium cursor-pointer hover:text-blue-800 hover:underline flex items-center"
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        toggleSkills(cert.credentialId!);
                                                                                    }}
                                                                                    initial={{ opacity: 0 }}
                                                                                    animate={{ opacity: 1 }}
                                                                                    transition={{ delay: 0.2 }}
                                                                                >
                                                                                    Show less
                                                                                </motion.span>
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>

                                                    <Link
                                                        href={cert.href}
                                                        className="inline-flex items-center px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium rounded-md transition-colors duration-200 border border-blue-100 whitespace-nowrap flex-shrink-0"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        View Certificate
                                                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};

export default CertificatesTimeline;
