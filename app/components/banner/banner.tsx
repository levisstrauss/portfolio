import { SocialLink, Tag } from './banner.types';
import SocialButton from '../banner/social-button';
import TagBadge from '../banner/tag-badge';
import { FileDown } from 'lucide-react'; // Import the download icon

const tags: Tag[] = [
    { id: 'gen-ai-and-deep-learning', label: 'Generative AI & Deep Learning' },
    { id: 'software-engineering', label: 'Software Development' },
    { id: 'mlops-and-system-design', label: 'MLOps & System Design' },
    { id: 'system-design', label: 'System Design' },
    { id: 'cloud', label: 'Cloud Architecture (AWS)' },
    { id: 'analyst', label: 'Data Analyst'},
];

const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/levisstrauss', icon: 'github' },
    { name: 'LinkedIn', url: 'www.linkedin.com/in/codemon', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/codemon2024', icon: 'twitter' },
    { name: 'YouTube', url: '/', icon: 'youtube' }
];

const Banner = () => {
    return (
        <header className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-24 md:py-32 overflow-hidden">
            {/* Background pattern overlay */}
            <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                    backgroundImage:
                        `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Name with animation */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in">
                        Zakaria Coulibaly
                    </h1>

                    {/* Title with animation */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in delay-200">
                        An ardent explorer in the realm of Software Engineering and AI/ML
                    </p>

                    {/* Skill tags with animation */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 animate-fade-in delay-400">
                        {tags.map((tag) => (
                            <TagBadge key={tag.id} label={tag.label} />
                        ))}
                    </div>

                    {/* Download Resume Button */}
                    <div className="animate-fade-in delay-500">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50
                                     px-6 py-3 rounded-full font-medium transition-all duration-300
                                     shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            <FileDown className="w-5 h-5" />
                            Download Resume
                        </a>
                    </div>

                    {/* Social links with hover effects */}
                    <div className="flex justify-center gap-4 md:gap-6 mt-10 animate-fade-in delay-600">
                        {socialLinks.map((link) => (
                            <SocialButton
                                key={link.name}
                                name={link.name}
                                url={link.url}
                                icon={link.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
