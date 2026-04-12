import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  // Magnetic Button Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.4);
    mouseY.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.dataset.menuOpen = "true";
    } else {
      delete document.body.dataset.menuOpen;
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const MembershipButton = ({ className, mobile = false }: { className?: string, mobile?: boolean }) => (
    <motion.div
      style={{ x: mobile ? 0 : translateX, y: mobile ? 0 : translateY }}
      onMouseMove={mobile ? undefined : handleMouseMove}
      onMouseLeave={mobile ? undefined : handleMouseLeave}
      className={cn("relative group", className)}
    >
      <a 
        href="https://app.careernamimii.org/membership" 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "relative flex items-center justify-center gap-2 overflow-hidden transition-all duration-300",
          mobile 
            ? "w-full h-14 rounded-2xl text-lg font-black bg-primary text-white shadow-glow" 
            : "px-8 h-12 rounded-full text-sm font-bold bg-primary text-white shadow-glow hover:shadow-primary/40"
        )}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        
        <Sparkles className={cn(mobile ? "w-5 h-5" : "w-4 h-4", "animate-pulse")} />
        <span>Become a Member</span>
      </a>
    </motion.div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-slate-950/20 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" 
          : "bg-transparent py-4"
      )}
    >
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          50% { transform: translateX(-60%); }
          100% { transform: translateX(150%); }
        }
      `}</style>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-3 group'>
            <div className='w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl'>
              <img
                src={logo}
                alt='Career Na Mimi'
                className='w-full h-full object-contain p-1 lg:p-2'
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-1 p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-full",
                  isActive(item.path) 
                    ? "text-white bg-primary shadow-glow scale-105" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <MembershipButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300"
            aria-label='Toggle menu'>
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm lg:hidden z-[-1]"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className='lg:hidden absolute top-full left-4 right-4 mt-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden'
              >
                <div className='px-6 py-8 space-y-3'>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-center px-6 py-4 text-lg font-black rounded-2xl transition-all duration-300",
                        isActive(item.path)
                          ? "text-white bg-primary shadow-lg scale-[1.02]"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}>
                      {item.name}
                    </Link>
                  ))}

                  <div className='pt-6'>
                    <MembershipButton mobile />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
