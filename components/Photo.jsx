"use client"

import { motion } from "framer-motion"
import Image from "next/image";


const Photo = () => {
    return (
        <div className="w-full relative">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2, duration: 0.4, ease: "easeIn"}
                }}
            >
                {/*------------- Image ---------------------*/}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4, ease: "easeInOut"
                        }
                    }} className="w-[298px] h-[298px] xl:w-[498px]  xl:h-[498px] mix-blend-lighten absolute"
                >
                    <Image
                        src="/assets/img.png"
                        priority
                        quality={100}
                        fill
                        alt="Photo"
                        className="object-contain"
                    />
                </motion.div>
                {/*------------- Circle ---------------------*/}
                {/*    <motion.svg className="w-[300] xl:w-[506px] h-[300px] xl:h-[506px]"*/}
                {/*                fill="transparent"*/}
                {/*                viewBox="0 0 506 506"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*    >*/}
                    {/*    <motion.circle*/}
                    {/*        cx="253"*/}
                    {/*        cy="253"*/}
                    {/*        r="250"*/}
                    {/*        stroke="#00ff99"*/}
                    {/*        strokeWidth="4"*/}
                    {/*        strokeLinecap="round"*/}
                    {/*        strokeLinejoin="round"*/}
                    {/*        initial={{strokeDasharray: "24 10 0 0"}}*/}
                    {/*        // animate={{*/}
                    {/*        //     strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],*/}
                    {/*        //     rotate: [120, 360],*/}
                    {/*        // }}*/}
                    {/*        // animate={{*/}
                    {/*        //     strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],*/}
                    {/*        //     rotate: [120, 360],*/}
                    {/*        //     stroke: ["#00ff99", "#ff0099", "#0099ff"], // Color transition*/}
                    {/*        // }}*/}
                    {/*        animate={{*/}
                    {/*            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],*/}
                    {/*            rotate: [120, 360],*/}
                    {/*            scale: [1, 1.2, 1], // Pulse effect*/}
                    {/*        }}*/}
                    {/*        transition={{*/}
                    {/*            duration: 20,*/}
                    {/*            repeat: Infinity,*/}
                    {/*            repeatType: "reverse",*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</motion.svg>*/}
                <motion.svg className="w-[300] xl:w-[506px] h-[300px] xl:h-[506px]"
                            fill="transparent"
                            viewBox="0 0 506 506"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                >
                    <defs>
                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style={{stopColor: "#00ff99", stopOpacity: 1}}/>
                            <stop offset="100%" style={{stopColor: "#00ff99", stopOpacity: 1}}/>
                        </radialGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    <motion.circle
                        cx="253"
                        cy="253"
                        r="247"
                        stroke="url(#grad1)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            pathLength: 0,
                            rotate: 0,
                        }}
                        animate={{
                            pathLength: [0.2, 1, 0.8, 0.2], // Dynamic stroke progression
                            rotate: [0, 120, 360],
                            scale: [1, 1.02, 1],
                            strokeDasharray: ["20 80 40 40", "60 40 60 80", "4 200 100 150"],
                            filter: ["blur(0px)", "url(#glow)", "blur(0px)"],
                        }}
                        whileHover={{
                            scale: 1.1,
                            strokeWidth: 6,
                            strokeDashoffset: 20,
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "mirror",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}
export default Photo;


