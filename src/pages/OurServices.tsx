import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateServices from "@/components/PrivateServices";
import StackedImageSlider from "@/components/StackedImageSlider";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import SEO from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import transfersImage from "@/assets/transfers.webp";
import mercedes2Image from "@/assets/mercedes-2.webp";
import amgImage from "@/assets/amg.webp";
import maseratiImage from "@/assets/maserati.webp";
import maybachImage from "@/assets/maybach.jpg";
import yachtServiceImage2 from "@/assets/yacht-service-2.webp";
import yachtServiceImage3 from "@/assets/yacht-service-3.webp";
import yachtServiceImage4 from "@/assets/yacht-service-4.webp";
import yachtServiceImage5 from "@/assets/yacht-service-5.webp";
import family1Image from "@/assets/family-1.webp";
import family2Image from "@/assets/family-2.webp";
import family3Image from "@/assets/family-3.webp";
import helicopter1Image from "@/assets/helicopter-1.webp";
import helicopter2Image from "@/assets/helicopter-2.webp";
import jet1Image from "@/assets/jet-1.webp";
import jet2Image from "@/assets/jet-2.webp";
import jet3Image from "@/assets/jet-3.webp";
import hotelRegent from "@/assets/hotel-regent-new.webp";
import hotelSplendid from "@/assets/hotel-splendid-new.webp";
import hotelOneOnly from "@/assets/hotel-oneonly-new.jpg";
import hotelChedi from "@/assets/hotel-chedi-new.jpg";
import activity1Image from "@/assets/activity-1.webp";
import activity2Image from "@/assets/activity-2.webp";
import activity3Image from "@/assets/activity-3.webp";
import activity5Image from "@/assets/activity-5.webp";
const hotelImages = [
  { src: hotelRegent, alt: "Regent Porto Montenegro" },
  { src: hotelSplendid, alt: "Splendid, Becici" },
  { src: hotelOneOnly, alt: "One&Only Porto Novi" },
  { src: hotelChedi, alt: "The Chedi Lustica Bay" },
];

const carImages = [
  { src: transfersImage, alt: "Mercedes S Class" },
  { src: mercedes2Image, alt: "Mercedes E Class" },
  { src: amgImage, alt: "Mercedes AMG" },
  { src: maseratiImage, alt: "Maserati" },
  { src: maybachImage, alt: "Maybach" },
];

const yachtImages = [
  { src: yachtServiceImage2, alt: "Bay of Kotor Sailing" },
  { src: yachtServiceImage3, alt: "Tivat Marina" },
  { src: yachtServiceImage4, alt: "Porto Montenegro" },
  { src: yachtServiceImage5, alt: "Perast Islands" },
];

const flightImages = [
  { src: jet1Image, alt: "Private Jet Interior" },
  { src: jet2Image, alt: "Private Jet Exterior" },
  { src: jet3Image, alt: "Jet Cockpit" },
  { src: helicopter1Image, alt: "Helicopter Interior" },
  { src: helicopter2Image, alt: "Helicopter Cockpit" },
];

const activityImages = [
  { src: activity1Image, alt: "Mountain Hiking" },
  { src: activity2Image, alt: "Scenic Viewpoint" },
  { src: activity3Image, alt: "River Rafting" },
  { src: activity5Image, alt: "Vineyard Tasting" },
];

const familyImages = [
  { src: family1Image, alt: "Family Mountain Adventure" },
  { src: family2Image, alt: "Family Hiking" },
  { src: family3Image, alt: "Family Boat Trip" },
];

