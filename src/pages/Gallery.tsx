import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MapPin,
  Download,
  ExternalLink,
  Play,
  Calendar,
  Eye,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  Star,
  Camera,
  Image as ImageIcon,
  Aperture,
  Film,
  Video,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-career-guidance.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import eventImage from "@/assets/career-event.jpg";
import abstractBg from "@/assets/abstract-bg.jpg";

// Import images(tehama)
import teh1 from "@/assets/gallery/eventG/awards/award1.jpeg";
import teh2 from "@/assets/gallery/eventG/awards/tehama2.jpg";

// Import images(bunfu)
import bun1 from "@/assets/gallery/eventG/waziri/w01.jpg";
import bun2 from "@/assets/gallery/eventG/waziri/w2.jpg";
import bun3 from "@/assets/gallery/eventG/waziri/w3.jpg";
import bun4 from "@/assets/gallery/eventG/waziri/w4.jpg";
import bun5 from "@/assets/gallery/eventG/waziri/w5.jpg";

// Import images(afro)
import afro1 from "@/assets/gallery/eventG/afro/0.jpg";
import afro2 from "@/assets/gallery/eventG/afro/00.jpg";
import afro3 from "@/assets/gallery/eventG/afro/1.jpg";
import afro4 from "@/assets/gallery/eventG/afro/2.jpg";
import afro5 from "@/assets/gallery/eventG/afro/3.jpg";
import afro6 from "@/assets/gallery/eventG/afro/4.jpg";

// Import images(enaboissue)
import en1 from "@/assets/gallery/eventG/enaboishu/e01.jpg";
import en2 from "@/assets/gallery/eventG/enaboishu/e2.jpg";
import en3 from "@/assets/gallery/eventG/enaboishu/e3.jpg";
import en4 from "@/assets/gallery/eventG/enaboishu/e4.jpg";
import en5 from "@/assets/gallery/eventG/enaboishu/e5.jpg";
import en6 from "@/assets/gallery/eventG/enaboishu/e6.jpg";

// Import images(tarangile)
import tar1 from "@/assets/gallery/eventG/tour/01.jpg";
import tar2 from "@/assets/gallery/eventG/tour/02.jpg";
import tar3 from "@/assets/gallery/eventG/tour/03.jpg";
import tar4 from "@/assets/gallery/eventG/tour/04.jpg";
import tar5 from "@/assets/gallery/eventG/tour/05.jpg";
import tar6 from "@/assets/gallery/eventG/tour/0.jpg";

// Import images(lady's)
import lady from "@/assets/gallery/eventG/lnks/lady.jpg";
import lady1 from "@/assets/gallery/eventG/lnks/lady1.jpg";
import lady2 from "@/assets/gallery/eventG/lnks/lady2.jpg";
import lady3 from "@/assets/gallery/eventG/lnks/lady3.jpg";
import lady4 from "@/assets/gallery/eventG/lnks/lady4.jpg";
import lady5 from "@/assets/gallery/eventG/lnks/lady5.jpg";

// Import images(utalii)
import ut1 from "@/assets/gallery/eventG/utalii/u9.jpg";
import ut2 from "@/assets/gallery/eventG/utalii/anza.jpg";
import ut3 from "@/assets/gallery/eventG/utalii/u3.jpg";
import ut4 from "@/assets/gallery/eventG/utalii/u4.jpg";
import ut5 from "@/assets/gallery/eventG/utalii/u5.jpg";
import ut6 from "@/assets/gallery/eventG/utalii/u6.jpg";

// Import images(data)
import dt1 from "@/assets/gallery/eventG/data/0.jpg";
import dt2 from "@/assets/gallery/eventG/data/1.jpg";
import dt3 from "@/assets/gallery/eventG/data/2.jpg";
import dt4 from "@/assets/gallery/eventG/data/3.jpg";
import dt5 from "@/assets/gallery/eventG/data/4.jpg";

