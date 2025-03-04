"use contentfulClient";
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';
import { EducationType } from '../education/education-types';

interface EducationCardProps {
    education: EducationType;
    isActive: boolean;
}

const EducationCard = ({ education, isActive }: EducationCardProps) => {
    const colorClasses = {
        blue: {
            gradient: 'from-blue-600 to-indigo-600',
            badge: 'bg-blue-50 text-blue-800 border border-blue-100',
            icon: 'text-blue-600',
            highlight: 'border-blue-600',
            lightBg: 'bg-blue-50',
            hoverBg: 'hover:bg-blue-50',
        },
        teal: {
            gradient: 'from-teal-600 to-emerald-600',
            badge: 'bg-teal-50 text-teal-800 border border-teal-100',
            icon: 'text-teal-600',
            highlight: 'border-teal-600',
            lightBg: 'bg-teal-50',
            hoverBg: 'hover:bg-teal-50',
        }
    };

    const colors = colorClasses[education.color];

    return (
        <div
            className={`transform transition-all duration-500 ${
                isActive
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-95 hidden'
            }`}
        >
            <div className="bg-white rounded-lg overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.gradient} p-4 text-white`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-xl font-bold">{education.degree}</h3>
                            <p className="text-blue-100 mt-1">Specialization in {education.specialization}</p>
                        </div>
                        <div className="bg-white/20 rounded-lg px-3 py-1.5 mt-3 md:mt-0 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium text-sm">{education.period}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Column */}
                        <div className="md:w-2/3">
                            <div className="flex items-start mb-4">
                                <div className={`bg-gradient-to-r ${colors.gradient} p-2 rounded-full mr-3 text-white`}>
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{education.institution}</h4>
                                    <div className="flex items-center mt-1 text-gray-600">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{education.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <Award className={`w-4 h-4 mr-2 ${colors.icon}`} />
                                    Key Achievements
                                </h5>
                                <ul className="space-y-1.5">
                                    {education.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className={`w-1 h-1 rounded-full ${colors.highlight} mt-2`}></div>
                                            <span className="text-gray-700 text-sm">{achievement.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                                    <BookOpen className={`w-4 h-4 mr-2 ${colors.icon}`} />
                                    Project Highlight
                                </h5>
                                <p className={`text-gray-700 text-sm p-2.5 ${colors.lightBg} rounded-lg border-l-2 ${colors.highlight}`}>
                                    {education.projects}
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:w-1/3 bg-gray-50 rounded-lg p-4">
                            <div>
                                <h5 className="font-semibold text-gray-800 text-center mb-2 text-sm">Key Courses</h5>
                                <div className="flex flex-wrap gap-1.5">
                                    {education.courses.map((course, i) => (
                                        <span
                                            key={i}
                                            className={`bg-white text-xs font-medium px-2 py-1 rounded-md ${colors.badge} ${colors.hoverBg} transition-colors`}
                                        >
                                         {course.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
