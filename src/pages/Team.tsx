import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowLeft,
  Users,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  Target,
  Heart,
  Sparkles,
  Shield,
  TrendingUp,
  Lightbulb,
  Handshake,
  Briefcase,
  Trophy,
} from "lucide-react";

//team
import rahmanImg from "@/assets/team/rahman.jpeg";
import abdulImg from "@/assets/team/jofu.jpg";
import karenImg from "@/assets/team/KAREEN.jpg";
import godfreyImg from "@/assets/team/godfrey.jpg";
import echaImg from "@/assets/team/ECHA.jpg";
import jofreyImg from "@/assets/team/02.jpg";

const Team = () => {
  const [isVisible, setIsVisible] = useState({});

  // Scroll animation hooks
  const statsSection = useScrollAnimation({ threshold: 0.1 });
  const teamIntroSection = useScrollAnimation({ threshold: 0.1 });
  const teamGridSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });
  const contactSection = useScrollAnimation({ threshold: 0.1 });

  // Team members data based on your HTML
  const teamMembers = [
    {
      id: 1,
      name: "Rahman Mbahe",
      role: "Executive officer",
      image: rahmanImg,
      description:
        "Visionary leader driving the mission to empower youth across Africa through career guidance and skill development.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Leadership", "Strategic Planning", "Youth Advocate", "AI"],
    },
    {
      id: 3,
      name: "Abdul Swammad",
      role: "Deputy executive officer",
      image: jofreyImg,
      description:
        "Operations specialist focused on optimizing processes and ensuring smooth execution of all programs.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: [
        "Operations Management",
        "Process Optimization",
        "Team Leadership",
      ],
    },
    {
      id: 4,
      name: "Karen Kamene",
      role: "Treasurer",
      image: karenImg,
      description:
        "Communications expert managing information flow and public relations for maximum impact.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Communications", "Public Relations", "Content Strategy"],
    },
    {
      id: 5,
      name: "Echa Joseph",
      role: "Public Relation Officer",
      image: echaImg,
      description:
        "Digital innovation leader spearheading our online presence and technological advancement.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Digital Strategy", "Technology", "Online Marketing"],
    },
    {
      id: 7,
      name: "Godfrey Muganyizi",
      role: "ICT officer",
      image: godfreyImg,
      description:
        "Technology leader ensuring robust digital infrastructure and innovative solutions.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["AI & software", "Linux Administration", "Cyber Security"],
    },
    {
      id: 8,
      name: "Jofrey Lazaro",
      role: "Facilitator",
      image: abdulImg,
      description:
        "Passionate educator dedicated to empowering youth through practical skill training.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Education", "Mentoring", "Career Guidance"],
    },
  ];

  const stats = [
    { number: "6+", label: "Team Members", icon: Users, maxValue: 10 },
    { number: "3+", label: "Years Experience", icon: Award, maxValue: 5 },
    { number: "2010+", label: "Youth Impacted", icon: Target, maxValue: 2500 },
    { number: "100%", label: "Dedication", icon: Heart, maxValue: 100 },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative pt-24 pb-20 overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary'>
        <div className='absolute inset-0 bg-black/10'></div>

        {/* Animated background elements */}
        <div className='absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce'></div>
        <div className='absolute bottom-20 right-10 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-1000'></div>
        <div className='absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-bounce delay-500'></div>

        {/* Scattered Decorative Particles with Team-themed Icons */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          {/* Top Left Area - Leadership */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <Shield className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }} />
          </div>

          {/* Top Right Area - Growth */}
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <TrendingUp className='w-10 h-10 text-emerald-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(110, 231, 183, 0.5))' }} />
          </div>

          {/* Middle Left - Innovation */}
          <div className='absolute top-[40%] left-[5%] animate-float opacity-45' style={{ animationDelay: '1.2s' }}>
            <Lightbulb className='w-9 h-9 text-yellow-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.4))' }} />
          </div>

          {/* Middle Right - Collaboration */}
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Handshake className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>

          {/* Center Right - Excellence */}
          <div className='absolute top-[35%] right-[15%] animate-float opacity-35' style={{ animationDelay: '2s' }}>
            <Trophy className='w-7 h-7 text-amber-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(252, 211, 77, 0.4))' }} />
          </div>

          {/* Bottom Left - Team Spirit */}
          <div className='absolute bottom-[25%] left-[12%] animate-float opacity-40' style={{ animationDelay: '0.9s' }}>
            <Users className='w-9 h-9 text-indigo-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(165, 180, 252, 0.5))' }} />
          </div>

          {/* Bottom Right - Goals */}
          <div className='absolute bottom-[30%] right-[12%] animate-float opacity-45' style={{ animationDelay: '1.8s' }}>
            <Target className='w-8 h-8 text-rose-300/70' style={{ filter: 'drop-shadow(0 0 7px rgba(253, 164, 175, 0.4))' }} />
          </div>

          {/* Top Center - Professionalism */}
          <div className='absolute top-[25%] left-[45%] animate-float opacity-35' style={{ animationDelay: '2.5s' }}>
            <Briefcase className='w-7 h-7 text-cyan-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(165, 243, 252, 0.4))' }} />
          </div>

          {/* Middle Center - Excellence */}
          <div className='absolute top-[50%] left-[20%] animate-float opacity-30' style={{ animationDelay: '1.6s' }}>
            <Award className='w-7 h-7 text-purple-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(216, 180, 254, 0.4))' }} />
          </div>

          {/* Accent Stars */}
          <div className='absolute top-[30%] right-[25%] animate-float opacity-30' style={{ animationDelay: '2.2s' }}>
            <Star className='w-6 h-6 text-yellow-200/60' style={{ filter: 'drop-shadow(0 0 5px rgba(254, 240, 138, 0.3))' }} />
          </div>

          <div className='absolute bottom-[35%] left-[25%] animate-float opacity-35' style={{ animationDelay: '1.4s' }}>
            <Sparkles className='w-7 h-7 text-pink-200/60' style={{ filter: 'drop-shadow(0 0 6px rgba(251, 207, 232, 0.3))' }} />
          </div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white cinematic-fade-in'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30'>
              Meet Our Team
            </Badge>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              The Faces Behind the{" "}
              <span className='text-white drop-shadow-lg'>Mission</span>
            </h1>

            <p className='text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed'>
              Meet the passionate individuals dedicated to empowering youth and
              transforming lives through career guidance and skill development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Circular Progress Rings */}
      <section ref={statsSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
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
                  maxValue={stat.maxValue}
                  isVisible={statsSection.isVisible}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section ref={teamIntroSection.ref} className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${teamIntroSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Our Leadership
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>
              Driving Change Through Collective Excellence
            </h2>
            <p className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              Our diverse team combines expertise, passion, and dedication to
              create transformative opportunities for youth across Africa. Each
              member brings unique skills and perspectives that strengthen our
              mission to empower the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section ref={teamGridSection.ref} className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white scroll-scale ${
                  teamGridSection.isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div className='relative overflow-hidden h-64'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500'
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  {/* Social Links Overlay */}
                  <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0'>
                    <a
                      href={member.social.facebook}
                      className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary  hover:text-white transition-colors backdrop-blur-sm'>
                      <Facebook className='w-4 h-4' />
                    </a>
                    <a
                      href={member.social.twitter}
                      className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary  hover:text-white transition-colors backdrop-blur-sm'>
                      <Twitter className='w-4 h-4' />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary  hover:text-white transition-colors backdrop-blur-sm'>
                      <Linkedin className='w-4 h-4' />
                    </a>
                    <a
                      href={member.social.instagram}
                      className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary  hover:text-white transition-colors backdrop-blur-sm'>
                      <Instagram className='w-4 h-4' />
                    </a>
                  </div>
                </div>

                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>
                    {member.name}
                  </h3>
                  <p className='text-[bg-primary] font-semibold mb-3'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-2 py-1 bg-primary/10 text-[bg-primary] text-xs rounded-full font-medium'>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full group-hover:bg-[bg-primary] group-hover:text-white group-hover:border-[bg-primary] transition-colors border-[bg-primary]/30 text-[bg-primary]'>
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaSection.ref} className='py-20 bg-primary relative overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`max-w-4xl mx-auto text-center text-white scroll-fade-up ${ctaSection.isVisible ? 'visible' : ''}`}>
            <Sparkles className='w-16 h-16 mx-auto mb-6 text-white' />
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Want to Join Our Mission?
            </h2>
            <p className='text-lg mb-8 text-white/90 leading-relaxed'>
              We're always looking for passionate individuals who share our
              vision of empowering youth through career guidance and skill
              development. Join us in making a difference!
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                variant='secondary'
                size='lg'
                className='bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform duration-300'>
                <Mail className='mr-2 w-5 h-5' />
                Send Application
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300'>
                <Phone className='mr-2 w-5 h-5' />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactSection.ref} className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className={`text-center scroll-fade-up ${contactSection.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                Our Location
              </h3>
              <p className='text-gray-600'>Njiro Arusha, TANZANIA</p>
            </div>

            <div className={`text-center scroll-fade-up ${contactSection.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                Contact Us
              </h3>
              <p className='text-gray-600'>+255 628 055 646</p>
              <p className='text-gray-600'>+255 750 550 60</p>
            </div>

            <div className={`text-center scroll-fade-up ${contactSection.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                Email Us
              </h3>
              <p className='text-gray-600'>info@careernamimi.org</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
