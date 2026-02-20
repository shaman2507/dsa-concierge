import { Shield, Award, Clock, Users } from "lucide-react";
import discretionImage from "@/assets/about-discretion.jpg";
import exclusiveImage from "@/assets/about-exclusive.jpg";
import availabilityImage from "@/assets/about-availability.jpg";
import personalizedImage from "@/assets/about-personalized.jpg";
const features = [
  {
    icon: Shield,
    title: "Discretion & Privacy",
    description: "Your secrets are safe. Your trust is sacred to us",
    image: discretionImage,
  },
  {
    icon: Award,
    title: "Exclusive Access",
    description: "Montenegro's most exclusive venues welcome you differently when you arrive through our connections.",
    image: exclusiveImage,
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "3PM or 3AM, we're always just a call away.",
    image: availabilityImage,
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Montenegro on your terms - service designed exclusively around your personal preferences.",
    image: personalizedImage,
  },
];
const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-deep" />
      <div className="absolute inset-0 bg-gold/5" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-light">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
                Where Luxury Meets
                <span className="block text-gold">Genuine Care</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At DSA Concierge, we believe true luxury isn't just about what you experience — it's about how we make
                you feel. Like trusted friends who know Montenegro intimately, we open doors to extraordinary moments
                while treating you like family.
              </p>
              <p>
                Our team cares about your happiness. We listen to your dreams, understand what matters most to you, and
                pour our hearts into creating experiences that resonate deeply. From arranging magical sunset
                celebrations to surprising you with thoughtful touches you never expected — we're here for you.
              </p>
              <p className="text-foreground font-medium">
                Because the greatest luxury is feeling truly understood, valued, and cared for.
              </p>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secondary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-smooth shadow-elegant hover:shadow-gold group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center group-hover:gradient-gold transition-smooth">
                    <feature.icon className="w-6 h-6 text-gold group-hover:text-primary-foreground transition-smooth" />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
