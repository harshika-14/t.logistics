import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName.toLowerCase() === 'button' ||
                          target.tagName.toLowerCase() === 'a' ||
                          target.closest('button') ||
                          target.closest('a');
      
      if (isClickable && ringRef.current && cursorRef.current) {
        ringRef.current.style.width = '60px';
        ringRef.current.style.height = '60px';
        ringRef.current.style.backgroundColor = 'rgba(238,63,44,0.1)';
        cursorRef.current.style.transform += ' scale(0.5)';
      } else if (ringRef.current && cursorRef.current) {
        ringRef.current.style.width = '40px';
        ringRef.current.style.height = '40px';
        ringRef.current.style.backgroundColor = 'transparent';
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.5)', '');
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-brand-red rounded-full pointer-events-none z-[9999] mix-blend-difference -ml-1.5 -mt-1.5 transition-transform duration-100 ease-out will-change-transform"
      />
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-brand-red rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out will-change-transform"
      />
    </div>
  );
};

export const ClipButton = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyles = "clip-corner relative px-8 py-3.5 font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 text-xs text-center inline-flex items-center justify-center";
  const variants: any = {
    primary: "bg-brand-red text-white hover:brightness-110 hover:shadow-[0_0_15px_rgba(238,63,44,0.4)]",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 lg:px-16",
      scrolled ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-2xl font-black tracking-tighter"
          >
            T<span className="text-brand-red">.</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-opacity px-5 py-2 rounded-full",
                location.pathname === item.path ? "text-brand-red bg-white/5" : "text-white opacity-70 hover:opacity-100"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center border-l border-white/20 pl-4 ml-2 gap-4">
            <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Log In</Link>
            <Link to="/register"><ClipButton variant="primary">Sign Up</ClipButton></Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-xl font-medium",
                  location.pathname === item.path ? "text-brand-red" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-2 border-t border-white/10 pt-6">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-white/70 hover:text-white">Log In</Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <ClipButton variant="primary" className="w-full">Sign Up</ClipButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-transparent py-16 px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-white text-3xl font-black tracking-tighter mb-4">
            T<span className="text-brand-red">.</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs text-center md:text-left leading-relaxed">
            Leading the future of cargo management through precision and speed.
          </p>
        </div>

        <div className="flex gap-12 text-sm uppercase font-bold tracking-widest text-white/50">
          <Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-brand-red transition-colors">Terms</Link>
          <Link to="/careers" className="hover:text-brand-red transition-colors">Careers</Link>
        </div>

        <p className="text-white/30 text-xs font-medium">
          © 2026 T. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
