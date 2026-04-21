import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, MapPin, Package, Plane, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClipButton } from '../components/Shared';

export default function Services() {
  const allServices = [
    {
      title: "Ground Freight",
      desc: "Instant dispatch and priority routing for time-sensitive cargo via our advanced ground fleet.",
      icon: <Package className="w-8 h-8 text-brand-red" />,
    },
    {
      title: "Air Logistics",
      desc: "Global reach with maximum velocity. Dedicated air charters for critical international shipments.",
      icon: <Plane className="w-8 h-8 text-brand-red" />,
    },
    {
      title: "Ocean Freight",
      desc: "High-volume container management and optimized sea routes for large scale enterprise cargo.",
      icon: <Ship className="w-8 h-8 text-brand-red" />,
    },
    {
      title: "Secure Logistics",
      desc: "End-to-end security protocols ensuring your high-value assets and data reach safely.",
      icon: <Shield className="w-8 h-8 text-brand-red" />,
    },
    {
      title: "Real-Time Tracking",
      desc: "Precision tracking at every milestone with automated fleet telemetry and API access.",
      icon: <MapPin className="w-8 h-8 text-brand-red" />,
    },
    {
      title: "Express Dispatch",
      desc: "Last-mile and hyper-local swift deliveries inside metropolitan areas within hours.",
      icon: <Zap className="w-8 h-8 text-brand-red" />,
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-24 pt-32 lg:pt-48 bg-transparent px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Solutions
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none"
            >
              Comprehensive <br />
              <span className="text-white/40">Capabilities.</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact"><ClipButton variant="outline">Download Capabilities PDF</ClipButton></Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(238,63,44,0.1)] overflow-hidden"
            >
              <div className="mb-8 p-4 w-fit rounded-xl bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">{s.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{s.desc}</p>
              
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 lg:p-20 bg-gradient-to-br from-brand-red/20 to-transparent border border-brand-red/20 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/blueprint/1200/400')] opacity-5 mix-blend-overlay grayscale" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">Need a custom solution?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              Our engineering team works directly with enterprise clients to map out bespoke logistics infrastructures. Speak to an architect today.
            </p>
            <Link to="/contact"><ClipButton variant="primary">Consult an Architect</ClipButton></Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
