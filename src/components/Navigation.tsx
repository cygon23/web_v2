import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Heart,
  ChevronDown,
  Users,
  BarChart3,
  Briefcase,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
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

  const exploreItems = [
    {
      name: "Our Community",
      description:
        "Connect with like-minded professionals and share experiences",
      icon: Users,
      link: "https://morden-blog-site.vercel.app/",
      color: "bg-blue-50 text-blue-600",
      comingSoon: true,
    },
    {
      name: "Career Hub",
      description:
        "Comprehensive platform for career development and opportunities",
      icon: Briefcase,
      link: "https://caeerhub-platform.vercel.app/",
      color: "bg-green-50 text-green-600",
    },
    {
      name: "Data Visualization",
      description: "Interactive tools and dashboards for data insights",
      icon: BarChart3,
      link: "https://data-visualization-sooty.vercel.app/",
      color: "bg-purple-50 text-purple-600",
    },
    {
      name: "HR Platform",
      description: "Find opportunities and connect with potential employers",
      icon: FileText,
      link: "https://hr-a-ipowerd.vercel.app/",
      color: "bg-orange-50 text-orange-600",
    },
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

            {/* Explore Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setIsExploreOpen(true)}
              onMouseLeave={() => setIsExploreOpen(false)}>
              <button className='flex items-center space-x-1 text-sm font-medium transition-colors duration-300 hover:text-primary text-foreground/80'>
                <span>Explore</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isExploreOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {isExploreOpen && (
                <div className='absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden'>
                  <div className='p-4'>
                    <div className='grid gap-3'>
                      {exploreItems.map((item, index) => (
                        <div key={index} className='group'>
                          {item.comingSoon ? (
                            <div className='flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-not-allowed opacity-60'>
                              <div className={cn("p-2 rounded-lg", item.color)}>
                                <item.icon className='w-5 h-5' />
                              </div>
                              <div className='flex-1 min-w-0'>
                                <div className='flex items-center space-x-2'>
                                  <h3 className='text-sm font-semibold text-gray-900'>
                                    {item.name}
                                  </h3>
                                  <span className='px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full'>
                                    Coming Soon
                                  </span>
                                </div>
                                <p className='text-xs text-gray-600 mt-1'>
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <a
                              href={item.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'>
                              <div className={cn("p-2 rounded-lg", item.color)}>
                                <item.icon className='w-5 h-5' />
                              </div>
                              <div className='flex-1 min-w-0'>
                                <h3 className='text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors'>
                                  {item.name}
                                </h3>
                                <p className='text-xs text-gray-600 mt-1'>
                                  {item.description}
                                </p>
                                <div className='mt-2'>
                                  <span className='inline-flex items-center text-xs text-primary font-medium group-hover:underline'>
                                    View in Action →
                                  </span>
                                </div>
                              </div>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Button variant='outline' size='sm' asChild>
              <a
                href='https://careerguider.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'>
                AI Career Guide
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

              {/* Mobile Explore Section */}
              <div className='pt-4 border-t border-border'>
                <h3 className='text-sm font-semibold text-foreground mb-3'>
                  Explore
                </h3>
                <div className='space-y-3'>
                  {exploreItems.map((item, index) => (
                    <div key={index}>
                      {item.comingSoon ? (
                        <div className='flex items-center space-x-3 p-2 opacity-60'>
                          <div className={cn("p-1.5 rounded-md", item.color)}>
                            <item.icon className='w-4 h-4' />
                          </div>
                          <div className='flex-1'>
                            <div className='flex items-center space-x-2'>
                              <span className='text-sm font-medium text-foreground'>
                                {item.name}
                              </span>
                              <span className='px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full'>
                                Soon
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={item.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors'>
                          <div className={cn("p-1.5 rounded-md", item.color)}>
                            <item.icon className='w-4 h-4' />
                          </div>
                          <div className='flex-1'>
                            <span className='text-sm font-medium text-foreground'>
                              {item.name}
                            </span>
                          </div>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

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
