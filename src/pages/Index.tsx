import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedStatsGraph from "@/components/AnimatedStatsGraph";
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
  CheckCircle
} from "lucide-react";
import CountUp from "react-countup";

// hero images
import heroImage from "@/assets/hero-career-guidance.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import eventImage from "@/assets/career-event.jpg";
import eventImage2 from "@/assets/tailks.jpg";
import abstractBg from "@/assets/abstract-bg.jpg";

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
        "The training sessions exceeded my expectations. The instructors were knowledgeable and approachable, and the content was perfectly tailored to my needs. I now feel confident using the new tools in my daily workflow.",
      rating: 4,
    },
    {
      name: "Sarah T.",
      role: "University Graduate",
      content:
        "Attending the career talks was a game-changer for me. The speakers offered invaluable advice and shared real-world experiences that opened my eyes to new career paths. I left feeling motivated and ready to take on new challenges.",
      rating: 5,
    },
    {
      name: "Jane Musonda",
      role: "Program Manager",
      content:
        "The workshops were incredibly engaging and hands-on. I walked away with practical skills I could apply immediately in my projects. The collaborative atmosphere made learning enjoyable and effective.",
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
      title: "Trainings",
      description:
        "Gain practical knowledge you can apply immediately in your field.",
      icon: TrendingUp,
      image: teamImage,
      detailedContent: {
        overview: "Our comprehensive training programs are designed to equip youth with practical skills and knowledge that can be immediately applied in their chosen fields.",
        features: [
          "Hands-on learning experiences with real-world applications",
          "Expert instructors with industry experience",
          "Customized training modules for different skill levels",
          "Certificate of completion for all participants",
          "Post-training support and resources"
        ],
        impact: "Over 500 young people have successfully completed our training programs, with 85% reporting improved career prospects and skill confidence."
      }
    },
    {
      title: "Workshops",
      description:
        "Experience real-world problem-solving in a collaborative environment.",
      icon: Users,
      image: eventImage,
      detailedContent: {
        overview: "Our interactive workshops provide a collaborative environment where participants tackle real-world challenges and develop essential professional skills.",
        features: [
          "Interactive group activities and team projects",
          "Problem-solving exercises based on actual industry scenarios",
          "Networking opportunities with peers and professionals",
          "Skill-building in communication, leadership, and teamwork",
          "Access to mentors and industry experts"
        ],
        impact: "We've conducted over 50 workshops, creating spaces where youth learn to collaborate, innovate, and build lasting professional relationships."
      }
    },
    {
      title: "Career Talks",
      description:
        "Our career talks will inspire and guide you on your journey to success.",
      icon: Lightbulb,
      image: eventImage2,
      detailedContent: {
        overview: "Career Talks feature successful professionals sharing their journeys, insights, and practical advice to inspire and guide young people toward their career goals.",
        features: [
          "Guest speakers from diverse industries and backgrounds",
          "Interactive Q&A sessions with professionals",
          "Career pathway exploration and planning guidance",
          "Inspiration from real success stories",
          "Networking opportunities with industry leaders"
        ],
        impact: "With 25+ career talks delivered, we've connected hundreds of youth with role models and mentors who provide invaluable guidance and inspiration."
      }
    },
    {
      title: "Career Guidance Platform",
      description:
        "Discover our AI-driven career guidance tool designed to help students make informed decisions.",
      icon: Zap,
      image: abstractBg,
      link: "https://caeerhub-platform.vercel.app/",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section - Professional & Clean */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Background Layers */}
        <div className='absolute inset-0'>
          {/* Base image with subtle overlay */}
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          {/* Professional gradient overlay using primary brand color - REDUCED OPACITY */}
          <div className='absolute inset-0' style={{ background: 'linear-gradient(135deg, hsla(327, 73%, 20%, 0.6) 0%, hsla(327, 73%, 30%, 0.5) 50%, hsla(327, 73%, 25%, 0.6) 100%)' }} />

          {/* Dark overlay for better text readability - REDUCED OPACITY */}
          <div className='absolute inset-0 bg-slate-900/30' />

          {/* Subtle animated gradient accent */}
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent gradient-shift opacity-50' />
        </div>

        {/* Content */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20'>
          <div className='max-w-6xl mx-auto'>
            {/* Badge */}
            <div className='text-center cinematic-fade-in opacity-0' style={{ animationDelay: '0.2s' }}>
              <Badge className='mb-8 bg-white/10 text-white border-white/20 hover:bg-white/15 px-6 py-2 text-sm backdrop-blur-sm'>
                Empowering Youth Since 2023
              </Badge>
            </div>

            {/* Main Heading */}
            <div className='text-center cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight'>
                <span className='block text-white'>
                  Welcome to
                </span>
                <span
                  className='block mt-2 font-black'
                  style={{
                    color: 'hsl(327, 73%, 65%)',
                    textShadow: '0 0 40px hsla(327, 73%, 60%, 0.6), 0 0 20px hsla(327, 73%, 60%, 0.8), 0 4px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  Career Na Mimi
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className='text-center cinematic-fade-in opacity-0 mb-8' style={{ animationDelay: '0.6s' }}>
              <p className='text-xl md:text-2xl text-white/90 font-medium'>
                "Your Journey, Your Success"
              </p>
            </div>

            {/* Description */}
            <div className='text-center cinematic-fade-in opacity-0 mb-12' style={{ animationDelay: '0.8s' }}>
              <p className='text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed'>
                Career Na Mimi empowers youth with skills, mentorship, and opportunities
                to unlock their potential and achieve their dreams.
              </p>
            </div>

            {/* Animated Stats Graph */}
            <div className='cinematic-fade-in opacity-0 mb-12' style={{ animationDelay: '1s' }}>
              <AnimatedStatsGraph
                stats={[
                  {
                    number: '500+',
                    label: 'Youth Empowered',
                    value: 500,
                    color: 'hsl(327, 73%, 56%)' // Primary brand color
                  },
                  {
                    number: '50+',
                    label: 'Workshops Conducted',
                    value: 50,
                    color: 'hsl(327, 73%, 65%)' // Lighter variant
                  },
                  {
                    number: '25+',
                    label: 'Career Talks',
                    value: 25,
                    color: 'hsl(327, 73%, 70%)' // Even lighter
                  },
                  {
                    number: '100+',
                    label: 'Success Stories',
                    value: 100,
                    color: 'hsl(327, 73%, 48%)' // Darker variant
                  },
                ]}
              />
            </div>

            {/* CTA Button */}
            <div className='text-center cinematic-fade-in opacity-0' style={{ animationDelay: '1.2s' }}>
              <Button
                variant='hero'
                size='lg'
                asChild
                className='group relative overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-300'
              >
                <Link to='/about'>
                  <span className='relative z-10'>Discover More</span>
                  <ArrowRight className='ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[8]' />
      </section>

      {/* AI Career Guidance Section */}
      <section ref={aiSection.ref} className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent'></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className={`scroll-fade-left ${aiSection.isVisible ? 'visible' : ''}`}>
              <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
                AI-Powered Innovation
              </Badge>
              <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
                AI-Powered Career Guidance
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Designed to assist with <strong className='text-primary'>CV building</strong>,{" "}
                <strong className='text-primary'>job transitions</strong>,{" "}
                <strong className='text-primary'>career growth</strong>, and{" "}
                <strong className='text-primary'>personalized guidance</strong> to help individuals
                succeed in their professional journey.
              </p>
              <Button variant='hero' size='lg' asChild className='shadow-lg hover:shadow-primary/30 transition-all duration-300'>
                <a
                  href='https://caeerhub-platform.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  See It in Action <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </a>
              </Button>
            </div>

            <div className={`relative scroll-fade-right ${aiSection.isVisible ? 'visible' : ''}`}>
              <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50'></div>
              <div
                className='relative rounded-3xl shadow-2xl overflow-hidden border border-primary/20 modern-card'
                style={{ backgroundImage: `url(${abstractBg})` }}>
                <div className='bg-gradient-to-br from-primary/95 to-primary/80 p-10 h-80 flex items-center justify-center backdrop-blur-sm'>
                  <div className='text-center text-white'>
                    <div className='w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float'>
                      <Zap className='w-12 h-12 text-white' />
                    </div>
                    <h3 className='text-2xl font-bold mb-2'>
                      AI Career Assistant
                    </h3>
                    <p className='text-white/90 text-lg'>
                      Smart. Personalized. Effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutSection.ref} className='py-24 bg-gradient-to-br from-secondary/30 to-transparent relative'>
        <div className='absolute inset-0 opacity-5' style={{ backgroundImage: `url(${teamImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${aboutSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
              About Us
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight'>
              Empowering Dreams, One Story at a Time
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Career Na Mimi is a youth empowerment organization based in
              Tanzania, dedicated to bridging the gap between young people and
              the opportunities they need to thrive. We empower youth through
              quality education, mentorship, and skill development programs,
              preparing them for successful careers and sustainable livelihoods.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center scroll-scale ${aboutSection.isVisible ? 'visible' : ''}`}>
            <Button variant='hero' size='lg' asChild className='shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300'>
              <Link to='/about'>
                Learn More <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild className='hover:scale-105 transition-all duration-300 border-2'>
              <Link to='/contact'>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section ref={objectivesSection.ref} className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${objectivesSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
              Our Strategic Objectives
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight'>
              Building a Transformative Movement
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              We are building more than an organization—we are leading a
              transformative movement to empower youth across Africa. Each
              objective reflects our commitment to creating inclusive,
              sustainable, and innovation-driven development.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {objectives.map((objective, index) => (
              <div
                key={index}
                className={`scroll-scale ${objectivesSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card h-full border-2 border-transparent hover:border-primary/20'>
                  <CardContent className='p-8'>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${objective.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <objective.icon className='w-8 h-8 text-white' />
                    </div>

                    <h3 className='text-2xl font-heading font-bold mb-4'>
                      {objective.title}
                    </h3>
                    <p className='text-muted-foreground mb-8 leading-relaxed text-base'>
                      {objective.description}
                    </p>

                    <div className='space-y-4'>
                      <div className='flex justify-between text-sm font-medium'>
                        <span>Progress</span>
                        <span className='text-primary'>
                          {objective.raised}/{objective.goal}
                        </span>
                      </div>

                      <div className='relative w-full bg-secondary/50 rounded-full h-3 overflow-hidden'>
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${objective.color} transition-all duration-1000 relative overflow-hidden`}
                          style={{ width: `${objective.percentage}%` }}>
                          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer'></div>
                        </div>
                      </div>

                      <div className='text-right'>
                        <span className='text-2xl font-bold text-primary'>
                          {objective.percentage}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)' }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${servicesSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
              What We Do
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              Learn More What We Do And Get Involved
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className={`scroll-fade-up ${servicesSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card h-full overflow-hidden group'>
                  <div
                    className='h-56 bg-cover bg-center relative overflow-hidden'
                    style={{ backgroundImage: `url(${service.image})` }}>
                    {/* First 3 images clear and visible, 4th (AI) has overlay */}
                    {index < 3 ? (
                      <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300'></div>
                    ) : (
                      <div className='absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110'>
                        <div className='transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                          <service.icon className='w-16 h-16 text-white drop-shadow-lg' />
                        </div>
                      </div>
                    )}
                  </div>

                  <CardContent className='p-6'>
                    <h3 className='text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                      {service.description}
                    </p>

                    {service.link ? (
                      <Button variant='hero' size='sm' asChild className='w-full shadow-md hover:shadow-lg transition-all'>
                        <a
                          href={service.link}
                          target='_blank'
                          rel='noopener noreferrer'>
                          Try Now <ArrowRight className='ml-2 w-4 h-4' />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full hover:bg-primary/5'
                        onClick={() => setSelectedService(index)}>
                        Learn More
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section ref={donationSection.ref} className='py-28 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center scale-105'
          style={{ backgroundImage: `url(${eventImage})` }}>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/85'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`max-w-4xl mx-auto text-center text-white scroll-scale ${donationSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-2 text-sm font-semibold'>
              Coming Soon!!
            </Badge>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight'>
              Career Fair 2025 - Empower the Next Generation
            </h2>
            <p className='text-xl mb-12 text-white/95 leading-relaxed max-w-2xl mx-auto'>
              Support the next generation of professionals! Your contribution
              helps students access career guidance, skill-building workshops,
              and networking opportunities at Career Fair 2025.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg' className='bg-white text-primary hover:bg-white/90 shadow-xl hover:scale-105 transition-all'>
                Donate via PayPal
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white border-2 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm hover:scale-105 transition-all shadow-lg'>
                Mobile Money
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white border-2 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm hover:scale-105 transition-all shadow-lg'>
                Bank Transfer
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float' style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Team Preview */}
      <section ref={teamSection.ref} className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${teamSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
              Team Members
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              The Faces Behind the Mission
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
            {[
              { name: "Rahman Mbahe", role: "Founder", image: rahmanImg },
              {
                name: "Abdul Swammad",
                role: "Director of Operation",
                image: abdulImg,
              },
              { name: "Karen Kamene", role: "Tresure ", image: karenImg },
              {
                name: "Godfrey Gozberty",
                role: "ICT officer",
                image: godfreyImg,
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`scroll-scale ${teamSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card h-full group'>
                  <CardContent className='p-8 text-center'>
                    <div className='relative w-32 h-32 mx-auto mb-6'>
                      <div className='absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity'></div>
                      <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300'>
                        <img
                          src={member.image}
                          alt={member.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                    <h3 className='text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors'>
                      {member.name}
                    </h3>
                    <p className='text-muted-foreground font-medium'>{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${teamSection.isVisible ? 'visible' : ''}`}>
            <Button variant='hero' size='lg' asChild className='shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all'>
              <Link to='/team'>
                Meet Our Full Team <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsSection.ref} className='py-24 bg-gradient-to-br from-secondary/30 to-transparent'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${testimonialsSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
              Testimonials
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              Empowering Communities with Trust
            </h2>
          </div>

          <div className={`max-w-5xl mx-auto scroll-scale ${testimonialsSection.isVisible ? 'visible' : ''}`}>
            <div className='relative'>
              <div className='absolute -inset-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-30'></div>
              <Card className='modern-card border-2 border-primary/10 relative'>
                <CardContent className='p-10 md:p-12 text-center'>
                  <div className='flex justify-center mb-8'>
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className='w-7 h-7 text-yellow-400 fill-current mx-1 drop-shadow-md'
                        />
                      )
                    )}
                  </div>

                  <blockquote className='text-xl md:text-2xl italic mb-10 leading-relaxed text-foreground font-medium'>
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className='flex items-center justify-center space-x-5'>
                    <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-lg'>
                      <Users className='w-8 h-8 text-white' />
                    </div>
                    <div className='text-left'>
                      <h4 className='text-lg font-bold text-foreground'>
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className='text-muted-foreground font-medium'>
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center mt-10 space-x-3'>
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-primary w-8 shadow-lg"
                            : "bg-muted hover:bg-muted-foreground"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                      Get Involved <ArrowRight className='ml-2 w-5 h-5' />
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
          <div className={`text-center mb-12 scroll-fade-up ${partnersSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors'>
              Trusted Partnerships
            </Badge>
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
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
