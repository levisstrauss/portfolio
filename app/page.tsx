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

// Secondary content (below the fold)
const Skills = dynamic(() => import('@/app/(pages)/skills/skills'));
const Education = dynamic(() => import('@/app/(pages)/education/education'));
const Certificates = dynamic(() => import('@/app/(pages)/certificates/certificates'));
const Projects = dynamic(() => import('@/app/(pages)/projects/projects'));
const Contact = dynamic(() => import('@/app/(pages)/contact/contact'));


export default function Home() {
    return (
        <>
            {/* Priority content - fewer loading states */}
            <About />

            {/* Group related content in a single Suspense boundary */}
            <Suspense fallback={<SectionLoader name="Professional Info" />}>
                <Skills />
                <Education />
                <Certificates />
            </Suspense>

            {/* Separate loading for independent sections */}
            <Suspense fallback={<SectionLoader name="Projects" />}>
                <Projects />
            </Suspense>

            <Suspense fallback={<SectionLoader name="Contact" />}>
                <Contact />
            </Suspense>
        </>
    );
}
