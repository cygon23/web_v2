import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, ShieldCheck, MessageSquare, Quote, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { Turnstile } from "@marsidev/react-turnstile";
import { cn } from "@/lib/utils";
import tourismHero from "@/assets/events/tourism.jpg";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  content: string;
  rating: number;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
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
        toast({
          title: "Review Submitted!",
          description: "Thank you for sharing your experience with us.",
        });
        setFormData({ name: "", role: "", content: "", rating: 5 });
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
                        <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl'>
                          {review.name.charAt(0)}
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
