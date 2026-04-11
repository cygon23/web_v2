import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CircularStat from "@/components/CircularStat";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  X,
  Users,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Target,
  Heart,
  Award,
} from "lucide-react";

//team
import rahmanImg from "@/assets/team/rahman.jpeg";
import abdulImg from "@/assets/team/jofu.jpg";
import karenImg from "@/assets/team/KAREEN.jpg";
import godfreyImg from "@/assets/team/godfrey.jpg";
import echaImg from "@/assets/team/ECHA.jpg";
import jofreyImg from "@/assets/team/02.jpg";
import aishaImg from "@/assets/team/aisha.jpeg";
import ellnoelaImg from "@/assets/team/pa.jpeg";

// Hero Background
import teamHeroImg from "@/assets/gallery/eventG/ai/Pix_198.jpg";

const Team = () => {
  const [isVisible, setIsVisible] = useState({});
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // Scroll animation hooks
  const statsSection = useScrollAnimation({ threshold: 0.1 });
  const teamIntroSection = useScrollAnimation({ threshold: 0.1 });
  const teamGridSection = useScrollAnimation({ threshold: 0.1 });

  // Elevated Team data
  const teamMembers = [
    {
      id: 1,
      name: "Rahman Mbahe",
      role: "Chief Executive Officer",
      image: rahmanImg,
      shortDesc: "Visionary leader driving the mission to empower youth across Africa.",
      description: "As the Chief Executive Officer, Rahman brings an unparalleled visionary perspective to the organization. He is strategically obsessed with architecting large-scale impact and engineering solutions that systematically shatter barriers for African youth. His profound understanding of leadership, coupled with his forward-thinking approach to artificial intelligence and scalable mentorship, places him at the vanguard of youth empowerment in modern Africa.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Executive Leadership", "Strategic Architecture", "AI Integration"],
    },
    {
      id: 3,
      name: "Abdul Swammad",
      role: "Chief Operating Officer",
      image: jofreyImg,
      shortDesc: "Elite operations tactician focused on flawless programmatic execution.",
      description: "Operating at the core of the institution, Abdul is an elite tactician whose operational philosophy ensures every single initiative runs with clockwork precision. By flawlessly aligning cross-departmental operations and continuously optimizing process pipelines, he guarantees that the organization's overarching vision is not just a dream, but an inescapable reality executed with profound efficiency.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Operational Strategy", "Process Optimization", "Tactical Execution"],
    },
    {
      id: 4,
      name: "Karen Kamene",
      role: "Treasurer",
      image: karenImg,
      shortDesc: "Master of corporate finance and robust, transparent treasury operations.",
      description: "Karen represents the absolute financial fortitude of the organization. As a seasoned expert in financial management and resource allocation, she architects the fiscal frameworks that guarantee the long-term sustainability of the platform. Her meticulous attention to treasury operations ensures every resource is channeled toward maximizing youth impact cleanly, efficiently, and transparently.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Financial Architecture", "Resource Management", "Corporate Treasury"],
    },
    {
      id: 5,
      name: "Echa Joseph",
      role: "General Manager",
      image: echaImg,
      shortDesc: "Pioneer spearheading digital presence and organizational cohesion.",
      description: "Echa is an organizational powerhouse that ties the platform's vision directly to its day-to-day execution. As General Manager, his deep expertise in strategy and cross-functional leadership ensures that every department operates in absolute harmony. His proactive technological insight has positioned the platform on the cutting-edge of the digital frontier.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Digital Strategy", "Executive Management", "Organizational Cohesion"],
    },
    {
      id: 7,
      name: "Godfrey Muganyizi",
      role: "Head of Technical Department",
      image: godfreyImg,
      shortDesc: "Engineering backbone, leading advanced digital infrastructure.",
      description: "Godfrey possesses a legendary mastery of systems engineering and artificial intelligence. As the technical brain of the operation, he designs, builds, and fiercely defends the robust digital infrastructure that supports the entire platform. Whether it involves advanced AI implementations, secure Linux environments, or mission-critical cybersecurity, Godfrey is the technical vanguard guarding the mission.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Systems Engineering", "Artificial Intelligence", "Cyber Defense"],
    },
    {
      id: 8,
      name: "Jofrey Lazaro",
      role: "Head of Communications",
      image: abdulImg,
      shortDesc: "Master communicator ensuring the institutional voice dominates in the sector.",
      description: "Jofrey is a luminary in institutional storytelling and communication. His role extends far beyond standard PR—he is tasked with architecting the narrative that defines the organization in the global sphere. With profound experience in pedagogical strategy and brand messaging, Jofrey ensures the platform's mission reaches the masses with absolute clarity and undeniable persuasive power.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Strategic Communications", "Brand Narrative", "Media Relations"],
    },
    {
      id: 9,
      name: "Aisha Othman",
      role: "Secretary",
      image: aishaImg,
      shortDesc: "The operational nucleus of coordination and vital management.",
      description: "Aisha operates as the structural bedrock of the administration. With an uncompromising standard for absolute organization, she orchestrates the complex flow of data and communications across all leadership channels. Her highly specialized coordination abilities form the secure lattice that allows the rest of the executive team to execute massive objectives rapidly and cleanly.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Executive Coordination", "Structural Administration", "Information Flow"],
      customPosition: "center 20%",
    },
    {
      id: 10,
      name: "Noela Albert",
      role: "Public Relation Officer",
      image: ellnoelaImg,
      shortDesc: "Marketing and Public Relations professional driven by strategic communication and stakeholder engagement.",
      description: "Noela is a Marketing and Public Relations professional with experience in building strategic communication, brand visibility, and stakeholder engagement. Her work focuses on creating meaningful connections between organizations and their audiences through well-structured campaigns, events, and communication strategies.\n\nIn addition to her core expertise, she brings strong capabilities in budgeting and management, ensuring efficient use of resources and successful execution of projects from planning to delivery. She has practical experience in coordinating events and initiatives that require both creativity and operational discipline.\n\nShe is particularly interested in projects that create real impact, especially those related to youth development, career growth, and opportunity creation. Noela values collaboration, innovation, and results-driven execution in every engagement she undertakes.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      expertise: ["Marketing & Brand Strategy", "Public Relations", "Event Management", "Budgeting", "Communication", "Partnership Development"],
      customPosition: "center 15%",
    },
  ];

  const stats = [
    { number: "8+", label: "Elite Members", icon: Users, maxValue: 10 },
    { number: "4+", label: "Years Experience", icon: Award, maxValue: 6 },
    { number: "3500+", label: "Youth Impacted", icon: Target, maxValue: 4500 },
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

      {/* Hero Section - Minimalist & Creative */}
      <section className='relative min-h-[85vh] flex items-center justify-start overflow-hidden bg-slate-950'>
        {/* Background Image Setup */}
        <div className='absolute inset-0 overflow-hidden'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-110'
            style={{ backgroundImage: `url(${teamHeroImg})` }}>
          </div>
          {/* Subtle gradient to maintain image clarity while ensuring text readability */}
          <div className='absolute inset-0 bg-slate-950/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/70 sm:to-black/30' />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-50 h-32 bottom-0 top-auto opacity-100' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 flex justify-start lg:ml-[5%]'>
          <div className='max-w-2xl flex flex-col items-start'>
            
            {/* Main Heading */}
            <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-150'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-[1.05] text-white text-left'>
                Our Executive <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-black drop-shadow-lg mt-3'>Vanguard</span>
              </h1>
            </div>

            {/* Description */}
            <div className='animate-in fade-in slide-in-from-bottom duration-700 delay-300 mb-10'>
              <div className='h-1 w-16 bg-green-500 mb-6 rounded-full opacity-80'></div>
              <p className='text-base md:text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed font-medium text-left'>
                Meet the elite minds dedicated to architecting the future of African youth through profound guidance and disruptive capability.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section - Circular Progress Rings */}
      <section ref={statsSection.ref} className='py-20 hidden md:block relative overflow-hidden bg-gray-50'>
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
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-slate-900'>
              Driving Change Through Absolute Excellence
            </h2>
            <div className='h-1 w-20 bg-green-500 mb-8 rounded-full mx-auto'></div>
            <p className='text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed'>
              Our diverse vanguard combines elite expertise, unwavering passion, and a dedication to
              crushing the status quo across Africa. Each
              profile below underscores a unique mastery that makes our mission an uncompromising success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section ref={teamGridSection.ref} className='py-12 bg-gray-50 pb-32'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`group hover:-translate-y-2 transition-all duration-500 border border-slate-200 shadow-sm hover:shadow-2xl overflow-hidden bg-white scroll-scale ${
                  teamGridSection.isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div className='relative overflow-hidden h-72'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[10s] ease-out'
                    style={{
                      objectFit: "cover",
                      objectPosition: member.customPosition || "center top",
                    }}
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300'></div>
                  
                  {/* Text injected in picture area */}
                   <div className='absolute bottom-6 left-6 right-6 transform transition-transform duration-300'>
                     <h3 className='text-2xl font-black text-white drop-shadow-md tracking-wide'>
                       {member.name}
                     </h3>
                     <p className='text-green-400 font-semibold text-sm uppercase tracking-widest mt-1'>
                       {member.role}
                     </p>
                   </div>
                </div>

                <CardContent className='p-6 min-h-[220px] flex flex-col justify-between'>
                  
                  <div className='mb-4 flex-grow'>
                    <p className='text-slate-600 text-[15px] leading-relaxed line-clamp-3'>
                      {member.shortDesc}
                    </p>
                  </div>
                  
                  {/* Clean text instead of badges for Skills */}
                  <div className='mb-6'>
                    <p className='text-xs font-bold uppercase tracking-widest text-slate-400 mb-2'>Core Proficiencies</p>
                    <p className='text-sm text-slate-700 font-medium'>
                       {member.expertise.join(" • ")}
                    </p>
                  </div>

                  <Button
                    variant='outline'
                    onClick={() => setSelectedMember(member)}
                    className='w-full bg-slate-950 text-white hover:bg-green-600 hover:text-white transition-all duration-300 border-0 h-12 font-bold tracking-wide rounded-xl shadow-lg'>
                    View Full Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedMember && (
        <div 
           className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm'
           onClick={() => setSelectedMember(null)}
        >
          <div 
             className='w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300'
             onClick={(e) => e.stopPropagation()}
          >
             <div className='flex flex-col md:flex-row relative'>
               
               {/* Close Button Desktop */}
               <button 
                  className='absolute top-4 right-4 z-10 bg-white/20 hover:bg-black/10 backdrop-blur-md p-2 rounded-full transition-colors'
                  onClick={() => setSelectedMember(null)}
               >
                 <X className='w-6 h-6 text-slate-800' />
               </button>

               {/* Modal Image Area */}
               <div className='w-full md:w-2/5 h-64 md:h-auto relative'>
                  <img src={selectedMember.image} alt={selectedMember.name} 
                    className='w-full h-full object-cover' 
                    style={{ objectPosition: selectedMember.customPosition || "center top" }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80'></div>
                  
                  {/* Socials embedded on photo in modal */}
                  <div className='absolute bottom-6 left-6 flex space-x-3'>
                    <a href={selectedMember.social.linkedin} className='w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:text-white transition-all'>
                      <Linkedin className='w-5 h-5' />
                    </a>
                    <a href={selectedMember.social.twitter} className='w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:text-white transition-all'>
                      <Twitter className='w-5 h-5' />
                    </a>
                  </div>
               </div>

               {/* Modal Content Area */}
               <div className='w-full md:w-3/5 p-8 md:p-12 max-h-[80vh] overflow-y-auto'>
                 <p className='text-green-500 font-bold text-sm tracking-widest uppercase mb-2'>
                    {selectedMember.role}
                 </p>
                 <h2 className='text-3xl md:text-5xl font-black text-slate-900 mb-6'>
                    {selectedMember.name}
                 </h2>
                 <div className='h-1 w-16 bg-slate-200 mb-8'></div>
                 
                 <div className='prose prose-lg text-slate-600 mb-10'>
                   <p className='leading-relaxed whitespace-pre-line'>
                     {selectedMember.description}
                   </p>
                 </div>

                 <div>
                   <h4 className='text-sm font-black uppercase tracking-widest text-slate-900 mb-4'>Architectural Focus</h4>
                   <div className='flex flex-wrap gap-2'>
                     {selectedMember.expertise.map((skill: string, index: number) => (
                       <span key={index} className='px-4 py-2 border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg shadow-sm'>
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Team;
