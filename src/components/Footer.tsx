import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-br from-foreground to-foreground/90 text-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-4 mb-8'>
              <div className='w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center p-2.5 backdrop-blur-sm border border-white/10'>
                <img
                  src={logo}
                  alt='Career Na Mimi'
                  className='w-full h-full object-contain'
                />
              </div>
              <div>
                <span className='text-2xl font-black tracking-tight block text-white'>
                  Career Na Mimi
                </span>
                <p className='text-xs text-primary font-black uppercase tracking-[0.2em] -mt-1'>
                  Elite Talent Ecosystem
                </p>
              </div>
            </div>
            <p className='text-background/80 mb-6 text-sm leading-relaxed'>
              Empowering youth across Africa with skills, mentorship, and
              opportunities. We create transformative experiences that bridge
              the gap between education and career success.
            </p>
            <div className='flex space-x-4'>
              <Button
                size='icon'
                variant='ghost'
                className='hover:bg-primary/20 text-background hover:text-primary-light'>
                <Youtube className='w-5 h-5' />
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='hover:bg-primary/20 text-background hover:text-primary-light'>
                <Facebook className='w-5 h-5' />
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='hover:bg-primary/20 text-background hover:text-primary-light'>
                <Instagram className='w-5 h-5' />
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='hover:bg-primary/20 text-background hover:text-primary-light'>
                <Linkedin className='w-5 h-5' />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-heading font-semibold text-lg mb-6'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Activities", path: "/activities" },
                { name: "Upcoming Events", path: "/events" },
                { name: "Gallery", path: "/gallery" },
                { name: "Our Team", path: "/team" },
                { name: "Reviews", path: "/reviews" },
                { name: "Become a Member", path: "https://app.careernamimii.org/membership", external: true },
              ].map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-background/80 hover:text-primary-light transition-colors duration-300 text-sm'>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className='text-background/80 hover:text-primary-light transition-colors duration-300 text-sm'>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-heading font-semibold text-lg mb-6'>
              Our Services
            </h3>
            <ul className='space-y-3'>
              {[
                "Career Guidance",
                "Skills Training",
                "Mentorship Programs",
                "Workshops",
                "HR services",
                "AI Career Tools",
              ].map((service) => (
                <li key={service}>
                  <span className='text-background/80 text-sm'>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-heading font-semibold text-lg mb-6'>
              Get In Touch
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start space-x-3'>
                <Mail className='w-5 h-5 text-primary-light mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-background/80 text-sm'>Email us</p>
                  <a
                    href='mailto:info@careernamimii.org'
                    className='text-sm hover:text-primary-light transition-colors'>
                    info@careernamimii.org
                  </a>
                </div>
              </li>
              <li className='flex items-start space-x-3'>
                <Phone className='w-5 h-5 text-primary-light mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-background/80 text-sm'>Call us</p>
                  <div className='flex flex-col'>
                    <a href='tel:+255628055646' className='text-sm hover:text-primary-light transition-colors'>+255 628 055 646</a>
                    <a href='tel:+255769721896' className='text-sm hover:text-primary-light transition-colors'>+255 769 721 896</a>
                  </div>
                </div>
              </li>
              <li className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-primary-light mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-background/80 text-sm'>Visit us</p>
                  <p className='text-sm'>Arusha, Tanzania</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className='border-t border-background/20 py-8'>
          <div className='text-center'>
            <h3 className='font-heading font-semibold text-xl mb-4'>
              Ready to Start Your Career Journey?
            </h3>
            <p className='text-background/80 mb-6 max-w-md mx-auto'>
              Join thousands of young professionals who have transformed their
              careers with our guidance.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg' asChild>
                <Link to='/contact'>Get Started Today</Link>
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-background/30 text-black hover:bg-background hover:text-foreground'
                asChild>
                <a
                  href='https://careerhub.careernamimii.org/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Try AI Career Guide
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-background/20 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex flex-col'>
              <p className='text-background/60 text-sm'>
                © {currentYear} Career Na Mimi Organization. All rights reserved.
              </p>
              <p className='text-[10px] text-primary/80 font-bold uppercase tracking-wider mt-1'>
                Registration: ooNGO/R/8327
              </p>
            </div>
            <div className='flex space-x-6'>
              <Link
                to='/privacy-policy'
                className='text-background/60 hover:text-primary-light text-sm transition-colors'>
                Privacy Policy
              </Link>
              <span className='text-background/40'>•</span>
              <Link
                to='/terms'
                className='text-background/60 hover:text-primary-light text-sm transition-colors'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;