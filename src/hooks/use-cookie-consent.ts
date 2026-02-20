import { useState, useEffect } from 'react';

export type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_KEY = 'dsa-cookie-consent';

export const getCookieConsent = (): CookieConsent | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: CookieConsent): void => {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: consent }));
  } catch (error) {
    console.error('Failed to save cookie consent:', error);
  }
};

export const hasConsentBeenGiven = (): boolean => {
  return getCookieConsent() !== null;
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(getCookieConsent);
  const [showBanner, setShowBanner] = useState(!hasConsentBeenGiven());
  const [hasConsent, setHasConsent] = useState(hasConsentBeenGiven());

  useEffect(() => {
    const consentGiven = hasConsentBeenGiven();
    setShowBanner(!consentGiven);
    setHasConsent(consentGiven);

    // Listen for consent changes from other components
    const handleConsentChange = (event: CustomEvent<CookieConsent>) => {
      setConsent(event.detail);
      setShowBanner(false);
      setHasConsent(true);
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, []);

  const acceptAll = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    setCookieConsent(newConsent);
    setConsent(newConsent);
    setShowBanner(false);
    setHasConsent(true);
  };

  const acceptEssentialOnly = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    setCookieConsent(newConsent);
    setConsent(newConsent);
    setShowBanner(false);
    setHasConsent(true);
  };

  return {
    consent,
    showBanner,
    hasConsent,
    acceptAll,
    acceptEssentialOnly,
  };
};
