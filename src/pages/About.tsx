import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
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

// Import images (you'll need to add these to your assets)
import aboutHeroImage from "@/assets/hero-career-guidance.jpg";
import founderImage from "@/assets/team-collaboration.jpg";
import missionImage from "@/assets/career-event.jpg";

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
        "Afro Innovation Award (2024)",
        "TEHAMA Award – Education (2025)",
        "Arusha Innovation Week Champion (2025)",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Youth Empowered",
      count: "2010+",
      description: "Youth Across Tanzania",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Briefcase,
      title: "Career Access",
      count: "1200+",
      description: "Job & Internship Connections",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      items: [
        "Nominated in WSIS Prizes 2025",
        "International Conference on Energy Aquatec and sustainability(ICEAS-2025)",
      ],
      color: "from-purple-500 to-purple-600",
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

  const impactStats = [
    { number: "2010+", label: "Youth Empowered", icon: Users },
    { number: "50+", label: "Workshops Conducted", icon: BookOpen },
    { number: "25+", label: "Career Talks Delivered", icon: Sparkles },
    { number: "1200+", label: "Career Connections", icon: Briefcase },
  ];

  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section - Enhanced with Animations */}
      <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden'>
        {/* Background with parallax effect */}
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105'
            style={{ backgroundImage: `url(${aboutHeroImage})` }}>
          </div>
          {/* Gradient overlays */}
          <div className='absolute inset-0' style={{
            background: 'linear-gradient(135deg, hsla(327, 73%, 20%, 0.7) 0%, hsla(327, 73%, 30%, 0.6) 50%, hsla(327, 73%, 25%, 0.7) 100%)'
          }} />
          <div className='absolute inset-0 bg-slate-900/40' />
          {/* Animated gradient accent */}
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent gradient-shift opacity-60' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20'>
          <div className='max-w-5xl mx-auto text-center text-white'>
            {/* Animated Badge */}
            <div className='cinematic-fade-in opacity-0' style={{ animationDelay: '0.2s' }}>
              <Badge className='mb-8 bg-white/15 text-white border-white/30 hover:bg-white/25 backdrop-blur-md px-6 py-2.5 text-base font-semibold shadow-lg'>
                Our Story
              </Badge>
            </div>

            {/* Main Heading with staggered animation */}
            <div className='cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight'>
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
            <div className='cinematic-fade-in opacity-0' style={{ animationDelay: '0.6s' }}>
              <p className='text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed font-medium'>
                Career Na Mimi is a youth empowerment organization based in
                Tanzania, dedicated to bridging the gap between young people and
                the opportunities they need to thrive in today's dynamic world.
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

      {/* Impact Stats - Circular Progress Rings */}
      <section ref={statsSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8'>
            {impactStats.map((stat, index) => (
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

      {/* About Content - Enhanced */}
      <section ref={aboutSection.ref} className='py-24 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent'></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Image Section */}
            <div className={`relative scroll-fade-left ${aboutSection.isVisible ? 'visible' : ''}`}>
              <div className='relative rounded-3xl overflow-hidden h-[500px] shadow-2xl group'>
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                  style={{ backgroundImage: `url(${founderImage})` }}>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10'></div>
              </div>

              {/* Floating quote card */}
              <Card className='absolute -bottom-6 -right-6 lg:-right-12 max-w-sm border-0 shadow-2xl modern-card'>
                <CardContent className='p-6'>
                  <p className='text-sm italic text-muted-foreground mb-4 leading-relaxed'>
                    "Career Na Mimi is a youth empowerment organization based in
                    Tanzania, dedicated to bridging the gap between young people
                    and the opportunities they need to thrive..."
                  </p>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg'>
                      <Users className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <p className='font-bold text-sm'>Rahman Mbahe</p>
                      <p className='text-xs text-primary font-semibold'>Founder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Text Section */}
            <div className={`scroll-fade-right ${aboutSection.isVisible ? 'visible' : ''}`}>
              <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-5 py-2'>
                Our Foundation
              </Badge>

              <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
                Building Bridges to Success
              </h2>

              <p className='text-lg text-muted-foreground mb-10 leading-relaxed'>
                Since our founding, we have been committed to creating pathways
                for young people to discover their potential, develop their
                skills, and connect with meaningful opportunities that transform
                their lives and communities.
              </p>

              <div className='space-y-6'>
                <Card className='modern-card border-2 border-transparent hover:border-blue-500/20 transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300'>
                        <Target className='w-7 h-7 text-white' />
                      </div>
                      <div>
                        <h3 className='text-xl font-heading font-bold mb-3 text-foreground'>
                          Our Mission
                        </h3>
                        <p className='text-muted-foreground leading-relaxed'>
                          To empower youth by providing access to quality education,
                          skill-building programs, mentorship, and career
                          development opportunities that enable them to become
                          confident, innovative leaders in their communities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className='modern-card border-2 border-transparent hover:border-purple-500/20 transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300'>
                        <Eye className='w-7 h-7 text-white' />
                      </div>
                      <div>
                        <h3 className='text-xl font-heading font-bold mb-3 text-foreground'>
                          Our Vision
                        </h3>
                        <p className='text-muted-foreground leading-relaxed'>
                          A just community with empowered youth: healthy,
                          well-educated, innovative, and equipped for a better life,
                          contributing to sustainable development across Africa.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Enhanced */}
      <section ref={valuesSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${valuesSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-5 py-2'>
              Our Values
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              What Drives Us Forward
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Our core values shape every program we create, every partnership
              we build, and every young person we serve. These principles guide
              our commitment to meaningful, sustainable impact.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`scroll-scale ${valuesSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card h-full border-2 border-transparent hover:border-primary/20 group'>
                  <CardContent className='p-8'>
                    <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                      <value.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors'>
                      {value.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Enhanced */}
      <section ref={achievementsSection.ref} className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${achievementsSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-5 py-2'>
              Our Achievements
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              Recognition and Impact
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Our dedication to youth empowerment has earned recognition both
              locally and internationally, validating our approach and inspiring
              us to reach even greater heights.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`scroll-scale ${achievementsSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card h-full text-center border-2 border-transparent hover:border-primary/20 group'>
                  <CardContent className='p-8'>
                    <div
                      className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <achievement.icon className='w-10 h-10 text-white' />
                    </div>

                    <h3 className='text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors'>
                      {achievement.title}
                    </h3>

                    {achievement.count ? (
                      <div>
                        <div className='text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3'>
                          {achievement.count}
                        </div>
                        <p className='text-muted-foreground font-medium'>
                          {achievement.description}
                        </p>
                      </div>
                    ) : achievement.items ? (
                      <ul className='space-y-3 text-sm'>
                        {achievement.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='flex items-start text-left'>
                            <CheckCircle className='w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5' />
                            <span className='text-muted-foreground leading-relaxed'>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className='text-muted-foreground font-medium'>
                        {achievement.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
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
                <Link to='/contact'>
                  Get Involved <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
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
