
"use client"

import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea} from "@/components/ui/scroll-area";



{/*------------- About data ---------------------*/}

const about = {
    title: "About Me",
    description: "A software and AI/ML engineer driven by the intersection of innovation and technology. With a strong foundation in computer science and mathematics, I develop intelligent solutions that merge cutting-edge machine learning with robust software engineering principles.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Zakaria Coulibaly"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1) 215 535 9838"
        },
        {
            fieldName: "Experience",
            fieldValue: "2 Years"
        },
        {
            fieldName: "Email",
            fieldValue: "zcoulibalyeng@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French"
        },
        {
            fieldName: "Twitter",
            fieldValue: "Levis@2024"
        },
        {
            fieldName: "Opportunity",
            fieldValue: "Available"
        },
        {
            fieldName: "Youtube",
            fieldValue: "@codemon577"
        },
    ]
}

{/*------------- Experience data ---------------------*/}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Currently expanding my expertise through hands-on projects and continuous learning in software development and machine learning. Actively seeking opportunities to apply my strong foundation in computer science and mathematics to real-world AI solutions.",
    items: [
        // {
        //     company: "Amazon",
        //     position: "Associate",
        //     duration: "3 Months ago"
        // },
        // {
        //     company: "UPS",
        //     position: "Front Line Supervisor",
        //     duration: "2 Years ago"
        // }
    ]
}

{/*------------- Education data ---------------------*/}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Skilled in computer science and engineering, with expertise in software development, AI, and machine learning. My education drives my passion for innovative tech solutions.",
    items: [
        {
            institution: "Penn State University",
            degree: "Bachelor in CS / Minor Mathematics",
            duration: "2022-2024"
        },
        {
            institution: "CCP",
            degree: "Associate in Computer Science",
            duration: "2019-2021"
        },
        {
            institution: "Coursera Platform",
            degree: "Mathematics for ML and DS Specialization",
            duration: "2023"
        },
        {
            institution: "Coursera Platform",
            degree: "Deep Learning Specialization",
            duration: "2023"
        },
        {
            institution: "Coursera Platform",
            degree: "Mathematics for ML & DS Specialization",
            duration: "2023"
        },
        {
            institution: "Coursera Online Course Platform",
            degree: "ML Specialization",
            duration: "2023"
        },
        {
            institution: "Coursera Platform",
            degree: "C Programming with Linux Specialization",
            duration: "2023"
        },
        {
            institution: "Coursera Platform",
            degree: "NLP Specialization",
            duration: "2023"
        },
        {
            institution: "Scrimba Platform",
            degree: "Frontend development Specialization",
            duration: "2023"
        },
    ]
}

{/*------------- Skills data ---------------------*/}

const skills = {
    title: "My Skills",
    description: "Proficient in full-stack development, machine learning algorithms, and cloud technologies. Skilled in" +
        " creating intelligent applications using Python, TensorFlow, and AWS, with a strong foundation in responsive web design.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaFigma />,
            name: "figma"
        }

    ]
}


const Resume = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
              opacity: 1,
              transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/*------------- Table Content ---------------------*/}
                    <div className="min-h-[70vh] w-full">
                        {/*------------- Experience ---------------------*/}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                                    flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*---- dot -----------*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*------------- Education ---------------------*/}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                                    flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*---- dot -----------*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*------------- Skills ---------------------*/}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group]:">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/*------------- About ---------------------*/}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className=" flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-1xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
