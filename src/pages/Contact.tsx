import { useState, useEffect } from "react";
import { ArrowDown, Globe, BookOpen, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import heroBackground from "@/assets/gallery/eventG/afro/1.jpg";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navigation />

      {/* Hero Section - Integrated Hub */}
      <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20'>
        {/* Background Image with Parallax */}
        <div
          className='absolute inset-0 z-0 opacity-70'
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Elegant Gradient Overlays for Readability */}
        <div className='absolute inset-0 bg-slate-950/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-slate-950/95 sm:via-slate-950/80 sm:to-black/60 z-10' />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-50 border-0 h-32 bottom-0 top-auto z-10' />
        
        {/* Animated Background Highlights */}
        <div className='absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none z-10 animate-pulse' />
        <div className='absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-10' />

        {/* Content */}
        <div className='relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            
            {/* Left Column: Traditional Hero */}
            <div className='text-left'>
              <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-150'>
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-[1.05] text-white'>
                  Start The <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-black drop-shadow-lg mt-3'>Conversation</span>
                </h1>
              </div>

              <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-300 mb-12'>
                <div className='h-1 w-16 bg-green-500 mb-6 rounded-full opacity-80'></div>
                <p className='text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-medium text-left'>
                  We are actively architecting the future. Let us know how we can collaborate, assist, or align with your vision.
                </p>
              </div>

              <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-500'>
                <div onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })} className='inline-flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors animate-bounce cursor-pointer bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full backdrop-blur-md'>
                  <ArrowDown className='w-5 h-5' />
                  <span className='text-sm uppercase tracking-widest font-black'>
                    Send A Message
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Ecosystem Platforms */}
            <div className='animate-in fade-in slide-in-from-right duration-1000 delay-500 w-full max-w-xl mx-auto lg:mx-0'>
              <div className='mb-6'>
                 <h3 className='text-2xl font-black text-white mb-2'>Join The Ecosystem</h3>
                 <p className='text-slate-400 text-sm'>Beyond an email, we are a thriving digital network. Enter our dedicated platforms to access exclusive resources.</p>
              </div>

              <div className='space-y-4'>
                {/* CareerHub Platform */}
                <a href="https://careerhub.careernamimii.org" target="_blank" rel="noopener noreferrer" 
                   className='group block bg-slate-900/60 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,197,94,0.3)]'>
                   <div className='flex items-center gap-6'>
                     <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                       <Globe className='w-8 h-8 text-white' />
                     </div>
                     <div className='flex-grow'>
                       <div className='flex justify-between items-start'>
                         <h3 className='text-xl font-bold text-white mb-1'>CareerHub Portal</h3>
                         <ExternalLink className='w-5 h-5 text-slate-500 group-hover:text-green-400 transition-colors' />
                       </div>
                       <p className='text-slate-400 text-sm leading-relaxed'>
                         The ultimate terminal for career opportunities and member-only industry networks.
                       </p>
                     </div>
                   </div>
                </a>

                {/* Official Blog */}
                <a href="#" target="_blank" rel="noopener noreferrer" 
                   className='group block bg-slate-900/60 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50 hover:border-indigo-400/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(129,140,248,0.3)]'>
                   <div className='flex items-center gap-6'>
                     <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                       <BookOpen className='w-8 h-8 text-white' />
                     </div>
                     <div className='flex-grow'>
                       <div className='flex justify-between items-start'>
                         <h3 className='text-xl font-bold text-white mb-1'>Industry Blog</h3>
                         <ExternalLink className='w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors' />
                       </div>
                       <p className='text-slate-400 text-sm leading-relaxed'>
                         Immerse yourself directly into our thought leadership and active career guidance.
                       </p>
                     </div>
                   </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/50'>
        <div className='relative z-10 max-w-7xl mx-auto'>
          
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-black text-slate-900 mb-4 tracking-tight'>
              Direct Channels
            </h2>
            <div className='h-1 w-16 bg-green-500 mx-auto rounded-full mb-4'></div>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Choose your preferred method of engagement. Our vanguard is stationed and ready to respond.
            </p>
          </div>

          <div className='grid lg:grid-cols-12 gap-12 xl:gap-20 items-start'>
            {/* Contact Form */}
            <div className='lg:col-span-7 order-2 lg:order-1'>
              <div className='bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100'>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info (Including Social Network) */}
            <div className='lg:col-span-5 order-1 lg:order-2'>
              <ContactInfo className='sticky top-24' />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;