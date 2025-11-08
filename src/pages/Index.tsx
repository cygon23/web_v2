import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";
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
  Zap
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
  const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

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
    },
    {
      title: "Workshops",
      description:
        "Experience real-world problem-solving in a collaborative environment.",
      icon: Users,
      image: eventImage,
    },
    {
      title: "Career Talks",
      description:
        "Our career talks will inspire and guide you on your journey to success.",
      icon: Lightbulb,
      image: eventImage2,
    },
    {
      title: "Career Guidance AI",
      description:
        "Discover our AI-driven career guidance tool designed to help students make informed decisions.",
      icon: Zap,
      image: abstractBg,
      link: "https://careerguidance.careernamimi.org/",
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

      {/* Hero Section */}
      <section className='relative pt-20 lg:pt-24 pb-20 overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${heroImage})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        {/* Particle Network with 3D Depth */}
        <div className='absolute inset-0 z-[5]'>
          <ParticleNetwork
            particleCount={80}
            connectionDistance={150}
            particleColor='rgba(255, 255, 255, 0.8)'
            lineColor='rgba(255, 255, 255, 0.3)'
            particleSpeed={0.3}
          />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30'>
              Empowering Youth Since 2023
            </Badge>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight'>
              Welcome to <span className='text-black'>Career Na Mimi</span>{" "}
              Organization
            </h1>

            <p className='text-xl md:text-2xl mb-4 text-white/90 font-medium'>
              "Your Journey, Your Success"
            </p>

            <p className='text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed'>
              Career Na Mimi empowers youth with skills, mentorship, and
              opportunities to unlock their potential and achieve their dreams.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button variant='hero' size='xl' asChild>
                <Link to='/about'>
                  Learn More <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
              </Button>

              <Button
                variant='outline'
                size='xl'
                onClick={() => setIsVideoOpen(true)}
                className='border-white/30 text-black hover:bg-white hover:text-foreground'>
                <Play className='mr-2 w-5 h-5' />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className='absolute top-1/4 left-4 w-20 h-20 bg-primary/20 rounded-full animate-float'></div>
        <div className='absolute bottom-1/4 right-8 w-16 h-16 bg-accent/20 rounded-full animate-float delay-1000'></div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <stat.icon className='w-8 h-8 text-primary-foreground' />
                </div>
                <CountUp
                  end={parseInt(stat.number)}
                  duration={2.5}
                  suffix='+'
                  className='text-3xl font-heading font-bold text-foreground mb-2'
                />

                <p className='text-muted-foreground font-medium'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Career Guidance Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
                AI-Powered Innovation
              </Badge>
              <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
                AI-Powered Career Guidance
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Designed to assist with <strong>CV building</strong>,{" "}
                <strong>job transitions</strong>,<strong> career growth</strong>
                , and <strong>personalized guidance</strong> to help individuals
                succeed in their professional journey.
              </p>
              <Button variant='hero' size='lg' asChild>
                <a
                  href='https://caeerhub-platform.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  See It in Action <ArrowRight className='ml-2 w-5 h-5' />
                </a>
              </Button>
            </div>

            <div className='relative'>
              <div
                className='rounded-2xl shadow-elegant overflow-hidden'
                style={{ backgroundImage: `url(${abstractBg})` }}>
                <div className='bg-gradient-primary/90 p-8 h-64 flex items-center justify-center'>
                  <div className='text-center text-white'>
                    <Zap className='w-16 h-16 mx-auto mb-4 animate-float' />
                    <h3 className='text-xl font-semibold'>
                      AI Career Assistant
                    </h3>
                    <p className='text-white/80'>
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
      <section className='py-20 bg-gradient-card'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              About Us
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Empowering Dreams, One Story at a Time
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Career Na Mimi is a youth empowerment organization based in
              Tanzania, dedicated to bridging the gap between young people and
              the opportunities they need to thrive. We empower youth through
              quality education, mentorship, and skill development programs,
              preparing them for successful careers and sustainable livelihoods.
            </p>
          </div>

          <div className='flex flex-col lg:flex-row gap-8 justify-center'>
            <Button variant='hero' size='lg' asChild>
              <Link to='/about'>Learn More</Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link to='/contact'>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Our Strategic Objectives
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Building a Transformative Movement
            </h2>
            <p className='text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              We are building more than an organization—we are leading a
              transformative movement to empower youth across Africa. Each
              objective reflects our commitment to creating inclusive,
              sustainable, and innovation-driven development.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card'>
                <CardContent className='p-6'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${objective.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <objective.icon className='w-6 h-6 text-white' />
                  </div>

                  <h3 className='text-xl font-heading font-semibold mb-3'>
                    {objective.title}
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {objective.description}
                  </p>

                  <div className='space-y-3'>
                    <div className='flex justify-between text-sm'>
                      <span className='font-medium'>Progress</span>
                      <span className='text-muted-foreground'>
                        {objective.raised}/{objective.goal}
                      </span>
                    </div>

                    <div className='w-full bg-secondary rounded-full h-2'>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${objective.color} transition-all duration-1000`}
                        style={{ width: `${objective.percentage}%` }}></div>
                    </div>

                    <div className='text-right'>
                      <span className='text-lg font-semibold text-primary'>
                        {objective.percentage}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              What We Do
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Learn More What We Do And Get Involved
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card overflow-hidden'>
                <div
                  className='h-48 bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${service.image})` }}>
                  <div className='absolute inset-0 bg-gradient-primary/80 flex items-center justify-center'>
                    <service.icon className='w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300' />
                  </div>
                </div>

                <CardContent className='p-6'>
                  <h3 className='text-xl font-heading font-semibold mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {service.description}
                  </p>

                  {service.link ? (
                    <Button variant='hero' size='sm' asChild>
                      <a
                        href={service.link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Try Now
                      </a>
                    </Button>
                  ) : (
                    <Button variant='outline' size='sm'>
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className='py-20 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${eventImage})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center text-white'>
            <Badge className='mb-6 bg-primary/10 text-secondary border-primary/20'>
              Coming Soon!!
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Career Fair 2025 - Empower the Next Generation
            </h2>
            <p className='text-lg mb-8 text-white/90 leading-relaxed'>
              Support the next generation of professionals! Your contribution
              helps students access career guidance, skill-building workshops,
              and networking opportunities at Career Fair 2025.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg'>
                Donate via PayPal
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-white hover:text-foreground'>
                Mobile Money
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-white hover:text-foreground'>
                Bank Transfer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Team Members
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              The Faces Behind the Mission
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card'>
                <CardContent className='p-6 text-center'>
                  <div className='w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                  <h3 className='text-lg font-heading font-semibold mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-muted-foreground'>{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Button variant='hero' size='lg' asChild>
              <Link to='/team'>Meet Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-gradient-card'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Testimonials
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Empowering Communities with Trust
            </h2>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Card className='border-0 shadow-elegant'>
              <CardContent className='p-8 text-center'>
                <div className='flex justify-center mb-6'>
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className='w-6 h-6 text-yellow-400 fill-current'
                      />
                    )
                  )}
                </div>

                <blockquote className='text-lg md:text-xl italic mb-6 leading-relaxed text-muted-foreground'>
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className='flex items-center justify-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center'>
                    <Users className='w-6 h-6 text-primary-foreground' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold'>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className='text-muted-foreground'>
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                <div className='flex justify-center mt-8 space-x-2'>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
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

      {/* Partners Section */}

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl md:text-3xl font-heading font-bold mb-8'>
            Our Partners
          </h2>

          <div className='overflow-hidden relative'>
            <div className='flex animate-scroll-horizontal whitespace-nowrap'>
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className='h-20 mx-8 object-contain grayscale hover:grayscale-0 transition duration-300 inline-block'
                />
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
