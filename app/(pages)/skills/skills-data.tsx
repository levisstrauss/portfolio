import {Brain, Code, Database, GitBranch, Laptop, Zap} from "lucide-react";
import { SkillCategory } from './skills-types';


export const skillCategories: SkillCategory[] = [
    {
        title: "ML Engineering Core",
        icon: <Brain className="w-4 h-4 text-indigo-600" />,
        description: "Machine learning frameworks & techniques",
        skills: [
            { name: "PyTorch", level: 90, projects: 3 },
            { name: "TensorFlow", level: 87, projects: 3 },
            { name: "Scikit-learn", level: 90, projects: 3 },
            { name: "Computer Vision", level: 88, projects: 2 }
        ]
    },
    {
        title: "ML Specializations",
        icon: <Zap className="w-4 h-4 text-indigo-600" />,
        description: "Specialized ML domains",
        skills: [
            { name: "NLP", level: 85, projects: 2 },
            { name: "Transformers", level: 83, projects: 2 },
            { name: "Deep Learning", level: 87, projects: 3 },
            { name: "Model Optimization", level: 82, projects: 2 }
        ]
    },
    {
        title: "MLOps & Deployment",
        icon: <GitBranch className="w-4 h-4 text-indigo-600" />,
        description: "ML systems engineering",
        skills: [
            { name: "Docker", level: 90, projects: 1 },
            { name: "Kubernetes", level: 85, projects: 1 },
            { name: "AWS SageMaker", level: 80, projects: 2 },
            { name: "Model Serving", level: 82, projects: 1 }
        ]
    },
    {
        title: "Data Engineering",
        icon: <Database className="w-4 h-4 text-indigo-600" />,
        description: "Data processing & analysis",
        skills: [
            { name: "Pandas", level: 95, projects: 3 },
            { name: "NumPy", level: 90, projects: 3 },
            { name: "Data Pipelines", level: 85, projects: 2 },
            { name: "PySpark", level: 75, projects: 1 }
        ]
    },
    {
        title: "Programming",
        icon: <Code className="w-4 h-4 text-indigo-600" />,
        description: "Development languages",
        skills: [
            { name: "Python", level: 95, projects: 2 },
            { name: "C++", level: 85, projects: 2 },
            { name: "SQL", level: 80, projects: 3 },
            { name: "FastAPI", level: 88, projects: 3 }
        ]
    },
    {
        title: "Research & Experimentation",
        icon: <Laptop className="w-4 h-4 text-indigo-600" />,
        description: "ML research tools",
        skills: [
            { name: "Weights & Biases", level: 85, projects: 2 },
            { name: "Jupyter", level: 90, projects: 8 },
            { name: "Experiment Tracking", level: 85, projects: 3 },
            { name: "Research Papers", level: 80, projects: 2 }
        ]
    }
];
