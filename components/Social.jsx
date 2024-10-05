import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";


const socials = [
    {icon: <FaGithub />, path: "https://github.com/levisstrauss"},
    {icon: <FaLinkedin />, path: "https://linkedin.com/in/codemon"},
    {icon: <FaYoutube />, path: "https://youtube.com/@codemon577"},
    {icon: <FaTwitter />, path: "https://x.com/codemon2024"},
]

const Social = ({ containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;
