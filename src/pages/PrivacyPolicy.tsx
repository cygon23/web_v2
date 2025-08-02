import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Privacy Policy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-heading font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Career Na Mimi Organization is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-6">
                We may collect personal information including your name, email address, phone number, and other details you provide when registering for our programs or contacting us.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6">
                We use your information to provide our services, communicate with you about programs and events, and improve our offerings to better serve the youth community.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at info@careernamimi.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;