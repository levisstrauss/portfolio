
import { ArrowUpRight, Star } from "lucide-react";
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
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-indigo-600" />
                                <span className="text-xs text-gray-600">{skill.level}%</span>
                            </div>
                        </div>

                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                            <div
                                className="bg-indigo-600 h-full rounded-full transition-all duration-500 group-hover/skill:brightness-110"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>

                        <div className="opacity-0 group-hover/skill:opacity-100 transition-opacity flex justify-between items-center mt-0.5">
                              <span className="text-xs text-gray-500">
                                {skill.projects} projects
                              </span>
                            <button className="text-xs text-indigo-600 hover:text-indigo-700 flex items-center gap-0.5">
                                Details
                                <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
