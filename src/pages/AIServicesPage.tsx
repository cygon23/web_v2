import React, { useState, useEffect } from "react";
import {
  Brain,
  Shield,
  Palette,
  MessageSquare,
  Zap,
  TrendingUp,
  Code,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Sparkles,
  Network,
  Bot,
  PenTool,
  Send,
  X,
  Phone,
  Mail,
  Calendar,
  Rocket,
  Database,
  Cpu,
  Lightbulb,
  Target,
  Settings,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  });

  // Scroll animation hooks
  const servicesSection = useScrollAnimation({ threshold: 0.1 });
  const processSection = useScrollAnimation({ threshold: 0.1 });
  const testimonialsSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: "AI Web & Mobile Development",
      subtitle: "Intelligent Apps That Transform User Experience",
      description:
        "We craft cutting-edge web and mobile applications powered by advanced AI technologies including RAG, NLP, and intelligent automation to create solutions that don't just meet user needs—they anticipate them.",
      icon: Brain,
      gradient: "from-primary via-primary/90 to-primary",
      features: [
        "RAG-powered intelligent search and content generation",
        "Natural Language Processing for human-like interactions",
        "AI agents for automated customer support",
        "Predictive analytics and personalization",
        "Voice and image recognition integration",
        "Smart automation workflows",
      ],
      technologies: [
        "LangChain",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "Hugging Face",
        "LangChain",
        "React/React Native",
      ],
      deliverables: [
        "Custom AI Models",
        "Responsive Web Apps",
        "Cross-platform Mobile Apps",
        "API Integration",
        "Documentation",
        "Training & Support",
      ],
      timeline: "4-12 weeks",
      startingPrice: "$200",
    },
    {
      id: 2,
      title: "Brand Identity & UI/UX Design",
      subtitle: "From Vision to Stunning Visual Reality",
      description:
        "Our creative team transforms your ideas into compelling brand identities and user experiences. Using industry-leading tools like Figma, Adobe Creative Suite, and Canva Pro, we craft designs that captivate and convert.",
      icon: Palette,
      gradient: "from-primary via-primary/90 to-primary",
      features: [
        "Complete brand identity development",
        "Modern UI/UX design for web & mobile",
        "Logo design and brand guidelines",
        "Marketing materials and collateral",
        "Interactive prototypes and wireframes",
        "Design system creation",
      ],
      technologies: [
        "Figma",
        "Adobe Creative Suite",
        "Canva Pro",
        "Sketch",
        "InVision",
        "Principle",
      ],
      deliverables: [
        "Brand Identity Package",
        "UI/UX Design Files",
        "Style Guide",
        "Logo Variations",
        "Marketing Materials",
        "Design Systems",
      ],
      timeline: "2-6 weeks",
      startingPrice: "$50",
    },
    {
      id: 3,
      title: "Cybersecurity & Privacy Consultation",
      subtitle: "Fortress-Level Protection for Digital Assets",
      description:
        "Our cybersecurity experts provide comprehensive security audits, privacy assessments, and implementation strategies to protect your digital infrastructure from evolving threats in today's complex landscape.",
      icon: Shield,
      gradient: "from-primary via-primary/90 to-primary",
      features: [
        "Comprehensive security audits and assessments",
        "Privacy compliance (GDPR, CCPA, etc.)",
        "Vulnerability testing and penetration testing",
        "Security architecture design",
        "Incident response planning",
        "Staff training and security awareness",
      ],
      technologies: [
        "OWASP",
        "Nessus",
        "Wireshark",
        "Metasploit",
        "Burp Suite",
        "SIEM Tools",
      ],
      deliverables: [
        "Security Assessment Report",
        "Compliance Audit",
        "Security Implementation Plan",
        "Training Materials",
        "Monitoring Setup",
        "Ongoing Support",
      ],
      timeline: "3-8 weeks",
      startingPrice: "$250",
    },
    {
      id: 4,
      title: "System Analysis & Architecture",
      subtitle: "Strategic Technology Planning & Optimization",
      description:
        "Our system analysts evaluate your current technology stack, identify optimization opportunities, and design scalable architectures that grow with your business while maintaining peak performance.",
      icon: Network,
      gradient: "from-primary via-primary/90 to-primary",
      features: [
        "Comprehensive system analysis and auditing",
        "Architecture design and optimization",
        "Database design and optimization",
        "Performance tuning and scalability planning",
        "Integration strategy and API design",
        "Technology stack recommendations",
      ],
      technologies: [
        "AWS/Azure/GCP",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "MongoDB",
        "Microservices",
      ],
      deliverables: [
        "System Analysis Report",
        "Architecture Diagrams",
        "Implementation Roadmap",
        "Performance Metrics",
        "Documentation",
        "Migration Plan",
      ],
      timeline: "2-6 weeks",
      startingPrice: "$200",
    },
  ];

  // Duplicate testimonials for endless scrolling effect
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      content:
        "Their AI integration transformed our customer service completely. Response times improved by 80% and user satisfaction skyrocketed.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      position: "Founder, Digital Solutions",
      content:
        "The brand identity they created perfectly captured our vision. Professional, modern, and exactly what we needed to stand out.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Elena Rodriguez",
      position: "Security Director",
      content:
        "Outstanding cybersecurity consultation. They identified vulnerabilities we didn't know existed and provided clear, actionable solutions.",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Williams",
      position: "CEO, InnovateTech",
      content:
        "Exceptional system architecture design. Their recommendations improved our scalability by 300% and reduced operational costs significantly.",
      rating: 5,
      avatar: "DW",
    },
    {
      name: "Lisa Martinez",
      position: "Product Manager, StartupCo",
      content:
        "The mobile app they built exceeded all expectations. The AI features are incredibly intuitive and our users absolutely love it.",
      rating: 5,
      avatar: "LM",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "We dive deep into understanding your needs, goals, and challenges to create a tailored strategy.",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "Design & Architecture",
      description:
        "Our experts design the optimal solution architecture with your specific requirements in mind.",
      icon: PenTool,
    },
    {
      step: 3,
      title: "Development & Implementation",
      description:
        "We bring your vision to life with cutting-edge technology and meticulous attention to detail.",
      icon: Code,
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description:
        "Rigorous testing ensures your solution performs flawlessly under all conditions.",
      icon: Zap,
    },
    {
      step: 5,
      title: "Launch & Support",
      description:
        "We ensure smooth deployment and provide ongoing support to maximize your success.",
      icon: TrendingUp,
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(
        "https://lklswfbrfdmbcpwdgwcz.functions.supabase.co/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactForm),
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      toast({
        title: "Success",
        description: "Thank you! We'll get back to you within 24 hours.",
      });

      setContactForm({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
      setIsContactOpen(false);
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const ActiveIcon = services[activeService].icon;

  return (
    <div className='min-h-screen bg-gradient-to-br from-secondary/20 via-white to-secondary/30'>
      <Navigation />
      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary text-white'>
        <div className='absolute inset-0 bg-black/10'></div>

        {/* Scattered Decorative Particles with Service-themed Icons */}
        <div className='absolute inset-0 pointer-events-none z-[5]'>
          {/* Top Left Area - Innovation */}
          <div className='absolute top-[15%] left-[8%] animate-float opacity-40'>
            <Rocket className='w-9 h-9 text-blue-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }} />
          </div>

          {/* Top Right Area - AI/Brain */}
          <div className='absolute top-[18%] right-[10%] animate-float opacity-50' style={{ animationDelay: '1.5s' }}>
            <Brain className='w-10 h-10 text-purple-300/70' style={{ filter: 'drop-shadow(0 0 10px rgba(216, 180, 254, 0.5))' }} />
          </div>

          {/* Middle Left - Data */}
          <div className='absolute top-[40%] left-[5%] animate-float opacity-45' style={{ animationDelay: '1.2s' }}>
            <Database className='w-9 h-9 text-cyan-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(165, 243, 252, 0.4))' }} />
          </div>

          {/* Middle Right - Design */}
          <div className='absolute top-[45%] right-[7%] animate-float opacity-40' style={{ animationDelay: '0.6s' }}>
            <Palette className='w-8 h-8 text-pink-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))' }} />
          </div>

          {/* Center Right - Processing */}
          <div className='absolute top-[35%] right-[15%] animate-float opacity-35' style={{ animationDelay: '2s' }}>
            <Cpu className='w-7 h-7 text-emerald-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(110, 231, 183, 0.4))' }} />
          </div>

          {/* Bottom Left - Security */}
          <div className='absolute bottom-[25%] left-[12%] animate-float opacity-40' style={{ animationDelay: '0.9s' }}>
            <Shield className='w-9 h-9 text-indigo-300/70' style={{ filter: 'drop-shadow(0 0 8px rgba(165, 180, 252, 0.5))' }} />
          </div>

          {/* Bottom Right - Settings */}
          <div className='absolute bottom-[30%] right-[12%] animate-float opacity-45' style={{ animationDelay: '1.8s' }}>
            <Settings className='w-8 h-8 text-amber-300/70' style={{ filter: 'drop-shadow(0 0 7px rgba(251, 191, 36, 0.4))' }} />
          </div>

          {/* Top Center - Ideas */}
          <div className='absolute top-[25%] left-[45%] animate-float opacity-35' style={{ animationDelay: '2.5s' }}>
            <Lightbulb className='w-7 h-7 text-yellow-200/70' style={{ filter: 'drop-shadow(0 0 6px rgba(254, 240, 138, 0.4))' }} />
          </div>

          {/* Middle Center - Network */}
          <div className='absolute top-[50%] left-[20%] animate-float opacity-30' style={{ animationDelay: '1.6s' }}>
            <Network className='w-7 h-7 text-rose-300/70' style={{ filter: 'drop-shadow(0 0 6px rgba(253, 164, 175, 0.4))' }} />
          </div>

          {/* Accent Stars */}
          <div className='absolute top-[30%] right-[25%] animate-float opacity-30' style={{ animationDelay: '2.2s' }}>
            <Star className='w-6 h-6 text-yellow-200/60' style={{ filter: 'drop-shadow(0 0 5px rgba(254, 240, 138, 0.3))' }} />
          </div>

          <div className='absolute bottom-[35%] left-[25%] animate-float opacity-35' style={{ animationDelay: '1.4s' }}>
            <Sparkles className='w-7 h-7 text-pink-200/60' style={{ filter: 'drop-shadow(0 0 6px rgba(251, 207, 232, 0.3))' }} />
          </div>
        </div>

        {/* Animated background elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>

        <div className='container mx-auto px-4 py-20 relative z-10'>
          <div className='text-center max-w-5xl mx-auto cinematic-fade-in'>
            <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8'>
              <Sparkles className='w-5 h-5' />
              <span className='text-sm font-medium'>AI-Powered Solutions</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold mb-8 leading-tight'>
              Transform Your Vision
              <br />
              <span className='text-4xl md:text-6xl'>Into Digital Reality</span>
            </h1>

            <p className='text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto'>
              We deliver cutting-edge AI solutions, stunning designs, and
              fortress-level security to elevate your business in the digital
              landscape. From intelligent apps to brand identity, we're your
              complete technology partner.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={() => setIsContactOpen(true)}
                className='bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2'>
                <Send className='w-5 h-5' />
                <span>Start Your Project</span>
              </button>
              <button className='border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2'>
                <Play className='w-5 h-5' />
                <span>Watch Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesSection.ref} className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className={`text-center mb-16 scroll-fade-up ${servicesSection.isVisible ? 'visible' : ''}`}>
            <div className='inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6'>
              <Bot className='w-5 h-5' />
              <span className='text-sm font-medium'>Our Core Services</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Comprehensive Tech Solutions
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              From AI-powered applications to cybersecurity consulting, we offer
              end-to-end solutions that drive innovation and growth.
            </p>
          </div>

          <div className='max-w-7xl mx-auto'>
            {/* Service Navigation */}
            <div className='flex flex-wrap justify-center gap-2 mb-12'>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-to-r from-primary via-primary/90 to-primary text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  {service.title.split(" ")[0]} {service.title.split(" ")[1]}
                </button>
              ))}
            </div>

            {/* Active Service Display */}
            <div className='bg-gradient-to-br from-gray-50 to-secondary/20 rounded-3xl p-8 md:p-12 shadow-xl'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${services[activeService].gradient} rounded-2xl mb-6`}>
                    <ActiveIcon className='w-8 h-8 text-white' />
                  </div>

                  <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                    {services[activeService].title}
                  </h3>
                  <p className='text-lg text-primary font-semibold mb-6'>
                    {services[activeService].subtitle}
                  </p>
                  <p className='text-gray-700 mb-8 leading-relaxed text-lg'>
                    {services[activeService].description}
                  </p>

                  <div className='flex flex-wrap gap-4 mb-8'>
                    <div className='bg-white px-4 py-2 rounded-lg shadow-sm'>
                      <span className='text-sm text-gray-500'>Timeline:</span>
                      <span className='font-semibold ml-2'>
                        {services[activeService].timeline}
                      </span>
                    </div>
                    <div className='bg-white px-4 py-2 rounded-lg shadow-sm'>
                      <span className='text-sm text-gray-500'>
                        Starting at:
                      </span>
                      <span className='font-semibold ml-2 text-primary'>
                        {services[activeService].startingPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsContactOpen(true)}
                    className={`bg-gradient-to-r ${services[activeService].gradient} text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}>
                    <span>Get Started Today</span>
                    <ArrowRight className='w-5 h-5' />
                  </button>
                </div>

                <div className='space-y-8'>
                  {/* Features */}
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-4'>
                      Key Features
                    </h4>
                    <div className='space-y-3'>
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className='flex items-start space-x-3'>
                          <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0 mt-0.5' />
                          <span className='text-gray-700'>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-4'>
                      Technologies We Use
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {services[activeService].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className='bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-4'>
                      What You'll Receive
                    </h4>
                    <div className='grid grid-cols-2 gap-3'>
                      {services[activeService].deliverables.map(
                        (deliverable, idx) => (
                          <div
                            key={idx}
                            className='bg-white p-3 rounded-lg shadow-sm'>
                            <span className='text-gray-700 text-sm'>
                              {deliverable}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div ref={processSection.ref} className='py-24 bg-gradient-to-br from-secondary/20 to-transparent'>
        <div className='container mx-auto px-4'>
          <div className={`text-center mb-16 scroll-fade-up ${processSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Our Proven Process
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We follow a systematic approach to ensure every project delivers
              exceptional results on time and within budget.
            </p>
          </div>

          <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-5 gap-8'>
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative scroll-scale ${processSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  {index < process.length - 1 && (
                    <div className='hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary transform translate-x-4'></div>
                  )}
                  <div className='text-center'>
                    <div className='inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-full mb-6 font-bold text-xl shadow-lg'>
                      <step.icon className='w-8 h-8' />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 mb-3'>
                      {step.title}
                    </h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Endless Scrolling Carousel */}
      <div ref={testimonialsSection.ref} className='py-24 bg-white overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className={`text-center mb-16 scroll-fade-up ${testimonialsSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              What Our Clients Say
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with us.
            </p>
          </div>

          {/* Endless Scrolling Testimonials */}
          <div className='relative'>
            <div className='flex animate-scroll-left'>
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className='flex-shrink-0 w-96 mx-4'>
                  <div className='bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full'>
                    <div className='flex items-center mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>
                    <blockquote className='text-gray-700 mb-6 leading-relaxed'>
                      "{testimonial.content}"
                    </blockquote>
                    <div className='flex items-center'>
                      <div className='w-12 h-12 bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-full flex items-center justify-center font-bold mr-4'>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className='font-bold text-gray-900'>
                          {testimonial.name}
                        </div>
                        <div className='text-gray-600 text-sm'>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for endless scroll */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className='flex-shrink-0 w-96 mx-4'>
                  <div className='bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full'>
                    <div className='flex items-center mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>
                    <blockquote className='text-gray-700 mb-6 leading-relaxed'>
                      "{testimonial.content}"
                    </blockquote>
                    <div className='flex items-center'>
                      <div className='w-12 h-12 bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-full flex items-center justify-center font-bold mr-4'>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className='font-bold text-gray-900'>
                          {testimonial.name}
                        </div>
                        <div className='text-gray-600 text-sm'>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaSection.ref} className='py-24 bg-gradient-to-r from-primary via-primary/90 to-primary text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className={`text-center max-w-4xl mx-auto scroll-fade-up ${ctaSection.isVisible ? 'visible' : ''}`}>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-white/90 mb-12 leading-relaxed'>
              Let's discuss your project and explore how our AI-powered
              solutions can accelerate your growth and success.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <button
                onClick={() => setIsContactOpen(true)}
                className='bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2'>
                <Send className='w-5 h-5' />
                <span>Start Your Project</span>
              </button>
              <button className='border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2'>
                <Phone className='w-5 h-5' />
                <span>Schedule a Call</span>
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <Mail className='w-8 h-8 mx-auto mb-3' />
                <div className='font-semibold'>Email Us</div>
                <div className='text-white/80'>service@careernamimi.org</div>
              </div>
              <div className='text-center'>
                <Phone className='w-8 h-8 mx-auto mb-3' />
                <div className='font-semibold'>Call Us</div>
                <div className='text-white/80'>
                  {" "}
                  +255 628 055 646/673 045 414
                </div>
              </div>
              <div className='text-center'>
                <Calendar className='w-8 h-8 mx-auto mb-3' />
                <div className='font-semibold'>Response Time</div>
                <div className='text-white/80'>Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75 backdrop-blur-sm'
              onClick={() => setIsContactOpen(false)}></div>

            <div className='inline-block w-full max-w-2xl p-8 my-8 text-left align-middle transition-all transform bg-white shadow-2xl rounded-3xl'>
              <div className='flex justify-between items-start mb-8'>
                <div>
                  <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                    Let's Start Your Project
                  </h3>
                  <p className='text-gray-600'>
                    Tell us about your vision and we'll make it reality
                  </p>
                </div>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className='text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full'>
                  <X className='w-6 h-6' />
                </button>
              </div>

              <form onSubmit={handleContactSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                      placeholder='your.email@company.com'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Company/Organization
                    </label>
                    <input
                      type='text'
                      name='company'
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                      placeholder='Your company name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Service Interest
                    </label>
                    <select
                      name='service'
                      value={contactForm.service}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'>
                      <option value=''>Select a service</option>
                      <option value='ai-development'>
                        AI Web & Mobile Development
                      </option>
                      <option value='branding-design'>
                        Brand Identity & UI/UX Design
                      </option>
                      <option value='cybersecurity'>
                        Cybersecurity & Privacy
                      </option>
                      <option value='system-analysis'>
                        System Analysis & Architecture
                      </option>
                      <option value='consultation'>General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Project Budget Range
                  </label>
                  <select
                    name='budget'
                    value={contactForm.budget}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'>
                    <option value=''>Select budget range</option>
                    <option value='under-50'>Under $50</option>
                    <option value='100-250'>$100 - $250</option>
                    <option value='250-300'>$250 - $300</option>
                    <option value='500-plus'>$500+</option>
                    <option value='discuss'>Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Project Details *
                  </label>
                  <textarea
                    name='message'
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
                    placeholder='Tell us about your project goals, requirements, and timeline...'></textarea>
                </div>

                <div className='flex justify-end space-x-4 pt-6 border-t border-gray-200'>
                  <button
                    type='button'
                    onClick={() => setIsContactOpen(false)}
                    className='px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium'>
                    Cancel
                  </button>
                  <button
                    type='submit'
                    disabled={submitting}
                    className={`bg-gradient-to-r from-primary via-primary/90 to-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg ${
                      submitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}>
                    <Send className='w-5 h-5' />
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ServicesPage;
