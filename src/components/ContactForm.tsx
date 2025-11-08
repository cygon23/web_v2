import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const validateForm = (data: ContactFormData) => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.name || data.name.length < 2)
    errors.name = "Name must be at least 2 characters";
  if (data.name && data.name.length > 50) errors.name = "Name is too long";
  if (!data.email || !emailRegex.test(data.email))
    errors.email = "Please enter a valid email address";
  if (!data.subject || data.subject.length < 5)
    errors.subject = "Subject must be at least 5 characters";
  if (data.subject && data.subject.length > 100)
    errors.subject = "Subject is too long";
  if (!data.message || data.message.length < 10)
    errors.message = "Message must be at least 10 characters";
  if (data.message && data.message.length > 1000)
    errors.message = "Message is too long";

  return errors;
};

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const getRecaptchaSiteKey = () => {
    return import.meta.env?.VITE_RECAPTCHA_SITE_KEY;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check reCAPTCHA
    if (!recaptchaToken) {
      toast({
        title: "reCAPTCHA required",
        description: "Please confirm you're not a robot.",
        variant: "destructive",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl =
        "https://lklswfbrfdmbcpwdgwcz.supabase.co/functions/v1/contact-Public";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            import.meta.env.VITE_SUPABASE_ANON_KEY || ""
          }`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          recaptchaToken,
        }),
      });

      let result;
      try {
        const responseText = await response.text();

        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        throw new Error("Invalid response from server");
      }

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();

        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        throw new Error(result.error || `Server error: ${response.status}`);
      }
    } catch (err: any) {
      toast({
        title: "Failed to send message",
        description:
          err.message ||
          "Please try again later. Check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleRecaptchaError = () => {
    toast({
      title: "reCAPTCHA Error",
      description: "Please try refreshing the page and try again.",
      variant: "destructive",
    });
  };

  return (
    <div className={cn("relative", className)}>
      <div className='relative bg-gradient-to-br from-white via-secondary/5 to-primary/5 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500'>
        {/* Decorative floating elements */}
        <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full blur-2xl opacity-20 animate-float' />
        <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60 rounded-full blur-2xl opacity-20 animate-pulse' />

        <div className='relative z-10'>
          <div className='text-center mb-10'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-2xl mb-4 shadow-lg'>
              <Send className='w-8 h-8' />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
              Send Us a Message
            </h2>
            <p className='text-gray-600 text-lg'>
              Share your thoughts and we'll respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name & Email */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700 flex items-center'>
                  Full Name <span className='text-primary ml-1'>*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder='John Doe'
                  disabled={isSubmitting}
                  className={cn(
                    "h-14 bg-white border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base transition-all duration-300",
                    errors.name && "border-red-500 focus:border-red-500"
                  )}
                />
                {errors.name && (
                  <p className='text-sm text-red-500 flex items-center gap-1 mt-2'>
                    <AlertCircle className='w-4 h-4' /> {errors.name}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-gray-700 flex items-center'>
                  Email Address <span className='text-primary ml-1'>*</span>
                </label>
                <Input
                  type='email'
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder='john@example.com'
                  disabled={isSubmitting}
                  className={cn(
                    "h-14 bg-white border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base transition-all duration-300",
                    errors.email && "border-red-500 focus:border-red-500"
                  )}
                />
                {errors.email && (
                  <p className='text-sm text-red-500 flex items-center gap-1 mt-2'>
                    <AlertCircle className='w-4 h-4' /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-gray-700 flex items-center'>
                Subject <span className='text-primary ml-1'>*</span>
              </label>
              <Input
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder="What's this about?"
                disabled={isSubmitting}
                className={cn(
                  "h-14 bg-white border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base transition-all duration-300",
                  errors.subject && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.subject && (
                <p className='text-sm text-red-500 flex items-center gap-1 mt-2'>
                  <AlertCircle className='w-4 h-4' /> {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-gray-700 flex items-center'>
                Message <span className='text-primary ml-1'>*</span>
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder='Tell us more about your inquiry...'
                rows={6}
                disabled={isSubmitting}
                className={cn(
                  "bg-white border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-base resize-none transition-all duration-300",
                  errors.message && "border-red-500 focus:border-red-500"
                )}
              />
              {errors.message && (
                <p className='text-sm text-red-500 flex items-center gap-1 mt-2'>
                  <AlertCircle className='w-4 h-4' /> {errors.message}
                </p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className='flex justify-center py-4'>
              <div className='transform hover:scale-105 transition-transform duration-300'>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={getRecaptchaSiteKey()}
                  onChange={handleRecaptchaChange}
                  onError={handleRecaptchaError}
                  onExpired={() => setRecaptchaToken(null)}
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type='submit'
              disabled={isSubmitting || submitSuccess || !recaptchaToken}
              className={cn(
                "w-full h-14 text-lg font-bold bg-gradient-to-r from-primary via-primary/90 to-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 group rounded-xl",
                submitSuccess && "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-600",
                !recaptchaToken &&
                  !isSubmitting &&
                  "opacity-50 cursor-not-allowed hover:scale-100"
              )}>
              {isSubmitting ? (
                <div className='flex items-center justify-center'>
                  <Loader2 className='w-6 h-6 animate-spin mr-2' />
                  <span>Sending...</span>
                </div>
              ) : submitSuccess ? (
                <div className='flex items-center justify-center'>
                  <CheckCircle className='w-6 h-6 mr-2' />
                  <span>Message Sent Successfully!</span>
                </div>
              ) : (
                <div className='flex items-center justify-center'>
                  <Send className='w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform' />
                  <span>Send Message</span>
                </div>
              )}
            </Button>

            {/* Helper text */}
            <p className='text-center text-sm text-gray-500 mt-4'>
              We respect your privacy and will never share your information
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;