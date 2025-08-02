import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    <Card className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card overflow-hidden mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-0'>
        {/* Date Section */}
        <div className='lg:col-span-2 bg-gradient-primary text-white p-6 flex flex-col justify-center items-center text-center'>
          <div className='border-b border-white/20 pb-3 mb-3 w-full'>
            <h3 className='text-lg font-bold'>{event.date}</h3>
            <p className='text-white/80 text-sm'>{event.time}</p>
          </div>
          <Calendar className='w-8 h-8 text-white/60' />
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
            className='h-64 lg:h-full bg-cover bg-center cursor-pointer group relative overflow-hidden'
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => setSelectedImage(event.image)}>
            <div className='absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/40 transition-all duration-300'></div>
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='bg-white/90 rounded-full p-3'>
                <ZoomIn className='w-6 h-6 text-primary' />
              </div>
            </div>
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

      {/* Hero Section */}
      <section className='relative pt-20 lg:pt-24 pb-20 overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${eventsHero})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30'>
              Events & Impact
            </Badge>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight'>
              Our <span className='text-black'>Events</span>
            </h1>

            <p className='text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Discover the transformative events, workshops, and initiatives
              that are shaping the future of youth. From career fairs to
              innovation competitions, we're creating opportunities that matter.
            </p>

            {/* Breadcrumb */}
            <nav className='flex justify-center items-center space-x-2 text-white/70'>
              <span>Home</span>
              <ArrowRight className='w-4 h-4' />
              <span>Pages</span>
              <ArrowRight className='w-4 h-4' />
              <span className='text-primary-light'>Events</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className='py-12 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-center mb-8'>
            <div className='bg-white rounded-full p-1 shadow-card'>
              <Button
                variant={activeTab === "upcoming" ? "hero" : "ghost"}
                size='lg'
                onClick={() => setActiveTab("upcoming")}
                className='rounded-full px-8'>
                Upcoming Events
              </Button>
              <Button
                variant={activeTab === "past" ? "hero" : "ghost"}
                size='lg'
                onClick={() => setActiveTab("past")}
                className='rounded-full px-8'>
                Past Events
              </Button>
            </div>
          </div>

          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>
              {activeTab === "upcoming" ? "Upcoming" : "Past"}{" "}
              <span className='text-primary'>Events</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {activeTab === "upcoming" ? (
            <div>
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} isUpcoming={true} />
                ))
              ) : (
                <Card className='border-0 shadow-elegant'>
                  <CardContent className='p-12 text-center'>
                    <div className='w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center'>
                      <Sparkles className='w-10 h-10 text-primary-foreground animate-pulse' />
                    </div>
                    <h3 className='text-2xl font-heading font-bold mb-4'>
                      Exciting Events Coming Soon!
                    </h3>
                    <p className='text-muted-foreground max-w-md mx-auto'>
                      We're working on amazing new events that will inspire and
                      empower our community. Stay tuned for updates!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div>
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Impact Statistics */}
      <section className='py-20 bg-gradient-card'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Our Impact
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Measuring Our Success Through Real Impact
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Every event we organize creates ripple effects that transform
              lives, build careers, and strengthen communities across Tanzania.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card text-center'>
                <CardContent className='p-6'>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-3xl font-heading font-bold text-foreground mb-2'>
                    {stat.number}
                  </h3>
                  <h4 className='text-lg font-semibold mb-3'>{stat.title}</h4>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Highlights */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
                What's Next
              </Badge>
              <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
                CareerFair 2025: The Future Starts Here
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Get ready for our most ambitious event yet! CareerFair 2025 will
                bring together Tanzania's brightest minds, leading employers,
                and innovative startups under one roof. This is where careers
                are launched and dreams become reality.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Users className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-muted-foreground'>
                    1000+ Expected Participants
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Briefcase className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-muted-foreground'>
                    50+ Leading Employers
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                    <BookOpen className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-muted-foreground'>
                    20+ Workshop Sessions
                  </span>
                </div>
              </div>

              <Button variant='hero' size='lg'>
                Stay Updated <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
            </div>

            <div className='relative'>
              <div
                className='rounded-2xl shadow-elegant overflow-hidden h-96'
                style={{ backgroundImage: `url(${careerFairImage})` }}>
                <div className='absolute inset-0 bg-gradient-primary/80 flex items-center justify-center'>
                  <div className='text-center text-white'>
                    <Star className='w-16 h-16 mx-auto mb-4 animate-pulse' />
                    <h3 className='text-2xl font-bold mb-2'>CareerFair 2025</h3>
                    <p className='text-white/80'>Your Gateway to Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${eventsHero})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Don't Miss Our Next Event
            </h2>
            <p className='text-lg mb-8 text-white/90 leading-relaxed'>
              Stay connected with Career Na Mimi to be the first to know about
              upcoming events, workshops, and opportunities that could transform
              your career journey.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg'>
                Join Our Community <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-white hover:bg-white hover:text-foreground'>
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
