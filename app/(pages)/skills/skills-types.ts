import { ReactNode } from 'react';

export interface Skill {
    name: string;
    level: number;
    projects: number;
}

export interface SkillCategory {
    title: string;
    icon: ReactNode;
    description: string;
    skills: Skill[];
}
