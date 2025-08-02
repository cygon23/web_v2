import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import heroBackground from "@/assets/events/abstract-bg.jpg";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-[60vh] flex items-center justify-center overflow-hidden pt-16'>
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
        <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-80 z-10' />

        {/* Floating Elements */}
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply animate-float' />
        <div className='absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full mix-blend-multiply animate-pulse-soft' />

        {/* Content */}
        <div className='relative z-20 text-center max-w-4xl mx-auto px-6'>
          <div className='space-y-6 animate-fade-in'>
            <h1 className='text-6xl md:text-8xl font-bold text-black/60 drop-shadow-2xl'>
              Contact Us
            </h1>
            <p className='text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed'>
              Ready to start your next project? Let's create something amazing
              together.
            </p>
            <div className='pt-8'>
              <div className='inline-flex items-center gap-2 text-primary-foreground/60 animate-bounce'>
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
      <section className='relative py-20 px-6'>
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-gradient-hero opacity-50' />

        <div className='relative z-10 max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 xl:gap-20 items-start'>
            {/* Contact Form */}
            <div className='order-2 lg:order-1'>
              <ContactForm className='sticky top-8' />
            </div>

            {/* Contact Info */}
            <div className='order-1 lg:order-2'>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20 px-6 bg-gradient-to-r from-primary via-primary/90 to-primary'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-10 z-10' />

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary-foreground mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-xl  mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied customers who trust us with their
            projects. Your success story starts here.
          </p>

          <div className='grid grid-cols-1 text-blue-50 md:grid-cols-3 gap-8 mt-12'>
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24hrs", label: "Average Response" },
            ].map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl font-bold text-secondary mb-2'>
                  {stat.number}
                </div>
                <div className='text-blue-50'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
