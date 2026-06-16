import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case page starts scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Career', path: '/timeline' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'Stack', path: '/tech-stack' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 flex justify-end items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-100/80 shadow-sm py-4 px-4 sm:px-8 md:px-16' 
          : 'bg-transparent py-6 sm:py-8 px-4 sm:px-8 md:px-16'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
    >
      <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] pb-1 transition-all duration-300 ${
                isActive
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
