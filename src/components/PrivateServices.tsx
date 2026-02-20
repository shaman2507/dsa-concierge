import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import securityServices from "@/assets/security-services.jpg";
import legalServices from "@/assets/legal-services.jpg";
import conciergeImage from "@/assets/concierge-service.jpg";
import lifestyleImage from "@/assets/lifestyle-fireshow.webp";
import eventsImage from "@/assets/events-organization.webp";
import airportFastTrackImage from "@/assets/airport-fasttrack.jpg";
const privateServices = [
  {
    image: securityServices,
    title: "Security Services",
    shortDescription: "Elite protection and crisis management for complete peace of mind throughout Montenegro.",
    description:
      "Trust our elite security team to safeguard your family, assets, and peace of mind across Montenegro's luxury hotspots and hidden gems. We deliver 24/7 protection with sophisticated risk assessment and crisis management, allowing you to fully immerse yourself in the Montenegrin experience without concern.",
  },
  {
    image: legalServices,
    title: "Legal Services",
    shortDescription: "Premium legal support through our curated network of Montenegro's finest attorneys.",
    description:
      "Access Montenegro's finest legal professionals through our curated network of attorneys specializing in property law, immigration, corporate formation, and private client services. We manage the entire process - scheduling consultations, coordinating documentation, and ensuring compliance with Montenegrin regulations — while you remain focused on what matters most. Elite legal support, delivered with the discretion and efficiency you expect.",
  },
  {
    image: conciergeImage,
    title: "24/7 Personal manager",
    shortDescription: "Round-the-clock access to Montenegro's most connected concierge professionals.",
    description:
      "Experience true peace of mind with constant access to Montenegro's most connected concierge professionals. Whether it's arranging an emergency helicopter transfer to Sveti Stefan or booking a private tour of Perast's islands at dawn, our round-the-clock service ensures every moment in Montenegro exceeds your expectations.",
  },
  {
    image: lifestyleImage,
    title: "Lifestyle",
    shortDescription: "Bespoke lifestyle management for your perfect Adriatic dream life.",
    description:
      "Experience Montenegro like never before with our bespoke lifestyle management services. From securing reservations at Porto Montenegro's most exclusive restaurants to arranging private yacht charters along the Bay of Kotor, we handle every detail of your Adriatic dream life. Let us curate unforgettable experiences that capture the essence of Montenegrin luxury.",
  },
  {
    image: eventsImage,
    title: "Private and corporate events",
    shortDescription: "Transform your vision into an unforgettable Montenegro celebration.",
    description:
      "Transform your vision into an unforgettable Montenegro experience. From intimate yacht celebrations along the Bay of Kotor to grand villa receptions overlooking the Adriatic, we orchestrate every detail with precision and elegance. Our local expertise and exclusive partnerships ensure your event captures the magic of Montenegro while exceeding the highest standards.",
  },
  {
    image: airportFastTrackImage,
    title: "Airport Fast-track",
    shortDescription: "VIP airport treatment with premium escort through all checkpoints.",
    description:
      "Experience VIP treatment from the moment you land in Montenegro with our airport fast-track service. Whether arriving at Tivat's stunning Bay of Kotor terminal or Podgorica's modern facilities, we expedite your journey through all checkpoints with premium escort assistance. Begin your Montenegrin escape on a seamless, stress-free note.",
  },
];
const PrivateServices = ({ variant = "carousel" }: { variant?: "carousel" | "grid" }) => {
  const navigate = useNavigate();
  const handleCardClick = (serviceTitle: string) => {
    const sectionId = serviceTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    navigate("/services");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };
  const handleSeeMore = () => {
    navigate("/services");
    setTimeout(() => {
      const element = document.getElementById("private-services");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };
  return (
    <section id="private-services" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-light">Exclusive Access</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">Personal Services</h2>
          <p className="text-muted-foreground text-lg">
            Unparalleled discretion and expertise for your most sensitive needs.
          </p>
        </div>

        {/* Services Display - Carousel or Grid */}
        {variant === "carousel" ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {privateServices.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card
                    className="bg-card border-border hover:border-gold/50 transition-smooth shadow-elegant hover:shadow-gold group overflow-hidden h-full cursor-pointer"
                    onClick={() => handleCardClick(service.title)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                    <CardContent className="p-8 space-y-4">
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-gold transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.shortDescription}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 bg-background/80 backdrop-blur-sm border-gold/50 hover:bg-gold hover:text-background transition-smooth" />
            <CarouselNext className="-right-6 bg-background/80 backdrop-blur-sm border-gold/50 hover:bg-gold hover:text-background transition-smooth" />
          </Carousel>
        ) : (
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            {privateServices.map((service, index) => {
              const sectionId = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <ScrollRevealSection key={index} id={sectionId} className="scroll-mt-32">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-12 md:gap-16 lg:gap-20 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-elegant">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollRevealSection>
              );
            })}
          </div>
        )}

        {/* See More Button - Only show for carousel variant */}
        {variant === "carousel" && (
          <div className="flex justify-center mt-16">
            <Button variant="hero" size="xl" onClick={handleSeeMore} className="text-lg px-12 py-6">
              See More
            </Button>
          </div>
        )}

        {/* Book Now Button - Only show for grid variant */}
        {variant === "grid" && (
          <div className="flex justify-center mt-16">
            <Button
              variant="luxury"
              size="xl"
              onClick={() => navigate("/contact")}
              className="text-lg px-12 py-6 animate-pulse-scale"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default PrivateServices;
