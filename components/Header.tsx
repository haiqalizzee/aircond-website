import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Package", href: "#package" },
    { name: "Feedback", href: "#feedback" }
  ];

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) { // if scroll down hide the navbar
        setVisible(false);
        setIsScrolling(true);
      } else { // if scroll up show the navbar
        setVisible(true);
        setIsScrolling(false);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header 
      className={`
        bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 
        transition-all duration-700 ease-out
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
        ${isScrolling ? 'scale-98' : 'scale-100'}
        border-b border-gray-200/50
        overflow-hidden
      `}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-2xl font-bold text-brand-blue-deep">AirCool Pro</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-blue font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#quote" 
              className="bg-brand-blue text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-2 text-gray-600 hover:bg-brand-blue/10 rounded-md transition-all duration-200 hover:translate-x-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#quote" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-2 bg-brand-blue text-white font-semibold rounded-full text-center mt-2 transition-all duration-200 hover:bg-brand-blue-dark hover:scale-105"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;