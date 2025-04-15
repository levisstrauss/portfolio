import {Brain, Code, Database, GitBranch, Laptop, Zap} from "lucide-react";
import { SkillCategory } from './skills-types';

// export const skillCategories: SkillCategory[] = [
//     {
//         title: "Machine Learning",
//         icon: <Brain className="w-4 h-4 text-indigo-600" />,
//         description: "Core ML frameworks & techniques",
//         skills: [
//             { name: "PyTorch" },
//             { name: "TensorFlow" },
//             { name: "Deep Learning" },
//             { name: "Computer Vision" }
//         ]
//     },
//     {
//         title: "NLP & Advanced ML",
//         icon: <Zap className="w-4 h-4 text-indigo-600" />,
//         description: "Language processing & specialized techniques",
//         skills: [
//             { name: "NLP" },
//             { name: "Transformers" },
//             { name: "Model Optimization" },
//             { name: "Scikit-learn" }
//         ]
//     },
//     {
//         title: "MLOps",
//         icon: <GitBranch className="w-4 h-4 text-indigo-600" />,
//         description: "ML deployment & infrastructure",
//         skills: [
//             { name: "Docker" },
//             { name: "Kubernetes" },
//             { name: "AWS SageMaker" },
//             { name: "Model Serving" }
//         ]
//     },
//     {
//         title: "Data Engineering",
//         icon: <Database className="w-4 h-4 text-indigo-600" />,
//         description: "Data processing & analysis",
//         skills: [
//             { name: "Pandas" },
//             { name: "NumPy" },
//             { name: "Data Pipelines" },
//             { name: "PySpark" }
//         ]
//     },
//     {
//         title: "Software Development",
//         icon: <Code className="w-4 h-4 text-indigo-600" />,
//         description: "Programming & API development",
//         skills: [
//             { name: "Python" },
//             { name: "C++" },
//             { name: "SQL" },
//             { name: "FastAPI" }
//         ]
//     },
//     {
//         title: "Research Tools",
//         icon: <Laptop className="w-4 h-4 text-indigo-600" />,
//         description: "Experimentation & analysis",
//         skills: [
//             { name: "Weights & Biases" },
//             { name: "Jupyter" },
//             { name: "Experiment Tracking" },
//             { name: "Research Literature" }
//         ]
//     }
// ];

export const skillCategories:  SkillCategory[]  = [
    {
        title: "Machine Learning",
        icon: <Brain className="w-4 h-4 text-indigo-600" />,
        description: "Core ML frameworks & techniques",
        skills: [
            { name: "PyTorch" },
            { name: "TensorFlow" },
            { name: "Deep Learning" },
            { name: "Computer Vision" }
        ]
    },
    {
        title: "NLP & Advanced ML",
        icon: <Zap className="w-4 h-4 text-indigo-600" />,
        description: "Language processing & specialized techniques",
        skills: [
            { name: "NLP" },
            { name: "Transformers" },
            { name: "Model Optimization" },
            { name: "Scikit-learn" }
        ]
    },
    {
        title: "MLOps",
        icon: <GitBranch className="w-4 h-4 text-indigo-600" />,
        description: "ML deployment & infrastructure",
        skills: [
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "AWS SageMaker" },
            { name: "Model Serving" }
        ]
    },
    {
        title: "Data Engineering",
        icon: <Database className="w-4 h-4 text-indigo-600" />,
        description: "Data processing & analysis",
        skills: [
            { name: "Pandas" },
            { name: "NumPy" },
            { name: "Data Pipelines" },
            { name: "PySpark" }
        ]
    },
    {
        title: "Software Development",
        icon: <Code className="w-4 h-4 text-indigo-600" />,
        description: "Programming & API development",
        skills: [
            { name: "Python" },
            { name: "C++" },
            { name: "SQL" },
            { name: "FastAPI" }
        ]
    },
    {
        title: "Research Tools",
        icon: <Laptop className="w-4 h-4 text-indigo-600" />,
        description: "Experimentation & analysis",
        skills: [
            { name: "Weights & Biases" },
            { name: "Jupyter" },
            { name: "Experiment Tracking" },
            { name: "Research Literature" }
        ]
    }
];
