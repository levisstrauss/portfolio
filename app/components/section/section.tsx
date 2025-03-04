import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    bgColor?: string;
    children: React.ReactNode;
}

const Section = ({id, title, subtitle, bgColor = 'bg-white', children,}: SectionProps) => {
    return (
        <section id={id} className={`py-3 md:py-7 ${bgColor}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-3 text-gray-900 relative inline-block">
                        {title}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform -translate-y-1">
                        </span>
                    </h2>

                    {subtitle && (
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
                            {subtitle}
                        </p>
                    )}
                </div>

                {children}
            </div>
        </section>
    );
};

export default Section;
