import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - DSA Concierge"
        description="Learn about DSA Concierge, Montenegro's premier luxury concierge service. Discover our philosophy, values, and commitment to delivering exceptional personalized experiences."
      />
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
