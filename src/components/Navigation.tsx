import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-slate-950/20 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" 
          : "bg-transparent py-4"
      )}
    >
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
            <Button 
              variant='hero' 
              size='sm' 
              asChild
              className="shadow-glow hover:shadow-primary/40 rounded-full px-8 h-12"
            >
              <Link to='/contact'>Get Started</Link>
            </Button>
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
        {isMenuOpen && (
          <div className='lg:hidden absolute top-full left-4 right-4 mt-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden cinematic-fade-in'>
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
                <Button variant='hero' className='w-full h-14 rounded-2xl text-lg font-black shadow-glow' asChild>
                  <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
