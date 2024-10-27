"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const skills = [
    {
        num: '01',
        title: 'Software Developer',
        description: "Crafting robust and scalable applications using modern programming languages and frameworks. Experienced in full-stack development, with a focus on clean code architecture and efficient problem-solving.",
        href: " ",
    },
    {
        num: '02',
        title: 'AI/ML Engineer',
        description: "Developing intelligent solutions through machine learning algorithms and deep learning models. Specializing in data analysis, predictive modeling, and implementing AI-driven applications that solve real-world challenges.",
        href: "",
    },
    {
        num: '03',
        title: 'UI/UX Designer',
        description: "Creating intuitive and engaging user experiences through thoughtful interface design. Combining aesthetic principles with user-centered design methodologies to deliver seamless digital interactions that delight users.",
        href: " ",
    },
    {
        num: '04',
        title: 'AWS',
        description: "Architecting and deploying cloud solutions using Amazon Web Services. Expertise in cloud infrastructure, serverless computing, and implementing secure, highly available systems that scale efficiently.",
        href: " ",
    }

]


const Skills = () => {
    return (
        <section className="min-h-[80vh] flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
              <motion.div
               initial={{ opacity: 0}}
               animate={{
                   opacity: 1,
                   transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
               }}
               className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
              >
              {skills.map((skill, index) => {
                  return (
                      <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                          {/*------------- Top ---------------------*/}
                          <div className="w-full flex justify-between items-center">
                              <div className="text-5xl font-extrabold text-outline text-transparent
                              group-hover:text-outline-hover transition-all duration-500">
                                  {skill.num}
                              </div>
                              <Link href={skill.href} className="w-[70px] h-[70px] rounded-full bg-white
                              group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                              hover:-rotate-45"
                              >
                                  <BsArrowDownRight className="text-primary text-3xl" />
                              </Link>
                          </div>
                          {/*------------- Title ---------------------*/}
                          <h2 className="text-[42px] font-bold leading-none text-white
                          group-hover:text-accent transition-al duration-500">
                              {skill.title}
                          </h2>
                          {/*------------- Description -----------------*/}
                          <p className="text-white/60">{skill.description}</p>
                          {/*------------- Border -----------------*/}
                          <div className="border-b border-white/20 w-full"></div>
                      </div>
                  );
              })}
              </motion.div>
            </div>
        </section>
    );
};


export default Skills;
