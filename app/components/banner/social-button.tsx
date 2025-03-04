import Link from 'next/link';
import { SocialButtonProps } from './banner.types';

const SocialButton = ({ name, url }: SocialButtonProps) => {
    return (
        <Link
            href={url}
            className="text-white hover:text-blue-200 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-1.5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name}`}
        >
            <span>{name}</span>
        </Link>
    );
};

export default SocialButton;
