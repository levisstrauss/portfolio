"use client"

import React, { useState, useRef, useEffect } from 'react';

interface SkillCategoryProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    skills: {
        name: string;
    }[];
}


export const SkillCategory = ({ title, icon, description, skills }: SkillCategoryProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
        }
    }, [isExpanded]);

    return (
        <div className="mb-4 border rounded-lg shadow-sm hover:shadow-md transition-all">
            <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                        {icon}
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height: contentHeight }}
            >
                <div ref={contentRef} className="p-4 border-t">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="p-2 bg-gray-50 rounded text-center">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
// export const SkillCategory = ({ title, icon, description, skills }: SkillCategoryProps) => {
//     const [isExpanded, setIsExpanded] = useState(false);
//
//     return (
//         <div className="mb-4 border rounded-lg shadow-sm hover:shadow-md transition-all">
//             <div
//                 className="flex items-center justify-between p-4 cursor-pointer"
//                 onClick={() => setIsExpanded(!isExpanded)}
//             >
//                 <div className="flex items-center space-x-3">
//                     <div className="p-2 bg-indigo-50 rounded-lg">
//                         {icon}
//                     </div>
//                     <div>
//                         <h3 className="font-medium text-gray-900">{title}</h3>
//                         <p className="text-sm text-gray-500">{description}</p>
//                     </div>
//                 </div>
//                 <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
//                     <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </div>
//             </div>
//
//             {isExpanded && (
//                 <div className="p-4 pt-0 border-t">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//                         {skills.map((skill, idx) => (
//                             <div key={idx} className="p-2 bg-gray-50 rounded text-center">
//                                 {skill.name}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };