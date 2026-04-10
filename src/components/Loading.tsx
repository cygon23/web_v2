import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const LoadingIndicator = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const statusMessages = [
    "Initializing Institutional Protocols",
    "Calibrating Career Metrics",
    "Establishing Strategic Sync",
    "Synchronizing Talent Ecosystem",
    "Finalizing Interface",
    "Ready"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev < statusMessages.length - 1 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden'>
      {/* Background Cinematic Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700' />
        <div className='absolute inset-0 opacity-[0.03]' style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className='relative z-10 flex flex-col items-center'>
        {/* The Institutional Heartbeat */}
        <div className='relative mb-16'>
          {/* Outer Pulsing Rings */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className='absolute -inset-12 rounded-full border border-primary/20 blur-sm'
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className='absolute -inset-6 rounded-full border border-primary/40'
          />

          {/* Core Logo Container */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='relative w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-6 flex items-center justify-center shadow-2xl overflow-hidden group'
          >
             {/* Logo Shine Effect */}
            <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer' />
            
            <motion.img
              src={logo}
              alt='Career Na Mimi'
              className='w-full h-full object-contain relative z-10'
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Protocol Status Display */}
        <div className='text-center space-y-6'>
          <div className='h-8'>
            <AnimatePresence mode='wait'>
              <motion.p
                key={statusIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary transition-all duration-300'
              >
                {statusMessages[statusIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Elite Loading Bar */}
          <div className='w-64 h-1 bg-white/10 rounded-full overflow-hidden relative'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
              className='h-full bg-gradient-to-r from-primary via-primary-light to-primary relative shadow-[0_0_15px_rgba(0,102,255,0.5)]'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer' />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-xl md:text-2xl font-black text-white/90 tracking-tighter'
          >
            CAREER NA MIMI <span className='text-primary'>.</span>
          </motion.h1>
        </div>
      </div>

      {/* Edge Decoration */}
      <div className='absolute bottom-10 left-10'>
        <div className='flex items-center gap-3 opacity-20'>
          <div className='w-1 h-1 rounded-full bg-white animate-pulse' />
          <p className='text-[8px] font-black uppercase tracking-widest text-white'>Clinical Interface v2.0</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
