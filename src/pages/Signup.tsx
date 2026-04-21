import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClipButton } from '../components/Shared';

export default function Signup() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-24 px-8 pb-10 relative"
    >
      <div className="w-full max-w-lg relative z-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-10 lg:p-12 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(238,63,44,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 to-transparent pointer-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black uppercase text-white mb-2">Request Clearance</h2>
            <p className="text-white/50 text-sm mb-10 leading-relaxed">
              Register as a new logistics agent to access the T. tracking network.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative group">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block ml-1">Agent Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-red transition-colors" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-black/40 border border-white/10 pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2 relative group">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block ml-1">Corporation</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-red transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Corp. Identity"
                      className="w-full bg-black/40 border border-white/10 pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block ml-1">Secure Intel Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-red transition-colors" />
                  <input 
                    type="email" 
                    placeholder="agent@domain.com"
                    className="w-full bg-black/40 border border-white/10 pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block ml-1">Clearance Key Setup</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-red transition-colors" />
                  <input 
                    type="password" 
                    placeholder="Create your complex key"
                    className="w-full bg-black/40 border border-white/10 pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="appearance-none w-4 h-4 border border-white/30 checked:bg-brand-red checked:border-transparent transition-all peer" />
                  <svg className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors pt-0.5">
                  I agree to the strict confidentiality terms and global logistics policies of T. network.
                </span>
              </label>

              <div className="pt-4">
                <ClipButton variant="primary" type="button" className="w-full py-4 text-sm flex items-center justify-center gap-2">
                  Request Access <ArrowRight className="w-4 h-4" />
                </ClipButton>
              </div>
            </form>
            
            <p className="mt-8 text-center text-xs text-white/40 uppercase tracking-widest">
              Already have clearance? <Link to="/login" className="text-brand-red font-bold hover:text-white transition-colors ml-1">Log In</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
