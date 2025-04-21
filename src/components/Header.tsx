import React from 'react';
import { LinkItem } from '../types';

interface HeaderProps {
    imgLogo: string | undefined;
    linksHeader: LinkItem[] | undefined;
}

const Header: React.FC<HeaderProps> = ({ imgLogo, linksHeader }) => {
    return (
        <div className="flex items-center">
            <img src={imgLogo} alt="Logo" className="h-5" />
            <nav className='ml-10'>
                <ul className="flex gap-4">
                    {linksHeader?.map((link) => (
                        <li key={link.id}>
                            <a href={link.link} className="text-white hover:underline font-inter">
                                {link.titulo}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
