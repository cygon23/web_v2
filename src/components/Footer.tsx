import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
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
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center'>
                <Heart
                  className='w-6 h-6 text-primary-foreground'
                  fill='currentColor'
                />
              </div>
              <div>
                <span className='text-xl font-heading font-bold'>
                  Career Na Mimi
                </span>
                <p className='text-sm text-background/80 -mt-1'>
                  Your Journey, Your Success
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
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className='text-background/80 hover:text-primary-light transition-colors duration-300 text-sm'>
                    {link.name}
                  </Link>
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
                    href='mailto:info@careernamimi.org'
                    className='text-sm hover:text-primary-light transition-colors'>
                    info@careernamimi.org
                  </a>
                </div>
              </li>
              <li className='flex items-start space-x-3'>
                <Phone className='w-5 h-5 text-primary-light mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-background/80 text-sm'>Call us</p>
                  <a
                    href='tel:+1234567890'
                    className='text-sm hover:text-primary-light transition-colors'>
                    +255 628 055 646
                  </a>
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
                  href='https://careerguidance.careernamimi.org/'
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
            <p className='text-background/60 text-sm'>
              © {currentYear} Career Na Mimi Organization. All rights reserved.
            </p>
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