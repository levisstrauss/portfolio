import {Brain, Code, Database, GitBranch, Laptop, Zap} from "lucide-react";
import { SkillCategory } from './skills-types';

// Skills data
export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        icon: <Code className="w-4 h-4 text-indigo-600" />,
        description: "Core programming languages",
        skills: [
            { name: "Python", level: 95, projects: 2 },
            { name: "Java", level: 90, projects: 1 },
            { name: "C/C++", level: 85, projects: 2 },
            { name: "Javascript/Typescript", level: 75, projects: 4 },
        ]
    },
    {
        title: "Software Development",
        icon: <Laptop className="w-4 h-4 text-indigo-600" />,
        description: "Web & application development",
        skills: [
            { name: "React", level: 85, projects: 3 },
            { name: "Node.js", level: 80, projects: 2 },
            { name: "Next.js", level: 82, projects: 2 },
            { name: "RESTful APIs", level: 88, projects: 3 }
        ]
    },
    {
        title: "ML/AI Frameworks",
        icon: <Brain className="w-4 h-4 text-indigo-600" />,
        description: "ML and deep learning",
        skills: [
            { name: "PyTorch", level: 90, projects: 3 },
            { name: "TensorFlow", level: 87, projects: 3 },
            { name: "Scikit-learn", level: 90, projects: 3 },
            { name: "Keras", level: 85, projects: 1 }
        ]
    },
    {
        title: "Data Processing",
        icon: <Database className="w-4 h-4 text-indigo-600" />,
        description: "Data tools",
        skills: [
            { name: "Pandas", level: 95, projects: 3 },
            { name: "NumPy", level: 90, projects: 3 },
            { name: "SQL", level: 80, projects: 3 },
            { name: "PySpark", level: 75, projects: 1 }
        ]
    },
    {
        title: "DevOps",
        icon: <GitBranch className="w-4 h-4 text-indigo-600" />,
        description: "DevOps & CI/CD",
        skills: [
            { name: "Docker", level: 90, projects: 1 },
            { name: "Kubernetes", level: 85, projects: 1 },
            { name: "CI/CD", level: 85, projects: 1 },
            { name: "AWS", level: 80, projects: 2 }
        ]
    },
    {
        title: "Tools & Utilities",
        icon: <Zap className="w-4 h-4 text-indigo-600" />,
        description: "Development tools",
        skills: [
            { name: "Git", level: 95, projects: 8 },
            { name: "Jupyter", level: 90, projects: 8 },
            { name: "VS Code", level: 90, projects: 10 },
            { name: "Linux", level: 85, projects: 2 }
        ]
    }
];
