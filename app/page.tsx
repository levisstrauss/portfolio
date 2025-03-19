import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/app/components/ui/loading-spinner';


type SectionLoaderProps = {
    name: string;
}

const SectionLoader = ({ name }: SectionLoaderProps) => (
    <section className="py-20 flex justify-center items-center">
        <div className="text-center">
            <LoadingSpinner />
            <p className="mt-4 text-gray-600">Loading {name} Section...</p>
        </div>
    </section>
);

// Priority content (above the fold)
const About = dynamic(() => import('@/app/(pages)/about/about'), {
    ssr: true // Pre-render this component on the server for faster initial load
});

// Experience section - relatively high priority
const Experience = dynamic(() => import('@/app/(pages)/experience/experience'), {
    ssr: true // Also pre-render this component for better SEO and initial load
});

// Secondary content (below the fold)
const Projects = dynamic(() => import('@/app/(pages)/projects/projects'));
const Skills = dynamic(() => import('@/app/(pages)/skills/skills'));
const Education = dynamic(() => import('@/app/(pages)/education/education'));
const Certificates = dynamic(() => import('@/app/(pages)/certificates/certificates'));
const Contact = dynamic(() => import('@/app/(pages)/contact/contact'));
const OpenSource = dynamic(() => import('@/app/(pages)/open-source/open-source'));
const Blog = dynamic(() => import('@/app/(pages)/blog/blog'));

export default function Home() {
    return (
        <>
            {/* Priority content - fewer loading states */}
            <About />
            <Experience />

            {/* Separate loading for independent sections */}
            <Suspense fallback={<SectionLoader name="Projects" />}>
                <Projects />
            </Suspense>

            {/* Group related content in a single Suspense boundary */}
            <Suspense fallback={<SectionLoader name="Professional Info" />}>
                <Skills />
                <Education />
                <Certificates />
            </Suspense>
            {/* Open Source and Blog sections */}
            {/*<Suspense fallback={<SectionLoader name="Contributions" />}>*/}
            {/*    <OpenSource />*/}
            {/*    <Blog />*/}
            {/*</Suspense>*/}

            <Suspense fallback={<SectionLoader name="Contact" />}>
                <Contact />
            </Suspense>
        </>

    );
}
