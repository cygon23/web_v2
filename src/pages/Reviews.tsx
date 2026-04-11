import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, ShieldCheck, MessageSquare, Quote, Loader2, CheckCircle, AlertCircle, Camera, Image as ImageIcon, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { Turnstile } from "@marsidev/react-turnstile";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import tourismHero from "@/assets/events/tourism.jpg";

// Generate 20 premium illustrative avatars using DiceBear
const PRESET_AVATARS = Array.from({ length: 20 }, (_, i) => 
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 125}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
);

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  content: string;
  rating: number;
  avatar_url: string | null;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
    avatar_url: PRESET_AVATARS[0], // Default to first preset
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data: result, error } = await supabase.functions.invoke("get-testimonials");

      if (error) throw error;
      if (result.success) {
        setReviews(result.data || []);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast({
        title: "Security Check Required",
        description: "Please complete the Turnstile check.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data: result, error: functionError } = await supabase.functions.invoke("submit-review", {
        body: {
          ...formData,
          captchaToken
        },
      });

      if (functionError) throw functionError;

      if (result.success) {
        // Trigger high-end confetti celebration
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        toast({
          title: "Review Submitted!",
          description: "Thank you for sharing your experience with us.",
        });
        setFormData({ name: "", role: "", content: "", rating: 5, avatar_url: PRESET_AVATARS[0] });
        setCaptchaToken(null);
        fetchReviews(); // Refresh list
      } else {
        throw new Error(result.error || "Failed to submit review");
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Strict validation
    if (!file.type.startsWith('image/')) {
      toast({ title: "Invalid file", description: "Please upload an image.", variant: "destructive" });
      return;
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      toast({ title: "File too large", description: "Image must be under 2MB.", variant: "destructive" });
      return;
    }

    setIsUploading(true);
    try {
      // Convert file to base64
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
      });
      reader.readAsDataURL(file);
      const fileBase64 = await base64Promise;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { data: result, error: uploadError } = await supabase.functions.invoke('upload-avatar', {
        body: {
          fileBase64,
          fileName,
          fileType: file.type
        }
      });

      if (uploadError) throw uploadError;

      if (result.success) {
        setFormData({ ...formData, avatar_url: result.publicUrl });
        toast({ title: "Photo Uploaded", description: "Your avatar has been updated!" });
      } else {
        throw new Error(result.error);
      }
    } catch (err: any) {
      toast({ title: "Upload Failed", description: err.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center' 
          style={{ backgroundImage: `url(${tourismHero})` }} 
        />
        <div className='absolute inset-0 bg-slate-950/80 backdrop-blur-sm' />
        <div className='absolute inset-0 opacity-10' style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter'>
              Community <span className='text-primary'>Voices</span>
            </h1>
            <p className='text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed'>
              Hear directly from the youth and professionals whose lives have been transformed through our institutional programs.
            </p>
          </motion.div>
        </div>
      </section>

      <div className='container mx-auto px-4 -mt-10 mb-24'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>

          {/* Review Submission Form */}
          <div className='lg:col-span-1'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 sticky top-28'
            >
              <h2 className='text-2xl font-black mb-6 text-slate-900 flex items-center gap-2'>
                <MessageSquare className='text-primary' /> Share Your Story
              </h2>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-bold text-slate-700'>Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='John Doe'
                    className='rounded-xl border-slate-200'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-bold text-slate-700'>Role / University</label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder='Graduate Student'
                    className='rounded-xl border-slate-200'
                  />
                </div>

                <div className='space-y-4'>
                  <label className='text-sm font-bold text-slate-700'>Account Avatar</label>
                  
                  {/* Avatar Picker UI */}
                  <div className='bg-slate-50 p-6 rounded-2xl border border-slate-100'>
                    <div className='flex flex-wrap gap-3 mb-6'>
                      {PRESET_AVATARS.map((url, i) => (
                        <button
                          key={i}
                          type='button'
                          onClick={() => setFormData({ ...formData, avatar_url: url })}
                          className={cn(
                            "w-12 h-12 rounded-full overflow-hidden border-2 transition-all p-0.5",
                            formData.avatar_url === url ? "border-primary scale-110 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                          )}
                        >
                          <img src={url} alt={`Avatar ${i}`} className='w-full h-full object-cover rounded-full' />
                        </button>
                      ))}
                      
                      {/* Upload Box */}
                      <label className='relative cursor-pointer w-12 h-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center hover:border-primary hover:bg-white transition-all group overflow-hidden'>
                        <input type='file' className='hidden' onChange={handleFileUpload} accept='image/*' disabled={isUploading} />
                        {isUploading ? (
                          <Loader2 className='w-5 h-5 animate-spin text-primary' />
                        ) : (
                          <Camera className='w-5 h-5 text-slate-400 group-hover:text-primary transition-colors' />
                        )}
                      </label>
                    </div>

                    <div className='flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100'>
                      <div className='w-16 h-16 rounded-full border-2 border-primary/20 p-1'>
                        <img src={formData.avatar_url || ''} alt="Selected" className='w-full h-full object-cover rounded-full shadow-inner' />
                      </div>
                      <div className='flex-1'>
                        <p className='text-xs font-bold text-primary uppercase tracking-widest mb-1'>Selected Appearance</p>
                        <p className='text-sm text-slate-500'>Custom image or preset illustrative style</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-bold text-slate-700'>Rating</label>
                  <div className='flex gap-2'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type='button'
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className='focus:outline-none transition-transform active:scale-90'
                      >
                        <Star className={cn("w-8 h-8", formData.rating >= star ? "fill-primary text-primary" : "text-slate-200")} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-bold text-slate-700'>Your Experience</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder='How did Career Na Mimi help you?'
                    rows={4}
                    className='rounded-xl border-slate-200 resize-none'
                    required
                  />
                </div>

                <div className='py-2'>
                  <Turnstile
                    siteKey="0x4AAAAAAC8CUp5TEI9lia6x"
                    onSuccess={setCaptchaToken}
                    onExpire={() => setCaptchaToken(null)}
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting || !captchaToken}
                  className='w-full h-14 rounded-2xl font-black text-lg shadow-glow-sm hover:shadow-primary/30 transition-all'
                >
                  {isSubmitting ? <Loader2 className='animate-spin' /> : "Submit Review"}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Reviews List */}
          <div className='lg:col-span-2 space-y-8'>
            {isLoading ? (
              <div className='flex justify-center items-center h-64'>
                <Loader2 className='w-12 h-12 text-primary animate-spin' />
              </div>
            ) : reviews.length === 0 ? (
              <div className='text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200'>
                <Quote className='w-16 h-16 text-slate-200 mx-auto mb-4' />
                <p className='text-slate-400 font-medium'>Be the first to share your experience!</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-8'>
                <AnimatePresence>
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-50 relative group'
                    >
                      <Quote className='absolute top-8 right-8 w-12 h-12 text-slate-50 group-hover:text-primary/10 transition-colors' />

                      <div className='flex gap-1 mb-6'>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={cn("w-5 h-5", i < review.rating ? "fill-primary text-primary" : "text-slate-200")} />
                        ))}
                      </div>

                      <p className='text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-8'>
                        "{review.content}"
                      </p>

                      <div className='flex items-center gap-4'>
                        <div className='w-14 h-14 rounded-full border-2 border-primary/10 overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center'>
                          {review.avatar_url ? (
                            <img src={review.avatar_url} alt={review.name} className='w-full h-full object-cover' />
                          ) : (
                            <User className='w-6 h-6 text-slate-300' />
                          )}
                        </div>
                        <div>
                          <h4 className='font-black text-slate-900 uppercase tracking-tight'>{review.name}</h4>
                          <p className='text-xs text-primary font-bold uppercase tracking-widest'>{review.role || "Community Member"}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
