import { useState, useEffect } from "react";
import {
  ArrowDown,
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Star,
  Sparkles,
  Zap,
  Heart,
  Target,
  Award,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import heroBackground from "@/assets/events/abstract-bg.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll animation hooks
  const contactSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-secondary/20 via-white to-secondary/30'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-[70vh] flex items-center justify-center overflow-hidden'>
        {/* Background Image with Parallax */}
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Strong theme overlay for color consistency */}
        <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-90 z-10' />

        {/* Scattered Decorative Particles with Contact-themed Icons */}
        <div className='absolute inset-0 pointer-events-none z-[15]'>
          {/* Top Left Area - Email */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <Mail className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }} />
          </div>

          {/* Top Right Area - Communication */}
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <MessageCircle className='w-10 h-10 text-emerald-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(110, 231, 183, 0.5))' }} />
          </div>

          {/* Middle Left - Phone */}
          <div className='absolute top-[40%] left-[5%] animate-float opacity-45' style={{ animationDelay: '1.2s' }}>
            <Phone className='w-9 h-9 text-purple-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(216, 180, 254, 0.4))' }} />
          </div>

          {/* Middle Right - Send */}
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Send className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>

          {/* Center Right - Location */}
          <div className='absolute top-[35%] right-[15%] animate-float opacity-35' style={{ animationDelay: '2s' }}>
            <MapPin className='w-7 h-7 text-cyan-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(165, 243, 252, 0.4))' }} />
          </div>

          {/* Bottom Left - Time */}
          <div className='absolute bottom-[25%] left-[12%] animate-float opacity-40' style={{ animationDelay: '0.9s' }}>
            <Clock className='w-9 h-9 text-amber-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(252, 211, 77, 0.5))' }} />
          </div>

          {/* Bottom Right - Energy */}
          <div className='absolute bottom-[30%] right-[12%] animate-float opacity-45' style={{ animationDelay: '1.8s' }}>
            <Zap className='w-8 h-8 text-yellow-300/70' style={{ filter: 'drop-shadow(0 0 7px rgba(253, 224, 71, 0.4))' }} />
          </div>

          {/* Top Center - Heart */}
          <div className='absolute top-[25%] left-[45%] animate-float opacity-35' style={{ animationDelay: '2.5s' }}>
            <Heart className='w-7 h-7 text-rose-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(253, 164, 175, 0.4))' }} />
          </div>

          {/* Middle Center - Target */}
          <div className='absolute top-[50%] left-[20%] animate-float opacity-30' style={{ animationDelay: '1.6s' }}>
            <Target className='w-7 h-7 text-indigo-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(165, 180, 252, 0.4))' }} />
          </div>

          {/* Accent Stars */}
          <div className='absolute top-[30%] right-[25%] animate-float opacity-30' style={{ animationDelay: '2.2s' }}>
            <Star className='w-6 h-6 text-yellow-200/60' style={{ filter: 'drop-shadow(0 0 5px rgba(254, 240, 138, 0.3))' }} />
          </div>

          <div className='absolute bottom-[35%] left-[25%] animate-float opacity-35' style={{ animationDelay: '1.4s' }}>
            <Sparkles className='w-7 h-7 text-pink-200/60' style={{ filter: 'drop-shadow(0 0 6px rgba(251, 207, 232, 0.3))' }} />
          </div>
        </div>

        {/* Animated background elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>

        {/* Content */}
        <div className='relative z-20 text-center max-w-5xl mx-auto px-6'>
          <div className='space-y-8 cinematic-fade-in'>
            <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
              <MessageCircle className='w-5 h-5 text-white' />
              <span className='text-sm font-medium text-white'>Let's Connect</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-white drop-shadow-2xl leading-tight'>
              Get In Touch
              <br />
              <span className='text-4xl md:text-6xl'>We'd Love to Hear From You</span>
            </h1>
            <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed'>
              Have a project in mind? Questions about our services? Drop us a message
              and we'll respond within 24 hours.
            </p>
            <div className='pt-8'>
              <div className='inline-flex items-center gap-2 text-white/70 animate-bounce'>
                <ArrowDown className='w-5 h-5' />
                <span className='text-sm uppercase tracking-wide'>
                  Scroll to connect
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactSection.ref} className='relative py-24 px-6 bg-white'>
        <div className='relative z-10 max-w-7xl mx-auto'>
          <div className={`text-center mb-16 scroll-fade-up ${contactSection.isVisible ? 'visible' : ''}`}>
            <div className='inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6'>
              <Send className='w-5 h-5' />
              <span className='text-sm font-medium'>Ready to Connect</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Start the Conversation
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Choose your preferred way to reach out. We're here to help bring your vision to life.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 xl:gap-20 items-start'>
            {/* Contact Form */}
            <div className={`order-2 lg:order-1 scroll-scale ${contactSection.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <ContactForm className='sticky top-8' />
            </div>

            {/* Contact Info */}
            <div className={`order-1 lg:order-2 scroll-scale ${contactSection.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className='relative py-24 px-6 bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden'>
        <div className='absolute inset-0 bg-black/10' />

        {/* Animated background elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <div className={`scroll-fade-up ${ctaSection.isVisible ? 'visible' : ''}`}>
            <Sparkles className='w-16 h-16 mx-auto mb-6 text-white' />
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Vision?
            </h2>
            <p className='text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed'>
              Join hundreds of satisfied clients who trust us with their
              projects. Your success story starts with a simple message.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
              {[
                { number: "500+", label: "Projects Completed", icon: Award },
                { number: "99%", label: "Client Satisfaction", icon: Heart },
                { number: "24hrs", label: "Average Response", icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center scroll-scale ${ctaSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 hover:bg-white/30 transition-colors duration-300'>
                    <stat.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-white/90 font-medium'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;