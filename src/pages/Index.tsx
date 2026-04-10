import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
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

            {/* Right Column: Creative Achievement Grid */}
            <div className={`grid grid-cols-2 gap-4 md:gap-6 scroll-fade-right ${aboutSection.isVisible ? 'visible' : ''}`}>
              {[
                {
                  number: 500,
                  suffix: "+",
                  label: "Youth Empowered",
                  icon: Users,
                  color: "bg-blue-500",
                  delay: 0.1
                },
                {
                  number: 50,
                  suffix: "+",
                  label: "Workshops",
                  icon: BookOpen,
                  color: "bg-primary",
                  delay: 0.2
                },
                {
                  number: 25,
                  suffix: "+",
                  label: "Career Talks",
                  icon: Sparkles,
                  color: "bg-amber-500",
                  delay: 0.3
                },
                {
                  number: 100,
                  suffix: "+",
                  label: "Success Stories",
                  icon: Award,
                  color: "bg-emerald-500",
                  delay: 0.4
                }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  viewport={{ once: true }}
                  className='group relative'
                >
                  <div className='absolute inset-0 bg-white rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-500 -rotate-2 group-hover:rotate-0' />
                  <Card className='relative h-full border-none shadow-none bg-white rounded-[2rem] overflow-hidden p-6 md:p-8 flex flex-col items-center text-center group-hover:-translate-y-2 transition-transform duration-500'>
                    <div className={cn(
                      "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-500",
                      stat.color
                    )}>
                      <stat.icon className='w-6 h-6 md:w-8 md:h-8' />
                    </div>

                    <div className='space-y-1'>
                      <h3 className='text-3xl md:text-4xl font-black text-slate-900'>
                        <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                        <span className='text-primary'>{stat.suffix}</span>
                      </h3>
                      <p className='text-sm md:text-base font-bold text-slate-500 tracking-tight leading-tight uppercase'>
                        {stat.label}
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className='absolute top-2 right-2 w-16 h-16 bg-slate-50 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700' />
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section ref={objectivesSection.ref} className='py-32 relative overflow-hidden bg-white'>
        <div className='absolute inset-0 opacity-[0.03] pointer-events-none' style={{ backgroundImage: 'radial-gradient(#0056b3 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={cn(
            "text-center mb-20 scroll-fade-up",
            objectivesSection.isVisible && "visible"
          )}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2 rounded-full uppercase tracking-widest text-[10px] font-black'>
              Institutional Protocol
            </Badge>
            <h2 className='text-4xl md:text-6xl font-heading font-black mb-6 leading-[1.1] tracking-tight text-slate-900'>
              Building a <br /> Transformative Movement
            </h2>
            <p className='text-lg md:text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium'>
              We are leading a movement to empower youth across Africa. Each objective reflects our commitment to creating inclusive, sustainable, and innovation-driven development.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='group'
              >
                <Card className='relative h-full overflow-hidden border border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 rounded-[2.5rem] group-hover:-translate-y-3'>
                  {/* Card Background Decoration */}
                  <div className={cn(
                    "absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-10",
                    objective.color.split(' ')[0]
                  )} />
                  
                  <CardContent className='p-10 flex flex-col h-full'>
                    <div className='mb-8 relative'>
                      <div className={cn(
                        "w-20 h-20 rounded-[1.75rem] flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-700 group-hover:rotate-6",
                        "bg-gradient-to-br", objective.color
                      )}>
                        {/* Glassmorphic nested container */}
                        <div className='absolute inset-1 rounded-[1.5rem] bg-white/10 backdrop-blur-sm border border-white/20' />
                        <objective.icon className='w-10 h-10 text-white relative z-10 drop-shadow-lg' />
                      </div>
                      
                      {/* Pulse effect */}
                      <div className={cn(
                        "absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-1000 bg-gradient-to-br",
                        objective.color
                      )} />
                    </div>

                    <h3 className='text-2xl md:text-3xl font-black mb-4 tracking-tight text-slate-900'>
                      {objective.title}
                    </h3>
                    <p className='text-slate-500 mb-10 leading-relaxed font-medium text-lg flex-grow'>
                      {objective.description}
                    </p>

                    <div className='mt-auto space-y-6'>
                      <div className='flex justify-between items-end'>
                        <div className='space-y-1'>
                          <p className='text-[10px] font-black uppercase tracking-[0.2em] text-slate-400'>Implementation Protocol</p>
                          <p className='text-xl font-black text-slate-900 tracking-tight'>
                            {objective.raised.toLocaleString()} <span className='text-slate-300 mx-1'>/</span> {objective.goal.toLocaleString()}
                          </p>
                        </div>
                        <div className='text-right'>
                          <span className={cn(
                            "text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br",
                            objective.color
                          )}>
                            {objective.percentage}%
                          </span>
                        </div>
                      </div>

                      <div className='relative w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-50'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${objective.percentage}%` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full transition-all relative overflow-hidden bg-gradient-to-r",
                            objective.color
                          )}>
                          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer scale-x-150'></div>
                        </motion.div>
                      </div>
                      
                      <div className='pt-2 flex items-center gap-3'>
                         <div className={cn("w-2 h-2 rounded-full animate-pulse", objective.color.split(' ')[0])} />
                         <span className='text-[10px] font-black uppercase tracking-widest text-slate-400'>Active Strategy in Progress</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                          Try Now
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




      {/* Event Spotlight Section */}
      <section ref={donationSection.ref} className='py-32 relative overflow-hidden group'>
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110'
          style={{ backgroundImage: `url(${eventImage})` }}>
          <div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-primary/20'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={cn(
            "max-w-5xl mx-auto text-center text-white scroll-scale",
            donationSection.isVisible && "visible"
          )}>
            <Badge className='mb-10 bg-white/10 text-white border-white/20 backdrop-blur-md px-8 py-3 text-xs font-black uppercase tracking-[0.3em] rounded-full'>
              Exclusive Industry Protocol
            </Badge>
            
            <h2 className='text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-10 leading-[1.05] tracking-tighter'>
              CAREER CONNECT <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white opacity-90'>
                THE INDUSTRY EXPERIENCE TABLE WORKSHOP
              </span>
            </h2>
            
            <p className='text-lg md:text-xl mb-16 text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium'>
              Join elite industry leaders for a transformative high-table workshop. Master the metrics of professional success and bridge the gap between education and high-impact industry experience.
            </p>

            <div className='flex justify-center'>
              <Button 
                variant='hero' 
                size='lg' 
                asChild
                className='h-20 lg:h-24 px-16 text-xl lg:text-2xl rounded-full shadow-[0_20px_50px_rgba(0,102,255,0.3)] hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95 group/btn'
              >
                <a href='https://app.careernamimii.org/events' target='_blank' rel='noopener noreferrer'>
                  <Ticket className='w-8 h-8 mr-4 group-hover/btn:rotate-12 transition-transform' />
                  Secure Your Seating
                </a>
              </Button>
            </div>

            {/* Event Meta Info */}
            <div className='mt-16 flex flex-wrap justify-center gap-12 opacity-80'>
              <div className='flex items-center gap-4 group'>
                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors'>
                  <Calendar className='w-5 h-5 text-white' />
                </div>
                <div className='text-left'>
                  <p className='text-[10px] font-black uppercase tracking-widest text-slate-400'>Event Date</p>
                  <span className='text-sm font-black text-white'>May 02, 2026</span>
                </div>
              </div>
              <div className='flex items-center gap-4 group'>
                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors'>
                  <MapPin className='w-5 h-5 text-white' />
                </div>
                <div className='text-left max-w-[300px]'>
                  <p className='text-[10px] font-black uppercase tracking-widest text-slate-400'>Institutional Venue</p>
                  <span className='text-sm font-black text-white leading-tight'>CRDB Headquarters, Upanga, Dar es Salaam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Decorative Orbs */}
        <div className='absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none'></div>
        <div className='absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none'></div>
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
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
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
