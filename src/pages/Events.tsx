import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Briefcase,
  Laptop,
  UserCheck,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  TrendingUp,
  BookOpen,
  Heart,
  Star,
  Eye,
  ZoomIn,
  Lightbulb,
  Target,
  Ticket,
  Tag,
  CheckCircle2,
  Banknote,
} from "lucide-react";

// Import images
import eventsHero from "@/assets/gallery/eventG/utalii/u6.jpg";
import utaliiImage from "@/assets/events/tourism.jpg";
import ladiesTalkImage from "@/assets/events/abstract-bg.jpg";
import innovationImage from "@/assets/events/innovation.jpg";
import careerFairImage from "@/assets/hero-career-guidance.jpg";
import happyImage from "@/assets/gallery/event/happy.jpg";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll animation hooks
  const eventsSection = useScrollAnimation({ threshold: 0.1 });
  const impactSection = useScrollAnimation({ threshold: 0.1 });
  const highlightsSection = useScrollAnimation({ threshold: 0.1 });

  const upcomingEvents = [
    {
      id: "career-connect-2026",
      date: "02 May 2026",
      time: "TBA",
      title: "CAREER CONNECT: THE INDUSTRY EXPERIENCE TABLE WORKSHOP",
      description:
        "The main objective is to connect youth with professionals and entrepreneurs who can provide practical guidance on career preparation, employment readiness, business growth, and modern opportunity navigation.",
      image: eventsHero,
      status: "coming-soon",
      category: "Workshop",
      location: "CRDB Headquarters, Upanga, Dar es Salaam",
      theme: "CONNECTING YOUTH TO EMPLOYMENT, SELF-EMPLOYMENT AND REAL INDUSTRY OPPORTUNITIES",
      pathways: ["Employment Pathway", "Self-Employment Pathway"],
      fees: {
        single: "TZS 35,000",
        group: "TZS 100,000 (Group of 4)",
      },
    },
  ];

  const pastEvents = [
    {
      id: "utalii-2024",
      date: "06 Dec 2024",
      time: "Wed 11:30",
      title: "Tourism Opportunities Are in Your Hands!",
      description:
        "Join us on UTALII NA MIMI Career-Based Event 2024 and discover exciting career, entrepreneurship, and development opportunities in the tourism industry! Let's meet at ANZA HUB, Arusha, for unique workshops, professional networking, and inspiration to turn your tourism dreams into reality.",
      image: utaliiImage,
      category: "Tourism & Hospitality",
      location: "ANZA HUB, Arusha",
      attendees: 150,
    },
    {
      id: "ladies-talk-2024",
      date: "8 Dec 2024",
      time: "Sun 9:00",
      title: "Ladies Talk - Empowering Futures!",
      description:
        'Join us on 8th December 2024 at Nanenane Hall near VETA for Ladies Talk, an event for all female students in Arusha. Under the slogan "Breaking Barriers, Building Futures of Women in Their Career", this initiative by Career Na Mimi and the ATC Student Organization aims to inspire, educate, and empower young women in their career journeys.',
      image: ladiesTalkImage,
      category: "Women Empowerment",
      location: "Nanenane Hall, Arusha",
      attendees: 200,
    },
    {
      id: "innovation-competition-2024",
      date: "2 Nov 2024",
      time: "Thu 09:30",
      title: "Innovation Competition - 2nd Place Victory!",
      description:
        "We are thrilled to announce that our team secured 2nd place in the prestigious Innovation Competition! This recognition is a testament to our dedication, creativity, and commitment to excellence in the field of technology, design, and sustainability.",
      image: innovationImage,
      category: "Innovation & Technology",
      location: "Arusha Innovation Hub",
      achievement: "2nd Place Winner",
    },
  ];

  const impactStats = [
    { number: "3500+", label: "Youth Empowered", icon: Users },
    { number: "50+", label: "Jobs & Internships", icon: Briefcase },
    { number: "2010+", label: "Skills Training", icon: Laptop },
    { number: "1005+", label: "Women & Marginalized Youth", icon: UserCheck },
  ];

  const EventCard = ({ event, isUpcoming = false }) => (
    <Card className='modern-card group hover:shadow-2xl transition-all duration-500 border-0 shadow-card overflow-hidden mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-0'>
        {/* Date Section */}
        <div className='lg:col-span-2 text-white p-6 flex flex-col justify-center items-center text-center relative overflow-hidden' style={{
          background: 'linear-gradient(135deg, hsl(327, 73%, 56%) 0%, hsl(327, 73%, 70%) 100%)'
        }}>
          <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          <div className='border-b border-white/30 pb-3 mb-3 w-full relative z-10'>
            <h3 className='text-lg font-bold'>{event.date}</h3>
            <p className='text-white/90 text-sm'>{event.time}</p>
          </div>
          <Calendar className='w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300' />
        </div>

        {/* Content Section */}
        <div className='lg:col-span-6 p-6'>
          <div className='mb-4 flex flex-wrap gap-2'>
            <Badge className='bg-primary/10 text-primary border-primary/20'>
              {event.category}
            </Badge>
            {event.achievement && (
              <Badge className='bg-yellow-100 text-yellow-800 border-yellow-200'>
                <Award className='w-3 h-3 mr-1' />
                {event.achievement}
              </Badge>
            )}
            {event.theme && (
              <Badge className='bg-green-100 text-green-800 border-green-200 uppercase tracking-widest text-[10px]'>
                <Tag className='w-3 h-3 mr-1' />
                Theme
              </Badge>
            )}
          </div>

          <h3 className='text-xl font-heading font-black mb-2 group-hover:text-primary transition-colors uppercase leading-tight'>
            {event.title}
          </h3>

          {event.theme && (
            <p className='text-green-700 font-bold text-sm mb-4 leading-snug'>
              {event.theme}
            </p>
          )}

          <p className='text-muted-foreground mb-6 leading-relaxed line-clamp-3 font-medium'>
            {event.description}
          </p>

          {event.pathways && (
            <div className='mb-6 space-y-3'>
              <h4 className='text-xs font-black text-slate-400 uppercase tracking-widest'>Focus Areas:</h4>
              <div className='flex flex-col gap-2 text-sm'>
                {event.pathways.map((pathway, idx) => (
                  <div key={idx} className='flex items-center text-slate-700 font-semibold'>
                    <CheckCircle2 className='w-5 h-5 mr-3 text-green-500 flex-shrink-0' />
                    {pathway}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className='flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium mb-6'>
            {event.location && (
              <div className='flex items-start max-w-[80%]'>
                <MapPin className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary' />
                <span>{event.location}</span>
              </div>
            )}
            {event.attendees && (
              <div className='flex items-center'>
                <Users className='w-4 h-4 mr-2 text-primary' />
                {event.attendees} Attendees
              </div>
            )}
          </div>

          {event.fees && (
            <div className='flex flex-wrap items-center gap-3 mb-6 pt-5 border-t border-slate-100'>
              <div className='flex gap-2 items-center bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-200 font-bold text-sm shadow-sm'>
                <Banknote className='w-4 h-4' /> Single: {event.fees.single}
              </div>
              <div className='flex gap-2 items-center bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-200 font-bold text-sm shadow-sm'>
                <Banknote className='w-4 h-4' /> Group: {event.fees.group}
              </div>
            </div>
          )}

          {isUpcoming ? (
            <div className='relative inline-block w-full sm:w-auto mt-2'>
              <div className='absolute -inset-1 bg-gradient-to-r from-primary to-green-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
              <Button variant='hero' size='lg' className='relative w-full shadow-xl hover:shadow-2xl rounded-xl font-bold bg-green-600 hover:bg-green-700'>
                Register Now <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </div>
          ) : (
            <Button variant='outline' size='sm'>
              Learn More <ArrowRight className='ml-2 w-4 h-4' />
            </Button>
          )}
        </div>

        {/* Image Section */}
        <div className='lg:col-span-4 relative'>
          <div
            className='h-64 lg:h-full bg-cover bg-center cursor-pointer relative overflow-hidden'
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => setSelectedImage(event.image)}>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-500'></div>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90'>
              <div className='bg-white/95 rounded-full p-4 shadow-xl backdrop-blur-sm'>
                <ZoomIn className='w-6 h-6' style={{ color: 'hsl(327, 73%, 56%)' }} />
              </div>
            </div>
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500'></div>
          </div>
        </div>
      </div>
    </Card>
  );

  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div
        className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'
        onClick={onClose}>
        <div className='max-w-4xl max-h-[90vh] relative'>
          <img
            src={image}
            alt='Event'
            className='w-full h-full object-contain rounded-lg shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={onClose}
            className='absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors'>
            <Eye className='w-6 h-6' />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section - Minimalist & Creative */}
      <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950'>
        {/* Background Image Setup */}
        <div className='absolute inset-0 overflow-hidden'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-110'
            style={{ backgroundImage: `url(${eventsHero})` }}>
          </div>
          {/* Subtle gradient to maintain image clarity while ensuring text readability */}
          <div className='absolute inset-0 bg-slate-950/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/70 sm:to-black/30' />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950 h-32 bottom-0 top-auto opacity-90' />
        </div>

        {/* Creative Abstract SVG on Far Right */}
        <div className='absolute right-0 lg:-right-[5%] top-[20%] opacity-25 pointer-events-none mix-blend-screen'>
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='animate-[pulse_10s_ease-in-out_infinite]'>
            <path fill="none" stroke="url(#creativeGrad)" strokeWidth="0.5" strokeDasharray="2 3" d="M42.7,-73.4C55.9,-66,67.6,-54.6,76.5,-41.4C85.4,-28.2,91.6,-14.1,90.9,-0.4C90.2,13.4,82.7,26.8,73.4,38.6C64.1,50.4,53.1,60.6,40.1,68C27.1,75.4,13.6,80,-0.6,81C-14.7,82,-29.4,79.5,-42.6,72.4C-55.8,65.3,-67.5,53.6,-75.7,40.1C-83.9,26.6,-88.7,13.3,-87.3,0.8C-85.8,-11.7,-78.1,-23.4,-69.5,-34C-60.9,-44.6,-51.4,-54.1,-39.8,-62.3C-28.2,-70.4,-14.1,-77.2,0.6,-78.3C15.3,-79.4,30.6,-74.7,42.7,-73.4Z" transform="translate(100 100) scale(1.1) rotate(0)">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="40s" repeatCount="indefinite"/>
            </path>
            <path fill="url(#creativeGrad)" fillOpacity="0.05" d="M35.6,-62.7C46,-56.9,54,-45.5,62,-33.1C70,-20.7,78.1,-7.2,76.2,5.2C74.3,17.7,62.4,29.1,51.8,40.5C41.2,51.8,31.9,63.1,19.3,69.5C6.7,75.9,-9.2,77.4,-24.1,72.8C-39,68.2,-52.8,57.5,-61.8,43.9C-70.8,30.3,-74.9,13.8,-73.8,-2C-72.7,-17.7,-66.3,-32.8,-55.8,-43.3C-45.3,-53.8,-30.7,-59.6,-17.1,-63C-3.4,-66.4,9.3,-67.4,21.8,-66.4Z" transform="translate(100 100) scale(1)">
               <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="60s" repeatCount="indefinite"/>
            </path>
            <circle cx="100" cy="100" r="85" stroke="url(#creativeGrad)" strokeWidth="0.2" fill="none" opacity="0.5"/>
            <defs>
              <linearGradient id="creativeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 flex justify-center text-center'>
          <div className='max-w-2xl flex flex-col items-center mt-10 sm:mt-16'>
            
            {/* Main Heading - Little bit centered, refined */}
            <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-150'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-[1.05] text-white'>
                Career<span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-black drop-shadow-lg mx-1'>Connect</span> 
                <span className='block text-3xl sm:text-4xl lg:text-5xl mt-3 text-slate-300 font-bold'>Experiences</span>
              </h1>
            </div>

            {/* Description */}
            <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-300 mb-10 flex flex-col items-center'>
              <div className='h-1 w-16 bg-green-500 mb-6 rounded-full opacity-80'></div>
              <p className='text-base md:text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed font-medium'>
                Discover transformative moments and interactive workshops 
                shaping the future of Tanzania's youth.
              </p>
            </div>

            {/* Nav Links Only - Small letters */}
            <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-500'>
              <nav className='flex space-x-4 items-center text-slate-400 text-sm md:text-base font-medium lowercase tracking-wide'>
                <span className='hover:text-green-400 transition-colors cursor-pointer px-2 py-1 rounded-md hover:bg-white/5'>home</span>
                <div className='w-1 h-1 rounded-full bg-slate-600'></div>
                <span className='text-green-400 font-semibold shadow-sm px-2 py-1 bg-green-500/10 rounded-md border border-green-500/20'>events</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Event Tabs - Enhanced */}
      <section className='py-16 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='flex justify-center mb-12'>
            <div className='bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-shadow'>
              <Button
                variant={activeTab === "upcoming" ? "hero" : "ghost"}
                size='lg'
                onClick={() => setActiveTab("upcoming")}
                className='rounded-full px-8 transition-all duration-300'>
                <Calendar className='w-4 h-4 mr-2' />
                Upcoming Events
              </Button>
              <Button
                variant={activeTab === "past" ? "hero" : "ghost"}
                size='lg'
                onClick={() => setActiveTab("past")}
                className='rounded-full px-8 transition-all duration-300'>
                <TrendingUp className='w-4 h-4 mr-2' />
                Past Events
              </Button>
            </div>
          </div>

          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>
              {activeTab === "upcoming" ? "Upcoming" : "Past"}{" "}
              <span style={{ color: 'hsl(327, 73%, 56%)' }}>Events</span>
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              {activeTab === "upcoming"
                ? "Stay tuned for our exciting upcoming events that will transform your career journey"
                : "Explore our successful past events that have impacted thousands of young professionals"}
            </p>
          </div>
        </div>
      </section>

      {/* Events Content - Enhanced */}
      <section ref={eventsSection.ref} className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {activeTab === "upcoming" ? (
            <div className={`scroll-fade-up ${eventsSection.isVisible ? 'visible' : ''}`}>
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`scroll-scale ${eventsSection.isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 100}ms` }}>
                    <EventCard event={event} isUpcoming={true} />
                  </div>
                ))
              ) : (
                <Card className='modern-card border-0 shadow-elegant'>
                  <CardContent className='p-12 text-center'>
                    <div className='w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center' style={{
                      background: 'linear-gradient(135deg, hsl(327, 73%, 56%) 0%, hsl(327, 73%, 70%) 100%)'
                    }}>
                      <Sparkles className='w-10 h-10 text-white animate-pulse' />
                    </div>
                    <h3 className='text-2xl font-heading font-bold mb-4'>
                      Exciting Events Coming Soon!
                    </h3>
                    <p className='text-muted-foreground max-w-md mx-auto leading-relaxed'>
                      We're working on amazing new events that will inspire and
                      empower our community. Stay tuned for updates!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div>
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`scroll-scale ${eventsSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Impact Statistics - Circular Progress Rings */}
      <section ref={impactSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
        
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${impactSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl font-heading font-black mb-6'>
              Measuring Our Success Through <span style={{ color: 'hsl(327, 73%, 56%)' }}>Real Impact</span>
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Every event we organize creates ripple effects that transform
              lives, build careers, and strengthen communities across Tanzania.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8'>
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`scroll-scale relative group ${impactSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div className='absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse'></div>
                <div className='relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500'>
                  <CircularStat
                    number={stat.number}
                    label={stat.label}
                    icon={stat.icon}
                    maxValue={2500}
                    isVisible={impactSection.isVisible}
                    delay={index * 200}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Highlights - Enhanced */}
      <section ref={highlightsSection.ref} className='py-24 bg-slate-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className={`scroll-fade-left ${highlightsSection.isVisible ? 'visible' : ''}`}>
              <Badge className='mb-6 bg-green-100 text-green-800 border-green-200 px-5 py-2 uppercase tracking-widest text-xs font-bold'>
                Next Big Event
              </Badge>
              <h2 className='text-4xl md:text-5xl font-heading font-black mb-6 leading-tight text-slate-900'>
                Career Connect: <span className='text-green-600'>The Industry Experience Table</span>
              </h2>
              <p className='text-lg text-slate-600 mb-8 leading-relaxed font-medium'>
                Join us for an intensive workshop designed to bridge the gap between youth and real industry opportunities. Connect directly with professionals and entrepreneurs for practical guidance on employment readiness and business growth.
              </p>

              <div className='space-y-5 mb-10'>
                <div className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-green-100'>
                    <Users className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-slate-700 font-bold'>
                    Interactive Group Sessions
                  </span>
                </div>
                <div className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-green-100'>
                    <Briefcase className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-slate-700 font-bold'>
                    Employment & Self-Employment Pathways
                  </span>
                </div>
                <div className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-green-100'>
                    <MapPin className='w-5 h-5 text-green-600' />
                  </div>
                  <span className='text-slate-700 font-bold'>
                    Prime Location: CRDB Headquarters, Dar es Salaam
                  </span>
                </div>
              </div>

              <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 max-w-sm'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm text-slate-500 font-bold uppercase tracking-widest mb-1'>Date</p>
                      <p className='text-xl font-black text-slate-900'>02 May 2026</p>
                    </div>
                    <div className='h-12 w-px bg-slate-200'></div>
                    <div>
                       <p className='text-sm text-slate-500 font-bold uppercase tracking-widest mb-1'>Fee</p>
                       <p className='text-xl font-black text-green-600'>TZS 35K</p>
                    </div>
                  </div>
              </div>

              <Button variant='hero' size='lg' className='shadow-lg hover:shadow-xl transition-shadow bg-green-600 hover:bg-green-700 font-bold rounded-xl px-8'>
                Secure Your Seat <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </div>

            <div className={`relative scroll-fade-right ${highlightsSection.isVisible ? 'visible' : ''}`}>
              <div
                className='rounded-3xl shadow-2xl overflow-hidden h-[600px] bg-cover bg-center relative group'
                style={{ backgroundImage: `url(${eventsHero})` }}>
                <div className='absolute inset-0 transition-all duration-500 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'></div>
                <div className='absolute inset-0 flex items-end justify-start p-10'>
                  <div className='text-left text-white'>
                    <Badge className='mb-4 bg-green-500/20 text-green-300 border-green-500/30 px-4 py-1.5 backdrop-blur-md'>
                       Limited Seats Available
                    </Badge>
                    <h3 className='text-3xl font-heading font-black mb-3 uppercase leading-tight'>Career Connect 2026</h3>
                    <p className='text-white/90 text-lg font-medium max-w-md'>Connecting Youth to Employment and Real Industry Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{ backgroundImage: `url(${happyImage})` }}>
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <div className='mb-8'>
              <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center'>
                <Sparkles className='w-10 h-10 text-white animate-pulse' />
              </div>
            </div>
            <h2 className='text-3xl md:text-5xl font-heading font-bold mb-6'>
              Don't Miss Our <span style={{
                textShadow: '0 0 30px hsla(327, 73%, 80%, 0.8), 0 0 15px hsla(327, 73%, 80%, 0.9)'
              }}>Next Event</span>
            </h2>
            <p className='text-lg md:text-xl mb-10 text-white/95 leading-relaxed max-w-2xl mx-auto'>
              Stay connected with Career Na Mimi to be the first to know about
              upcoming events, workshops, and opportunities that could transform
              your career journey.
            </p>

            <div className='flex flex-col sm:flex-row gap-5 justify-center'>
              <Button variant='hero' size='lg' className='shadow-xl hover:shadow-2xl transition-shadow'>
                Join Our Community <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/40 text-white hover:bg-white hover:text-foreground bg-white/5 backdrop-blur-sm shadow-lg'>
                <ExternalLink className='mr-2 w-5 h-5' />
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <Footer />
    </div>
  );
};

export default Events;
