import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Sparkles,
  Lightbulb,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  X,
  Award,
  Code,
  Palette,
  Briefcase,
  Star,
} from "lucide-react";

// Import images
import activitiesHero from "@/assets/hero-career-guidance.jpg";
import educationImage from "@/assets/activities/education.jpg";
import genderImage from "@/assets/activities/gender.jpg";
import healthImage from "@/assets/abstract-bg.jpg";
import innovationImage from "@/assets/activities/innovation.jpg";

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Scroll animations for each section
  const activitiesSection = useScrollAnimation();
  const skillsSection = useScrollAnimation();
  const statsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const activities = [
    {
      id: "education",
      category: "Education",
      title: "Quality Education",
      description:
        "Shaping the career of youth toward their dreams and bright future",
      goal: 300,
      raised: 150,
      percentage: 50,
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      image: educationImage,
      detailContent: {
        title: "Quality Education Initiative",
        content: [
          "At Career Na Mimi, we are dedicated to advancing quality education as a foundation for empowering Tanzania's youth. With nearly 60% of the population under 25, many young people face challenges accessing relevant and high-quality education, including limited technical training and inadequate career guidance. Our programs bridge this gap by prioritizing practical learning, skill-building, and mentorship.",
          "Our Quality Education initiatives include skill-based training, digital literacy courses, and industry-specific workshops aligned with current market demands. Collaborating with educational institutions and industry professionals, we create curricula that foster critical thinking, innovation, and adaptability. By integrating technical and soft skills, we prepare participants to excel in a competitive workforce.",
          "To date, we have positively impacted over 500 young people, equipping them with the knowledge and skills needed to pursue meaningful careers. Our goal is to empower Tanzania's youth to become informed, capable, and resilient contributors to the nation's economic and social development. Through these initiatives, we are building a foundation for a generation poised to drive positive change and sustainable growth in Tanzania.",
        ],
      },
    },
    {
      id: "gender",
      category: "Gender",
      title: "Dedication in Balancing Gender",
      description: "Through personalized mentorship and awareness-raising",
      goal: 200,
      raised: 50,
      percentage: 30,
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      image: genderImage,
      detailContent: {
        title: "Gender Balance Initiative",
        content: [
          "At Career Na Mimi, we are committed to ensuring that both young men and women have equal access to opportunities for personal and professional growth. In Tanzania, where only 35% of women participate in formal employment, gender disparities in education and innovation continue to pose significant challenges. Our programs actively work to close these gaps by fostering an inclusive environment that empowers women alongside men in all aspects of career and skill development.",
          "Our Gender Equality initiatives focus on providing mentorship, training, and resources designed to support young women in pursuing careers in traditionally male-dominated fields such as technology, business, and leadership. Through our programs, women are encouraged to engage equally in workshops, innovation projects, and career talks. We also host awareness campaigns that highlight the importance of gender equality in creating a balanced and productive society.",
          "To date, Career Na Mimi has supported over 100 young women, with 60% of our program participants being female. This effort has helped increase confidence, skill acquisition, and professional readiness among women who previously lacked access to these opportunities. By promoting gender equality, we are not only empowering individuals but also contributing to a more inclusive and equitable future for Tanzania's workforce.",
        ],
      },
    },
    {
      id: "health",
      category: "Healthy Life",
      title: "Good Health",
      description:
        "Clear education and training on the importance of nutrition for future generations",
      goal: 100,
      raised: 56,
      percentage: 54,
      icon: Sparkles,
      color: "from-green-500 to-green-600",
      image: healthImage,
      detailContent: {
        title: "Nutrition and Wellness Program",
        content: [
          "At Career Na Mimi, we recognize the importance of nutrition as a critical foundation for personal health and well-being. A healthy lifestyle is key to maintaining the energy, focus, and mental clarity needed for both academic and professional success. Unfortunately, poor dietary habits remain a barrier to success for many youth in Tanzania, contributing to a variety of preventable health issues.",
          "We aim to address these challenges by providing accessible nutrition education and resources. Our programs include interactive workshops and nutritional guidance that emphasize the role of proper nutrition in boosting cognitive function, physical health, and emotional resilience. We collaborate with nutritionists and health experts to provide evidence-based advice, helping youth make informed dietary choices that promote long-term health and wellness.",
          "Through these initiatives, Career Na Mimi has positively impacted hundreds of individuals by improving their knowledge of healthy eating habits and encouraging healthy lifestyle changes. We are committed to ensuring that young people not only succeed in their careers but also lead healthy, fulfilling lives.",
        ],
      },
    },
    {
      id: "innovation",
      category: "Innovation",
      title: "Innovation for Youth",
      description:
        "Fostering creativity and ingenuity among the youth through technological education",
      goal: 500,
      raised: 100,
      percentage: 20,
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      image: innovationImage,
      detailContent: {
        title: "Innovation and Technology Program",
        content: [
          "Innovation is the key to unlocking the potential of Tanzania's youth, empowering them to solve local challenges and create positive change. Career Na Mimi is dedicated to nurturing this creativity by providing the resources, mentorship, and training needed for young people to explore and develop innovative ideas.",
          "We offer hands-on workshops in coding, digital design, and entrepreneurship, equipping participants with the skills they need to become leaders in innovation. Whether it's building mobile apps, designing websites, or developing social enterprises, our innovation programs focus on giving youth the tools to think outside the box and drive the future of Tanzania's digital economy.",
          "Through our Innovation for Youth program, we have inspired dozens of young people to pursue tech-based careers, created opportunities for young innovators to showcase their work, and established a network of changemakers dedicated to making a difference in Tanzania. We believe that by fostering innovation, we are not only preparing youth for the future but also contributing to a prosperous, tech-driven society.",
        ],
      },
    },
  ];

  const skillAreas = [
    {
      icon: Code,
      title: "Digital Skills",
      description: "Coding, web development, and digital literacy",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship",
      description: "Business development and startup skills",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Team management and communication skills",
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Design, multimedia, and creative expression",
    },
  ];

  const Modal = ({ activity, onClose }) => {
    if (!activity) return null;

    return (
      <div
        className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm'
        onClick={onClose}>
        <div
          className='bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden cinematic-scale-in'
          onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className='relative h-56 bg-cover bg-center' style={{ backgroundImage: `url(${activity.image})` }}>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center'>
              <div className='text-center text-white'>
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <activity.icon className='w-10 h-10 text-white' />
                </div>
                <h2 className='text-3xl font-heading font-bold'>
                  {activity.detailContent.title}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className='absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group'>
              <X className='w-6 h-6 text-white group-hover:rotate-90 transition-transform' />
            </button>
          </div>

          {/* Content */}
          <div className='p-8 max-h-[calc(90vh-14rem)] overflow-y-auto'>
            <div className='space-y-6 mb-8'>
              {activity.detailContent.content.map((paragraph, index) => (
                <p
                  key={index}
                  className='text-muted-foreground leading-relaxed text-lg'>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Progress Section */}
            <div className='bg-gradient-to-br from-secondary/40 to-transparent p-6 rounded-2xl border-2 border-secondary/20'>
              <div className='flex justify-between items-center mb-4'>
                <span className='font-bold text-lg text-foreground'>Progress Tracking</span>
                <span className='text-muted-foreground font-semibold'>
                  {activity.raised}/{activity.goal}
                </span>
              </div>
              <div className='w-full bg-secondary/30 rounded-full h-4 mb-3 overflow-hidden shadow-inner'>
                <div
                  className={`h-4 rounded-full bg-gradient-to-r ${activity.color} relative overflow-hidden transition-all duration-1000`}
                  style={{ width: `${activity.percentage}%` }}>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer'></div>
                </div>
              </div>
              <div className='text-right'>
                <span className='text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                  {activity.percentage}%
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-8 text-center'>
              <Button variant='hero' size='lg' asChild className='shadow-lg hover:shadow-xl transition-all'>
                <Link to='/contact'>
                  Get Involved <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
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
            style={{ backgroundImage: `url(${activitiesHero})` }}>
          </div>
          {/* Gradient overlays */}
          <div className='absolute inset-0' style={{
            background: 'linear-gradient(135deg, hsla(327, 73%, 20%, 0.7) 0%, hsla(327, 73%, 30%, 0.6) 50%, hsla(327, 73%, 25%, 0.7) 100%)'
          }} />
          <div className='absolute inset-0 bg-slate-900/40' />
          {/* Animated gradient accent */}
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent gradient-shift opacity-60' />
        </div>

        {/* Scattered Decorative Particles with Icons */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          {/* Top Left Area */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <BookOpen className='w-8 h-8 text-white/60' style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))' }} />
          </div>
          <div className='absolute top-[12%] left-[15%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.5s' }}></div>
          <div className='absolute top-[20%] left-[12%] w-3 h-3 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '1s' }}></div>

          {/* Top Right Area */}
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <Lightbulb className='w-10 h-10 text-yellow-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(253, 224, 71, 0.5))' }} />
          </div>
          <div className='absolute top-[10%] right-[18%] w-2 h-2 bg-white/40 rounded-full blur-[1px]' style={{ animationDelay: '2s' }}></div>
          <div className='absolute top-[15%] right-[6%] animate-float opacity-30' style={{ animationDelay: '0.8s' }}>
            <Star className='w-6 h-6 text-yellow-200/60' />
          </div>

          {/* Left Side */}
          <div className='absolute top-[40%] left-[5%] animate-float opacity-45' style={{ animationDelay: '1.2s' }}>
            <Award className='w-9 h-9 text-amber-400/70' style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' }} />
          </div>
          <div className='absolute top-[48%] left-[10%] w-2.5 h-2.5 bg-blue-300/30 rounded-full blur-sm' style={{ animationDelay: '1.8s' }}></div>
          <div className='absolute top-[35%] left-[3%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]'></div>

          {/* Right Side */}
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Heart className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>
          <div className='absolute top-[38%] right-[12%] w-2 h-2 bg-white/35 rounded-full blur-[1px]' style={{ animationDelay: '1.4s' }}></div>
          <div className='absolute top-[52%] right-[5%] animate-float opacity-35' style={{ animationDelay: '2.2s' }}>
            <Sparkles className='w-7 h-7 text-purple-300/60' />
          </div>

          {/* Bottom Left Area */}
          <div className='absolute bottom-[20%] left-[12%] animate-float opacity-35' style={{ animationDelay: '1.6s' }}>
            <Target className='w-8 h-8 text-red-300/60' style={{ filter: 'drop-shadow(0 0 8px rgba(252, 165, 165, 0.4))' }} />
          </div>
          <div className='absolute bottom-[25%] left-[8%] w-2 h-2 bg-white/30 rounded-full blur-[1px]' style={{ animationDelay: '0.9s' }}></div>
          <div className='absolute bottom-[18%] left-[5%] w-3 h-3 bg-green-300/30 rounded-full blur-sm' style={{ animationDelay: '1.3s' }}></div>

          {/* Bottom Right Area */}
          <div className='absolute bottom-[22%] right-[15%] animate-float opacity-45' style={{ animationDelay: '0.7s' }}>
            <Users className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.5))' }} />
          </div>
          <div className='absolute bottom-[15%] right-[10%] w-2.5 h-2.5 bg-primary/40 rounded-full blur-sm' style={{ animationDelay: '2.1s' }}></div>
          <div className='absolute bottom-[28%] right-[8%] w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]' style={{ animationDelay: '1.1s' }}></div>

          {/* Center Scattered Particles */}
          <div className='absolute top-[30%] left-[25%] w-1 h-1 bg-white/50 rounded-full blur-[0.5px]' style={{ animationDelay: '0.4s' }}></div>
          <div className='absolute top-[60%] left-[20%] w-1.5 h-1.5 bg-primary/30 rounded-full blur-[1px]' style={{ animationDelay: '1.7s' }}></div>
          <div className='absolute top-[55%] right-[25%] w-1 h-1 bg-white/40 rounded-full blur-[0.5px]' style={{ animationDelay: '0.3s' }}></div>
          <div className='absolute top-[25%] right-[30%] w-2 h-2 bg-yellow-200/20 rounded-full blur-sm' style={{ animationDelay: '1.9s' }}></div>

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
                What We Do
              </Badge>
            </div>

            {/* Main Heading with staggered animation */}
            <div className='cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight'>
                Our <span className='block mt-2' style={{
                  color: 'hsl(327, 73%, 65%)',
                  textShadow: '0 0 40px hsla(327, 73%, 60%, 0.7), 0 0 20px hsla(327, 73%, 60%, 0.9), 0 4px 12px rgba(0,0,0,0.4)'
                }}>Activities</span>
              </h1>
            </div>

            {/* Description */}
            <div className='cinematic-fade-in opacity-0 mb-10' style={{ animationDelay: '0.6s' }}>
              <p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium'>
                Aligned with the National Youth Development Policy, our
                comprehensive programs empower young people through education,
                innovation, and sustainable development initiatives.
              </p>
            </div>

            {/* Breadcrumb */}
            <div className='cinematic-fade-in opacity-0' style={{ animationDelay: '0.8s' }}>
              <nav className='flex justify-center items-center space-x-2 text-white/80 font-medium'>
                <Link to='/' className='hover:text-white transition-colors'>Home</Link>
                <ArrowRight className='w-4 h-4' />
                <span>Pages</span>
                <ArrowRight className='w-4 h-4' />
                <span className='text-white'>Activities</span>
              </nav>
            </div>

            {/* Decorative floating elements */}
            <div className='absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float'></div>
            <div className='absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float' style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[8]' />
      </section>

      {/* Main Activities Section - Enhanced */}
      <section ref={activitiesSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${activitiesSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-5 py-2'>
              Our Core Programs
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              Align with National Youth Development Policy
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Our activities are strategically designed to address the key areas
              identified in youth development framework, ensuring maximum impact
              and sustainable growth.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`scroll-scale ${activitiesSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <Card className='modern-card h-full overflow-hidden border-2 border-transparent hover:border-primary/20 group'>
                  <div className='relative'>
                    <div
                      className='h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                      style={{ backgroundImage: `url(${activity.image})` }}>
                      <div className='absolute inset-0 bg-gradient-to-br from-primary/85 to-primary/70 flex items-center justify-center transition-all duration-500'>
                        <div className='text-center text-white'>
                          <div
                            className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                            <activity.icon className='w-10 h-10 text-white' />
                          </div>
                          <Badge className='bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-1.5 font-semibold'>
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className='p-8'>
                    <h3 className='text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors'>
                      {activity.title}
                    </h3>
                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                      {activity.description}
                    </p>

                    {/* Progress Section */}
                    <div className='space-y-3 mb-6'>
                      <div className='flex justify-between text-sm font-semibold'>
                        <span>Goal: {activity.goal}</span>
                        <span className='text-muted-foreground'>
                          Achieved: {activity.raised}
                        </span>
                      </div>

                      <div className='w-full bg-secondary/30 rounded-full h-3 overflow-hidden shadow-inner'>
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${activity.color} relative overflow-hidden transition-all duration-1000`}
                          style={{ width: `${activity.percentage}%` }}>
                          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer'></div>
                        </div>
                      </div>

                      <div className='text-right'>
                        <span className='text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                          {activity.percentage}%
                        </span>
                      </div>
                    </div>

                    <Button
                      variant='hero'
                      size='sm'
                      onClick={() => setSelectedActivity(activity)}
                      className='w-full shadow-lg hover:shadow-xl transition-all'>
                      Learn More <ArrowRight className='ml-2 w-4 h-4' />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development Areas - Enhanced */}
      <section ref={skillsSection.ref} className='py-24'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={`text-center mb-16 scroll-fade-up ${skillsSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-5 py-2'>
              Skill Development
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              Key Areas of Focus
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              We concentrate our efforts on developing essential skills that
              align with current market demands and future opportunities.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skillAreas.map((skill, index) => (
              <div
                key={index}
                className={`scroll-scale ${skillsSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className='modern-card h-full text-center border-2 border-transparent hover:border-primary/20 group'>
                  <CardContent className='p-8'>
                    <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                      <skill.icon className='w-10 h-10 text-white' />
                    </div>
                    <h3 className='text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors'>
                      {skill.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics - Circular Progress Rings */}
      <section ref={statsSection.ref} className='py-24 bg-gradient-to-br from-secondary/40 to-transparent relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, hsl(327, 73%, 56%) 0%, transparent 50%)'
        }}></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className={`text-center mb-16 scroll-fade-up ${statsSection.isVisible ? 'visible' : ''}`}>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-5 py-2'>
              Our Impact
            </Badge>
            <h2 className='text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight'>
              Measuring Success Through Numbers
            </h2>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8'>
            {[
              { number: '2010+', label: 'Youth Empowered', icon: Users, maxValue: 2500 },
              { number: '50+', label: 'Workshops', icon: BookOpen, maxValue: 100 },
              { number: '1200+', label: 'Career Connections', icon: Briefcase, maxValue: 1500 },
              { number: '25+', label: 'Awards & Recognition', icon: Award, maxValue: 50 }
            ].map((stat, index) => (
              <div
                key={index}
                className={`scroll-scale ${statsSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}>
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

      {/* Call to Action - Enhanced */}
      <section ref={ctaSection.ref} className='py-28 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center scale-105'
          style={{ backgroundImage: `url(${activitiesHero})` }}>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/85'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`max-w-4xl mx-auto text-center text-white scroll-scale ${ctaSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight'>
              Ready to Join Our Mission?
            </h2>
            <p className='text-xl mb-12 text-white/95 leading-relaxed max-w-2xl mx-auto'>
              Be part of Tanzania's youth empowerment movement. Whether you want
              to participate, volunteer, or support our cause, there's a place
              for you in our community.
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
                <Link to='/about'>
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className='absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float' style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Modal */}
      <Modal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />

      <Footer />
    </div>
  );
};

export default Activities;
