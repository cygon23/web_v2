import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@careernamimi.org ",
      description: "We respond within 24 hours",
      action: "mailto:info@careernamimi.org ",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+255 617 287 760/673 045 414",
      description: "Mon-Fri 9AM-6PM EST",
      action: "tel:+673045414",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      content: "Chat with our team",
      description: "Available during business hours",
      action: "#",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Njiro ,Arusha Tanzania",
      description: "Bussiness area",
      action: "https://maps.google.com",
    },
  ];

  return (
    <div className={cn("space-y-6", className)}>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2'>
          Get In Touch
        </h2>
        <p className='text-muted-foreground'>
          Multiple ways to reach us - choose what works best for you
        </p>
      </div>

      <div className='grid gap-4'>
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.action}
              className='group relative bg-gradient-glass backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1'>
              {/* Floating icon background */}
              <div className='absolute -top-3 -right-3 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <Icon className='w-5 h-5 text-primary' />
              </div>

              <div className='relative z-10'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft'>
                    <Icon className='w-6 h-6 text-white' />
                  </div>

                  <div className='flex-1'>
                    <h3 className='font-semibold text-foreground group-hover:text-primary transition-colors'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-muted-foreground mb-1'>
                      {item.content}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Additional info */}
      <div className='bg-gradient-glass backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-soft'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center'>
            <Clock className='w-5 h-5 text-white' />
          </div>
          <h3 className='font-semibold text-foreground'>Business Hours</h3>
        </div>

        <div className='space-y-2 text-sm text-muted-foreground'>
          <div className='flex justify-between'>
            <span>Monday - Friday</span>
            <span>9:00 AM - 6:00 PM EST</span>
          </div>
          <div className='flex justify-between'>
            <span>Saturday</span>
            <span>10:00 AM - 4:00 PM EST</span>
          </div>
          <div className='flex justify-between'>
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
