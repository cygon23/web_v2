import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
} from "lucide-react";

// Import images
import eventsHero from "@/assets/hero-career-guidance.jpg";
import utaliiImage from "@/assets/events/tourism.jpg";
import ladiesTalkImage from "@/assets/events/abstract-bg.jpg";
import innovationImage from "@/assets/events/innovation.jpg";
import careerFairImage from "@/assets/hero-career-guidance.jpg";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll animation hooks
  const eventsSection = useScrollAnimation({ threshold: 0.1 });
  const impactSection = useScrollAnimation({ threshold: 0.1 });
  const highlightsSection = useScrollAnimation({ threshold: 0.1 });

  const upcomingEvents = [
    {
      id: "career-fair-2025",
      date: "2025",
      time: "Wed 11:30",
      title: "CareerFair 2025 - Your Gateway to Success",
      description:
        "Are you ready to take the next big step in your career? CareerFair 2025 is the ultimate event, designed to connect ambitious individuals with leading employers, industry experts, and life-changing opportunities!",
      image: careerFairImage,
      status: "coming-soon",
      category: "Career Development",
      location: "Arusha, Tanzania",
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
    {
      icon: Users,
      number: "2,010+",
      title: "Youth Empowered",
      description:
        "Directly impacted youth through empowerment programs and outreach across Tanzania.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Briefcase,
      number: "50+",
      title: "Jobs & Internships",
      description:
        "Connected youth with employment and internship opportunities through our platform and partners.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Laptop,
      number: "2,010+",
      title: "Skills Training",
      description:
        "Delivered training in digital, business, and leadership skills to youth across the region.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: UserCheck,
      number: "1005+",
      title: "Women & Marginalized Youth",
      description:
        "Empowered women and underrepresented youth through mentorship and targeted programs.",
      color: "from-pink-500 to-pink-600",
    },
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
          <div className='mb-4'>
            <Badge className='mb-3 bg-primary/10 text-primary border-primary/20'>
              {event.category}
            </Badge>
            {event.achievement && (
              <Badge className='ml-2 bg-yellow-100 text-yellow-800 border-yellow-200'>
                <Award className='w-3 h-3 mr-1' />
                {event.achievement}
              </Badge>
            )}
          </div>

          <h3 className='text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors'>
            {event.title}
          </h3>

          <p className='text-muted-foreground mb-4 leading-relaxed line-clamp-3'>
            {event.description}
          </p>

          <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4'>
            {event.location && (
              <div className='flex items-center'>
                <MapPin className='w-4 h-4 mr-1' />
                {event.location}
              </div>
            )}
            {event.attendees && (
              <div className='flex items-center'>
                <Users className='w-4 h-4 mr-1' />
                {event.attendees} Attendees
              </div>
            )}
          </div>

          {isUpcoming ? (
            <Button variant='hero' size='sm' disabled>
              Coming Soon
            </Button>
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

      {/* Hero Section - Enhanced */}
      <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden'>
        {/* Background with parallax effect */}
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105'
            style={{ backgroundImage: `url(${eventsHero})` }}>
          </div>
          {/* Gradient overlays */}
          <div className='absolute inset-0' style={{
            background: 'linear-gradient(135deg, hsla(327, 73%, 20%, 0.7) 0%, hsla(327, 73%, 30%, 0.6) 50%, hsla(327, 73%, 25%, 0.7) 100%)'
          }} />
          <div className='absolute inset-0 bg-slate-900/40' />
          {/* Animated gradient accent */}
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent gradient-shift opacity-60' />
        </div>

        {/* Scattered Decorative Particles with Event-themed Icons */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          {/* Top Left Area */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <Calendar className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }} />
          </div>
          <div className='absolute top-[12%] left-[15%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.5s' }}></div>
          <div className='absolute top-[20%] left-[12%] w-3 h-3 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '1s' }}></div>

          {/* Top Right Area */}
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <Sparkles className='w-10 h-10 text-yellow-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(253, 224, 71, 0.5))' }} />
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
            <Ticket className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>
          <div className='absolute top-[38%] right-[12%] w-2 h-2 bg-white/35 rounded-full blur-[1px]' style={{ animationDelay: '1.4s' }}></div>
          <div className='absolute top-[52%] right-[5%] animate-float opacity-35' style={{ animationDelay: '2.2s' }}>
            <Clock className='w-7 h-7 text-purple-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(216, 180, 254, 0.4))' }} />
          </div>

          {/* Bottom Left Area */}
          <div className='absolute bottom-[20%] left-[12%] animate-float opacity-35' style={{ animationDelay: '1.6s' }}>
            <MapPin className='w-8 h-8 text-red-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(252, 165, 165, 0.4))' }} />
          </div>
          <div className='absolute bottom-[25%] left-[8%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.9s' }}></div>
          <div className='absolute bottom-[18%] left-[5%] w-3 h-3 bg-green-300/30 rounded-full blur-sm' style={{ animationDelay: '1.3s' }}></div>

          {/* Bottom Right Area */}
          <div className='absolute bottom-[22%] right-[15%] animate-float opacity-45' style={{ animationDelay: '0.7s' }}>
            <Users className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.5))' }} />
          </div>
          <div className='absolute bottom-[15%] right-[10%] w-2.5 h-2.5 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '2.1s' }}></div>
          <div className='absolute bottom-[28%] right-[8%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]' style={{ animationDelay: '1.1s' }}></div>

          {/* Center Area with Target */}
          <div className='absolute top-[35%] right-[30%] animate-float opacity-40' style={{ animationDelay: '1.9s' }}>
            <Target className='w-8 h-8 text-cyan-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(103, 232, 249, 0.4))' }} />
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
            {/* Animated Badge */}
            <div className='cinematic-fade-in opacity-0' style={{ animationDelay: '0.2s' }}>
              <Badge className='mb-8 bg-white/15 text-white border-white/30 hover:bg-white/25 backdrop-blur-md px-6 py-2.5 text-base font-semibold shadow-lg'>
                Events & Impact
              </Badge>
            </div>

            {/* Main Heading with staggered animation */}
            <div className='cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight'>
                Our <span className='block mt-2' style={{
                  color: 'hsl(327, 73%, 65%)',
                  textShadow: '0 0 40px hsla(327, 73%, 60%, 0.7), 0 0 20px hsla(327, 73%, 60%, 0.9), 0 4px 12px rgba(0,0,0,0.4)'
                }}>Events</span>
              </h1>
            </div>

            {/* Description */}
            <div className='cinematic-fade-in opacity-0 mb-10' style={{ animationDelay: '0.6s' }}>
              <p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium'>
                Discover the transformative events, workshops, and initiatives
                that are shaping the future of youth. From career fairs to
                innovation competitions, we're creating opportunities that matter.
              </p>
            </div>

            {/* Breadcrumb */}
            <div className='cinematic-fade-in opacity-0' style={{ animationDelay: '0.8s' }}>
              <nav className='flex justify-center items-center space-x-2 text-white/80 font-medium'>
                <span className='hover:text-white transition-colors'>Home</span>
                <ArrowRight className='w-4 h-4' />
                <span>Pages</span>
                <ArrowRight className='w-4 h-4' />
                <span className='text-white'>Events</span>
              </nav>
            </div>

            {/* Decorative floating elements */}
            <div className='absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float'></div>
            <div className='absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float' style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[8]' />
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

      {/* Impact Statistics - Enhanced */}
      <section ref={impactSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${impactSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 border-primary/20 px-5 py-2' style={{ color: 'hsl(327, 73%, 56%)' }}>
              Our Impact
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Measuring Our Success Through <span style={{ color: 'hsl(327, 73%, 56%)' }}>Real Impact</span>
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Every event we organize creates ripple effects that transform
              lives, build careers, and strengthen communities across Tanzania.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`scroll-scale ${impactSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card group hover:shadow-2xl transition-all duration-500 border-0 shadow-card text-center h-full'>
                  <CardContent className='p-8'>
                    <div
                      className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <stat.icon className='w-10 h-10 text-white' />
                    </div>
                    <h3 className='text-4xl font-heading font-bold mb-2' style={{ color: 'hsl(327, 73%, 56%)' }}>
                      {stat.number}
                    </h3>
                    <h4 className='text-lg font-semibold mb-4'>{stat.title}</h4>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Highlights - Enhanced */}
      <section ref={highlightsSection.ref} className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className={`scroll-fade-left ${highlightsSection.isVisible ? 'visible' : ''}`}>
              <Badge className='mb-6 bg-primary/10 border-primary/20 px-5 py-2' style={{ color: 'hsl(327, 73%, 56%)' }}>
                What's Next
              </Badge>
              <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
                CareerFair 2025: <span style={{ color: 'hsl(327, 73%, 56%)' }}>The Future Starts Here</span>
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Get ready for our most ambitious event yet! CareerFair 2025 will
                bring together Tanzania's brightest minds, leading employers,
                and innovative startups under one roof. This is where careers
                are launched and dreams become reality.
              </p>

              <div className='space-y-5 mb-10'>
                <div className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300' style={{
                    background: 'linear-gradient(135deg, hsl(327, 73%, 56%) 0%, hsl(327, 73%, 70%) 100%)'
                  }}>
                    <Users className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-muted-foreground font-medium'>
                    1000+ Expected Participants
                  </span>
                </div>
                <div className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300' style={{
                    background: 'linear-gradient(135deg, hsl(327, 73%, 56%) 0%, hsl(327, 73%, 70%) 100%)'
                  }}>
                    <Briefcase className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-muted-foreground font-medium'>
                    50+ Leading Employers
                  </span>
                </div>
                <div className='flex items-center space-x-4 group'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300' style={{
                    background: 'linear-gradient(135deg, hsl(327, 73%, 56%) 0%, hsl(327, 73%, 70%) 100%)'
                  }}>
                    <BookOpen className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-muted-foreground font-medium'>
                    20+ Workshop Sessions
                  </span>
                </div>
              </div>

              <Button variant='hero' size='lg' className='shadow-lg hover:shadow-xl transition-shadow'>
                Stay Updated <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </div>

            <div className={`relative scroll-fade-right ${highlightsSection.isVisible ? 'visible' : ''}`}>
              <div
                className='rounded-3xl shadow-2xl overflow-hidden h-[500px] bg-cover bg-center relative group'
                style={{ backgroundImage: `url(${careerFairImage})` }}>
                <div className='absolute inset-0 transition-all duration-500' style={{
                  background: 'linear-gradient(135deg, hsla(327, 73%, 40%, 0.85) 0%, hsla(327, 73%, 60%, 0.85) 100%)'
                }}></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center text-white px-6'>
                    <div className='w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center'>
                      <Star className='w-14 h-14 text-white animate-pulse' />
                    </div>
                    <h3 className='text-3xl font-heading font-bold mb-3'>CareerFair 2025</h3>
                    <p className='text-white/90 text-lg font-medium'>Your Gateway to Success</p>
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
            style={{ backgroundImage: `url(${eventsHero})` }}>
          </div>
          <div className='absolute inset-0' style={{
            background: 'linear-gradient(135deg, hsla(327, 73%, 25%, 0.9) 0%, hsla(327, 73%, 35%, 0.85) 50%, hsla(327, 73%, 30%, 0.9) 100%)'
          }}></div>
          <div className='absolute inset-0 bg-slate-900/30'></div>
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
