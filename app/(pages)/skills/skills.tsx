// "use contentfulClient";
// import { Trophy } from "lucide-react";
// import Section from '@/app/components/section';
// import { skillCategories } from './skills-data';
// import SkillCard from './skill-card';
//
// const Skills = () => {
//     return (
//         <Section
//             id="skills"
//             title="Technical Skills"
//             subtitle="Proficiency across software engineering and machine learning technologies"
//             bgColor="bg-gray-100"
//         >
//             <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg mb-2">
//                 <div className="flex items-center gap-2 mb-4">
//                     <div className="p-1.5 bg-indigo-50 rounded-lg transition-colors">
//                         <Trophy className="w-4 h-4 text-indigo-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 transition-colors">
//                         Technical Expertise
//                     </h3>
//                 </div>
//
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//                     {skillCategories.map((category, idx) => (
//                         <SkillCard key={idx} category={category} />
//                     ))}
//                 </div>
//             </div>
//         </Section>
//     );
// };
//
// export default Skills;

"use client";
import { Trophy } from "lucide-react";
import Section from '@/app/components/section';
import { skillCategories } from './skills-data';
import SkillCard from './skill-card';

const Skills = () => {
    return (
        <Section
            id="skills"
            title="Technical Skills"
            subtitle="Proficiency across software engineering and machine learning technologies"
            bgColor="bg-gray-100"
        >
            <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg mb-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-indigo-50 rounded-lg transition-colors">
                        <Trophy className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors">
                        Technical Expertise
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {skillCategories.map((category, idx) => (
                        <SkillCard key={idx} category={category} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;