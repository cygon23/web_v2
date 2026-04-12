import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Briefcase,
  Globe,
  Target,
  Eye,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Star,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

// Import images (you'll need to add these to your assets)
import aboutHeroImage from "@/assets/gallery/eventG/lnks/lady2.jpg";
import founderImage from "@/assets/hero3.jpeg";
import missionImage from "@/assets/events/tourism.jpg";

const About = () => {
  // Scroll animations for each section
  const statsSection = useScrollAnimation();
  const aboutSection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const achievementsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const achievements = [
    {
      icon: Award,
      title: "Innovation Awards",
      items: [
        "Tanzania First AI Forum 2nd Winner",
        "Afro Innovation Award (2024)",
        "TEHAMA Award – Education (2025)",
        "Arusha Innovation Week Champion (2025)",
      ],
      color: "from-yellow-400 to-amber-600",
    },
    {
      icon: Users,
      title: "Youth Empowered",
      count: "3500+",
      description: "Youth Across Tanzania",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Briefcase,
      title: "Career Access",
      count: "300+",
      description: "Job & Internship Connections",
      color: "from-sky-400 to-blue-600",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      items: [
        "Nominated in WSIS Prizes 2025",
        "International Conference on Energy Aquatec and sustainability(ICEAS-2025)",
      ],
      color: "from-fuchsia-400 to-purple-600",
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe every young person has the potential to achieve greatness when given the right tools and opportunities.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Quality education and continuous learning are the foundations of personal and professional growth.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We build strong networks and partnerships that create lasting impact in our communities.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace technology and creative solutions to address the evolving needs of youth development.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "We are committed to continuous improvement and sustainable development for all our programs.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from our programs to our partnerships.",
    },
  ];



  return (
    <div className='min-h-screen'>
      <SEO 
        title="About Us" 
        description="Discover the mission, vision, and core values of Career Na Mimi as we revolutionize youth leadership across Tanzania."
        canonical="/about"
      />
      <Navigation />

      {/* Hero Section - Enhanced with Animations */}
      <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden'>
        {/* Background with parallax effect */}
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-100'
            style={{ backgroundImage: `url(${aboutHeroImage})` }}>
          </div>
          {/* Refined clean overlays */}
          <div className='absolute inset-0 bg-slate-950/70' />
          <div className='absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80' />
          {/* Suble animated accent */}
          <div className='absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 opacity-40 mix-blend-overlay' />
        </div>

        {/* Scattered Decorative Particles with About-themed Icons */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          {/* Top Left Area */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <Heart className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>
          <div className='absolute top-[12%] left-[15%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.5s' }}></div>
          <div className='absolute top-[20%] left-[12%] w-3 h-3 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '1s' }}></div>

          {/* Top Right Area */}
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <Lightbulb className='w-10 h-10 text-yellow-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(253, 224, 71, 0.5))' }} />
          </div>
          <div className='absolute top-[10%] right-[18%] w-2 h-2 bg-white/40 rounded-full blur-[1px]' style={{ animationDelay: '2s' }}></div>
          <div className='absolute top-[15%] right-[6%] animate-float opacity-30' style={{ animationDelay: '0.8s' }}>
            <Star className='w-6 h-6 text-yellow-200/60' />
          </div>

          {/* Left Side */}
          <div className='absolute top-[40%] left-[5%] animate-float opacity-45' style={{ animationDelay: '1.2s' }}>
            <Award className='w-9 h-9 text-amber-400/70' style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' }} />
          </div>
          <div className='absolute top-[48%] left-[10%] w-2.5 h-2.5 bg-blue-300/30 rounded-full blur-sm' style={{ animationDelay: '1.8s' }}></div>
          <div className='absolute top-[35%] left-[3%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]'></div>

          {/* Right Side */}
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Target className='w-8 h-8 text-red-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(252, 165, 165, 0.4))' }} />
          </div>
          <div className='absolute top-[38%] right-[12%] w-2 h-2 bg-white/35 rounded-full blur-[1px]' style={{ animationDelay: '1.4s' }}></div>
          <div className='absolute top-[52%] right-[5%] animate-float opacity-35' style={{ animationDelay: '2.2s' }}>
            <Sparkles className='w-7 h-7 text-purple-300/60' />
          </div>

          {/* Bottom Left Area */}
          <div className='absolute bottom-[20%] left-[12%] animate-float opacity-35' style={{ animationDelay: '1.6s' }}>
            <Eye className='w-8 h-8 text-purple-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(216, 180, 254, 0.4))' }} />
          </div>
          <div className='absolute bottom-[25%] left-[8%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.9s' }}></div>
          <div className='absolute bottom-[18%] left-[5%] w-3 h-3 bg-green-300/30 rounded-full blur-sm' style={{ animationDelay: '1.3s' }}></div>

          {/* Bottom Right Area */}
          <div className='absolute bottom-[22%] right-[15%] animate-float opacity-45' style={{ animationDelay: '0.7s' }}>
            <Users className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.5))' }} />
          </div>
          <div className='absolute bottom-[15%] right-[10%] w-2.5 h-2.5 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '2.1s' }}></div>
          <div className='absolute bottom-[28%] right-[8%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]' style={{ animationDelay: '1.1s' }}></div>

          {/* Center Area with Globe */}
          <div className='absolute top-[35%] right-[30%] animate-float opacity-40' style={{ animationDelay: '1.9s' }}>
            <Globe className='w-8 h-8 text-cyan-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(103, 232, 249, 0.4))' }} />
          </div>

          {/* Center Scattered Particles */}
          <div className='absolute top-[30%] left-[25%] w-1 h-1 bg-white/50 rounded-full blur-[0.5px]' style={{ animationDelay: '0.4s' }}></div>
          <div className='absolute top-[60%] left-[20%] w-1.5 h-1.5 bg-primary/30 rounded-full blur-[1px]' style={{ animationDelay: '1.7s' }}></div>
          <div className='absolute top-[55%] right-[25%] w-1 h-1 bg-white/40 rounded-full blur-[0.5px]' style={{ animationDelay: '0.3s' }}></div>
          <div className='absolute top-[25%] left-[35%] w-2 h-2 bg-yellow-200/20 rounded-full blur-sm' style={{ animationDelay: '1.9s' }}></div>

          {/* Small accent sparkles */}
          <div className='absolute top-[22%] left-[20%] animate-float opacity-25' style={{ animationDelay: '2.3s' }}>
            <Sparkles className='w-5 h-5 text-white/50' />
          </div>
          <div className='absolute bottom-[35%] right-[20%] animate-float opacity-30' style={{ animationDelay: '1.5s' }}>
            <Star className='w-5 h-5 text-yellow-100/50' />
          </div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20'>
          <div className='max-w-5xl mx-auto text-center text-white'>
            {/* Main Heading with staggered animation */}
            <div className='cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight'>
                Empowering Youth and{" "}
                <span className='block mt-2' style={{
                  color: 'hsl(327, 73%, 65%)',
                  textShadow: '0 0 40px hsla(327, 73%, 60%, 0.7), 0 0 20px hsla(327, 73%, 60%, 0.9), 0 4px 12px rgba(0,0,0,0.4)'
                }}>
                  Young Professionals
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className='cinematic-fade-in opacity-0 hidden md:block' style={{ animationDelay: '0.6s' }}>
              <p className='text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-medium'>
                Career Na Mimi is a youth empowerment organization based in
                Tanzania, dedicated to bridging the gap between young people and
                the opportunities they need to thrive in today's dynamic world.
              </p>
            </div>

            {/* Statistics Bar */}
            <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8 cinematic-fade-in opacity-0 border-t border-white/10 pt-12 max-w-4xl mx-auto' style={{ animationDelay: '0.8s' }}>
              <div className='flex flex-col items-center group'>
                <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                  <CountUp end={3500} duration={2.5} separator="," />+
                </div>
                <div className='text-[10px] md:text-xs text-primary-light uppercase tracking-[0.3em] font-black'>
                  Youth Empowered
                </div>
              </div>
              <div className='flex flex-col items-center group'>
                <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                  <CountUp end={5} duration={2.5} />+
                </div>
                <div className='text-[10px] md:text-xs text-primary-light uppercase tracking-[0.3em] font-black'>
                  Core Programs
                </div>
              </div>
              <div className='flex flex-col items-center group'>
                <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                  <CountUp end={10} duration={2.5} />+
                </div>
                <div className='text-[10px] md:text-xs text-primary-light uppercase tracking-[0.3em] font-black'>
                  Key Partners
                </div>
              </div>
              <div className='flex flex-col items-center group'>
                <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                  <CountUp end={50} duration={2.5} />+
                </div>
                <div className='text-[10px] md:text-xs text-primary-light uppercase tracking-[0.3em] font-black'>
                  Major Events
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className='absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float'></div>
            <div className='absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float' style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[8]' />
      </section>



      {/* About Content - Creative Redesign */}
      <section ref={aboutSection.ref} className='py-32 relative overflow-hidden'>
        {/* Abstract Background Design */}
        <div className='absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-12 transform translate-x-20 hidden lg:block' />
        <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10' />
        
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
            {/* Image Section - Creative Stack */}
            <div className={`relative scroll-fade-left ${aboutSection.isVisible ? 'visible' : ''}`}>
              <div className='relative'>
                {/* Main Image Frame with Asymmetric Border Radius */}
                <div className='relative rounded-[2rem] rounded-tr-[8rem] overflow-hidden h-[600px] shadow-2xl group border-[12px] border-white'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110'
                    style={{ backgroundImage: `url(${founderImage})` }}>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent' />
                </div>
                
                {/* Accent Backdrop Element */}
                <div className='absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-3xl -z-10 animate-pulse' />
                
                {/* Compact Floating info card */}
                <Card className='absolute -bottom-8 -right-8 lg:-right-4 max-w-[280px] border-0 shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500'>
                  <CardContent className='p-0'>
                    <div className='h-2 w-full bg-gradient-to-r from-primary to-purple-600' />
                    <div className='p-6'>
                      <div className='flex items-center space-x-4 mb-4'>
                        <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                          <Users className='w-6 h-6 text-primary' />
                        </div>
                        <div>
                          <p className='font-black text-sm tracking-tight'>Rahman Mbahe</p>
                          <p className='text-[10px] text-primary font-bold uppercase tracking-widest'>Founding Visionary</p>
                        </div>
                      </div>
                      <p className='text-xs italic text-muted-foreground leading-relaxed'>
                        "Bridging the gap between potential and opportunity for every young Tanzanian."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Text Section */}
            <div className={`scroll-fade-right ${aboutSection.isVisible ? 'visible' : ''}`}>
              <h2 className='text-5xl lg:text-6xl font-heading font-black mb-8 leading-[1.1] tracking-tighter text-slate-900'>
                Revolutionizing <br />
                <span className='text-primary'>Youth Leadership</span>
              </h2>

              <p className='text-lg text-slate-600 mb-12 leading-relaxed font-medium'>
                At Career Na Mimi, we don't just provide guidance; we build architectures of success. Since our inception, we've focused on creating high-impact pathways for the next generation of African leaders.
              </p>

              <div className='grid grid-cols-1 gap-6'>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className='group'
                >
                  <Card className='border-none shadow-sm bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 group'>
                    <CardContent className='p-8'>
                      <div className='flex items-center space-x-6'>
                        <div className='w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform'>
                          <Target className='w-8 h-8 text-white' />
                        </div>
                        <div>
                          <h3 className='text-xl font-black mb-2 text-slate-900'>The Mission</h3>
                          <p className='text-sm text-slate-500 leading-relaxed font-medium'>
                            Empowering youth with elite programs and global mentorship to become innovative leaders.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className='group'
                >
                  <Card className='border-none shadow-sm bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 group'>
                    <CardContent className='p-8'>
                      <div className='flex items-center space-x-6'>
                        <div className='w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:-rotate-6 transition-transform'>
                          <Eye className='w-8 h-8 text-white' />
                        </div>
                        <div>
                          <h3 className='text-xl font-black mb-2 text-slate-900'>The Vision</h3>
                          <p className='text-sm text-slate-500 leading-relaxed font-medium'>
                            A future where every young professional is equipped to drive sustainable African development.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Pulse Network Redesign */}
      <section ref={valuesSection.ref} className='py-32 relative overflow-hidden bg-[#020617]'>
        {/* Artistic Background Architecture - Network Paths */}
        <div className='absolute inset-0 opacity-10'>
          <svg className='w-full h-full' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
            <path d='M0,500 Q250,450 500,500 T1000,500' fill='none' stroke='white' strokeWidth='1' className='animate-pulse' />
            <path d='M200,0 Q250,500 200,1000' fill='none' stroke='white' strokeWidth='1' className='animate-pulse' style={{ animationDelay: '1s' }} />
            <path d='M800,0 Q750,500 800,1000' fill='none' stroke='white' strokeWidth='1' className='animate-pulse' style={{ animationDelay: '2s' }} />
          </svg>
        </div>

        {/* Animated Flux Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [-100, 100, -100],
            y: [-50, 50, -50]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-0 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]'
        />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`text-center mb-24 scroll-fade-up ${valuesSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-[0.9] tracking-tighter'>
              Our Values: <br />
              <span className='text-primary drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]'>What Drives Us</span> Forward
            </h2>

            <p className='text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium border-t border-white/5 pt-8'>
              Our core values shape every program we create, every partnership we build, and every young person we serve. These principles guide our commitment to meaningful, sustainable impact.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative'
              >
                {index < coreValues.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gradient-to-r from-primary/30 to-transparent z-0' />
                )}
                
                <Card className='h-full border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-700 rounded-[2.5rem] overflow-hidden group shadow-2xl relative z-10'>
                  <CardContent className='p-10 relative'>
                    <div className='mb-8 relative'>
                      <div className='w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary-dark group-hover:border-primary/40 transition-all duration-500 transform group-hover:rotate-6 shadow-xl'>
                        <value.icon className='w-8 h-8 text-white' />
                      </div>
                    </div>

                    <h3 className='text-2xl font-black text-white mb-4 tracking-tight group-hover:text-primary transition-colors'>
                      {value.title}
                    </h3>

                    <p className='text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors'>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Compact Tree of Impact */}
      <section ref={achievementsSection.ref} className='py-28 relative overflow-hidden bg-slate-50/50'>
        {/* Organic Tree Structure SVG - Compact */}
        <div className='absolute inset-0 pointer-events-none z-0'>
          <svg className='w-full h-full' viewBox='0 0 1000 800' preserveAspectRatio='xMidYMid slice'>
            <defs>
              <linearGradient id='trunkGradient' x1='0%' y1='100%' x2='0%' y2='0%'>
                <stop offset='0%' stopColor='transparent' />
                <stop offset='20%' stopColor='#1e293b' stopOpacity='0.1' />
                <stop offset='100%' stopColor='var(--primary)' stopOpacity='0.3' />
              </linearGradient>
            </defs>
            
            {/* Shorter Trunk */}
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d='M500,800 C500,600 480,400 500,200' 
              stroke='url(#trunkGradient)' 
              strokeWidth='8' 
              fill='none' 
              strokeLinecap='round'
            />
            
            {/* Symmetrical Branches for 2x2 Grid */}
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              d='M500,500 L250,350 M500,500 L750,350 M500,500 L250,650 M500,500 L750,650' 
              stroke='var(--primary)' 
              strokeWidth='1.5' 
              fill='none' 
              strokeDasharray='8 4'
              opacity='0.2'
            />
          </svg>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`text-center mb-20 scroll-fade-up ${achievementsSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-5xl md:text-7xl font-heading font-black mb-6 leading-tight tracking-tighter text-slate-900'>
              The <span className='text-primary drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]'>Tree</span> of Impact
            </h2>
            <p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium'>
              Our roots go deep, and our branches reach far. Every achievement is a leaf on this growing testament to youth empowerment.
            </p>
          </div>

          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className='h-full border-none bg-white/70 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-all duration-500'>
                    <div className={`h-2 w-full bg-gradient-to-r ${achievement.color}`} />
                    <CardContent className='p-8 lg:p-10'>
                      <div className='flex items-center justify-between mb-8'>
                        <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-all duration-500`}>
                          <achievement.icon className='w-7 h-7 text-white' />
                        </div>
                        <div className='text-[10px] font-black text-slate-300 uppercase tracking-widest'>Node 0{index + 1}</div>
                      </div>

                      <h3 className='text-xl lg:text-2xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors tracking-tight'>
                        {achievement.title}
                      </h3>

                      {achievement.count ? (
                        <div className='flex items-baseline space-x-3'>
                          <div className='text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter'>
                            <CountUp end={parseInt(achievement.count)} duration={2.5} separator="," />+
                          </div>
                          <p className='text-xs text-primary font-black uppercase tracking-widest'>
                            {achievement.description.split(' ').pop()}
                          </p>
                        </div>
                      ) : (
                        <ul className='space-y-3'>
                          {achievement.items?.map((item, itemIndex) => (
                            <li key={itemIndex} className='flex items-start'>
                              <div className='w-1.5 h-6 bg-primary/20 rounded-full mr-3 mt-0.5' />
                              <span className='text-sm text-slate-600 font-bold leading-tight group-hover:text-slate-900 transition-colors'>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section ref={ctaSection.ref} className='py-28 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center scale-105'
          style={{ backgroundImage: `url(${missionImage})` }}>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/85'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`max-w-4xl mx-auto text-center text-white scroll-scale ${ctaSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight'>
              Join Our Mission to Empower Youth
            </h2>
            <p className='text-xl mb-12 text-white/95 leading-relaxed max-w-2xl mx-auto'>
              Whether you're a young professional seeking guidance, an
              organization looking to partner, or someone passionate about youth
              development, there's a place for you in our community.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg' asChild className='bg-white text-primary hover:bg-white/90 shadow-xl hover:scale-105 transition-all'>
                <a href="https://app.careernamimii.org/membership" target="_blank" rel="noopener noreferrer">
                  Become a Member
                </a>
              </Button>
              <Button
                variant='outline'
                size='lg'
                asChild
                className='border-white border-2 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm hover:scale-105 transition-all shadow-lg'>
                <Link to='/contact'>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className='absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float' style={{ animationDelay: '1s' }}></div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
