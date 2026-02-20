import { Button } from "@/components/ui/button";
import { Menu, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);
  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }, 100);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out h-20 bg-black/90 ${isScrolled ? "md:backdrop-blur-sm" : "md:bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-3 h-full">
        <div className="flex items-center justify-between h-full relative">
          {/* Premium Concierge Services - Left */}
          <div className="hidden md:flex items-center text-silver uppercase xl:tracking-[0.2em] text-xs xl:text-base font-serif flex-shrink-0">
                        MONTENEGRO TRAVEL CONCIERGE



















 


          </div>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 group transition-smooth">
            <img src={logo} alt="DSA Concierge" width={93} height={64} className={`transition-all duration-500 ease-in-out group-hover:scale-105 h-16`} />
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center md:space-x-4 xl:space-x-8 flex-shrink-0">
            <Link to="/" className={`font-serif text-xs xl:text-base transition-smooth relative ${isActive("/") ? "text-gold" : "text-foreground hover:text-gold"}`}>
              HOME
              {isActive("/") && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" />}
            </Link>
            <Link to="/services" className={`font-serif text-xs xl:text-base transition-smooth relative ${isActive("/services") ? "text-gold" : "text-foreground hover:text-gold"}`}>
              SERVICES
              {isActive("/services") && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" />}
            </Link>
            <Link to="/about" className={`font-serif text-xs xl:text-base transition-smooth relative ${isActive("/about") ? "text-gold" : "text-foreground hover:text-gold"}`}>
              ABOUT US
              {isActive("/about") && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" />}
            </Link>
            <Link to="/contact" className={`font-serif text-xs xl:text-base transition-smooth relative ${isActive("/contact") ? "text-gold" : "text-foreground hover:text-gold"}`}>
              CONTACT
              {isActive("/contact") && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" />}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden fixed inset-0 top-20 bg-black/90 z-40 flex flex-col px-6 py-8 space-y-6">
            <Link to="/" className="text-foreground hover:text-gold transition-smooth text-left block text-xl" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-gold transition-smooth text-left block text-xl" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-gold transition-smooth text-left block text-xl" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-gold transition-smooth text-left block text-xl" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-6 border-t border-border">
              <h3 className="text-foreground text-xl font-serif mb-4">Social Networks</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-smooth" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-smooth" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-smooth" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;