import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Linkedin, Facebook, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom SVG for TikTok
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32A6.33 6.33 0 0 0 15.7 17.5V9.45a8.21 8.21 0 0 0 4.77 1.52v-3.4a4.83 4.83 0 0 1-1-.08z"/>
  </svg>
)

// Custom SVG for WhatsApp
const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@careernamimii.org",
      description: "We respond within 24 hours",
      action: "mailto:info@careernamimii.org",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+255 628 055 646 / +255 769 721 896",
      description: "Mon-Fri 9AM-5PM EAT",
      action: "tel:+255628055646",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Njiro, Arusha Tanzania",
      description: "Business area",
      action: "https://maps.google.com/?q=Njiro,Arusha,Tanzania",
    },
  ];

  return (
    <div className={cn("space-y-6", className)}>
      <div className='text-center lg:text-left mb-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
          Headquarters
        </h2>
        <p className='text-gray-600 text-lg'>
          Contact our primary terminal directly.
        </p>
      </div>

      <div className='grid gap-4'>
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.action}
              className='group relative bg-white border border-gray-200 hover:border-green-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-5'>
              <div className='flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300'>
                <Icon className='w-6 h-6 text-slate-600 group-hover:text-white' />
              </div>

              <div className='flex-1 pt-1'>
                <h3 className='text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1 tracking-wide'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-800 font-medium mb-1'>
                  {item.content}
                </p>
                <p className='text-xs text-gray-500'>
                  {item.description}
                </p>
              </div>

              <div className='absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <svg className='w-5 h-5 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </div>
            </a>
          );
        })}
      </div>

      {/* Embedded Social Network Panel */}
      <div className='bg-slate-900 text-white rounded-2xl p-8 shadow-xl mt-8 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl' />
        
        <div className='relative z-10'>
          <h3 className='text-2xl font-black text-white mb-2'>The Social Command</h3>
          <p className='text-sm text-slate-400 mb-6'>Join our massive digital network.</p>

          <div className='grid grid-cols-3 gap-4'>
            {[
              { name: 'Instagram', icon: Instagram, color: 'hover:bg-pink-500', link: 'https://www.instagram.com/careernamimi/' },
              { name: 'Facebook', icon: Facebook, color: 'hover:bg-blue-600', link: '#' },
              { name: 'LinkedIn', icon: Linkedin, color: 'hover:bg-blue-500', link: '#' },
              { name: 'TikTok', icon: TiktokIcon, color: 'hover:bg-slate-700', link: '#' },
              { name: 'WA Channel', icon: Zap, color: 'hover:bg-green-500', link: '#' },
              { name: 'WA Groups', icon: WhatsappIcon, color: 'hover:bg-green-600', link: '#' }
            ].map((social) => (
              <a key={social.name} href={social.link} title={social.name} target="_blank" rel="noopener noreferrer"
                 className={`flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-all duration-300 ${social.color} group`}>
                <social.icon className='w-6 h-6 text-slate-400 group-hover:text-white mb-2 transition-colors' />
                <span className='text-[10px] font-bold text-slate-500 group-hover:text-white tracking-widest uppercase transition-colors text-center'>
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
