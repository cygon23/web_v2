import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
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
import SEO from "@/components/SEO";

// Import images
import activitiesHero from "@/assets/activities/education.jpg";
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
      title: "Intelligent Tech",
      description: "Digital literacy and advanced development, enhanced by AI-driven automation.",
    },
    {
      icon: Briefcase,
      title: "Strategic Business",
      description: "Sustainable entrepreneurship merging core business values with AI leverage.",
    },
    {
      icon: Users,
      title: "Adaptive Leadership",
      description: "High-EQ leadership and team management for the collaborative human-AI era.",
    },
    {
      icon: Palette,
      title: "Creative Expression",
      description: "Digital design and multimedia storytelling amplified by human intuition and AI tools.",
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
                <a href="https://app.careernamimii.org/membership" target="_blank" rel="noopener noreferrer">
                  Become a Member
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen'>
      <SEO 
        title="Our Activities" 
        description="Explore our strategic pillars in education, gender balance, and innovation aligned with the National Youth Development Policy."
        canonical="/activities"
      />
      <Navigation />

      {/* Hero Section - Cinematic Modernization */}
      <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
        {/* Background with parallax effect */}
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000'
            style={{ backgroundImage: `url(${activitiesHero})` }}>
          </div>
          {/* Gradient overlays - Darker and cleaner */}
          <div className='absolute inset-0 bg-slate-950/60' />
          <div className='absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950' />
          {/* Cinematic lighting accent */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10' />
        </div>

        {/* Scattered Decorative Particles with Icons - Retained based on user feedback */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <BookOpen className='w-8 h-8 text-white/60' />
          </div>
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <Lightbulb className='w-10 h-10 text-yellow-300/70' />
          </div>
          <div className='absolute top-[40%] left-[5%] animate-float opacity-45' style={{ animationDelay: '1.2s' }}>
            <Award className='w-9 h-9 text-amber-400/70' />
          </div>
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Heart className='w-8 h-8 text-pink-300/70' />
          </div>
          <div className='absolute bottom-[22%] right-[15%] animate-float opacity-45' style={{ animationDelay: '0.7s' }}>
            <Users className='w-9 h-9 text-blue-300/70' />
          </div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20'>
          <div className='max-w-5xl mx-auto text-center text-white'>
            {/* Main Heading with staggered animation - Cleaner without badge */}
            <div className='cinematic-scale-in opacity-0' style={{ animationDelay: '0.4s' }}>
              <h1 className='text-6xl md:text-8xl lg:text-9xl font-heading font-black mb-8 leading-tight tracking-tighter'>
                Our <span className='text-primary drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]'>Activities</span>
              </h1>
            </div>

            {/* Description */}
            <div className='cinematic-fade-in opacity-0 mb-10' style={{ animationDelay: '0.6s' }}>
              <p className='text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-semibold tracking-tight'>
                Aligned with the National Youth Development Policy, our
                comprehensive programs empower young people through education,
                innovation, and sustainable growth.
              </p>
            </div>

            {/* Breadcrumb */}
            <div className='cinematic-fade-in opacity-0' style={{ animationDelay: '0.8s' }}>
              <nav className='flex justify-center items-center space-x-4 text-white/60 font-bold uppercase tracking-[0.3em] text-xs'>
                <Link to='/' className='hover:text-white transition-colors'>Home</Link>
                <div className='w-1 h-1 bg-white/30 rounded-full' />
                <span className='text-white'>Activities</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* National Youth Policy Section - Redesigned v2: Framework Prism */}
      <section ref={activitiesSection.ref} className='py-24 bg-slate-900 relative overflow-hidden'>
        {/* Cinematic Backdrop */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(236,72,153,0.1)_0%,_transparent_50%)]' />
        <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
        
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-center mb-24 scroll-fade-up ${activitiesSection.isVisible ? 'visible' : ''}`}>
            {/* Context & Heading */}
            <div className='space-y-6'>
              <div className='inline-flex items-center space-x-3'>
                <div className='w-8 h-px bg-primary' />
                <span className='text-xs font-black uppercase tracking-[0.4em] text-primary'>STRATEGIC ALIGNMENT</span>
              </div>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight tracking-tighter text-white'>
                National Youth<br />
                <span className='text-slate-400'>Development</span> Policy
              </h2>
              <div className='flex gap-2'>
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    className='w-2 h-2 rounded-full bg-primary/40' 
                  />
                ))}
              </div>
            </div>

            {/* Content Prism */}
            <div className='relative group'>
              {/* Decorative Glow Layer */}
              <div className='absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
              
              <div className='relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden'>
                {/* Inner Accent Line */}
                <div className='absolute top-0 left-0 w-2 h-full bg-primary/40' />
                
                <div className='space-y-8'>
                  <p className='text-xl md:text-2xl text-slate-300 leading-relaxed font-medium'>
                    Our activities are strategically designed to address the key areas
                    identified in Tanzania's youth development framework. 
                  </p>
                  
                  <div className='grid grid-cols-2 gap-6 pt-4 border-t border-white/5'>
                    <div className='space-y-2'>
                      <span className='text-[10px] font-black uppercase tracking-widest text-slate-500'>FOCUS RADIUS</span>
                      <p className='text-white font-bold tracking-tight'>Strategic Pillars</p>
                    </div>
                    <div className='space-y-2 text-right'>
                      <span className='text-[10px] font-black uppercase tracking-widest text-slate-500'>IMPACT RATIO</span>
                      <p className='text-primary font-bold tracking-tight'>Maximum Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`scroll-scale ${activitiesSection.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <Card className=' modern-card h-full overflow-hidden border-none bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] group transition-all duration-700 rounded-[2.5rem] flex flex-col'>
                  <div className='relative overflow-hidden h-64'>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      className='h-full bg-cover bg-center'
                      style={{ backgroundImage: `url(${activity.image})` }}
                    />
                    {/* Minimal Gradient Overlay for Bottom Text (if any) - Top is clear */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  </div>

                  <CardContent className='p-8 flex-1 flex flex-col'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-all duration-500`}>
                        <activity.icon className='w-6 h-6 text-white' />
                      </div>
                      <span className='text-[10px] font-black uppercase tracking-[0.2em] text-slate-400'>{activity.category}</span>
                    </div>

                    <h3 className='text-2xl font-heading font-black mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight'>
                      {activity.title}
                    </h3>
                    <p className='text-slate-600 mb-8 leading-relaxed font-medium line-clamp-2'>
                      {activity.description}
                    </p>

                    <div className='mt-auto space-y-6'>
                      <div className='flex items-center justify-between'>
                        <span className='text-xs font-black text-slate-400 tracking-widest'>IMPACT REACH</span>
                        <span className='text-2xl font-black text-slate-900'>{activity.percentage}%</span>
                      </div>
                      
                      <div className='w-full bg-slate-50 rounded-full h-2 overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${activity.percentage}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className={`h-full rounded-full bg-gradient-to-r ${activity.color}`}
                        />
                      </div>

                      <Button
                        variant='hero'
                        size='sm'
                        onClick={() => setSelectedActivity(activity)}
                        className='w-full shadow-lg group-hover:shadow-primary/20 transition-all rounded-2xl h-14'>
                        View Blueprint <ArrowRight className='ml-2 w-4 h-4' />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas of Focus - Redesigned As Neural AI Grid */}
      <section ref={skillsSection.ref} className='py-32 bg-slate-50 relative overflow-hidden'>
        {/* Background Neural Network (Static SVG Paths) */}
        <div className='absolute inset-0 opacity-[0.03] pointer-events-none hidden lg:block'>
          <svg className='w-full h-full' viewBox='0 0 1000 1000' fill='none'>
            <path d='M100,100 L900,900 M900,100 L100,900' stroke='black' strokeWidth='1' />
            <path d='M500,0 L500,1000 M0,500 L1000,500' stroke='black' strokeWidth='1' />
          </svg>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`text-center mb-24 scroll-fade-up ${skillsSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight tracking-tighter text-slate-900'>
              Key Areas of <span className='text-primary'>Focus</span>
            </h2>
            <p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium'>
              We concentrate our efforts on developing essential skills that
              blend core competencies with modern AI-driven opportunities.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto pb-16'>
            {skillAreas.map((skill, index) => (
              <div
                key={index}
                className={`scroll-scale ${skillsSection.isVisible ? 'visible' : ''} ${
                  index === 1 ? 'md:translate-y-6' : index === 2 ? 'md:translate-y-12' : index === 3 ? 'md:translate-y-18' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <Card className='border-none bg-white hover:bg-slate-900 hover:text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(236,72,153,0.3)] transition-all duration-700 rounded-3xl overflow-hidden group p-6 flex flex-col items-center text-center relative h-full'>
                  {/* Glowing Aura Effect */}
                  <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none' />
                  
                  <div className='w-16 h-16 shrink-0 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:rotate-[15deg] transition-all duration-500 relative z-10 mb-6'>
                    <skill.icon className='w-8 h-8 text-slate-900 group-hover:text-white transition-colors' />
                  </div>
                  
                  <div className='relative z-10 w-full'>
                    <h3 className='text-xl font-heading font-black mb-3 text-slate-900 group-hover:text-white transition-colors'>
                      {skill.title}
                    </h3>
                    <p className='text-sm text-slate-600 group-hover:text-slate-300 font-medium leading-relaxed transition-colors'>
                      {skill.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section ref={ctaSection.ref} className='py-28 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000'
          style={{ backgroundImage: `url(${genderImage})` }}>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80'></div>
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
                <a href="https://app.careernamimii.org/membership" target="_blank" rel="noopener noreferrer">
                  Become a Member
                </a>
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
