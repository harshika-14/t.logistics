import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Navbar, Footer, CustomCursor } from './components/Shared';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Background3D from './components/Background3D';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();

  return (
    <div className="min-h-screen text-white antialiased selection:bg-brand-red selection:text-white lg:cursor-none">
      <Background3D />
      <CustomCursor />
      <ScrollToTop />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red origin-left z-[10000]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          {/* @ts-expect-error key is necessary for AnimatePresence */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
