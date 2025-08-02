import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
} from "lucide-react";

// Import images
import activitiesHero from "@/assets/hero-career-guidance.jpg";
import educationImage from "@/assets/activities/education.jpg";
import genderImage from "@/assets/activities/gender.jpg";
import healthImage from "@/assets/abstract-bg.jpg";
import innovationImage from "@/assets/activities/innovation.jpg";

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

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
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
        <div className='bg-white rounded-2xl shadow-elegant max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
          <div className='sticky top-0 bg-white border-b border-secondary/20 p-6 flex justify-between items-center rounded-t-2xl'>
            <h2 className='text-2xl font-heading font-bold'>
              {activity.detailContent.title}
            </h2>
            <button
              onClick={onClose}
              className='w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-full flex items-center justify-center transition-colors'>
              <X className='w-5 h-5' />
            </button>
          </div>

          <div className='p-6'>
            <div
              className='h-64 bg-cover bg-center rounded-xl mb-6'
              style={{ backgroundImage: `url(${activity.image})` }}>
              <div className='h-full bg-gradient-primary/80 rounded-xl flex items-center justify-center'>
                <activity.icon className='w-16 h-16 text-white' />
              </div>
            </div>

            <div className='space-y-4'>
              {activity.detailContent.content.map((paragraph, index) => (
                <p
                  key={index}
                  className='text-muted-foreground leading-relaxed'>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='mt-8 pt-6 border-t border-secondary/20'>
              <div className='flex justify-between items-center mb-4'>
                <span className='font-semibold'>Progress Tracking</span>
                <span className='text-muted-foreground'>
                  {activity.raised}/{activity.goal}
                </span>
              </div>
              <div className='w-full bg-secondary/20 rounded-full h-3 mb-2'>
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${activity.color} transition-all duration-1000`}
                  style={{ width: `${activity.percentage}%` }}></div>
              </div>
              <div className='text-right'>
                <span className='text-lg font-semibold text-primary'>
                  {activity.percentage}%
                </span>
              </div>
            </div>
          </div>
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
          style={{ backgroundImage: `url(${activitiesHero})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30'>
              What We Do
            </Badge>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight'>
              Our <span className='text-black'>Activities</span>
            </h1>

            <p className='text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Aligned with the National Youth Development Policy, our
              comprehensive programs empower young people through education,
              innovation, and sustainable development initiatives.
            </p>

            {/* Breadcrumb */}
            <nav className='flex justify-center items-center space-x-2 text-white/70'>
              <span>Home</span>
              <ArrowRight className='w-4 h-4' />
              <span>Pages</span>
              <ArrowRight className='w-4 h-4' />
              <span className='text-primary-light'>Activities</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className='py-20 bg-secondary/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Our Core Programs
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Align with National Youth Development Policy
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Our activities are strategically designed to address the key areas
              identified in youth development framework, ensuring maximum impact
              and sustainable growth.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
            {activities.map((activity, index) => (
              <Card
                key={activity.id}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card overflow-hidden'>
                <div className='relative'>
                  <div
                    className='h-64 bg-cover bg-center'
                    style={{ backgroundImage: `url(${activity.image})` }}>
                    <div className='absolute inset-0 bg-gradient-primary/80 flex items-center justify-center'>
                      <div className='text-center text-white'>
                        <div
                          className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <activity.icon className='w-8 h-8 text-white' />
                        </div>
                        <Badge className='bg-white/20 text-white border-white/30'>
                          {activity.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className='p-6'>
                  <h3 className='text-xl font-heading font-semibold mb-3'>
                    {activity.title}
                  </h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {activity.description}
                  </p>

                  {/* Progress Section */}
                  <div className='space-y-3 mb-6'>
                    <div className='flex justify-between text-sm'>
                      <span className='font-medium'>Goal: {activity.goal}</span>
                      <span className='text-muted-foreground'>
                        Achieved: {activity.raised}
                      </span>
                    </div>

                    <div className='w-full bg-secondary/20 rounded-full h-2'>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${activity.color} transition-all duration-1000`}
                        style={{ width: `${activity.percentage}%` }}></div>
                    </div>

                    <div className='text-right'>
                      <span className='text-lg font-semibold text-primary'>
                        {activity.percentage}%
                      </span>
                    </div>
                  </div>

                  <Button
                    variant='hero'
                    size='sm'
                    onClick={() => setSelectedActivity(activity)}
                    className='w-full'>
                    Learn More <ArrowRight className='ml-2 w-4 h-4' />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development Areas */}
      <section className='py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='mb-6 bg-primary/10 text-primary border-primary/20'>
              Skill Development
            </Badge>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Key Areas of Focus
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              We concentrate our efforts on developing essential skills that
              align with current market demands and future opportunities.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skillAreas.map((skill, index) => (
              <Card
                key={index}
                className='group hover:shadow-hover transition-all duration-300 border-0 shadow-card text-center'>
                <CardContent className='p-6'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <skill.icon className='w-8 h-8 text-primary-foreground' />
                  </div>
                  <h3 className='text-lg font-heading font-semibold mb-3'>
                    {skill.title}
                  </h3>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
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
              Measuring Success Through Numbers
            </h2>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center'>
                <Users className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-3xl font-heading font-bold text-foreground mb-2'>
                2010+
              </h3>
              <p className='text-muted-foreground'>Youth Empowered</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center'>
                <BookOpen className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-3xl font-heading font-bold text-foreground mb-2'>
                50+
              </h3>
              <p className='text-muted-foreground'>Workshops</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center'>
                <Briefcase className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-3xl font-heading font-bold text-foreground mb-2'>
                1200+
              </h3>
              <p className='text-muted-foreground'>Career Connections</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center'>
                <Award className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-3xl font-heading font-bold text-foreground mb-2'>
                25+
              </h3>
              <p className='text-muted-foreground'>Awards & Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${activitiesHero})` }}>
          <div className='absolute inset-0 bg-gradient-hero'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-heading font-bold mb-6'>
              Ready to Join Our Mission?
            </h2>
            <p className='text-lg mb-8 text-white/90 leading-relaxed'>
              Be part of Tanzania's youth empowerment movement. Whether you want
              to participate, volunteer, or support our cause, there's a place
              for you in our community.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='hero' size='lg'>
                Get Involved <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-white hover:text-foreground'>
                Learn More
              </Button>
            </div>
          </div>
        </div>
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
