import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Camera,
  Leaf,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Check,
  MapPin,
  ShoppingCart,
  MessageSquare,
  Bell,
  Bot,
  Eye,
  Settings,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapIcon,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";


const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
   const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const features = [
    {
      icon: Camera,
      title: "AI-Powered Detection",
      description:
        "Advanced algorithms trained on Tanzanian crop diseases including maize lethal necrosis, coffee berry disease, and rice blast.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get immediate diagnosis in English or Swahili within seconds, even with limited internet connectivity.",
    },
    {
      icon: Shield,
      title: "Local Prevention Guide",
      description:
        "Receive expert advice tailored to Tanzania's climate, soil conditions, and available agricultural inputs.",
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description:
        "Improve crop health using locally available solutions and maximize your harvest for both food security and market sales.",
    },
  ];

  const stats = [
    { number: "94.2%", label: "Accuracy Rate" },
    { number: "5,200+", label: "Tanzanian Farmers" },
    { number: "25+", label: "Local Crop Types" },
    { number: "24/7", label: "Swahili Support" },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "TZS 0",
      period: "daima",
      description:
        "Perfect for smallholder farmers starting their digital agriculture journey",
      features: [
        { icon: Camera, text: "Basic image uploads and disease analysis" },
        { icon: MapPin, text: "Location-based tips for your region" },
        { icon: Users, text: "24/7 community support (Swahili/English)" },
      ],
      buttonText: "Anza Bure",
      popular: false,
    },
    {
      name: "Basic",
      price: "TZS 35,000",
      period: "kwa mwezi",
      description:
        "Enhanced features for growing agricultural operations across Tanzania",
      features: [
        { icon: Camera, text: "Advanced crop disease analysis" },
        { icon: MapPin, text: "Regional weather and soil condition tips" },
        { icon: ShoppingCart, text: "Local market price recommendations" },
        { icon: MessageSquare, text: "Access to agricultural input dealers" },
        { icon: Bell, text: "SMS tips and planting reminders" },
        { icon: Users, text: "24/7 expert support (Swahili/English)" },
      ],
      buttonText: "Chagua Basic",
      popular: true,
    },
    {
      name: "Pro",
      price: "TZS 89,000",
      period: "kwa mwezi",
      description:
        "Complete solution for commercial farms and agricultural cooperatives",
      features: [
        { icon: Camera, text: "Everything in Basic plan" },
        { icon: Settings, text: "IoT sensors for soil & weather monitoring" },
        { icon: Bot, text: "AI chatbot assistant (Swahili/English)" },
        { icon: Eye, text: "Drone integration and field monitoring" },
        { icon: TrendingUp, text: "Advanced analytics and yield predictions" },
        { icon: Users, text: "24/7 priority support with agronomist" },
      ],
      buttonText: "Jaribu Pro",
      popular: false,
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Navigation */}
      <nav className='bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Leaf className='w-8 h-8 text-primary' />
              <span className='text-xl font-bold text-primary'>AgriCareAI</span>
            </div>
            <div className='hidden md:flex items-center gap-6'>
              <a
                href='#features'
                className='text-muted-foreground hover:text-primary'>
                Features
              </a>
              <a
                href='#pricing'
                className='text-muted-foreground hover:text-primary'>
                Pricing
              </a>
              <a
                href='#about'
                className='text-muted-foreground hover:text-primary'>
                About
              </a>
              <Button
                variant='outline'
                onClick={() => handleNavigation("/dashboard")}>
                Dashboard
              </Button>
              <Button
                variant='hero'
                onClick={() => handleNavigation("/auth")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-accent via-background to-primary/5'>
        <div className='absolute inset-0 bg-gradient-to-r from-background/80 to-background/40' />
        <div className='relative container mx-auto px-4 py-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
                  <span className='text-primary'>AI-Powered</span>
                  <br />
                  Crop Disease
                  <br />
                  Detection for
                  <br />
                  <span className='text-primary'>SME's</span>
                </h1>
                <p className='text-xl text-muted-foreground leading-relaxed'>
                  Protect your maize, coffee, rice, and cash crops with
                  cutting-edge AI technology designed for Tanzanian farmers.
                  Upload plant images and get instant disease diagnosis with
                  locally-relevant treatment recommendations.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  variant='hero'
                  size='lg'
                  onClick={() => handleNavigation("/auth")}
                  className='text-lg px-8'>
                  <Camera className='mr-2' />
                  Start Diagnosis
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={() => handleNavigation("/dashboard")}
                  className='text-lg px-8'>
                  View Dashboard
                </Button>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-8'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-primary'>
                      {stat.number}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <div className='relative rounded-2xl overflow-hidden shadow-strong'>
                <img
                  src={heroImage}
                  alt='Farmer using AgriCareAI'
                  className='w-full h-auto'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Why Choose <span className='text-primary'>AgriCareAI</span>?
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Advanced AI technology meets local agricultural expertise to
              protect Tanzanian crops and increase harvests for food security
              and income.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='shadow-medium hover:shadow-strong transition-shadow'>
                <CardHeader className='text-center'>
                  <div className='w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                    <feature.icon className='w-8 h-8 text-primary' />
                  </div>
                  <CardTitle className='text-lg'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-center'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Choose Your <span className='text-primary'>Plan</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Start free and upgrade as your farm grows. All plans include
              Swahili language support and local agricultural expertise.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-medium hover:shadow-strong transition-all ${
                  plan.popular
                    ? "border-primary ring-2 ring-primary/20 scale-105"
                    : ""
                }`}>
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium'>
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className='text-center pb-8'>
                  <CardTitle className='text-2xl font-bold'>
                    {plan.name}
                  </CardTitle>
                  <div className='mt-4'>
                    <span className='text-4xl font-bold text-primary'>
                      {plan.price}
                    </span>
                    <span className='text-muted-foreground ml-2'>
                      /{plan.period}
                    </span>
                  </div>
                  <CardDescription className='mt-4 text-base'>
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className='space-y-6'>
                  <ul className='space-y-4'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-start gap-3'>
                        <div className='w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <feature.icon className='w-3 h-3 text-primary' />
                        </div>
                        <span className='text-sm text-muted-foreground'>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size='lg'
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      handleNavigation("/auth");
                    }}>
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='text-center mt-12'>
            <p className='text-muted-foreground'>
              All plans support Tanzanian crops including maize, rice, coffee,
              cotton, cashew nuts, and vegetables. Payment available via M-Pesa,
              Tigo Pesa, and bank transfer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-primary to-primary-glow'>
        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-3xl mx-auto space-y-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground'>
              Uko Tayari Kulinda Mazao Yako?
            </h2>
            <p className='text-xl text-primary-foreground/90'>
              Join thousands of Tanzanian farmers who trust AgriCareAI for early
              disease detection and improved harvests across all regions.
            </p>
            <Button
              variant='secondary'
              size='lg'
              onClick={() => handleNavigation("/auth")}
              className='text-lg px-8'>
              <Camera className='mr-2' />
              Pakia Picha ya Kwanza
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-foreground text-background py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
            {/* Company Info */}
            <div className='lg:col-span-2 space-y-4'>
              <div className='flex items-center gap-2 mb-4'>
                <Leaf className='w-8 h-8 text-primary' />
                <span className='text-2xl font-bold text-primary'>
                  AgriCareAI
                </span>
              </div>
              <p className='text-background/70 text-sm leading-relaxed'>
                Empowering Tanzanian farmers with AI-driven crop disease
                detection and local agricultural solutions. Supporting food
                security and sustainable farming across all regions of Tanzania.
              </p>
              <div className='space-y-2 text-sm'>
                <div className='flex items-center gap-2 text-background/70'>
                  <MapIcon className='w-4 h-4' />
                  <span>Arusha, Tanzania</span>
                </div>
                <div className='flex items-center gap-2 text-background/70'>
                  <Phone className='w-4 h-4' />
                  <span>+255 123 456 789</span>
                </div>
                <div className='flex items-center gap-2 text-background/70'>
                  <Mail className='w-4 h-4' />
                  <span>info@agricareai.co.tz</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className='space-y-4'>
              <h4 className='font-semibold text-background'>Services</h4>
              <ul className='space-y-2 text-sm text-background/70'>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Crop Disease Detection
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    IoT Monitoring
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Market Analytics
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Weather Forecasting
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Agronomist Consultation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Training Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className='space-y-4'>
              <h4 className='font-semibold text-background'>Support</h4>
              <ul className='space-y-2 text-sm text-background/70'>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    User Guide
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Report Issues
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Feature Requests
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className='space-y-4'>
              <h4 className='font-semibold text-background'>Company</h4>
              <ul className='space-y-2 text-sm text-background/70'>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Partners Section */}
          <div className='border-t border-background/20 pt-8 mb-8'>
            <h4 className='font-semibold text-background mb-4 text-center'>
              Our Partners
            </h4>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60'>
              <div className='text-center'>
                <div className='bg-background/10 rounded-lg p-3 mb-2'>
                  <span className='text-xs text-background/70'>USAID</span>
                </div>
              </div>
              <div className='text-center'>
                <div className='bg-background/10 rounded-lg p-3 mb-2'>
                  <span className='text-xs text-background/70'>World Bank</span>
                </div>
              </div>
              <div className='text-center'>
                <div className='bg-background/10 rounded-lg p-3 mb-2'>
                  <span className='text-xs text-background/70'>CGIAR</span>
                </div>
              </div>
              <div className='text-center'>
                <div className='bg-background/10 rounded-lg p-3 mb-2'>
                  <span className='text-xs text-background/70'>IITA</span>
                </div>
              </div>
              <div className='text-center'>
                <div className='bg-background/10 rounded-lg p-3 mb-2'>
                  <span className='text-xs text-background/70'>IFAD</span>
                </div>
              </div>
              <div className='text-center'>
                <div className='bg-background/10 rounded-lg p-3 mb-2'>
                  <span className='text-xs text-background/70'>FAO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Section */}
          <div className='bg-background/5 rounded-lg p-6 mb-8'>
            <div className='text-center space-y-4'>
              <h4 className='font-semibold text-background'>
                Support Our Mission
              </h4>
              <p className='text-background/70 text-sm'>
                Help us reach more smallholder farmers across Tanzania and
                improve food security through technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <Button
                  variant='outline'
                  className='bg-transparent border-background/30 text-background hover:bg-background/10'
                  onClick={() => handleNavigation("/donate")}>
                  Donate Now
                </Button>
                <Button
                  variant='outline'
                  className='bg-transparent border-background/30 text-background hover:bg-background/10'
                  onClick={() => handleNavigation("/volunteer")}>
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className='border-t border-background/20 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <div className='text-sm text-background/70'>
                <span>© 2024 AgriCareAI Tanzania</span>
                <span className='mx-2'>•</span>
                <span>Kwa wakulima, na wakulima</span>
              </div>

              <div className='flex items-center gap-4'>
                <span className='text-sm text-background/70 mr-2'>
                  Follow us:
                </span>
                <div className='flex gap-3'>
                  <a
                    href='#'
                    className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'>
                    <Facebook className='w-4 h-4 text-background hover:text-background' />
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'>
                    <Twitter className='w-4 h-4 text-background hover:text-background' />
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'>
                    <Instagram className='w-4 h-4 text-background hover:text-background' />
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'>
                    <Mail className='w-4 h-4 text-background hover:text-background' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
