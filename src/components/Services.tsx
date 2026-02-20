import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import accommodationImage from "@/assets/lux-hotels-service.webp";
import luxTransfersImage from "@/assets/transfers.webp";
import yachtServiceImage from "@/assets/yacht-service-2.webp";
import familyVacationsImage from "@/assets/family-1.webp";
import privateJetImage from "@/assets/jet-2.webp";
import activitiesImage from "@/assets/activity-1.webp";

const services = [
  {
    title: "Premium Hotels",
    description:
      "Experience Montenegro's finest hotels - luxurious coastal resorts and intimate boutique properties selected for exceptional comfort and style.",
    image: accommodationImage,
  },
  {
    title: "Lux Transfers",
    description:
      "Certified luxury car service delivering punctual, confidential transfers between Montenegro's airports, residences, and business locations.",
    image: luxTransfersImage,
  },
  {
    title: "Yacht Charters",
    description:
      "Experience the Adriatic's crown jewel from your private deck, with luxury charters from Tivat's superyacht marina to hidden islands and Montenegro's dramatic coastal beauty.",
    image: yachtServiceImage,
  },
  {
    title: "Private Flights",
    description:
      "Discover Montenegro from above with private jet and helicopter services offering ultimate privacy, flexibility, and breathtaking views of the Adriatic coast.",
    image: privateJetImage,
  },
  {
    title: "Activities",
    description:
      "We believe the best memories are made when adventure meets authenticity, so we'll connect you with experiences in Montenegro that feel personal, not packaged.",
    image: activitiesImage,
  },
  {
    title: "Family Vacations",
    description:
      "Every age, every personality, every family dynamic—we create Montenegro experiences where each member feels the trip was made just for them.",
    image: familyVacationsImage,
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceTitle: string) => {
    const sectionId = serviceTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    navigate(`/services#${sectionId}`);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 gradient-subtle opacity-80" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-light">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Montenegro's Finest
            <span className="block text-gold mt-2">Exclusively Yours</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover Montenegro's best kept secrets, personally curated for your journey and preferences.
          </p>
        </div>

        {/* Services Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-gold/50 transition-smooth shadow-elegant hover:shadow-gold group overflow-hidden h-full cursor-pointer"
                  onClick={() => handleCardClick(service.title)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-gold transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 bg-background/80 backdrop-blur-sm border-gold/50 hover:bg-gold hover:text-background transition-smooth" />
          <CarouselNext className="-right-6 bg-background/80 backdrop-blur-sm border-gold/50 hover:bg-gold hover:text-background transition-smooth" />
        </Carousel>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <Link to="/services">
            <Button variant="hero" size="xl">
              Explore All Our Luxury Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
