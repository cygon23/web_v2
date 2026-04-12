import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileText, ChevronRight, Menu } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "data-collection", title: "Data Collection", icon: Lock },
    { id: "usage", title: "Information Usage", icon: Eye },
    { id: "rights", title: "Your Rights", icon: FileText },
    { id: "security", title: "Security", icon: Shield },
    { id: "third-party", title: "Third Parties", icon: Globe },
    { id: "cookies", title: "Cookies", icon: Zap },
    { id: "contact", title: "Contact", icon: ChevronRight },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Privacy Policy" 
        description="Learn how Career Na Mimi protects your data and ensures privacy across our youth empowerment platform."
        canonical="/privacy-policy"
      />
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block sticky top-32 h-fit space-y-2">
              <div className="mb-6 px-4">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">Contents</h2>
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeSection === section.id 
                        ? "bg-primary/10 text-primary shadow-sm" 
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <section.icon className={`w-4 h-4 ${activeSection === section.id ? "text-primary" : "text-slate-400"}`} />
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1">
                  Transparency Protocol
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 text-slate-900 tracking-tight">
                  Privacy <span className="text-primary">Policy</span>
                </h1>
                <p className="text-lg text-slate-500 font-medium">
                  Last updated: April 12, 2026
                </p>
              </motion.div>

              {/* Introduction */}
              <div id="introduction" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">1. Introduction</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Career Na Mimi Organization is committed to protecting your privacy and ensuring the security of your personal information. This Transparency Protocol explains how we collect, use, and safeguard your information when you use our services, mentorship portals, and community platforms.
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div id="data-collection" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">2. Data Collection</h2>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Register for our membership or mentorship programs",
                      "Contact us via our secure digital ecosystem forms",
                      "Submit testimonials or reviews for the community",
                      "Interact with our AI-driven chatbot assistant"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Usage */}
              <div id="usage" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">3. Information Usage</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Your data is used solely to facilitate youth empowerment programs, provide mentorship connections, and improve our AI-driven career tools. We process your data to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm font-bold text-slate-900 mb-1 font-heading">Service Delivery</p>
                      <p className="text-xs text-slate-500">Managing memberships and program access.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm font-bold text-slate-900 mb-1 font-heading">Communication</p>
                      <p className="text-xs text-slate-500">Sending updates about events and workshops.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rights */}
              <div id="rights" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">4. Your Rights</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    As a user of our ecosystem, you hold specific rights regarding your personal information, aligned with the Tanzania Data Protection Act and international GDPR standards.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Access", "Rectification", "Erasure", "Data Portability", "Withdraw Consent"].map((right) => (
                      <Badge key={right} variant="outline" className="text-slate-500 border-slate-200">
                        {right}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Security */}
              <div id="security" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">5. Security Infrastructure</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We implement industry-standard security protocols including 256-bit encryption for data at rest and in transit. All review submissions are protected by Cloudflare Turnstile to ensure human-only interaction and prevent automated attacks.
                  </p>
                </div>
              </div>

              {/* Third-Party */}
              <div id="third-party" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">6. Third-Party Services</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We utilize secure infrastructure partners including Supabase for database management and storage. These partners are strictly vetted and are contractually obligated to maintain high levels of data privacy.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div id="cookies" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">7. Cookies & Analytics</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We use cookies to enhance your experience, remember your preferences, and analyze site traffic anonymously. You can manage your cookie preferences at any time via the consent banner.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-16 scroll-mt-32">
                <div className="bg-primary/5 rounded-[2.5rem] p-10 md:p-16 border border-primary/10 shadow-lg shadow-primary/5">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">8. Questions & Contact</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    If you have any questions about our privacy practices or wish to exercise your rights, please reach out to our team:
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:info@careernamimii.org" className="flex items-center gap-3 text-primary font-black text-xl hover:scale-105 transition-transform origin-left">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                      info@careernamimii.org
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export default PrivacyPolicy;