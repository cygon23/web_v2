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
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-border transition-all duration-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2 group'>
            <div className='w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <img
                src={logo}
                alt='Career Na Mimi Logo'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='hidden sm:block'>
              <span className='text-xl font-heading font-bold text-foreground'></span>
              <p className='text-xs text-white text-muted-foreground -mt-1'>
                Your Journey, Your Success
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 hover:text-primary",
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                )}>
                {item.name}
                {isActive(item.path) && (
                  <div className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full' />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Button variant='outline' size='sm' asChild>
              <a
                href='https://morden-blog-site.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'>
                Career Guide
              </a>
            </Button>
            <Button variant='hero' size='sm' asChild>
              <Link to='/contact'>Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden p-2 text-foreground hover:text-primary transition-colors'
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
          <div className='lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg'>
            <div className='px-4 py-6 space-y-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors duration-300",
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}>
                  {item.name}
                </Link>
              ))}

              <div className='pt-4 space-y-3'>
                <Button variant='outline' className='w-full' asChild>
                  <a
                    href='https://careerguider.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    AI Career Guide
                  </a>
                </Button>
                <Button variant='hero' className='w-full' asChild>
                  <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                    Get Started
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
