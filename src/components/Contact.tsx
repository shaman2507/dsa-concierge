import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyyfmG7yL2wZ2Wr66BYXmDSRdvOuJO0HwG08_vuMxhTaqyV8LNIXd6msySS22BUOmmM/exec";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().regex(/^(\+?\d[\d\s\-]{6,20})?$/, "Please enter a valid phone number").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
  company: z.string().optional(), // honeypot
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const submitForm = async (values: ContactFormValues) => {
    const payload = {
      fullName: values.name,
      email: values.email,
      phone: values.phone || "",
      message: values.message,

      // honeypot
      company: values.company || "",

      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    };

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    // Apps Script всегда вернёт JSON
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "Submit failed");
    return data;
  };

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitForm(data);

      toast.success("Thank you for your inquiry! We'll contact you shortly.", {
        description: "Our team will respond within 24 hours.",
      });

      form.reset();
    } catch (err: any) {
      toast.error("Failed to send message", {
        description: err?.message || "Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute inset-0 bg-gold/8" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-light">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
                Begin Your
                <span className="block text-gold">Luxury Journey</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Contact our concierge team to discuss how we can elevate your lifestyle and provide exclusive access to
                Montenegro's finest experiences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-secondary/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-silver text-sm">Email</p>
                    <p className="text-foreground font-medium break-all">reservation@dsa-concierge.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-silver text-sm">Phone</p>
                    <p className="text-foreground font-medium">+382 67 726 999</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-silver text-sm">Location</p>
                    <p className="text-foreground font-medium">Budva, Montenegro</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-elegant">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-silver uppercase tracking-wider">Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-secondary border-border focus:border-gold transition-smooth" placeholder="John Smith" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-silver uppercase tracking-wider">Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="bg-secondary border-border focus:border-gold transition-smooth" placeholder="john@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-silver uppercase tracking-wider">Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" className="bg-secondary border-border focus:border-gold transition-smooth" placeholder="+382 XX XXX XXX" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-silver uppercase tracking-wider">Your Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} className="bg-secondary border-border focus:border-gold transition-smooth resize-none" placeholder="Tell us about your requirements..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    {...form.register("company")}
                  />

                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
