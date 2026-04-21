import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Global Offices", value: "12+" },
    { label: "Team Members", value: "850+" },
    { label: "Successful Deliveries", value: "1.2M+" },
    { label: "Client Retention", value: "99%" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="pb-24 pt-32 lg:pt-48 bg-transparent px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4"
        >
          Our Story
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-10 leading-none"
        >
          Precision Engineering <br />
          <span className="text-white/40">In Motion.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-white/70 leading-relaxed mb-6 font-light">
              T. Logistics was born out of a simple necessity: the modern world moves faster than traditional transport networks can handle. We exist to close that gap.
            </p>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              We leverage military-grade precision, advanced AI-routing, and an expansive global fleet to ensure that every asset, from critical components to high-value cargo, reaches its destination with zero friction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="p-8 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-center"
              >
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-sm font-medium uppercase tracking-widest text-brand-red">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 space-y-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-3xl font-bold uppercase text-white mb-6">Uncompromising Quality</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                From our ground fleet to air freights, every vehicle and asset is monitored in real-time. We don't just move cargo; we manage its entire lifecycle from pickup to drop-off.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <ShieldCheck className="w-5 h-5 text-brand-red" />, text: "Automated Security Protocols" },
                  { icon: <Globe className="w-5 h-5 text-brand-red" />, text: "Global Network Reach" },
                  { icon: <Target className="w-5 h-5 text-brand-red" />, text: "Precision Accuracy Tracking" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80 font-medium">
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full">
              <img 
                src="https://picsum.photos/seed/truck/1000/600" 
                alt="Logistics Fleet" 
                className="rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
