import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-new.jpg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Luxury Montenegro coastline with yacht" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:pt-8 md:pb-4 relative z-10 text-center mt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
            Experience
            <span className="block text-gold">Unparalleled Luxury</span>
            in Montenegro
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your gateway to exclusive experiences, personalized service, and the finest lifestyle management on the
            Adriatic coast.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="luxury" size="xl" onClick={() => navigate("/contact")} className="group animate-pulse-scale">
              Book Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl" onClick={() => navigate("/services")}>
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
