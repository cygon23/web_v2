import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import ImpactHub from "@/components/ImpactHub";
import {
  ArrowRight,
  Play,
  Users,
  Target,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  BookOpen,
  Lightbulb,
  Heart,
  Star,
  TrendingUp,
  Zap,
  X,
  CheckCircle,
  Ticket,
  Briefcase
} from "lucide-react";
import CountUp from "react-countup";

// hero images
import teamImage from "@/assets/team-collaboration.jpg";
import eventImage from "@/assets/career-event.jpg";
import eventImage2 from "@/assets/tailks.jpg";
import abstractBg from "@/assets/abstract-bg.jpg";
import careerHubImage from "@/assets/career-hub-platform.png";
import hero3 from "@/assets/hero3.jpeg";

//partiners images
import partner1 from "@/assets/partiners/koics-01.png";
import partner2 from "@/assets/partiners/nembo.png";
import partner3 from "@/assets/partiners/ibiscus.png";
import partner4 from "@/assets/partiners/iaa.png";
import partner5 from "@/assets/partiners/e3logo.jpg";

//team
import rahmanImg from "@/assets/team/rahman.jpeg";
import abdulImg from "@/assets/team/02.jpg";
import karenImg from "@/assets/team/KAREEN.jpg";
import godfreyImg from "@/assets/team/godfrey.jpg";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Event Countdown Logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("May 02, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

  // Scroll animations for each section
  const aiSection = useScrollAnimation();
  const aboutSection = useScrollAnimation();
  const objectivesSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const donationSection = useScrollAnimation();
  const teamSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();
  const partnersSection = useScrollAnimation();

  const testimonials = [
    {
      name: "Mark Kane",
      role: "IT Specialist",
      content:
        "The training sessions exceeded my expectations. The instructors were knowledgeable and approachable, and the content was perfectly tailored.",
      rating: 5,
    },
    {
      name: "Sarah T.",
      role: "University Graduate",
      content:
        "Attending the career talks was a game-changer. The real-world experiences shared opened my eyes to new career paths. I left feeling motivated.",
      rating: 5,
    },
    {
      name: "Jane Musonda",
      role: "Program Manager",
      content:
        "The workshops were incredibly engaging and hands-on. I walked away with practical skills I could apply immediately in my projects.",
      rating: 5,
    },
    {
      name: "David Lema",
      role: "Software Engineer",
      content:
        "The Intelligence Hub guided me to my first developer role with precision. The AI-driven trajectory mapping is truly groundbreaking.",
      rating: 5,
    },
    {
      name: "Anna Massawe",
      role: "Community Leader",
      content:
        "We've seen a massive shift in youth engagement since Career Na Mimi started. The impact on community development is undeniable.",
      rating: 5,
    },
    {
      name: "Kelvin Chuwa",
      role: "Digital Entrepreneur",
      content:
        "The Execution Labs taught me how to scale my startup idea into a real business. The mentorship here is world-class.",
      rating: 5,
    },
    {
      name: "Grace Mushi",
      role: "Human Resources",
      content:
        "The quality of talent emerging from these programs is exceptional. They are truly bridge-building for the job market.",
      rating: 5,
    },
    {
      name: "Brian Kimaro",
      role: "Graphic Designer",
      content:
        "From technical skills to soft skills, this platform provided the institutional protocol I needed to succeed in a competitive industry.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Youth Empowered", icon: Users },
    { number: "50+", label: "Workshops Conducted", icon: BookOpen },
    { number: "25+", label: "Career Talks", icon: Sparkles },
    { number: "100+", label: "Success Stories", icon: Award },
  ];

  const objectives = [
    {
      title: "Quality Education",
      description:
        "Shaping the career of youth toward their dreams and bright future",
      goal: 500,
      raised: 350,
      percentage: 70,
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Gender Equality",
      description: "Through personalized mentorship and awareness raising",
      goal: 200,
      raised: 50,
      percentage: 30,
      icon: Heart,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Innovation",
      description:
        "Clear education and training on the importance of nutrition for future generation",
      goal: 100,
      raised: 56,
      percentage: 54,
      icon: Sparkles,
      color: "from-green-500 to-green-600",
    },
  ];


  const services = [
    {
      title: "Technical Synthesis",
      description: "Mastering high-impact professional protocols and strategic mastery.",
      icon: TrendingUp,
      image: teamImage,
      tag: "Institutional Training",
      detailedContent: {
        overview: "Our technical synthesis programs are designed to equip youth with high-impact professional protocols and practical skills that can be immediately applied in their chosen fields.",
        features: [
          "Hands-on mastery modules with real-world applications",
          "Expert instructors with institutional experience",
          "Customized protocol synthesis for different skill levels",
          "Professional certification of excellence",
          "Post-synthesis scaling and specialized resources"
        ],
        impact: "Over 500 young people have successfully mastered our institutional protocols, with 85% reporting significant career trajectory improvement."
      }
    },
    {
      title: "Execution Labs",
      description: "Collaborative problem-solving in high-stakes professional environments.",
      icon: Users,
      image: eventImage,
      tag: "Practical Execution",
      detailedContent: {
        overview: "Execution Labs provide a high-fidelity environment where participants tackle real-world challenges through strategic collaboration.",
        features: [
          "Strategic group dynamics and execution projects",
          "Scenario-based problem-solving exercises",
          "Institutional networking with high-tier professionals",
          "Leadership synthesis and operational mastery",
          "Direct access to industry architects and mentors"
        ],
        impact: "We've conducted over 50 execution labs, creating authoritative spaces where youth learn to lead, innovate, and execute at scale."
      }
    },
    {
      title: "Insight Sessions",
      description: "Strategic mentorship and guidance from industry-shaping professionals.",
      icon: Lightbulb,
      image: eventImage2,
      tag: "Strategic Mentorship",
      detailedContent: {
        overview: "Insight Sessions feature world-class professionals sharing their journeys, insights, and practical advice to shape elite career paths.",
        features: [
          "Guest architects from diverse global industries",
          "Pro-tier Q&A sessions with industry leaders",
          "Institutional pathing and strategic exploration",
          "Case-study intelligence and success protocols",
          "High-value networking with career architects"
        ],
        impact: "With 25+ insight sessions delivered, we've bridged the gap for hundreds of emerging specialists through world-class mentorship."
      }
    },
    {
      title: "Intelligence Hub",
      description: "Powered by AI, Driven by Purpose. Architecture for high-precision career pathways with an 89% success rate.",
      icon: Zap,
      image: careerHubImage,
      tag: "89% Success Rate",
      link: "https://careerhub.careernamimii.org/",
      detailedContent: {
        overview: "Powered by AI, and driven by purpose, our intelligent platform combines cutting-edge AI with local expertise to create personalized career pathways for every young Tanzanian.",
        features: [
          "AI-driven career trajectory mapping",
          "89% success rate in career placement",
          "Connected to 500+ educational institutions",
          "Personalized guidance for students and parents",
          "Global industry alignment engine"
        ],
        impact: "With a proven 89% achievement rate, the Intelligence Hub is the definitive protocol for students seeking high-impact professional success."
      }
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />


      {/* About Us & Achievements Section */}
      <section ref={aboutSection.ref} className='py-24 relative overflow-hidden bg-slate-50'>
        {/* Subtle decorative background patterns */}
        <div className='absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

            {/* Left Column: Story & Narrative */}
            <div className={`space-y-8 scroll-fade-left ${aboutSection.isVisible ? 'visible' : ''}`}>
              <div>
                <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>
                  About Our Mission
                </Badge>
                <h2 className='text-4xl md:text-5xl font-heading font-black text-slate-900 leading-[1.15] mb-6'>
                  Empowering Dreams,<br />
                  <span className='text-primary'>One Story</span> at a Time
                </h2>
                <div className='w-20 h-1.5 bg-primary rounded-full mb-8' />
              </div>

              <p className='text-lg text-slate-600 leading-relaxed max-w-xl'>
                Career Na Mimi is a youth empowerment organization based in Tanzania, dedicated to bridging the gap between young people and the opportunities they need to thrive.
              </p>

              <div className='space-y-4'>
                <p className='text-slate-600 leading-relaxed max-w-xl'>
                  We empower youth through quality education, mentorship, and skill development programs, preparing them for successful careers and sustainable livelihoods.
                </p>
              </div>

              <div className='pt-4'>
                <Button variant='hero' size='lg' asChild className='shadow-xl shadow-primary/20 rounded-full group px-8'>
                  <Link to='/about'>
                    Learn Our Full Story
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Cinematic Impact Hub */}
            <div className={`scroll-fade-right ${aboutSection.isVisible ? 'visible' : ''}`}>
              <ImpactHub />
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Protocol (Zenith Protocol) */}
      <section ref={objectivesSection.ref} className='py-24 relative overflow-hidden bg-[#020617] text-white'>
        {/* Obsidian Flux Background */}
        <div className='absolute inset-0 opacity-20' style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-10'></div>

        {/* Aura Glows */}
        <div className='absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse'></div>
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700'></div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-20'>
          <div className={cn(
            "text-center mb-16 scroll-fade-up",
            objectivesSection.isVisible && "visible"
          )}>
            <h2 className='text-5xl md:text-7xl font-heading font-black mb-8 leading-[1] tracking-tighter text-white'>
              Building a <br /> <span className='text-primary drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]'>Transformative</span> Movement
            </h2>
            <p className='text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium'>
              Leading the movement to empower youth across Africa through inclusive, innovation-driven development.
            </p>
          </div>

          <div className='space-y-24'>
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-12 md:gap-24 relative",
                  index % 2 === 1 ? "md:flex-row-reverse text-right" : "text-left"
                )}
              >
                {/* Ghost Typography Number */}
                <div className={cn(
                  "absolute top-1/2 -translate-y-1/2 font-black text-[12rem] md:text-[25rem] text-white/[0.02] select-none pointer-events-none z-0",
                  index % 2 === 1 ? "left-0" : "right-0"
                )}>
                  {objective.id}
                </div>

                {/* Content Side */}
                <div className='w-full md:w-1/2 relative z-10 space-y-6'>
                  <div className={cn(
                    "flex items-center gap-4 mb-4",
                    index % 2 === 1 ? "justify-end" : "justify-start"
                  )}>
                    <div className='w-12 h-[1px] bg-white/20'></div>
                    <span className='text-[10px] font-black uppercase tracking-[0.4em] text-primary'>{objective.tag}</span>
                  </div>

                  <h3 className='text-4xl md:text-6xl font-black text-white tracking-tighter'>
                    {objective.title}
                  </h3>

                  <p className='text-lg md:text-xl text-slate-400 font-medium max-w-md leading-relaxed ml-0 mr-auto md:mx-0'>
                    {objective.description}
                  </p>

                  <div className={cn(
                    "pt-6 flex items-center gap-8",
                    index % 2 === 1 ? "justify-end" : "justify-start"
                  )}>
                    <div className='flex flex-col gap-2'>
                      <span className='text-[10px] font-black uppercase tracking-widest text-slate-500'>Strategy Impact</span>
                      <div className='flex items-center gap-3'>
                        <div className='text-3xl font-black text-white'>{objective.percentage}%</div>
                        <div className='w-24 h-1.5 bg-white/5 rounded-full overflow-hidden'>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${objective.percentage}%` }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className='h-full bg-primary'
                            style={{ backgroundColor: objective.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Node Side */}
                <div className='w-full md:w-1/2 relative flex justify-center'>
                  <div className='relative group'>
                    {/* Pulsing Energy Ring */}
                    <div className='absolute inset-0 bg-white/5 rounded-full scale-150 animate-pulse'></div>
                    <div className='absolute inset-0 bg-white/5 rounded-full scale-125 animate-pulse delay-300'></div>

                    <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] backdrop-blur-xl group-hover:border-primary/30 transition-colors duration-700 shadow-2xl'>
                      <objective.icon className='w-16 h-16 md:w-24 md:h-24 text-white group-hover:text-primary transition-all duration-700 group-hover:scale-110' style={{ color: index % 2 === 0 ? objective.color : 'white' }} />

                      {/* Active Status Ring (Rotating) */}
                      <svg className='absolute inset-0 w-full h-full -rotate-90 opacity-20 group-hover:opacity-100 transition-opacity duration-700'>
                        <circle
                          cx='50%'
                          cy='50%'
                          r='48%'
                          fill='transparent'
                          stroke={objective.color}
                          strokeWidth='2'
                          strokeDasharray='10 20'
                          className='animate-[spin_20s_linear_infinite]'
                        />
                      </svg>
                    </div>

                    {/* Scanning Line (Decoration) */}
                    <div className='absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent'></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Execution Suite (Services) */}
      <section ref={servicesSection.ref} className='py-24 relative overflow-hidden bg-slate-50'>
        {/* Cinematic background elements */}
        <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none'></div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`flex flex-col md:flex-row items-end justify-between mb-20 gap-8 scroll-fade-up ${servicesSection.isVisible ? 'visible' : ''}`}>
            <div className='max-w-3xl'>
              <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-6 py-2 rounded-full uppercase tracking-widest text-[10px] font-black'>
                The Execution Suite
              </Badge>
              <h2 className='text-5xl md:text-7xl font-heading font-black leading-[0.9] tracking-tighter text-slate-950'>
                Engineering the <br /> <span className='text-primary'>Future</span> of Potential
              </h2>
            </div>
            <p className='text-lg md:text-xl text-slate-500 font-medium max-w-sm border-l-2 border-primary/20 pl-6 h-fit'>
              A suite of institutional programs designed to scale skills and impact across the continent.
            </p>
          </div>

          <div className='relative'>
            {/* Horizontal Scroll / Carousel Container */}
            <div className='flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-4 px-4'>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='min-w-[85vw] md:min-w-[500px] snap-center'
                >
                  <Card
                    className='group relative h-[500px] border-none overflow-hidden rounded-[3rem] shadow-2xl hover:shadow-primary/20 transition-all duration-700 cursor-pointer'
                    onClick={() => {
                      if (service.link) {
                        window.open(service.link, '_blank', 'noopener,noreferrer');
                      } else {
                        setSelectedService(index);
                      }
                    }}
                  >
                    {/* Background Visual with Ken Burns effect */}
                    <div className='absolute inset-0 z-0 overflow-hidden'>
                      <div
                        className='w-full h-full bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110'
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent' />
                    </div>

                    {/* Service Tag & Icon */}
                    <div className='absolute top-8 left-8 z-10 flex items-center gap-4'>
                      <div className='w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-500'>
                        <service.icon className='w-6 h-6' />
                      </div>
                      <span className='text-[10px] font-black uppercase tracking-[0.3em] text-white/60'>{service.tag}</span>
                    </div>

                    {/* Detailed Reveal Layer (Hover) */}
                    <div className='absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center p-12 text-center'>
                      <div className='space-y-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700'>
                        <p className='text-white/90 text-lg font-medium leading-relaxed max-w-xs'>
                          {service.detailedContent?.overview || service.description}
                        </p>
                        <Button variant='hero' className='bg-white text-primary hover:bg-slate-50 rounded-full px-8'>
                          {service.link ? "Launch Platform" : "Explore Protocol"}
                        </Button>
                      </div>
                    </div>

                    {/* Base Content Panel */}
                    <div className='absolute bottom-0 left-0 right-0 p-10 z-10 transition-transform duration-700 group-hover:translate-y-10 group-hover:opacity-0'>
                      <h3 className='text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter'>
                        {service.title}
                      </h3>
                      <p className='text-white/60 font-medium leading-relaxed flex items-center gap-2'>
                        Learn more about our {service.title.toLowerCase()} process
                        <ArrowRight className='w-4 h-4' />
                      </p>
                    </div>

                    {/* Institutional Accent */}
                    <div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full' />
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className='flex justify-center gap-2 mt-8 md:hidden'>
              {services.map((_, i) => (
                <div key={i} className='w-1.5 h-1.5 rounded-full bg-slate-300' />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Event Strategic Dispatch (Active Ad-Style) */}
      <section ref={donationSection.ref} className='py-16 relative overflow-hidden bg-[#020617]'>
        {/* Background Visual (Atmospheric & Dynamic) */}
        <div
          className='absolute inset-0 bg-cover bg-center blur-md opacity-25 pointer-events-none'
          style={{ backgroundImage: `url(${eventImage})` }}
        />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.5 }}
              className='bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group cursor-pointer'
            >

              {/* Dynamic Energy Sweep Animation */}
              <motion.div
                animate={{ x: ['-200%', '300%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className='absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 pointer-events-none'
              />

              <div className='flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14'>

                {/* Countdown Node (More Alive) */}
                <div className='flex items-center gap-8'>
                  <div className='relative'>
                    {/* Pulsing Outer Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='absolute inset-0 bg-primary/20 rounded-3xl blur-xl'
                    />
                    <div className='relative w-24 h-24 md:w-28 md:h-28 bg-white/[0.05] border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-2xl backdrop-blur-md'>
                      <span className='text-4xl md:text-5xl font-black text-white lining-nums tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>{timeLeft.days}</span>
                      <span className='text-[9px] font-black uppercase tracking-[0.3em] text-primary-light'>Days To Go</span>
                    </div>
                  </div>

                  <div className='hidden lg:block h-16 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>

                  <div className='text-left hidden lg:block'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span className='w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.8)]'></span>
                      <span className='text-[10px] font-black uppercase tracking-[0.4em] text-white/60'>Status: Active</span>
                    </div>
                    <p className='text-[11px] font-black text-primary-light uppercase tracking-[0.5em]'>Dispatch Protocol</p>
                  </div>
                </div>

                {/* Minified Content with Shimmer Text */}
                <div className='flex-1 text-center md:text-left space-y-3'>
                  <Badge className='bg-primary/20 text-primary-light border-primary/30 px-4 py-1 text-[9px] font-black uppercase tracking-widest rounded-full mb-2'>
                    Limited Event Window
                  </Badge>
                  <h2 className='text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter'>
                    CAREER CONNECT: <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-primary-light bg-[length:200%_auto] animate-shimmer'>
                      THE INDUSTRY TAKEOVER
                    </span>
                  </h2>
                </div>

                {/* High-Impact Refined Action */}
                <div className='w-full md:w-auto'>
                  <Button
                    variant='hero'
                    size='lg'
                    asChild
                    className='h-20 px-14 text-xl rounded-[2rem] shadow-[0_20px_50px_rgba(236,72,153,0.4)] hover:shadow-primary/60 transition-all hover:scale-105 active:scale-95 flex items-center justify-center bg-primary text-white border-none font-black tracking-widest'
                  >
                    <a href='https://app.careernamimii.org/events' target='_blank' rel='noopener noreferrer'>
                      SECURE SPOT
                    </a>
                  </Button>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* The Unified Trust Stage (Creative Minified Testimonials) */}
      <section ref={testimonialsSection.ref} className='py-16 relative overflow-hidden bg-white'>
        {/* Creative Background Architecture: Dynamic Mesh & Aura */}
        <div className='absolute inset-0 pointer-events-none'>
          {/* Animated Aura Glows */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]'
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className='absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]'
          />

          {/* Glassmorphic Patterns */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto'>
            <div className={`text-center mb-12 scroll-fade-up ${testimonialsSection.isVisible ? 'visible' : ''}`}>
              <h2 className='text-3xl md:text-4xl font-heading font-black text-slate-950 leading-tight tracking-tighter'>
                Empowering <span className='text-primary'>Communities</span>
              </h2>
            </div>

            <div className='relative min-h-[300px] flex flex-col items-center justify-center'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className='text-center space-y-8'
                >
                  {/* Minified Voice Wave */}
                  <div className='flex justify-center items-center gap-1 h-6 mb-4'>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [6, Math.random() * 16 + 8, 6],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                        className='w-1 bg-primary/40 rounded-full'
                      />
                    ))}
                  </div>

                  <blockquote className='text-xl md:text-2xl font-bold text-slate-800 leading-relaxed max-w-3xl mx-auto italic'>
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className='pt-6'>
                    <div className='space-y-1'>
                      <h4 className='text-sm font-black text-slate-900 uppercase tracking-widest'>
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className='text-primary font-black uppercase tracking-[0.2em] text-[8px]'>
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dotted Navigation Protocol */}
              <div className='flex justify-center mt-12 gap-3'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className='group p-2 focus:outline-none'
                    aria-label={`Protocol Node ${index + 1}`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentTestimonial
                        ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                        : 'bg-slate-200 group-hover:bg-slate-300'
                      }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
          <div className='relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden'>
            <button
              onClick={() => setIsVideoOpen(false)}
              className='absolute top-3 right-3 text-white text-2xl font-bold z-10'
              aria-label='Close'>
              &times;
            </button>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/Tsm1vKgZg_g?autoplay=1'
              title='CAREER TALK SEASON 1 EPISODE 1'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </div>
      )}

      {/* Service Details Modal */}
      {selectedService !== null && services[selectedService].detailedContent && (() => {
        const ServiceIcon = services[selectedService].icon;
        const service = services[selectedService];
        return (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
            onClick={() => setSelectedService(null)}>
            <div
              className='relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl'
              onClick={(e) => e.stopPropagation()}>
              {/* Header with Image */}
              <div className='relative h-48 bg-cover bg-center' style={{ backgroundImage: `url(${service.image})` }}>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center'>
                  <div className='text-center text-white'>
                    <ServiceIcon className='w-16 h-16 mx-auto mb-4' />
                    <h3 className='text-3xl font-heading font-bold'>{service.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className='absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group'
                  aria-label='Close'>
                  <X className='w-6 h-6 text-white group-hover:rotate-90 transition-transform' />
                </button>
              </div>

              {/* Content */}
              <div className='p-8 max-h-[60vh] overflow-y-auto'>
                {/* Overview */}
                <div className='mb-8'>
                  <h4 className='text-xl font-heading font-bold mb-3 text-foreground'>Overview</h4>
                  <p className='text-muted-foreground leading-relaxed'>
                    {service.detailedContent?.overview}
                  </p>
                </div>

                {/* Features */}
                <div className='mb-8'>
                  <h4 className='text-xl font-heading font-bold mb-4 text-foreground'>Key Features</h4>
                  <div className='space-y-3'>
                    {service.detailedContent?.features.map((feature, idx) => (
                      <div key={idx} className='flex items-start gap-3'>
                        <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                        <p className='text-muted-foreground leading-relaxed'>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className='bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border-2 border-primary/20'>
                  <h4 className='text-xl font-heading font-bold mb-3 text-foreground flex items-center gap-2'>
                    <Award className='w-6 h-6 text-primary' />
                    Our Impact
                  </h4>
                  <p className='text-muted-foreground leading-relaxed'>
                    {service.detailedContent?.impact}
                  </p>
                </div>

                {/* CTA */}
                <div className='mt-8 text-center'>
                  <Button
                    variant='hero'
                    size='lg'
                    asChild
                    className='shadow-lg hover:shadow-xl transition-all'>
                    <Link to='/contact'>
                      Get Involved
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Partners Section */}
      <section ref={partnersSection.ref} className='py-20 bg-gradient-to-b from-transparent to-secondary/20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${partnersSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>
              Our Partners
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Working together with amazing organizations to empower youth across Tanzania
            </p>
          </div>

          <div className='overflow-hidden relative py-8'>
            <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10'></div>
            <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10'></div>
            <div className='flex animate-scroll-horizontal'>
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div key={index} className='flex-shrink-0 flex items-center justify-center mx-12 group'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <img
                      src={logo}
                      alt={`Partner ${(index % partnerLogos.length) + 1}`}
                      className='h-20 md:h-24 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative'
                    />
                  </div>
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

export default Index;
