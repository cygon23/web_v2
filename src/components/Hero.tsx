import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";

const slides = [
  {
    image: hero1,
    title: "Empowering Your Career Journey",
    description: "Unlock your potential with professional mentorship and skills development tailored for leaders.",
    badge: "Future Leaders",
  },
  {
    image: hero2,
    title: "Bridge the Gap to Success",
    description: "Connecting youth with transformative opportunities, career guidance, and global networks.",
    badge: "Career Growth",
  },
  {
    image: hero3,
    title: "Innovation in Every Step",
    description: "Join a community dedicated to growth and sustainable success. Excellence starts here.",
    badge: "Skill Development",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-950'>
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className='absolute inset-0'
        >
          {/* Ken Burns Effect Image */}
          <motion.div
            initial={{ scale: 1.2, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              x: [0, -20, 0],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Dynamic Gradient Overlays */}
          <div className='absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent' />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30' />
          <div className='absolute inset-0 bg-primary/10 mix-blend-overlay' />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='max-w-4xl'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='space-y-6 md:space-y-8'
              >
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.15] tracking-tight'>
                  {slides[current].title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className='inline-block mr-3 md:mr-4 last:mr-0'
                    >
                      {word === "Career" || word === "Success" || word === "Step" ? (
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary shadow-sm'>
                          {word}
                        </span>
                      ) : word}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className='text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-medium'
                >
                  {slides[current].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className='flex flex-wrap gap-6 pt-2'
                >
                  <Button
                    variant='hero'
                    size='lg'
                    asChild
                    className='group relative overflow-hidden shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-500 rounded-full h-14 md:h-16 px-8 md:px-10 text-base md:text-lg'
                  >
                    <Link to='/about'>
                      <span className='relative z-10'>Discover Our Impact</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Cinematic Decorations */}
          <div className='hidden lg:flex relative h-[500px] items-center justify-center'>
            {/* The "Net" / Dot Grid Design */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className='absolute inset-0 z-0'
            >
              <div className='absolute inset-0' style={{ 
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
              }} />
            </motion.div>

            {/* Floating Decorative Circles */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 20, scale: 0.5 }}
                transition={{ duration: 1, ease: "circOut" }}
                className='relative w-full h-full flex items-center justify-center'
              >
                {/* Large Ring */}
                <div className='absolute w-96 h-96 rounded-full border border-white/5 backdrop-blur-[2px] animate-pulse' />
                <div className='absolute w-[30rem] h-[30rem] rounded-full border border-primary/10' />
                
                {/* Accent Circles with Gradients */}
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className='absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-md border border-white/10 shadow-2xl'
                />
                
                <motion.div 
                   animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className='absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-primary-light/20 to-transparent backdrop-blur-xl border border-white/5 shadow-2xl'
                />

                {/* The "Net" Decoration Lines (SVG) */}
                <svg className="absolute w-full h-full opacity-20" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                      <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path 
                    d="M 50 200 Q 150 50 250 200 T 350 200" 
                    fill="none" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="2" 
                    animate={{ 
                      d: [
                        "M 50 200 Q 150 50 250 200 T 350 200",
                        "M 50 200 Q 150 350 250 200 T 350 200",
                        "M 50 200 Q 150 50 250 200 T 350 200"
                      ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle cx="250" cy="200" r="4" fill="var(--primary)" />
                  <circle cx="150" cy="125" r="2" fill="white" className="animate-ping" />
                </svg>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Circles */}
      <div className='absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-6 px-4'>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className='group relative w-4 h-4 cursor-pointer bg-white/20 rounded-full overflow-hidden border border-white/10 hover:scale-125 transition-all duration-300'
          >
            {current === i && (
              <motion.div
                layoutId='progress'
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className='absolute bottom-0 left-0 right-0 bg-primary'
              />
            )}
            <div className='absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors' />
          </div>
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10' />
    </section>
  );
};

export default Hero;
