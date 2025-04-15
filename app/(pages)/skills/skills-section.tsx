import {skillCategories} from "@/app/(pages)/skills/skills-data";
import { SkillCategory } from "./skills-category";
import Section from '@/app/components/section';



export const SkillsSection = () => {
    return (
        <Section
            id="skills"
            title="Technical Skills"
            subtitle="Proficiency across software engineering and machine learning technologies"
            bgColor="bg-gray-100"
        >
            <div className="max-w-4xl mx-auto p-4">
                <div className="space-y-4">
                    {skillCategories.map((category, idx) => (
                        <SkillCategory key={idx} {...category} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SkillsSection;