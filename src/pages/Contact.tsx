import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - DSA Concierge"
        description="Get in touch with DSA Concierge for exclusive luxury services in Montenegro. Book your personalized concierge experience today."
      />
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
