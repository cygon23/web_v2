import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    { number: "2010K+", label: "Community Impact", icon: Star },
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

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${heroImage})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30'>
              Gallery
            </Badge>

            <h1 className='text-4xl md:text-6xl font-heading font-bold mb-6'>
              Gallery
            </h1>

            <p className='text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto'>
              Our Events & Occasions - Capturing moments that inspire, educate,
              and transform communities through innovation and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='text-center group hover:scale-105 transition-transform duration-300'>
                <div className='flex justify-center mb-4'>
                  <stat.icon className='w-8 h-8 text-primary' />
                </div>
                <h3 className='text-3xl font-heading font-bold text-foreground mb-2'>
                  {stat.number}
                </h3>
                <p className='text-muted-foreground font-medium'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Showcase */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground'>
              Our <span className='text-primary'>Events & Occasions</span>
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Discover the highlights from our impactful events that bring
              communities together through innovation and collaboration.
            </p>
          </div>

          {/* Interactive Event Showcase */}
          <div className='relative bg-gradient-card rounded-2xl p-8 shadow-elegant overflow-hidden'>
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

      {/* Category Filter and Events Grid */}
      <section className='py-20 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Category Filter */}
          <div className='flex flex-wrap gap-3 justify-center mb-12'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-background text-foreground hover:bg-primary/10 hover:shadow-card"
                }`}>
                {category.name}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredEvents.map((event, index) => (
              <Card
                key={event.id}
                className='group hover:shadow-hover transition-all duration-500 border-0 shadow-card overflow-hidden hover:scale-105'>
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
