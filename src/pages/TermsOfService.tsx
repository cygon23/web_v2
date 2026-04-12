import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Scale, Globe, UserCheck, Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  const sections = [
    {
      icon: Globe,
      title: "Global Usage",
      content: "By accessing Career Na Mimi, you agree to comply with all local and international laws. Our platform is designed for youth empowerment and professional development across Africa and the globe."
    },
    {
      icon: UserCheck,
      title: "User Conduct",
      content: "Users must provide accurate information when registering for membership or submitting reviews. Any form of harassment, hate speech, or malicious behavior will result in immediate termination of access."
    },
    {
      icon: Zap,
      title: "Membership Portal",
      content: "Access to the 'Become a Member' portal is subject to specific registration criteria. Career Na Mimi reserves the right to manage membership status based on adherence to our organization's values."
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: "All content, including AI career tools, program materials, and creative assets, is the property of Career Na Mimi Organization and protected by intellectual property laws."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Terms of Service" 
        description="Review the terms and conditions for using the Career Na Mimi platform and participating in our youth empowerment programs."
        canonical="/terms"
      />
      <Navigation />
      
      <section className="pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
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

            {/* Grid Sections */}
            <div className="grid gap-8 mb-16">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group hover:border-primary/20 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <section.icon className="w-7 h-7 text-slate-900 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Detailed Content */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black mb-6 text-slate-900">1. Acceptance of Terms</h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  By using this website, you signify your acceptance of these terms. If you do not agree, please refrain from using our services. Your continued use of the site following changes to these terms will be deemed your acceptance of those changes.
                </p>

                <h2 className="text-3xl font-black mb-6 text-slate-900">2. External Links</h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  Our platform includes links to external portals (e.g., app.careernamimii.org). While we strive for excellence, we represent that these external portals are governed by their own specific terms and conditions.
                </p>

                <h2 className="text-3xl font-black mb-6 text-slate-900">3. Limitation of Liability</h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  Career Na Mimi Organization shall not be held liable for any damages that arise out of the use or inability to use the materials on our platform, even if we have been notified of the possibility of such damage.
                </p>

                <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ChevronRight className="text-primary" /> Authority
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Any disputes arising from these terms will be governed by the laws of the United Republic of Tanzania.
                  </p>
                  <a href="mailto:legal@careernamimii.org" className="text-primary font-bold hover:underline">
                    legal@careernamimii.org
                  </a>
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
