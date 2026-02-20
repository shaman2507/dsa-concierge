import { Link, useNavigate } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="py-12 px-6 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-deep opacity-70" />
      <div className="absolute inset-0 bg-gold/5" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-14 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="inline-block"
            >
              <img
                src={logo}
                alt="DSA Concierge"
                width={140}
                height={96}
                className="h-17 transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your gateway to exclusive luxury experiences in Montenegro and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                to="/"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="text-muted-foreground hover:text-gold transition-smooth"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  navigate("/services");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-muted-foreground hover:text-gold transition-smooth text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-muted-foreground hover:text-gold transition-smooth text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-muted-foreground hover:text-gold transition-smooth text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Networks */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gold">Follow Us</h3>
            <nav className="flex md:flex-col xl:flex-row gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </nav>
            <a
              href="tel:+38267726999"
              className="text-muted-foreground hover:text-gold transition-smooth text-sm block"
            >
              +382 67 726 999
            </a>
            <a
              href="mailto:reservation@dsa-concierge.com"
              className="text-muted-foreground hover:text-gold transition-smooth text-sm block"
            >
              reservation@dsa-concierge.com
            </a>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gold">Our Services</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <span className="text-muted-foreground">Private Aviation</span>
              <span className="text-muted-foreground">Yacht Charters</span>
              <span className="text-muted-foreground">Event Planning</span>
              <span className="text-muted-foreground">Property Services</span>
              <span className="text-muted-foreground">Fine Dining</span>
              <span className="text-muted-foreground">Lifestyle Management</span>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 DSA Concierge. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gold transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