// Import images(ai)
import ai1 from "@/assets/gallery/eventG/ai/Pix_157.jpg";
import ai2 from "@/assets/gallery/eventG/ai/Pix_195.jpg";
import ai3 from "@/assets/gallery/eventG/ai/Pix_196.jpg";
import ai4 from "@/assets/gallery/eventG/ai/Pix_197.jpg";
import ai5 from "@/assets/gallery/eventG/ai/Pix_198.jpg";
import ai6 from "@/assets/gallery/eventG/ai/Pix_199.jpg";
import ai7 from "@/assets/gallery/eventG/ai/Pix_2.jpg";
import ai8 from "@/assets/gallery/eventG/ai/Pix_215.jpg";
import ai9 from "@/assets/gallery/eventG/ai/Pix_7.jpg";

import certificateNominee from "@/assets/gallery/eventG/awards/001.jpg";
import bestPoster from "@/assets/gallery/eventG/awards/IMG_1463.jpeg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Scroll animation hooks
  const statsSection = useScrollAnimation({ threshold: 0.1 });
  const showcaseSection = useScrollAnimation({ threshold: 0.1 });
  const gridSection = useScrollAnimation({ threshold: 0.1 });

  const categories = [
    { id: "all", name: "All Events" },
    { id: "awards", name: "Awards" },
    { id: "innovation", name: "Innovation" },
    { id: "digital", name: "Digital" },
    { id: "career", name: "Career" },
    { id: "outreach", name: "Outreach" },
  ];

  // Featured events with multiple images
  const featuredEvents = [
    {
      id: 1,
      title: "TEHAMA-AWARD",
      date: "21 Feb 2025",
      location: "Gran Mellia",
      category: "awards",
      description:
        "Recognition ceremony celebrating outstanding achievements in technology and innovation",
      images: [teh1, teh2],
      tags: ["Award", "Recognition", "Innovation"],
      featured: true,
      participants: 250,
      highlights: [
        "Best Innovation Award",
        "Community Impact Recognition",
        "Young Innovator Prize",
      ],
    },
    {
      id: 2,
      title: "Bunifu za Kidigitali",
      date: "12 March 2025",
      location: "IAA",
      category: "digital",
      description:
        "Digital transformation workshop focusing on modern digital solutions",
      images: [bun1, bun2, bun3, bun4, bun5],
      tags: ["Digital", "Technology", "Transformation"],
      featured: true,
      participants: 320,
      highlights: [
        "Digital Skills Training",
        "Tech Innovation",
        "Digital Literacy",
      ],
    },
    {
      id: 3,
      title: "Afro Innovation",
      date: "9 Nov 2024",
      location: "Western Well House",
      category: "innovation",
      description:
        "Celebrating African innovation and technological advancement",
      images: [afro3, afro2, afro1, afro4, afro5, afro6],
      tags: ["Innovation", "Africa", "Technology"],
      featured: true,
      participants: 300,
      highlights: [
        "African Tech Solutions",
        "Innovation Showcase",
        "Startup Pitches",
      ],
    },
    {
      id: 4,
      title: "Digital Innovation Outreach",
      date: "15 March 2025",
      location: "Enaboishu Secondary School",
      category: "outreach",
      description: "Bringing digital innovation education to secondary schools",
      images: [en1, en2, en3, en4, en5, en6],
      tags: ["Outreach", "Education", "Digital"],
      featured: true,
      participants: 220,
      highlights: ["Student Engagement", "Digital Literacy", "Future Skills"],
    },
    {
      id: 5,
      title: "Career Tour",
      date: "22 Dec 2024",
      location: "Tarangile",
      category: "career",
      description: "Exploring career opportunities and industry exposure",
      images: [tar1, tar2, tar3, tar4, tar5, tar6],
      tags: ["Career", "Exploration", "Industry"],
      participants: 85,
      highlights: [
        "Industry Visits",
        "Career Guidance",
        "Professional Networks",
      ],
    },
    {
      id: 6,
      title: "Lady's Talk",
      date: "8 Dec 2024",
      location: "Veta Hotel",
      category: "career",
      description: "Empowering women through career development and leadership",
      images: [lady, lady1, lady2, lady3, lady4, lady5],
      tags: ["Women", "Leadership", "Empowerment"],
      participants: 395,
      highlights: ["Women Leadership", "Career Development", "Networking"],
    },
    {
      id: 7,
      title: "Utalii na Mimi",
      date: "6 Dec 2024",
      location: "Anza Hub",
      category: "career",
      description: "Tourism and hospitality career exploration program",
      images: [ut1, ut2, ut3, ut4, ut5, ut6],
      tags: ["Tourism", "Hospitality", "Career"],
      participants: 70,
      highlights: ["Tourism Industry", "Hospitality Skills", "Career Paths"],
    },
    {
      id: 8,
      title: "Data Career Branch",
      date: "14 Dec 2024",
      location: "Buni Innovation Hub",
      category: "career",
      description: "Exploring opportunities in data science and analytics",
      images: [dt1, dt2, dt3, dt4, dt5],
      tags: ["Data Science", "Analytics", "Career"],
      participants: 110,
      highlights: [
        "Data Analytics",
        "Career Opportunities",
        "Technical Skills",
      ],
    },
    {
      id: 9,
      title: "TANZANIA AI FORUM 2025",
      date: "28-29 Aug 2025",
      location: "Dar es Salaam",
      category: "awards",
      description:
        "A national forum bringing together AI experts, enthusiasts, and innovators to discuss the future of artificial intelligence in Tanzania.",
      images: [ai1, ai2, ai3, ai4, ai5, ai6, ai7, ai8, ai9],
      tags: ["AI", "Forum", "Technology", "Innovation"],
      featured: true,
      participants: 500,
      highlights: [
        "Keynote Speakers",
        "AI Workshops",
        "Networking Sessions",
        "Startup Demos",
        "Jamii stack hackerthon",
      ],
    },
    {
      id: 10,
      title: "Certificate Awards",
      date: "29 Aug 2025",
      location: "Dar es Salaam",
      category: "awards",
      description:
        "Awarding ceremony for certificate nominees and best poster presentations.",
      images: [certificateNominee, bestPoster],
      tags: ["Certificate", "Poster", "Award"],
      featured: false,
      participants: 100,
      highlights: ["Certificate Nominee Tanzania", "Best Poster Presentation"],
      certificates: [
        {
          name: "Certificate Nominee Tanzania",
          file: certificateNominee,
        },
        {
          name: "Best Poster",
          file: bestPoster,
        },
      ],
    },
  ];

  const stats = [
    { number: "20+", label: "Events & Occasions", icon: Calendar },
    { number: "1200+", label: "Participants", icon: Users },
    { number: "15+", label: "Awards & Recognition", icon: Award },
    { number: "2010+", label: "Community Impact", icon: Star },
  ];

  const filteredEvents = featuredEvents.filter((event) => {
    return selectedCategory === "all" || event.category === selectedCategory;
  });

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex(
      (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            style={{ backgroundImage: `url(${heroImage})` }}>
          </div>
          {/* Gradient overlays */}
          <div className='absolute inset-0' style={{
            background: 'linear-gradient(135deg, hsla(327, 73%, 20%, 0.7) 0%, hsla(327, 73%, 30%, 0.6) 50%, hsla(327, 73%, 25%, 0.7) 100%)'
          }} />
          <div className='absolute inset-0 bg-slate-900/40' />
          {/* Animated gradient accent */}
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent gradient-shift opacity-60' />
        </div>

        {/* Scattered Decorative Particles with Gallery-themed Icons */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          {/* Top Left Area */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <Camera className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }} />
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
            <ImageIcon className='w-9 h-9 text-purple-400/70' style={{ filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.4))' }} />
          </div>
          <div className='absolute top-[48%] left-[10%] w-2.5 h-2.5 bg-blue-300/30 rounded-full blur-sm' style={{ animationDelay: '1.8s' }}></div>
          <div className='absolute top-[35%] left-[3%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]'></div>

          {/* Right Side */}
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Aperture className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>
          <div className='absolute top-[38%] right-[12%] w-2 h-2 bg-white/35 rounded-full blur-[1px]' style={{ animationDelay: '1.4s' }}></div>
          <div className='absolute top-[52%] right-[5%] animate-float opacity-35' style={{ animationDelay: '2.2s' }}>
            <Film className='w-7 h-7 text-purple-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(216, 180, 254, 0.4))' }} />
          </div>

          {/* Bottom Left Area */}
          <div className='absolute bottom-[20%] left-[12%] animate-float opacity-35' style={{ animationDelay: '1.6s' }}>
            <Video className='w-8 h-8 text-red-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(252, 165, 165, 0.4))' }} />
          </div>
          <div className='absolute bottom-[25%] left-[8%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.9s' }}></div>
          <div className='absolute bottom-[18%] left-[5%] w-3 h-3 bg-green-300/30 rounded-full blur-sm' style={{ animationDelay: '1.3s' }}></div>

          {/* Bottom Right Area */}
          <div className='absolute bottom-[22%] right-[15%] animate-float opacity-45' style={{ animationDelay: '0.7s' }}>
            <Eye className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.5))' }} />
          </div>
          <div className='absolute bottom-[15%] right-[10%] w-2.5 h-2.5 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '2.1s' }}></div>
          <div className='absolute bottom-[28%] right-[8%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]' style={{ animationDelay: '1.1s' }}></div>

          {/* Center Area with Award */}
          <div className='absolute top-[35%] right-[30%] animate-float opacity-40' style={{ animationDelay: '1.9s' }}>
            <Award className='w-8 h-8 text-amber-400/70' style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' }} />
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
                Gallery
              </Badge>
            </div>

            {/* Main Heading with staggered animation */}
            <div className='cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight'>
                Our <span className='block mt-2' style={{
                  color: 'hsl(327, 73%, 65%)',
                  textShadow: '0 0 40px hsla(327, 73%, 60%, 0.7), 0 0 20px hsla(327, 73%, 60%, 0.9), 0 4px 12px rgba(0,0,0,0.4)'
                }}>Gallery</span>
              </h1>
            </div>

            {/* Description */}
            <div className='cinematic-fade-in opacity-0 mb-10' style={{ animationDelay: '0.6s' }}>
              <p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium'>
                Our Events & Occasions - Capturing moments that inspire, educate,
                and transform communities through innovation and collaboration.
              </p>
            </div>

            {/* Decorative floating elements */}
            <div className='absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float'></div>
            <div className='absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float' style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[8]' />
      </section>

      {/* Stats Section - Circular Progress Rings */}
      <section ref={statsSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`scroll-scale ${statsSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <CircularStat
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                  maxValue={2500}
                  isVisible={statsSection.isVisible}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Showcase - Enhanced */}
      <section ref={showcaseSection.ref} className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${showcaseSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 border-primary/20 px-5 py-2' style={{ color: 'hsl(327, 73%, 56%)' }}>
              Featured Events
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground'>
              Our <span style={{ color: 'hsl(327, 73%, 56%)' }}>Events & Occasions</span>
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Discover the highlights from our impactful events that bring
              communities together through innovation and collaboration.
            </p>
          </div>

          {/* Interactive Event Showcase */}
          <div className={`relative modern-card rounded-3xl p-10 shadow-2xl overflow-hidden scroll-scale ${showcaseSection.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div className='space-y-6'>
                <div className='flex items-center space-x-2'>
                  <Badge className='bg-primary/10 text-primary border-primary/20'>
                    {featuredEvents[currentEventIndex]?.category.toUpperCase()}
                  </Badge>
                  {featuredEvents[currentEventIndex]?.featured && (
                    <Badge className='bg-accent/10 text-accent border-accent/20'>
                      ⭐ Featured
                    </Badge>
                  )}
                </div>

                <h3 className='text-2xl md:text-3xl font-heading font-bold text-foreground'>
                  {featuredEvents[currentEventIndex]?.title}
                </h3>

                <div className='flex items-center space-x-4 text-muted-foreground'>
                  <div className='flex items-center'>
                    <Calendar className='w-4 h-4 mr-2' />
                    {featuredEvents[currentEventIndex]?.date}
                  </div>
                  <div className='flex items-center'>
                    <MapPin className='w-4 h-4 mr-2' />
                    {featuredEvents[currentEventIndex]?.location}
                  </div>
                </div>

                <p className='text-muted-foreground leading-relaxed'>
                  {featuredEvents[currentEventIndex]?.description}
                </p>

                {featuredEvents[currentEventIndex]?.participants && (
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <Users className='w-4 h-4 mr-2' />
                    {featuredEvents[currentEventIndex]?.participants}{" "}
                    Participants
                  </div>
                )}

                {featuredEvents[currentEventIndex]?.highlights && (
                  <div className='space-y-2'>
                    <h4 className='font-semibold text-foreground'>
                      Event Highlights:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {featuredEvents[currentEventIndex]?.highlights.map(
                        (highlight, index) => (
                          <Badge
                            key={index}
                            variant='outline'
                            className='text-xs'>
                            {highlight}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div className='flex space-x-4'>
                  <Button
                    onClick={() =>
                      setSelectedImage({
                        ...featuredEvents[currentEventIndex],
                        images: featuredEvents[currentEventIndex]?.images,
                      })
                    }>
                    <Eye className='w-4 h-4 mr-2' />
                    View Gallery
                  </Button>
                  <Button variant='outline'>
                    <Share2 className='w-4 h-4 mr-2' />
                    Share Event
                  </Button>
                </div>
              </div>

              <div className='relative'>
                <div className='grid grid-cols-2 gap-4'>
                  {featuredEvents[currentEventIndex]?.images
                    .slice(0, 4)
                    .map((image, index) => (
                      <div
                        key={index}
                        className='aspect-square bg-cover bg-center rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden'
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={() =>
                          setSelectedImage({
                            ...featuredEvents[currentEventIndex],
                            currentImageIndex: index,
                          })
                        }>
                        <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors'></div>
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                          <Eye className='w-6 h-6 text-white' />
                        </div>
                      </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className='absolute top-1/2 -translate-y-1/2 -left-4'>
                  <Button
                    size='icon'
                    variant='secondary'
                    className='rounded-full shadow-elegant'
                    onClick={prevEvent}>
                    <ChevronLeft className='w-4 h-4' />
                  </Button>
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 -right-4'>
                  <Button
                    size='icon'
                    variant='secondary'
                    className='rounded-full shadow-elegant'
                    onClick={nextEvent}>
                    <ChevronRight className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Event Navigation Dots */}
            <div className='flex justify-center space-x-2 mt-8'>
              {featuredEvents.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentEventIndex === index
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentEventIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter and Events Grid - Enhanced */}
      <section ref={gridSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          {/* Category Filter */}
          <div className={`flex flex-wrap gap-4 justify-center mb-16 scroll-fade-up ${gridSection.isVisible ? 'visible' : ''}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md ${
                  selectedCategory === category.id
                    ? "text-white shadow-xl"
                    : "bg-background text-foreground hover:shadow-lg"
                }`}
                style={selectedCategory === category.id ? {
                  background: 'linear-gradient(135deg, hsl(327, 73%, 56%) 0%, hsl(327, 73%, 70%) 100%)'
                } : {}}>
                {category.name}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`scroll-scale ${gridSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card group hover:shadow-2xl transition-all duration-500 border-0 shadow-card overflow-hidden h-full'>
                <div
                  className='h-48 bg-cover bg-center relative cursor-pointer'
                  style={{ backgroundImage: `url(${event.images[0]})` }}
                  onClick={() => setSelectedImage(event)}>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300'></div>

                  <div className='absolute top-4 left-4'>
                    <Badge className='bg-white/90 text-foreground font-medium'>
                      {event.category.charAt(0).toUpperCase() +
                        event.category.slice(1)}
                    </Badge>
                  </div>

                  <div className='absolute bottom-4 left-4 right-4 text-white'>
                    <h3 className='font-heading font-bold text-lg mb-1 group-hover:text-primary-light transition-colors'>
                      {event.title}
                    </h3>
                    <div className='flex items-center text-sm opacity-90'>
                      <Calendar className='w-4 h-4 mr-1' />
                      {event.date}
                      <span className='mx-2'>|</span>
                      <MapPin className='w-4 h-4 mr-1' />
                      {event.location}
                    </div>
                  </div>

                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='bg-white/20 backdrop-blur-sm rounded-full p-3'>
                      <Eye className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </div>

                <CardContent className='p-6'>
                  <p className='text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2'>
                    {event.description}
                  </p>

                  {event.participants && (
                    <div className='flex items-center text-sm text-muted-foreground mb-4'>
                      <Users className='w-4 h-4 mr-2 text-primary' />
                      {event.participants} Participants
                    </div>
                  )}

                  <div className='flex flex-wrap gap-1 mb-4'>
                    {event.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant='secondary'
                        className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex items-center justify-between'>
                    <Button
                      size='sm'
                      variant='outline'
                      onClick={() => setSelectedImage(event)}
                      className='hover:bg-primary hover:text-primary-foreground'>
                      <Eye className='w-4 h-4 mr-2' />
                      View Details
                    </Button>
                    <div className='flex space-x-1'>
                      <Button
                        size='icon'
                        variant='ghost'
                        className='w-8 h-8 hover:text-primary'>
                        <Heart className='w-4 h-4' />
                      </Button>
                      <Button
                        size='icon'
                        variant='ghost'
                        className='w-8 h-8 hover:text-primary'>
                        <Share2 className='w-4 h-4' />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className='text-center py-16'>
              <p className='text-muted-foreground text-lg'>
                No events found in this category.
              </p>
              <Button
                variant='outline'
                className='mt-4'
                onClick={() => setSelectedCategory("all")}>
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}>
          <div
            className='max-w-6xl w-full max-h-full overflow-auto bg-background rounded-xl shadow-elegant'
            onClick={(e) => e.stopPropagation()}>
            <div className='p-6'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h3 className='text-3xl font-heading font-bold text-foreground'>
                    {selectedImage.title}
                  </h3>
                  <div className='flex items-center space-x-4 text-muted-foreground mt-2'>
                    <div className='flex items-center'>
                      <Calendar className='w-4 h-4 mr-2' />
                      {selectedImage.date}
                    </div>
                    <div className='flex items-center'>
                      <MapPin className='w-4 h-4 mr-2' />
                      {selectedImage.location}
                    </div>
                    {selectedImage.participants && (
                      <div className='flex items-center'>
                        <Users className='w-4 h-4 mr-2' />
                        {selectedImage.participants} Participants
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}>
                  ×
                </Button>
              </div>

              {/* Image Gallery Grid */}
              <div className='mb-6'>
                {selectedImage.images ? (
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {selectedImage.images.map(
                      (image: string, index: number) => (
                        <div
                          key={index}
                          className='relative aspect-square bg-cover bg-center rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden'
                          style={{ backgroundImage: `url(${image})` }}
                          onClick={(e) => e.stopPropagation()}>
                          <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors'></div>
                          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-full p-2'>
                              <Eye className='w-5 h-5 text-white' />
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className='w-full h-auto rounded-xl shadow-elegant'
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>

              <div className='space-y-4 mb-6'>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                  {selectedImage.description}
                </p>

                {selectedImage.highlights && (
                  <div>
                    <h4 className='font-heading font-semibold text-foreground mb-3'>
                      Event Highlights:
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      {selectedImage.highlights.map(
                        (highlight: string, index: number) => (
                          <div key={index} className='flex items-center'>
                            <Star className='w-4 h-4 text-primary mr-2' />
                            <span className='text-sm text-muted-foreground'>
                              {highlight}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {selectedImage.tags?.map((tag: string, index: number) => (
                  <Badge key={index} variant='secondary' className='text-sm'>
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className='flex flex-wrap gap-4'>
                <Button className='bg-primary hover:bg-primary/90'>
                  <Download className='w-4 h-4 mr-2' />
                  Download Gallery
                </Button>
                <Button variant='outline'>
                  <Share2 className='w-4 h-4 mr-2' />
                  Share Event
                </Button>
                <Button variant='outline'>
                  <ExternalLink className='w-4 h-4 mr-2' />
                  Event Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
