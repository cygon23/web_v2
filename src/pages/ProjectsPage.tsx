import React, { useState } from "react";
import {
  Users,
  BarChart3,
  Briefcase,
  FileText,
  ExternalLink,
  MessageSquare,
  Heart,
  Star,
  TrendingUp,
  Award,
  X,
  Send,
  Building,
  Lightbulb,
  Target,
  Globe,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
    type: "feedback",
  });

  const projects = [
    {
      id: 1,
      name: "Career Hub Platform",
      description:
        "Comprehensive platform for career development and opportunities",
      longDescription:
        "A revolutionary career development platform that connects students, professionals, and employers. Features include job matching, skill assessments, career path recommendations, and mentorship programs.",
      icon: Briefcase,
      link: "https://caeerhub-platform.vercel.app/",
      color: "bg-green-50 text-green-600",
      gradient: "from-green-500 to-emerald-600",
      category: "Career Development",
      impact: {
        users: "150+",
        placements: "205+",
        rating: 4.8,
      },
      features: [
        "AI-powered job matching",
        "Skills assessment tools",
        "1-on-1 mentorship",
        "Career path guidance",
      ],
      targetAudience: "Recent graduates, career changers, young professionals",
      builtFor: "Job seekers seeking career advancement and skill development",
      technologies: ["React", "FastAPI", "AI/ML", "SuperBase"],
      partners: ["Local Universities", "Tech Companies", "HR Agencies"],
      stats: [
        { label: "Active Users", value: "1000+", icon: Users },
        { label: "Job Placements", value: "200+", icon: Target },
        { label: "Success Rate", value: "85%", icon: TrendingUp },
      ],
    },
    {
      id: 2,
      name: "Data Visualization Hub",
      description: "Interactive tools and dashboards for data insights",
      longDescription:
        "Advanced data visualization platform providing interactive dashboards, real-time analytics, and business intelligence tools for data-driven decision making.",
      icon: BarChart3,
      link: "https://data-visualization-sooty.vercel.app/",
      color: "bg-purple-50 text-purple-600",
      gradient: "from-purple-500 to-indigo-600",
      category: "Analytics & Insights",
      impact: {
        users: "8K+",
        organizations: "150+",
        rating: 4.7,
      },
      features: [
        "Real-time dashboards",
        "Custom chart builder",
        "Data export tools",
        "Collaborative analytics",
      ],
      targetAudience: "Data analysts, business leaders, researchers",
      builtFor: "Organizations requiring data-driven insights and reporting",
      technologies: ["D3.js", "React", "Python", "PostgreSQL"],
      partners: ["Research Institutes", "NGOs", "Government Agencies"],
      stats: [
        { label: "Organizations", value: "150+", icon: Building },
        { label: "Dashboards Created", value: "16+", icon: BarChart3 },
        { label: "Data Points Processed", value: "600+", icon: Globe },
      ],
    },
    {
      id: 3,
      name: "Our Community Platform",
      description:
        "Connect with like-minded professionals and share experiences",
      longDescription:
        "A vibrant community platform where professionals share experiences, collaborate on projects, and build meaningful connections across different industries.",
      icon: Users,
      link: "#",
      color: "bg-blue-50 text-blue-600",
      gradient: "from-blue-500 to-cyan-600",
      category: "Community & Networking",
      impact: {
        users: "Coming Soon",
        connections: "N/A",
        rating: "N/A",
      },
      features: [
        "Professional networking",
        "Industry forums",
        "Event organization",
        "Mentorship matching",
      ],
      targetAudience: "All career-focused individuals",
      builtFor: "Building professional networks and knowledge sharing",
      technologies: ["React", "Firebase", "WebRTC", "Node.js"],
      partners: ["Professional Associations", "Industry Leaders"],
      stats: [
        { label: "Expected Users", value: "200+", icon: Users },
        { label: "Industry Sectors", value: "25+", icon: Building },
        { label: "Networking Events", value: "500+", icon: Target },
      ],
      comingSoon: true,
    },
    {
      id: 4,
      name: "HR AI Platform",
      description: "Find opportunities and connect with potential employers",
      longDescription:
        "AI-powered HR platform that streamlines recruitment processes, matches candidates with opportunities, and provides comprehensive talent management solutions.",
      icon: FileText,
      link: "https://hr-a-ipowerd.vercel.app/",
      color: "bg-orange-50 text-orange-600",
      gradient: "from-orange-500 to-red-600",
      category: "Human Resources",
      impact: {
        users: "100+",
        hires: "100+",
        rating: 4.6,
      },
      features: [
        "AI candidate matching",
        "Automated screening",
        "Interview scheduling",
        "Performance tracking",
      ],
      targetAudience: "HR professionals, recruiters, hiring managers",
      builtFor: "Streamlining recruitment and talent management processes",
      technologies: ["AI/ML", "React", "Node.js", "PostgreSQL"],
      partners: ["Recruitment Agencies", "Corporate HR Departments"],
      stats: [
        { label: "Successful Hires", value: "100+", icon: Award },
        { label: "HR Teams", value: "20+", icon: Users },
        { label: "Time Saved", value: "60%", icon: TrendingUp },
      ],
    },
    {
      id: 5,
      name: "Tanzania Biz Platform",
      description:
        "A modern platform to showcase and connect Tanzanian businesses.",
      longDescription:
        "Tanzania Biz is designed to highlight, promote, and connect local businesses across different industries. The platform will serve as a digital hub where entrepreneurs, startups, and SMEs can showcase their work, attract partners, and reach customers nationwide and globally.",
      icon: BarChart3,
      link: "https://tanzania-biz.vercel.app/",
      color: "bg-blue-50 text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      category: "Business & Entrepreneurship",
      comingSoon: true,
      impact: {
        users: "N/A",
        placements: "N/A",
        rating: "N/A",
      },
      features: [
        "Business directory & profiles",
        "Partner matching tools",
        "Resource center for SMEs",
        "Networking & events",
      ],
      targetAudience: "Local entrepreneurs, startups, SMEs, investors",
      builtFor:
        "Businesses in Tanzania looking for visibility, growth opportunities, and partnerships",
      technologies: ["React", "Tailwind", "Python", "PostgreSQL"],
      partners: ["Local Chambers of Commerce", "SME Networks", "Investors"],
      stats: [
        { label: "Businesses Listed", value: "Coming Soon", icon: Users },
        { label: "Active Partnerships", value: "Coming Soon", icon: Briefcase },
        { label: "Growth Rate", value: "Coming Soon", icon: TrendingUp },
      ],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    //  backend
    alert("Thank you for your feedback! We'll get back to you soon.");
    setFeedback({ name: "", email: "", message: "", type: "feedback" });
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-300 mb-0'>
      <Navigation />
      {/* Header Section */}
      <div className='relative overflow-hidden bg-gradient-to-r from-pink-600 to-pink-400 text-white'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='container mx-auto px-4 py-20 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
              <Lightbulb className='w-5 h-5' />
              <span className='text-sm font-medium'>Innovative Solutions</span>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent'>
              Our Project Portfolio
            </h1>
            <p className='text-xl text-pink-100 mb-8 leading-relaxed'>
              Discover the innovative platforms and solutions we've built to
              empower careers, enhance skills, and create opportunities for the
              next generation of professionals.
            </p>
            <div className='flex flex-wrap justify-center gap-4 text-sm'>
              <div className='bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                <span className='font-semibold'>50K+</span> Users Impacted
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                <span className='font-semibold'>4</span> Active Platforms
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                <span className='font-semibold'>95%</span> User Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-pulse'
          style={{ animationDelay: "1s" }}></div>
      </div>
      {/* Projects Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 hover:border-pink-200'
              onClick={() => handleProjectClick(project)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}>
              {project.comingSoon && (
                <div className='absolute top-4 right-4 z-10'>
                  <span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg'>
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div
                className={`p-8 bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='relative z-10'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center'>
                      <project.icon className='w-7 h-7' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold mb-1'>{project.name}</h3>
                      <p className='text-sm text-white/80'>
                        {project.category}
                      </p>
                    </div>
                    {!project.comingSoon && (
                      <div className='flex items-center space-x-1'>
                        <Star className='w-4 h-4 text-yellow-300 fill-current' />
                        <span className='text-sm font-medium'>
                          {project.impact.rating}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className='text-white/90 text-sm leading-relaxed'>
                    {project.description}
                  </p>
                </div>
                <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl'></div>
              </div>

              {/* Card Body */}
              <div className='p-8'>
                <div className='space-y-6'>
                  {/* Impact Stats */}
                  <div className='grid grid-cols-3 gap-4'>
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className='text-center'>
                        <div className='w-10 h-10 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center'>
                          <stat.icon className='w-5 h-5 text-gray-600' />
                        </div>
                        <div className='text-lg font-bold text-gray-900'>
                          {stat.value}
                        </div>
                        <div className='text-xs text-gray-500'>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-3'>
                      Key Features
                    </h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {project.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center space-x-2'>
                          <div className='w-1.5 h-1.5 bg-pink-500 rounded-full'></div>
                          <span className='text-sm text-gray-600'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex space-x-3 pt-4 border-t border-gray-100'>
                    {!project.comingSoon && (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center space-x-2'
                        onClick={(e) => e.stopPropagation()}>
                        <ExternalLink className='w-4 h-4' />
                        <span>Visit Platform</span>
                      </a>
                    )}
                    <button className='flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-all hover:from-pink-600 hover:to-purple-700 flex items-center justify-center space-x-2'>
                      <MessageSquare className='w-4 h-4' />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className='bg-gradient-to-r from-pink-600 to-pink-400 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Have a Project Idea?</h2>
          <p className='text-pink-100 mb-8 text-lg max-w-2xl mx-auto'>
            We're always looking to collaborate and build innovative solutions.
            Share your ideas, suggestions, or partnership opportunities with us.
          </p>
          <button
            onClick={() => {
              setSelectedProject(null);
              setIsModalOpen(true);
            }}
            className='bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center space-x-2'>
            <Send className='w-5 h-5' />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75'
              onClick={() => setIsModalOpen(false)}></div>

            <div className='inline-block w-full max-w-4xl p-8 my-8 text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl'>
              <div className='flex justify-between items-start mb-6'>
                <div>
                  {selectedProject ? (
                    <div>
                      <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                        {selectedProject.name}
                      </h2>
                      <p className='text-gray-600'>
                        {selectedProject.category}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                        Get In Touch
                      </h2>
                      <p className='text-gray-600'>
                        Share your ideas or feedback with us
                      </p>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='text-gray-400 hover:text-gray-600 transition-colors'>
                  <X className='w-6 h-6' />
                </button>
              </div>

              {selectedProject ? (
                <div className='space-y-8'>
                  {/* Project Details */}
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-3'>
                      About This Project
                    </h3>
                    <p className='text-gray-700 leading-relaxed'>
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-3'>
                        Target Audience
                      </h3>
                      <p className='text-gray-700 mb-6'>
                        {selectedProject.targetAudience}
                      </p>

                      <h3 className='font-semibold text-gray-900 mb-3'>
                        Built For
                      </h3>
                      <p className='text-gray-700'>
                        {selectedProject.builtFor}
                      </p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-3'>
                        Technologies
                      </h3>
                      <div className='flex flex-wrap gap-2 mb-6'>
                        {selectedProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className='font-semibold text-gray-900 mb-3'>
                        Partners
                      </h3>
                      <ul className='space-y-2'>
                        {selectedProject.partners.map((partner, idx) => (
                          <li
                            key={idx}
                            className='text-gray-700 flex items-center space-x-2'>
                            <Heart className='w-4 h-4 text-pink-500' />
                            <span>{partner}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex space-x-4 pt-6 border-t border-gray-200'>
                    {!selectedProject.comingSoon && (
                      <a
                        href={selectedProject.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all flex items-center space-x-2'>
                        <ExternalLink className='w-4 h-4' />
                        <span>Visit Platform</span>
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        setFeedback({ ...feedback, type: "project-inquiry" });
                      }}
                      className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2'>
                      <MessageSquare className='w-4 h-4' />
                      <span>Ask Question</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleFeedbackSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={feedback.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                        placeholder='Your full name'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Email *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={feedback.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                        placeholder='your.email@example.com'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Type
                    </label>
                    <select
                      name='type'
                      value={feedback.type}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent'>
                      <option value='feedback'>General Feedback</option>
                      <option value='suggestion'>Suggestion</option>
                      <option value='partnership'>
                        Partnership Opportunity
                      </option>
                      <option value='project-inquiry'>Project Inquiry</option>
                      <option value='sponsorship'>Sponsorship</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Message *
                    </label>
                    <textarea
                      name='message'
                      value={feedback.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                      placeholder='Tell us about your idea, feedback, or inquiry...'></textarea>
                  </div>

                  <div className='flex justify-end space-x-4'>
                    <button
                      type='button'
                      onClick={() => setIsModalOpen(false)}
                      className='px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'>
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all flex items-center space-x-2'>
                      <Send className='w-4 h-4' />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Footer CTA */}
      <div className='bg-white py-12 border-t border-gray-200'>
        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-3xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Empowering Careers Through Innovation
            </h3>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Each of our projects is designed with a single mission: to empower
              youth and professionals with the tools, opportunities, and
              connections they need to succeed in their careers. Join thousands
              of users who have already transformed their professional journeys
              with our platforms.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <div className='bg-pink-50 px-6 py-3 rounded-full'>
                <span className='text-pink-600 font-semibold'>50,000+</span>
                <span className='text-gray-600 ml-2'>Lives Impacted</span>
              </div>
              <div className='bg-purple-50 px-6 py-3 rounded-full'>
                <span className='text-pink-600 font-semibold'>95%</span>
                <span className='text-gray-600 ml-2'>Success Rate</span>
              </div>
              <div className='bg-blue-50 px-6 py-3 rounded-full'>
                <span className='text-blue-600 font-semibold'>24/7</span>
                <span className='text-gray-600 ml-2'>Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
