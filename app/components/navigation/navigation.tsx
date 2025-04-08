"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {User, Award, Code, Briefcase, Mail, Menu, X, FileText, FolderOpen, GitFork, BookOpen} from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverBanner, setIsOverBanner] = useState(true);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // Navigation items
    const navItems = [
        { name: 'About', href: isHomePage ? '#about' : '/#about', icon: <User className="w-4 h-4" /> },
        // { name: 'Experience', href: isHomePage ? '#experience' : '/#experience', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Projects', href: isHomePage ? '#projects' : '/#projects', icon: <FolderOpen className="w-4 h-4" /> },
        { name: 'Skills', href: isHomePage ? '#skills' : '/#skills', icon: <Code className="w-4 h-4" /> },
        // { name: 'Open Source', href: isHomePage ? '#open-source' : '/#open-source', icon: <GitFork className="w-4 h-4" /> },
        // { name: 'Blog', href: isHomePage ? '#blog' : '/#blog', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Education', href: isHomePage ? '#education' : '/#education', icon: <Award className="w-4 h-4" /> },
        { name: 'Certificates', href: isHomePage ? '#certificates' : '/#certificates', icon: <FileText className="w-4 h-4" /> },
        { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', icon: <Mail className="w-4 h-4" /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Get the actual banner height dynamically
            const bannerElement = document.querySelector('header'); // Assuming your Banner has a header tag
            const bannerHeight = bannerElement ? bannerElement.offsetHeight : 0;

            // Now check if we've scrolled past the banner
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > bannerHeight);

            // Check if we're still over the banner (but not at the very top)
            // This helps determine when to add the semi-transparent background
            setIsOverBanner(scrollPosition > 0 && scrollPosition < bannerHeight);

            if (isHomePage) {
                // Detect an active section based on scroll position
                const sections = document.querySelectorAll('section[id]');

                let currentSection = '';
                sections.forEach((section) => {
                    // @ts-ignore
                    const sectionTop = section.offsetTop - 100;
                    // @ts-ignore
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = `#${section.id}`;
                    }
                });

                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHomePage]);

    return (
        <>
            {/* Desktop Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white shadow-md py-3'
                        : isOverBanner
                            ? 'bg-black/30 backdrop-blur-sm py-5'
                            : 'bg-transparent py-5'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo/Name */}
                        <Link href="/" className={`text-xl font-bold transition-colors duration-300 ${
                            isScrolled ? 'text-gray-900' : 'text-white'
                        }`}>
                            Zakaria C.
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                // Determine if this item is active
                                const isActive =
                                    (isHomePage && activeSection === item.href) ||
                                    (!isHomePage && pathname.startsWith(item.href) && item.href !== '/');

                                return (
                                    <div className="relative" key={item.name}>
                                        {isActive && (
                                            <motion.div
                                                className={`absolute ${
                                                    isScrolled
                                                        ? 'bottom-0 h-0.5 bg-indigo-600 rounded-full'
                                                        : 'inset-0 bg-white/10 rounded-md'
                                                }`}
                                                layoutId="activeNavIndicator"
                                                initial={false}
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 0.6
                                                }}
                                            />
                                        )}
                                        <Link
                                            href={item.href}
                                            className={`px-4 py-2 rounded-md font-medium transition-colors relative z-10 ${
                                                isScrolled
                                                    ? isActive
                                                        ? 'text-indigo-600'
                                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
                                                    : 'text-white hover:text-white/80'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden transition-colors duration-300 focus:outline-none ${
                                isScrolled
                                    ? 'text-gray-700 hover:text-indigo-600'
                                    : 'text-white hover:text-white/80'
                            }`}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Navigation Menu */}
            <motion.div
                className="fixed inset-0 z-40 bg-white md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 300
                }}
            >
                {/* Mobile menu content */}
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <span className="text-xl font-bold text-gray-900">Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="py-4 px-6 space-y-2 flex-grow overflow-y-auto">
                        {navItems.map((item) => {
                            // Determine if this item is active
                            const isActive =
                                (isHomePage && activeSection === item.href) ||
                                (!isHomePage && pathname.startsWith(item.href) && item.href !== '/');

                            return (
                                <div className="relative" key={item.name}>
                                    {isActive && (
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-full"
                                            layoutId="activeMobileNavIndicator"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                                            isActive
                                                ? 'text-indigo-600 bg-indigo-50'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Navigation;
