import React from 'react';

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
        {icon}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-blue-deep text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">AirCool Pro HQ</h3>
                        <p className="text-gray-300">
                            123, Jalan Teknologi 5,<br />
                            Taman Teknologi Malaysia,<br />
                            57000 Kuala Lumpur.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Hotline</h3>
                        <a href="tel:012-6789765" className="text-3xl font-bold hover:text-brand-blue-light transition-colors duration-300">
                            012-6789 765
                        </a>
                        <h3 className="font-bold text-lg mt-8 mb-4 uppercase tracking-wider">Email</h3>
                        <a href="mailto:contact@aircool.pro" className="text-lg text-gray-300 hover:text-white">
                            contact@aircool.pro
                        </a>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-5">
                            <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>} />
                            <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.62c-3.149 0-3.51.01-4.745.07-2.68.12-3.84 1.28-3.96 3.96-.06 1.23-.07 1.59-.07 4.74s.01 3.51.07 4.74c.12 2.68 1.28 3.84 3.96 3.96 1.23.06 1.59.07 4.74.07 3.15 0 3.51-.01 4.74-.07 2.68-.12 3.84-1.28 3.96-3.96.06-1.23.07-1.59.07-4.74s-.01-3.51-.07-4.74c-.12-2.68-1.28-3.84-3.96-3.96C15.51 3.79 15.15 3.78 12 3.78zM12 7.82c-2.3 0-4.18 1.88-4.18 4.18s1.88 4.18 4.18 4.18 4.18-1.88 4.18-4.18S14.3 7.82 12 7.82zm0 6.74c-1.42 0-2.56-1.14-2.56-2.56S10.58 9.44 12 9.44s2.56 1.14 2.56 2.56-1.14 2.56-2.56 2.56zm4.8-6.38c-.7 0-1.28-.58-1.28-1.28s.58-1.28 1.28-1.28 1.28.58 1.28 1.28-.58 1.28-1.28 1.28z" /></svg>} />
                            <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>Copyright © AirCool Pro Services (1234567-X). All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;