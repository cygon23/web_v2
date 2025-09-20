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
      <div className='relative bg-gradient-glass backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-glass'>
        <div className='absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-float' />
        <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-primary-glow/10 rounded-full animate-pulse-soft' />

        <div className='relative z-10'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2'>
              Let's Connect
            </h2>
            <p className='text-muted-foreground'>
              Share your thoughts and we'll respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name & Email */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Full Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder='John Doe'
                  disabled={isSubmitting}
                  className={cn(
                    "h-12 bg-white/50 backdrop-blur border-white/30 focus:border-primary/50 focus:ring-primary/20",
                    errors.name && "border-destructive"
                  )}
                />
                {errors.name && (
                  <p className='text-sm text-destructive flex items-center gap-1'>
                    <AlertCircle className='w-4 h-4' /> {errors.name}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Email Address
                </label>
                <Input
                  type='email'
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder='john@example.com'
                  disabled={isSubmitting}
                  className={cn(
                    "h-12 bg-white/50 backdrop-blur border-white/30 focus:border-primary/50 focus:ring-primary/20",
                    errors.email && "border-destructive"
                  )}
                />
                {errors.email && (
                  <p className='text-sm text-destructive flex items-center gap-1'>
                    <AlertCircle className='w-4 h-4' /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-foreground'>
                Subject
              </label>
              <Input
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder="What's this about?"
                disabled={isSubmitting}
                className={cn(
                  "h-12 bg-white/50 backdrop-blur border-white/30 focus:border-primary/50 focus:ring-primary/20",
                  errors.subject && "border-destructive"
                )}
              />
              {errors.subject && (
                <p className='text-sm text-destructive flex items-center gap-1'>
                  <AlertCircle className='w-4 h-4' /> {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-foreground'>
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder='Tell us more about your inquiry...'
                rows={5}
                disabled={isSubmitting}
                className={cn(
                  "bg-white/50 backdrop-blur border-white/30 focus:border-primary/50 focus:ring-primary/20 resize-none",
                  errors.message && "border-destructive"
                )}
              />
              {errors.message && (
                <p className='text-sm text-destructive flex items-center gap-1'>
                  <AlertCircle className='w-4 h-4' /> {errors.message}
                </p>
              )}
            </div>

            {/* reCAPTCHA */}
            <div className='flex justify-center'>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={getRecaptchaSiteKey()}
                onChange={handleRecaptchaChange}
                onError={handleRecaptchaError}
                onExpired={() => setRecaptchaToken(null)}
              />
            </div>

            {/* Submit */}
            <Button
              type='submit'
              disabled={isSubmitting || submitSuccess || !recaptchaToken}
              className={cn(
                "w-full h-12 bg-gradient-primary hover:shadow-elegant transition-all duration-300 group",
                submitSuccess && "bg-green-500 hover:bg-green-500",
                !recaptchaToken &&
                  !isSubmitting &&
                  "opacity-50 cursor-not-allowed"
              )}>
              {isSubmitting ? (
                <Loader2 className='w-5 h-5 animate-spin' />
              ) : submitSuccess ? (
                <>
                  <CheckCircle className='w-5 h-5 mr-2' /> Message Sent!
                </>
              ) : (
                <>
                  <Send className='w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform' />{" "}
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;