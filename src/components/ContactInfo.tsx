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
      <div className='text-center lg:text-left mb-10'>
        <div className='inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-xl mb-4 shadow-lg'>
          <MessageCircle className='w-7 h-7' />
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
          Multiple Ways to Connect
        </h2>
        <p className='text-gray-600 text-lg'>
          Choose the method that works best for you - we're here to help!
        </p>
      </div>

      <div className='grid gap-5'>
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.action}
              className='group relative bg-gradient-to-br from-white via-secondary/5 to-primary/5 backdrop-blur-xl border-2 border-gray-200 hover:border-primary/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]'>
              {/* Decorative corner accent */}
              <div className='absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300' />

              <div className='relative z-10'>
                <div className='flex items-start gap-5'>
                  <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-r from-primary via-primary/90 to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                    <Icon className='w-7 h-7 text-white' />
                  </div>

                  <div className='flex-1 pt-1'>
                    <h3 className='text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-base text-gray-700 font-medium mb-1'>
                      {item.content}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover arrow indicator */}
              <div className='absolute top-1/2 -translate-y-1/2 right-6 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300'>
                <svg className='w-5 h-5 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </div>
            </a>
          );
        })}
      </div>

      {/* Additional info - Business Hours */}
      <div className='bg-gradient-to-br from-primary via-primary/95 to-primary text-white rounded-2xl p-8 shadow-xl mt-8 relative overflow-hidden'>
        {/* Decorative background */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl' />
        <div className='absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl' />

        <div className='relative z-10'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center'>
              <Clock className='w-6 h-6 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-white'>Business Hours</h3>
          </div>

          <div className='space-y-3 text-base text-white/90'>
            <div className='flex justify-between items-center py-2 border-b border-white/20'>
              <span className='font-medium'>Monday - Friday</span>
              <span className='font-semibold'>9:00 AM - 6:00 PM EST</span>
            </div>
            <div className='flex justify-between items-center py-2 border-b border-white/20'>
              <span className='font-medium'>Saturday</span>
              <span className='font-semibold'>10:00 AM - 4:00 PM EST</span>
            </div>
            <div className='flex justify-between items-center py-2'>
              <span className='font-medium'>Sunday</span>
              <span className='font-semibold'>Closed</span>
            </div>
          </div>

          <div className='mt-6 pt-6 border-t border-white/20'>
            <p className='text-sm text-white/80 text-center'>
              Need urgent assistance? We respond to emails within 24 hours, even on weekends!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
