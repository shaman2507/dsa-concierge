import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PrivateServices from "@/components/PrivateServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="DSA Concierge - Premium Luxury Services in Montenegro"
        description="Experience unparalleled luxury with DSA Concierge. Premium concierge services in Montenegro offering exclusive access, personalized experiences, and five-star lifestyle management."
      />
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <PrivateServices />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
