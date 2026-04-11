import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CountUp from "react-countup";
import { Users, BookOpen, Sparkles, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface BarData {
  label: string;
  value: number;
  icon: any;
  color: string;
  height: string; // Percentage for visual height
  delay: number;
}

const ImpactBar = ({ label, value, icon: Icon, color, height, delay }: BarData) => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='flex flex-col items-center h-full group'>
      <div className='flex-1 flex flex-col justify-end w-12 md:w-20 relative'>
        {/* Real-time Counter sitting above the bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className='absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap'
        >
          <span className='text-xl md:text-3xl font-black text-slate-900 tracking-tighter'>
            {isVisible ? <CountUp start={0} end={value} duration={2} delay={delay} separator=',' /> : 0}
            <span className='text-primary'>+</span>
          </span>
        </motion.div>

        {/* The Animated Bar */}
        <motion.div
          ref={ref as any}
          initial={{ height: "0%" }}
          animate={isVisible ? { height: height } : { height: "0%" }}
          transition={{ duration: 1.5, delay, ease: [0.65, 0, 0.35, 1] }}
          className={cn(
            "w-full rounded-t-3xl relative overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-x-105",
          )}
          style={{ 
            background: `linear-gradient(to top, #1e293b, ${color})`,
            boxShadow: `0 0 30px ${color}20`
          }}
        >
          {/* Animated Liquid Surface Effect */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className='absolute top-0 left-0 w-full h-2 bg-white/40 blur-sm'
          />
          
          {/* Internal Glow Stripe */}
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent' />
        </motion.div>

        {/* High-Luminosity Peak Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: delay + 1 }}
          className='absolute w-[120%] h-0.5 -translate-x-[8%] blur-[1px]'
          style={{ 
            backgroundColor: color, 
            bottom: height,
            boxShadow: `0 0 15px ${color}`
          }}
        />
      </div>

      {/* Label & Icon at the base */}
      <div className='mt-8 flex flex-col items-center gap-3'>
        <div className='p-3 rounded-2xl bg-white shadow-xl text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:text-primary'>
          <Icon className='w-5 h-5 md:w-6 md:h-6' />
        </div>
        <p className='text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 text-center whitespace-nowrap group-hover:text-slate-900 transition-colors'>
          {label}
        </p>
      </div>
    </div>
  );
};

export const ImpactHub = () => {
  const data: BarData[] = [
    {
      label: "Youth Empowered",
      value: 3500,
      icon: Users,
      color: "#0066FF",
      height: "100%",
      delay: 0.1
    },
    {
      label: "Success Stories",
      value: 72,
      icon: Award,
      color: "#10B981",
      height: "85%",
      delay: 0.3
    },
    {
      label: "Workshops",
      value: 10,
      icon: BookOpen,
      color: "#EC4899",
      height: "75%",
      delay: 0.5
    },
    {
      label: "Career Talks",
      value: 5,
      icon: Sparkles,
      color: "#F59E0B",
      height: "65%",
      delay: 0.7
    }
  ];

  return (
    <div className='relative w-full h-[500px] bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-2xl p-8 pt-20 md:p-12 md:pt-24 flex items-end justify-around gap-2 overflow-hidden group'>
      {/* Institutional Protocol Header */}
      <div className='absolute top-8 left-10 flex items-center gap-2 opacity-30'>
        <div className='w-2 h-2 rounded-full bg-primary animate-pulse' />
        <span className='text-[10px] font-black uppercase tracking-[0.3em] text-slate-900'>Institutional Growth Protocol</span>
      </div>

      {/* Decorative center orb */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none' />

      {data.map((item, index) => (
        <ImpactBar key={index} {...item} />
      ))}
    </div>
  );
};

export default ImpactHub;
