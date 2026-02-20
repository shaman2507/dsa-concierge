import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexandra M.",
    role: "Business Executive",
    content:
      "DSA Concierge transformed our corporate retreat in Montenegro into an unforgettable experience. Their attention to detail and exclusive access made all the difference.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Entrepreneur",
    content:
      "From yacht charters to private dining experiences, DSA Concierge consistently delivers exceptional service. They truly understand the meaning of luxury.",
    rating: 5,
  },
  {
    name: "Sofia K.",
    role: "Private Client",
    content:
      "The level of personalization and discretion provided by DSA Concierge is unmatched. They've become an indispensable part of my lifestyle in Montenegro.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden ">
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-light">Testimonials</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            What Our Clients
            <span className="block text-gold">Say About Us</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-gold/50 transition-smooth shadow-elegant hover:shadow-gold"
            >
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-serif font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-silver text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
