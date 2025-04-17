
import { SkillCategory } from './skills-types';

interface SkillCardProps {
    category: SkillCategory;
}

const SkillCard = ({ category }: SkillCardProps) => {
    return (
        <div className="space-y-1 p-4 rounded-lg hover:bg-indigo-50/30 transition-all duration-300 group/category">
            <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-indigo-100/50 rounded-lg group-hover/category:bg-indigo-100 transition-colors">
                    {category.icon}
                </div>
                <div>
                    <h4 className="font-semibold text-sm group-hover/category:text-indigo-600 transition-colors">
                        {category.title}
                    </h4>
                    <p className="text-xs text-gray-500">{category.description}</p>
                </div>
            </div>

            <div className="space-y-1.5">
                {category.skills.map((skill, skillIdx) => (
                    <div
                        key={skillIdx}
                        className="rounded-md hover:bg-white transition-all duration-300 group/skill p-1.5"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 group-hover/skill:text-indigo-600 transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;