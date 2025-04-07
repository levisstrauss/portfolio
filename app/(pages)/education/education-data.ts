import {EducationType} from "@/app/(pages)/education/education-types";


export const educationData: EducationType[] = [

    {
        id: 'Masters',
        degree: 'Masters of Science',
        specialization: 'Computer Science',
        institution: 'Illinois Urbana-Champaign',
        location: 'UIUC, IL',
        period: '2025 - 2026',
        color: 'orange',
        achievements: [
            // { description: 'Minor: Mathematics' },
            // { description: 'Societies: NSLS, UPE, ACM' },
            // { description: 'Dean\'s List for some semesters' }
        ],
        courses: [
            // {name:  'Introduction to Programming'},
            // {name:  'Object-Oriented Programming'},
            // {name:  'Discrete Mathematics'},
            // {name:  'Programming Language Concepts'},
            // { name: 'Data Structures & Algorithms' },
            // { name: 'Web Development'},
            // { name: 'Calculus'},
            // { name: 'Linear Algebra'},
            // { name: 'Software Engineering' },
            // { name: 'Database Systems' },
            // { name: 'Operating Systems' },
            // { name: 'Compilers' },
            // { name: 'Probability'}
        ],
        projects: ' ',
    },
    {
        id: 'Bachelor',
        degree: 'Bachelor of Science',
        specialization: 'Computer Science',
        institution: 'Penn State University',
        location: 'Penn, PA',
        period: '2022 - 2024',
        color: 'blue',
        achievements: [
            { description: 'Minor: Mathematics' },
            { description: 'Societies: NSLS, UPE, ACM' },
            { description: 'Dean\'s List for some semesters' }
        ],
        courses: [
            {name:  'Introduction to Programming'},
            {name:  'Object-Oriented Programming'},
            {name:  'Discrete Mathematics'},
            {name:  'Programming Language Concepts'},
            { name: 'Data Structures & Algorithms' },
            { name: 'Web Development'},
            { name: 'Calculus'},
            { name: 'Linear Algebra'},
            { name: 'Software Engineering' },
            { name: 'Database Systems' },
            { name: 'Operating Systems' },
            { name: 'Compilers' },
            { name: 'Probability'}
        ],
        projects: ' Led team of 2 to build a precalculus learning mobile ' +
            'applications for helping students to understand math.',
    },

]

