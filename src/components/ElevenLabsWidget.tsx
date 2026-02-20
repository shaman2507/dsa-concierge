import { useEffect } from 'react';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

const ElevenLabsWidget = () => {
  const { showBanner } = useCookieConsent();

  useEffect(() => {
    const widget = document.querySelector('elevenlabs-convai');
    
    if (widget) {
      if (!showBanner) {
        // Show widget when cookie banner is hidden
        (widget as HTMLElement).style.opacity = '0';
        (widget as HTMLElement).style.display = 'block';
        (widget as HTMLElement).style.transition = 'opacity 0.5s ease-in-out';
        
        // Trigger animation after a small delay
        setTimeout(() => {
          (widget as HTMLElement).style.opacity = '1';
        }, 100);
      } else {
        // Hide widget when cookie banner is visible
        (widget as HTMLElement).style.display = 'none';
      }
    }
  }, [showBanner]);

  return null;
};

export default ElevenLabsWidget;
