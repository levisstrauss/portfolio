export interface CourseType {
    name: string;
}

export interface AchievementType {
    description: string;
}

export interface CertificateType {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    skills: string[];
}

export interface EducationType {
    id: string;
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    period: string;
    color: 'orange' | 'blue' | 'yellow' ;
    achievements: AchievementType[];
    courses: CourseType[];
    projects: string;
    certificates?: CertificateType[]; // Added certificates as optional field
}
