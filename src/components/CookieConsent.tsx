import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { showBanner, acceptAll, acceptEssentialOnly } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-black/95 backdrop-blur-md border-t border-gold/30 shadow-elegant">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {/* Icon and Content */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  We value your privacy
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, 
                  and provide personalized content. By clicking "Accept All", you consent to 
                  our use of cookies.{" "}
                  <Link 
                    to="/privacy-policy" 
                    className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
                  >
                    Read our Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={acceptEssentialOnly}
                className="border-border/50 hover:bg-secondary/50 transition-smooth"
              >
                Essential Only
              </Button>
              <Button
                onClick={acceptAll}
                className="bg-gradient-to-r from-gold to-gold-light text-background hover:opacity-90 transition-smooth shadow-gold"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
