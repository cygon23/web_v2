import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Scale, Globe, UserCheck, Zap, ChevronRight, FileCheck, ShieldAlert, Gavel } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useState } from "react";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    { id: "acceptance", title: "Acceptance", icon: FileCheck },
    { id: "conduct", title: "User Conduct", icon: UserCheck },
    { id: "membership", title: "Membership", icon: Zap },
    { id: "intellectual", title: "Intellectual Property", icon: Scale },
    { id: "external", title: "External Links", icon: Globe },
    { id: "liability", title: "Liability", icon: ShieldAlert },
    { id: "governance", title: "Governance", icon: Gavel },
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
        title="Terms of Service" 
        description="Review the terms and conditions for using the Career Na Mimi platform and participating in our youth empowerment programs."
        canonical="/terms"
      />
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block sticky top-32 h-fit space-y-2">
              <div className="mb-6 px-4">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">Protocol Index</h2>
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
                  Legal Framework
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 text-slate-900 tracking-tight">
                  Terms of <span className="text-primary">Service</span>
                </h1>
                <p className="text-lg text-slate-500 font-medium">
                  Last updated: April 12, 2026
                </p>
              </motion.div>

              {/* Acceptance of Terms */}
              <div id="acceptance" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">1. Acceptance of Terms</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    By accessing and using Career Na Mimi Organization's digital ecosystem, you signify your irrevocable acceptance of these terms. If you do not agree to these protocols, please refrain from using our services or participating in our programs.
                  </p>
                </div>
              </div>

              {/* User Conduct */}
              <div id="conduct" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">2. User Conduct</h2>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">
                    As a user of our platform, you agree to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Provide accurate and truthful information during registration",
                      "Maintain the confidentiality of your account credentials",
                      "Interacting with the community with respect and professionalism",
                      "Abstain from any activity that disrupts our digital services"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Membership Portal */}
              <div id="membership" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">3. Membership Portal</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Access to our professional membership tiers is subject to specific criteria and organization approval. We reserve the right to terminate or suspend access to anybody who violates our core values or community guidelines.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">4. Intellectual Property</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    All proprietary code, AI career tools, design systems, and program curricula are the exclusive property of Career Na Mimi Organization. No part of our ecosystem may be reproduced without explicit written authorization.
                  </p>
                </div>
              </div>

              {/* External Links */}
              <div id="external" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">5. External Portals</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Our site links to external platforms including our specialized app (app.careernamimii.org). These portals are governed by their own specific security protocols and terms, which you should review upon entry.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div id="liability" className="mb-16 scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">6. Limitation of Liability</h2>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Career Na Mimi provides its services on an "as is" basis. We shall not be held liable for any indirect, incidental, or consequential damages resulting from your use of the platform or program participation.
                  </p>
                </div>
              </div>

              {/* Governance */}
              <div id="governance" className="mb-16 scroll-mt-32">
                <div className="bg-primary/5 rounded-[2.5rem] p-10 md:p-16 border border-primary/10 shadow-lg shadow-primary/5">
                  <h2 className="text-3xl font-black mb-6 text-slate-900">7. Governance & Authority</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    These terms are governed by the laws of the United Republic of Tanzania. Any disputes shall be resolved within the jurisdictional framework of Arusha, Tanzania.
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:legal@careernamimii.org" className="flex items-center gap-3 text-primary font-black text-xl hover:scale-105 transition-transform origin-left">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                      legal@careernamimii.org
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

export default TermsOfService;

