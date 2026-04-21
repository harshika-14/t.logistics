import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Zap, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClipButton } from '../components/Shared';

const Hero = () => {
  const { scrollY } = useScroll();
  const videoBlur = useTransform(scrollY, [0, 500], [0, 8]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <motion.div style={{ filter: `blur(${videoBlur}px)` }} className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col justify-center pt-20">
        <motion.div style={{ y: contentY, opacity }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-[84px] font-[800] uppercase tracking-[-0.04em] leading-[0.9] text-white">
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">Swift &</motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block text-brand-red">Intelligent</motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">Transport</motion.span>
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-md leading-relaxed">Effortless logistics solutions designed for speed, reliability, and precision. We redefine high-end global movement.</p>
          <div className="mt-12 flex gap-4">
            <Link to="/register"><ClipButton variant="primary" className="text-sm px-10 py-5">Get Started</ClipButton></Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 vertical-rail rotate-180 opacity-30 text-[12px] tracking-[0.2em] font-medium uppercase text-white hidden lg:block">01 / MAIN — 02 / ABOUT — 03 / FLEET — 04 / DATA</div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute bottom-12 left-8 lg:left-16 z-20">
        <div className="p-8 backdrop-blur-[40px] saturate-[180%] bg-white/5 border border-white/10 rounded-sm shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] max-w-xs relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-none" />
          <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-bold relative z-10">Logistics Concierge</p>
          <h3 className="text-xl font-bold text-white mb-6 relative z-10 leading-tight">Book a Free Consultation</h3>
          <Link to="/contact" className="w-full">
            <ClipButton variant="secondary" className="w-full relative z-10 flex items-center justify-center gap-2 py-4">
              <PhoneCall className="w-4 h-4" /> Book a Call
            </ClipButton>
          </Link>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-red/10 blur-3xl group-hover:bg-brand-red/20 transition-colors" />
        </div>
      </motion.div>
      <div className="absolute bottom-12 right-16 hidden lg:flex flex-col items-end opacity-40">
        <p className="text-[11px] uppercase tracking-[0.2em] mb-4">Based in London / Global Reach</p>
        <p className="text-[11px] tracking-widest">© 2026 T. ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Book Service", subtitle: "Rapid assignment of resources" },
    { title: "We Handle Everything", subtitle: "Seamless orchestration" },
    { title: "Delivered Fast", subtitle: "Guaranteed time-windows" }
  ];
  return (
    <section className="py-24 lg:py-32 bg-transparent px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-20 text-center">The Efficiency Process</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block -translate-y-1/2">
            <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, ease: "easeInOut" }} className="h-full bg-gradient-to-r from-brand-red to-white/40 shadow-[0_0_10px_#EE3F2C]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.2 }} className="flex flex-col items-center text-center lg:block lg:text-left">
                <div className="w-12 h-12 rounded-full bg-black/50 border-2 border-brand-red flex items-center justify-center text-white font-bold mb-6 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(238,63,44,0.3)]">{idx + 1}</div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 lg:py-40 bg-transparent relative overflow-hidden px-8 lg:px-16">
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} animate={{ y: [-10, 10, -10], opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }} className="absolute h-1 w-1 bg-white rounded-full" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-12 leading-[0.9]">Ready to simplify your logistics?</h2>
        <Link to="/services"><ClipButton variant="primary" className="text-xl px-12 py-5">Get Started Today</ClipButton></Link>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-0">
      <Hero />
      
      <section className="py-24 lg:py-32 bg-transparent px-8 lg:px-16 relative">
        <div className="noise-bg absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-brand-red font-bold uppercase tracking-wider text-sm mb-4">Who We Are</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              Efficient Solutions For Fast-Moving Businesses
            </motion.h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl">We provide modern, efficient, and reliable logistics solutions tailored for the pace of today's markets. Our infrastructure is built for those who value time as their most precious asset.</p>
          </div>
          <div className="flex-1 w-full lg:w-auto overflow-hidden rounded-2xl aspect-video bg-white/5 border border-white/5 group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
            <img src="/home-img.jpg" alt="Logistics background" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-red flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_#EE3F2C]">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </motion.div>
  );
}
