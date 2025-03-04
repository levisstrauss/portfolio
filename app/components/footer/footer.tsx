import Link from 'next/link';

const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
];

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/levisstrauss' },
    { name: 'LinkedIn', url: 'www.linkedin.com/in/codemon' },
    { name: 'Twitter', url: 'https://x.com/codemon2024' },
    { name: 'YouTube', url: '' }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p>Pennsylvania, PA</p>
                            <p>
                                <Link
                                    href="mailto:zcoulibalyeng@gmail.com"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    zcoulibalyeng@gmail.com
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href="tel:+12155359838"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    +1 215-535-9838
                                </Link>
                            </p>
                        </address>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm">
                    <p>© {currentYear} Zakaria Coulibaly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
