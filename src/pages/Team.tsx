import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    { number: "6+", label: "Team Members", icon: Users },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "2010+", label: "Youth Impacted", icon: Target },
    { number: "100%", label: "Dedication", icon: Heart },
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

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
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

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='w-16 h-16 mx-auto mb-4 bg-prmary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <stat.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-gray-800 mb-2'>
                  {stat.number}
                </h3>
                <p className='text-gray-600 font-medium'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-animate id='team-intro'>
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
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white ${
                  isVisible[`member-${member.id}`]
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
                data-animate
                id={`member-${member.id}`}>
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
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center text-white'>
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
                className='bg-white text-primary hover:bg-gray-100'>
                <Mail className='mr-2 w-5 h-5' />
                Send Application
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-white hover:text-primary'>
                <Phone className='mr-2 w-5 h-5' />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                Our Location
              </h3>
              <p className='text-gray-600'>Njiro Arusha, TANZANIA</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                Contact Us
              </h3>
              <p className='text-gray-600'>+255 628 055 646</p>
              <p className='text-gray-600'>+255 750 550 60</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center'>
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
