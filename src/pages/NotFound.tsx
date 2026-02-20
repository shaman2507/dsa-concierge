import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Page Not Found - DSA Concierge"
        description="The page you are looking for could not be found."
      />
      <Header />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="text-center px-4">
          <h1 className="text-8xl md:text-9xl font-serif text-gold mb-4">404</h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif">
            Oops! Page not found
          </p>
          <p className="text-foreground/60 mb-12 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-gold text-background font-medium rounded hover:bg-gold/90 transition-smooth"
          >
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
