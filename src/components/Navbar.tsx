import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Career', path: '/timeline' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'Stack', path: '/tech-stack' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 right-0 left-0 z-50 flex justify-between md:justify-end items-center transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-100/80 shadow-sm py-4 px-6 md:px-16' 
            : 'bg-transparent py-6 sm:py-8 px-6 md:px-16'
        }`}
        style={{
          backdropFilter: isScrolled || mobileMenuOpen ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: isScrolled || mobileMenuOpen ? 'blur(8px)' : 'none',
        }}
      >
        {/* Mobile Brand / Monogram */}
        <Link 
          to="/" 
          className="md:hidden text-xs font-bold font-display tracking-[0.2em] text-slate-900"
        >
          ALEXANDRE DOLE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] pb-1 transition-all duration-300 ${
                  isActive
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <a
            href="https://www.linkedin.com/in/alexdole/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0A66C2] transition-colors p-1"
            title="Alex Dole on LinkedIn"
            aria-label="Alex Dole on LinkedIn"
          >
            <Linkedin size={19} />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  </Link>
                );
              })}

              <a
                href="https://www.linkedin.com/in/alexdole/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-between text-slate-600 hover:bg-slate-50 hover:text-[#0A66C2]"
              >
                <span>LinkedIn</span>
                <Linkedin size={18} className="text-[#0A66C2]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
