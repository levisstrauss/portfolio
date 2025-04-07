import {JSX} from "react";
export interface ProjectType {
    id: number;
    title: string;
    description: string;
    image?: string;
    category: 'AI/ML' | 'MLOps' | 'Generative AI' | 'Data Science';
    technologies?: string[];
    links?: {
        demo?: string;
        github?: string;
        moreInfo?: string;
    };
}

export interface ProjectCardProps {
    project: ProjectType;
}

export interface CategoryConfig {
    tag: string;
    color: string;
    bgColor: string;
    icon: JSX.Element;
}

export interface ProjectPlaceholderProps {
    category: string;
    config: Record<string, CategoryConfig>;
}
