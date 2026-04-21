import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ClipButton } from '../components/Shared';

export default function Login() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-24 px-8 relative"
    >
      <div className="w-full max-w-md relative z-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-10 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(238,63,44,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent pointer-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black uppercase text-white mb-2">Access Grid</h2>
            <p className="text-white/50 text-sm mb-10 w-4/5 leading-relaxed">
              Authenticate via central logistics command to monitor and dispatch cargo.
            </p>

            <form className="space-y-6">
              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block ml-1">Agent Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-brand-red transition-colors" />
                  <input 
                    type="email" 
                    placeholder="jdoe@t-logistics.com"
                    className="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 relative group">
                <div className="flex justify-between items-end ml-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Clearance Key</label>
                  <a href="#" className="text-[10px] uppercase text-brand-red hover:text-white transition-colors">Forgot Key?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-brand-red transition-colors" />
                  <input 
                    type="password" 
                    placeholder="••••••••••••"
                    className="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <ClipButton variant="primary" type="button" className="w-full py-4 text-sm flex items-center justify-center gap-2">
                  Initialize Session <ArrowRight className="w-4 h-4" />
                </ClipButton>
              </div>
            </form>
            
            <p className="mt-8 text-center text-xs text-white/40 uppercase tracking-widest">
              Unregistered Agent? <Link to="/register" className="text-brand-red font-bold hover:text-white transition-colors ml-1">Sign Up</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
