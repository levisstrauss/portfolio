import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Banner from "@/app/components/banner";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";

// Font setup
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
    title: 'Zakaria Coulibaly - AI/ML Specialist',
    description: 'Portfolio showcasing expertise in AI/ML, computer vision, and cloud architecture.',
    keywords: 'AI specialist, ML engineer, portfolio',
    authors: [{ name: 'Zakaria Coulibaly' }],
    creator: 'Zakaria Coulibaly',
};

import BackToTop from './components/ui/back-to-top';

export default function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <Banner />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        <BackToTop />
        </body>
        </html>
    );
}

