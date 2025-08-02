import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

      {/* Hero Section */}
      <section className='relative pt-20 lg:pt-24 pb-20 overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${aboutHeroImage})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30'>
              Our Story
            </Badge>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight'>
              Empowering Youth and{" "}
              <span className='text-black'>Young Professionals</span>
            </h1>

            <p className='text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Career Na Mimi is a youth empowerment organization based in
              Tanzania, dedicated to bridging the gap between young people and
              the opportunities they need to thrive in today's dynamic world.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className='py-16 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {impactStats.map((stat, index) => (
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

      {/* About Content */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
            {/* Image Section */}
            <div className='relative'>
              <div
                className='rounded-2xl shadow-elegant overflow-hidden h-96'
                style={{ backgroundImage: `url(${founderImage})` }}>
                <div className='absolute inset-0 bg-gradient-primary/20'></div>
              </div>

              {/* Floating quote card */}
              <Card className='absolute -bottom-8 -right-8 lg:-right-12 max-w-sm border-0 shadow-elegant'>
                <CardContent className='p-6'>
                  <p className='text-sm italic text-muted-foreground mb-3'>
                    "Career Na Mimi is a youth empowerment organization based in
                    Tanzania, dedicated to bridging the gap between young people
                    and the opportunities they need to thrive..."
                  </p>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center'>
                      <Users className='w-5 h-5 text-primary-foreground' />
                    </div>
                    <div>
                      <p className='font-semibold text-sm'>Rahman Mbahe</p>
                      <p className='text-xs text-muted-foreground'>Founder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Text Section */}
            <div>
              <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
                Our Foundation
              </Badge>

              <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
                Building Bridges to Success
              </h2>

              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Since our founding, we have been committed to creating pathways
                for young people to discover their potential, develop their
                skills, and connect with meaningful opportunities that transform
                their lives and communities.
              </p>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <Target className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-heading font-semibold mb-2'>
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

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <Eye className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-heading font-semibold mb-2'>
                      Our Vision
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      A just community with empowered youth: healthy,
                      well-educated, innovative, and equipped for a better life,
                      contributing to sustainable development across Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-20 bg-gradient-card'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Our Values
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
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
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card'>
                <CardContent className='p-6'>
                  <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <value.icon className='w-6 h-6 text-primary-foreground' />
                  </div>
                  <h3 className='text-xl font-heading font-semibold mb-3'>
                    {value.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Our Achievements
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
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
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card text-center'>
                <CardContent className='p-6'>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className='w-8 h-8 text-white' />
                  </div>

                  <h3 className='text-xl font-heading font-semibold mb-4'>
                    {achievement.title}
                  </h3>

                  {achievement.count ? (
                    <div>
                      <div className='text-3xl font-bold text-primary mb-2'>
                        {achievement.count}
                      </div>
                      <p className='text-muted-foreground'>
                        {achievement.description}
                      </p>
                    </div>
                  ) : achievement.items ? (
                    <ul className='space-y-2 text-sm'>
                      {achievement.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className='flex items-center text-left'>
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                          <span className='text-muted-foreground'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-muted-foreground'>
                      {achievement.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${missionImage})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Join Our Mission to Empower Youth
            </h2>
            <p className='text-lg mb-8 text-white/90 leading-relaxed'>
              Whether you're a young professional seeking guidance, an
              organization looking to partner, or someone passionate about youth
              development, there's a place for you in our community.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg'>
                Get Involved <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-white hover:text-foreground'>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
