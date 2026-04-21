import React from 'react';
import { motion } from 'motion/react';
import { MapPin, PhoneCall, Mail, Clock } from 'lucide-react';
import { ClipButton } from '../components/Shared';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-24 pt-32 lg:pt-48 bg-transparent px-8 lg:px-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-20"
        >
          Initialize <br />
          <span className="text-white/40">Communication.</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-colors resize-none"
                />
              </div>

              <ClipButton variant="primary" type="button" className="w-full py-5 text-sm">Send Dispatch</ClipButton>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold uppercase text-white mb-8">Global Headquarters</h3>
              <div className="flex gap-6 items-start group">
                <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-colors">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-white/80 font-medium">Headquarters</p>
                  <p className="text-white/50">Nagpur, Maharashtra</p>
                  <p className="text-white/50">India</p>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-6">
                 <div className="flex gap-4 items-center group">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-brand-red transition-colors">
                      <PhoneCall className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Direct Line</p>
                      <p className="text-white font-medium">+91 8446470259</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-center group">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-brand-red transition-colors">
                      <Mail className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Email</p>
                      <p className="text-white font-medium">harshikabighane868@gmail.com</p>
                    </div>
                 </div>
               </div>
               
               <div className="space-y-6">
                 <div className="flex gap-4 items-center group">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-brand-red transition-colors">
                      <Clock className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Operating Hours</p>
                      <p className="text-white font-medium">24/7 / 365 Days</p>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