const services = [
  {
    title: "Premium Hotels",
    description:
      "Experience Montenegro's luxury renaissance. We arrange exclusive stays at the country's most prestigious hotels. Every booking includes preferred rates, personalized service, and the insider access that transforms accommodation into experience.",
    hotels: ["Regent Porto Montenegro", "Splendid, Becici", "One&Only Porto Novi", "The Chedi Lustica Bay"],
    isStackedSlider: true,
    hasScrollReveal: false,
  },
  {
    title: "Lux Transfers",
    description:
      "Your Montenegro adventure deserves a transport experience as extraordinary as the destination. Glide through coastal roads and mountain passes in handpicked premium vehicles. Personalized chauffeur service that understands luxury is in every detail, not just the destination.",
    cars: ["Mercedes S Class", "Mercedes E Class", "Mercedes V Class", "Maserati", "Maybach"],
    isCarSlider: true,
    hasScrollReveal: true,
  },
  {
    title: "Yacht Charters",
    description:
      "Navigate Montenegro's breathtaking Adriatic waters with DSA Concierge's elite yacht services, offering access to the region's finest vessels and most coveted anchorages. Whether exploring the dramatic cliffs of Budva Riviera or hosting sophisticated gatherings in the serene Bay of Kotor, our dedicated team manages all aspects of your charter with meticulous precision. We transform maritime dreams into seamless reality along one of Europe's last undiscovered coastal paradises.",
    yachts: ["Yacht charters", "Yacht renting", "Sailing", "International Yacht Charter"],
    isYachtSlider: true,
    hasScrollReveal: true,
  },
  {
    title: "Private Flights",
    description:
      "Skip the queues and travel on your terms with our premium private flight services across Montenegro and beyond. From helicopter transfers between Budva's beaches and mountain retreats to private jet arrangements at Tivat and Podgorica airports, we ensure your journey is as exceptional as your destination. Time is luxury — let us maximize yours.",
    flights: ["Jets", "Helicopters", "Entertainment flights"],
    isFlightSlider: true,
    hasScrollReveal: true,
  },
  {
    title: "Activities",
    description:
      "Explore Montenegro's stunning contrasts through activities designed exclusively for you. From scenic mountain escapes and heritage walking tours to intimate wine experiences in local vineyards, we craft each excursion to match your interests. Let us guide you through Montenegro's most captivating landscapes and authentic experiences.",
    activities: ["Walking trips", "Mountain trips", "Rafting", "Retreats", "Private wine cellars tasting"],
    isActivitySlider: true,
    hasScrollReveal: true,
  },
  {
    title: "Family Vacations",
    description:
      "Let us craft the perfect Montenegrin family escape where luxury meets adventure across this stunning Adriatic gem. Our dedicated team arranges everything from secluded beach access and kid-approved restaurants to private boat trips and cultural experiences, ensuring each family member's needs are seamlessly met throughout your stay.",
    families: ["Kids friendly restaurants", "Family trips", "Boat family charters"],
    isFamilySlider: true,
    hasScrollReveal: true,
  },
];
const OurServices = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div className="min-h-screen bg-secondary/20">
      <SEO 
        title="Our Services - DSA Concierge"
        description="Explore DSA Concierge luxury services: premium hotels, yacht charters, private flights, transfers, activities, and family vacations in Montenegro."
      />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-3xl space-y-4">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-light">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Exceptional Services for
              <span className="block text-gold mt-2">Discerning Clients</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From private aviation to lifestyle management, we deliver unparalleled experiences tailored to your unique
              preferences.
            </p>
          </div>
        </section>

        {/* Services List - Alternating Layout */}
        <section className="py-12 px-6 pb-24">
          <div className="container mx-auto max-w-7xl space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const sectionId = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const sectionContent = (
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12 md:gap-16 lg:gap-20 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    {service.isStackedSlider ? (
                      <StackedImageSlider images={hotelImages} interval={4000} />
                    ) : service.isCarSlider ? (
                      <StackedImageSlider images={carImages} interval={4700} />
                    ) : service.isYachtSlider ? (
                      <StackedImageSlider images={yachtImages} interval={5300} />
                    ) : service.isFlightSlider ? (
                      <StackedImageSlider images={flightImages} interval={4400} />
                    ) : service.isActivitySlider ? (
                      <StackedImageSlider images={activityImages} interval={5000} />
                    ) : service.isFamilySlider ? (
                      <StackedImageSlider images={familyImages} interval={5600} />
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{service.description}</p>
                    {service.hotels && (
                      <ul className="list-disc list-inside text-muted-foreground text-base md:text-lg space-y-1">
                        {service.hotels.map((hotel, i) => (
                          <li key={i}>{hotel}</li>
                        ))}
                      </ul>
                    )}
                    {service.cars && (
                      <ul className="list-disc list-inside text-muted-foreground text-base md:text-lg space-y-1">
                        {service.cars.map((car, i) => (
                          <li key={i}>{car}</li>
                        ))}
                      </ul>
                    )}
                    {service.yachts && (
                      <ul className="list-disc list-inside text-muted-foreground text-base md:text-lg space-y-1">
                        {service.yachts.map((yacht, i) => (
                          <li key={i}>{yacht}</li>
                        ))}
                      </ul>
                    )}
                    {service.flights && (
                      <ul className="list-disc list-inside text-muted-foreground text-base md:text-lg space-y-1">
                        {service.flights.map((flight, i) => (
                          <li key={i}>{flight}</li>
                        ))}
                      </ul>
                    )}
                    {service.activities && (
                      <ul className="list-disc list-inside text-muted-foreground text-base md:text-lg space-y-1">
                        {service.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    )}
                    {service.families && (
                      <ul className="list-disc list-inside text-muted-foreground text-base md:text-lg space-y-1">
                        {service.families.map((family, i) => (
                          <li key={i}>{family}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );

              return service.hasScrollReveal ? (
                <ScrollRevealSection key={index} id={sectionId} className="scroll-mt-32">
                  {sectionContent}
                </ScrollRevealSection>
              ) : (
                <div key={index} id={sectionId} className="scroll-mt-32">
                  {sectionContent}
                </div>
              );
            })}

            {/* Contact Button */}
            <div className="flex justify-center pt-8">
              <Button
                variant="luxury"
                size="xl"
                onClick={handleBookNow}
                className="text-lg px-12 py-6 animate-pulse-scale"
              >
                Book Now
              </Button>
            </div>
          </div>
        </section>

        {/* Private Services Section */}
        <PrivateServices variant="grid" />
      </main>
      <Footer />
    </div>
  );
};
export default OurServices;
