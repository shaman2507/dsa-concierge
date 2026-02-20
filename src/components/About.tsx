import dsaConciergeImage from "@/assets/about-us-1.webp";
import philosophyImage from "@/assets/about-philosophy.jpg";
import setsApartImage from "@/assets/about-sets-apart.jpg";
import lifeElevatedImage from "@/assets/about-life-elevated.jpg";
import dsaDifferenceImage from "@/assets/about-dsa-difference.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-deep" />
      <div className="absolute inset-0 bg-gold/5" />
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="space-y-32">
          {/* About DSA Concierge - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                About <span className="text-gold">DSA Concierge</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  In Montenegro's most exclusive coastal destinations, exceptional experiences don't happen by
                  chance—they're meticulously crafted. Since 2006, DSA Concierge has been redefining luxury service
                  along the Adriatic, transforming the aspirations of discerning travelers and residents into seamless
                  reality.
                </p>
                <p>
                  We understand that true luxury isn't measured in amenities alone, but in the precious commodity of
                  time and the art of effortless living. Whether you're seeking a private yacht charter along the Bay of
                  Kotor, securing reservations at Montenegro's most sought-after venues, or requiring comprehensive
                  property management for your Adriatic residence, our dedicated team orchestrates every detail with
                  precision and discretion.
                </p>
              </div>
            </div>
            <div
              className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img src={dsaConciergeImage} alt="Luxury yacht in Bay of Kotor" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Our Philosophy - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant animate-fade-in lg:order-1">
              <img src={philosophyImage} alt="Luxury concierge desk" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <div className="space-y-6 animate-fade-in lg:order-2" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Our <span className="text-gold">Philosophy</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At DSA Concierge, we believe that exceptional service is deeply personal. We don't offer packages—we
                create bespoke solutions tailored to your unique lifestyle and preferences. Our approach is built on
                three pillars: anticipation, discretion, and flawless execution. We pride ourselves on understanding
                your needs before you articulate them, maintaining absolute confidentiality, and delivering results that
                consistently exceed expectations.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                What Sets <span className="text-gold">Us Apart</span>
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Montenegro's emergence as a premier destination for the global elite demands a concierge service that
                  matches its sophistication. Our extensive network of trusted partners—from private aviation providers
                  to Michelin-caliber chefs, from luxury real estate specialists to wellness experts—ensures you have
                  access to experiences and services that remain beyond reach for most.
                </p>
                <p>
                  Our team brings together multilingual professionals with intimate knowledge of Montenegro's hidden
                  gems and established treasures alike. We navigate the nuances of local culture while maintaining
                  international standards of service excellence. Whether you need a helicopter transfer to avoid summer
                  traffic, a private tour of centuries-old monasteries, or last-minute arrangements for an impromptu
                  celebration, we handle it with equal parts efficiency and grace.
                </p>
              </div>
            </div>
            <div
              className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img src={setsApartImage} alt="Exclusive luxury dining" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Your Life, Elevated - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant animate-fade-in lg:order-1">
              <img
                src={lifeElevatedImage}
                alt="Luxury villa with infinity pool"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <div className="space-y-6 animate-fade-in lg:order-2" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Your Life, <span className="text-gold">Elevated</span>
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  From villa management and yacht provisioning to event planning and lifestyle management, DSA Concierge
                  serves as your trusted partner in Montenegro and beyond. We manage the complex logistics of luxury
                  living so you can focus on what matters most—whether that's closing important deals, creating memories
                  with loved ones, or simply savoring the Adriatic's incomparable beauty.
                </p>
                <p>
                  Our clients include international executives, discerning travelers, property owners, and families who
                  demand nothing less than perfection. They choose us not just for our capabilities, but for our
                  commitment to making the impossible possible, always with elegance and professionalism.
                </p>
              </div>
            </div>
          </div>

          {/* Experience the DSA Difference - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Experience the <span className="text-gold">DSA Difference</span>
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  In a world where time is the ultimate luxury, DSA Concierge offers something invaluable: peace of
                  mind. Let us handle the details while you enjoy Montenegro at its finest. Because exceptional living
                  shouldn't require exceptional effort—that's where we come in.
                </p>
                <p className="text-foreground font-medium text-xl">
                  Welcome to a world where your every wish is our priority.
                </p>
              </div>
            </div>
            <div
              className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={dsaDifferenceImage}
                alt="Peaceful Montenegro coastline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
