"use client"

import  { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        num: "01",
        category: "Front End",
        title: "Personal Portfolio Website",
        description: "A modern and responsive portfolio website showcasing projects, skills, and contact details. Integrated with EmailJS for contact form functionality.",
        stack: [
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
        ],
        image: '/assets/work/thumb1.png',
        live: "https://codemon.io/",
        github: "https://github.com/levisstrauss/portfolio",
    },
    {
        num: "02",
        category: "Deep Learning",
        title: "EfficientNet Flower Classification",
        description: "An advanced flower classification system using EfficientNet-B0 leverages transfer learning for high accuracy and efficiency. Fine-tuned on a custom dataset, it excels in species identification, showcasing modern CNNs in action.",
        stack: [
            { name: "PyTorch" },
            { name: "EfficientNet-B0"},
            { name: "Python" },
            { name: "Matplotlib"},
        ],
        image: '/assets/work/thumb2.png',
        live: "",
        github: "https://github.com/levisstrauss/flower_classification",
    },
    {
        num: "03",
        category: "Deep Learning",
        title: "Pre-trained CNN Dog Breed Classifier",
        description: "A sophisticated dog breed classification system utilizing VGG, ResNet, and AlexNet achieves 100% dog detection accuracy and 93.3% breed classification with VGG. The project highlights effective transfer learning for precise image classification.",
        stack: [
            { name: "PyTorch" },
            { name: "VGG" },
            { name: "ResNet" },
            { name: "AlexNet" },
            { name: "Python" },
            { name: "PIL" }
        ],
        image: '/assets/work/thumb3.png',
        live: "",
        github: "https://github.com/levisstrauss/Dog_breed_identification"
    },
    {
   num: "04",
   category: "Deep Learning",
   title: "MaskGuard - Face Mask Detection",
   description: "A face mask detection system using ResNet18 achieves 98.2% accuracy with fast 0.12s inference time. Features custom model head architecture and Gradio UI for interactive detection.",
   stack: [
       { name: "PyTorch" },
       { name: "ResNet18" },
       { name: "Gradio" },
       { name: "Python" },
       { name: "Torchvision" }
   ],
   image: '/assets/work/thumb4.png',
   live: "https://huggingface.co/spaces/Codemon/maskguard",
   github: "https://github.com/levisstrauss/face_mask_detection"
}
]


const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // Get the current slide index
        const currentIndex = swiper.activeIndex;
        // Update the project state based on the current slide index
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
                        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none"
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/*------------ outline num ---------------------*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*------------ Project category --------------------*/}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                             transition-all duration-500 capitalize"
                            >
                                {project.category} project
                            </h2>
                            {/*------------ Project description --------------------*/}
                            <p className="text-white/60">{project.description}</p>
                            {/*------------ Stacks --------------------*/}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li className="text-xl text-accent" key={index}>
                                            {item.name}
                                            {/*------------ Remove the last comma --------------------*/}
                                            {index !== project.stack.length - 1 &&  ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/*------------ Border --------------------*/}
                            <div className="border border-white/20"></div>
                            {/*------------ Button --------------------*/}
                            <div className="flex items-center gap-4">
                                {/*------------ Live project Button --------------------*/}
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                       <Tooltip>
                                           <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                           justify-center items-center group"
                                           >
                                               <BsArrowUpRight  className="text-white text-3xl group-hover:text-accent"/>
                                           </TooltipTrigger>
                                           <TooltipContent>
                                               <p>Live project</p>
                                           </TooltipContent>
                                       </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/*------------ Github project Button --------------------*/}
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                           justify-center items-center group"
                                            >
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                   <SwiperSlide key={index} className="w-full">
                                       <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                           {/*------------ Overlay --------------------*/}
                                           <div className="absolute top-0 bottom-0 w-full h-full bg-block/10 z-10">

                                           </div>
                                           {/*------------ Image --------------------*/}
                                           <div className="relative w-full h-full">
                                               <Image src={project.image}  fill className="object-fit" alt="" />
                                           </div>
                                       </div>
                                   </SwiperSlide>
                                )
                            })}
                            {/*------------ Slide button ------------------*/}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                                z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]
                                flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};


export default Work;
