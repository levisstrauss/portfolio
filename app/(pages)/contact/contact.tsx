"use client";
import { useState } from 'react';
import Section from '@/app/components/section';

const Contact = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const contactOptions = [
        {
            id: 'email',
            title: 'Email',
            value: 'zcoulibalyeng@gmail.com',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            action: 'Copy',
            actionHandler: () => navigator.clipboard.writeText('zcoulibalyeng@gmail.com')
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            value: 'www.linkedin.com/in/codemon',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            ),
            action: 'Visit',
            actionHandler: () => window.open('https://www.linkedin.com/in/codemon', '_blank')
        },
        {
            id: 'github',
            title: 'GitHub',
            value: 'github.com/levisstrauss',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            action: 'Visit',
            actionHandler: () => window.open('https://github.com/levisstrauss', '_blank')
        },
        {
            id: 'twitter',
            title: 'Twitter',
            value: '@codemon2024',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
            ),
            action: 'Visit',
            actionHandler: () => window.open('https://x.com/codemon2024', '_blank')
        }
    ];
    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="Call | Connect with me through these channels"
            bgColor="bg-gradient-to-b from-gray-100 to-white"
        >
            <div className="flex flex-col items-center">
                <p className="text-lg text-gray-700 text-center max-w-2xl mb-5">
                    I'm always interested in new opportunities, collaborations, or just a friendly chat about technology and innovation.
                    Feel free to reach out through any of the channels below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                    {contactOptions.map((option) => (
                        <div
                            key={option.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg
                            transition-all duration-300 hover:border-indigo-200"
                            // @ts-ignore
                            onMouseEnter={() => setHoveredCard(option.id )}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-full ${hoveredCard === option.id ? 'bg-indigo-600' : 'bg-indigo-100'} transition-colors duration-300`}>
                                        <div className={`${hoveredCard === option.id ? 'text-white' : 'text-indigo-600'} transition-colors duration-300`}>
                                            {option.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{option.title}</h3>
                                        <p className="text-gray-600">{option.value}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={option.actionHandler}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                        hoveredCard === option.id
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    } transition-colors duration-300`}
                                >
                                    {option.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Availability Schedule */}
                <div className="mt-12 w-full max-w-3xl bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center text-xl">
                        <span className="w-8 h-8 inline-flex items-center justify-center bg-indigo-600 text-white rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        Availability
                    </h3>
                    <p className="text-gray-700 mb-4">
                        I typically respond within 24-48 hours. For immediate inquiries or time-sensitive matters, please mention it in your message.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-semibold text-indigo-600">Time Zone</h4>
                            <p className="text-gray-700">UTC-5 (Eastern Time)</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-semibold text-indigo-600">Best Contact Hours</h4>
                            <p className="text-gray-700">10:00 AM - 6:00 PM ET</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-semibold text-indigo-600">Response Time</h4>
                            <p className="text-gray-700">Within 48 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
