import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_URL = "http://dsa-concierge.com"; 

const getSiteUrl = () => {
  if (typeof window !== "undefined") return window.location.origin;
  return DEFAULT_SITE_URL;
};

const StructuredData = () => {
  const siteUrl = getSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "DSA Concierge",
    description:
      "Premium luxury concierge services in Montenegro offering exclusive access, personalized experiences, and five-star lifestyle management.",
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.svg`,
    image: `${siteUrl}/assets/hero-background-new.jpg`,
    telephone: "+382 67 726 999",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montenegro",
      addressCountry: "ME",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.4304,
      longitude: 19.2594,
    },
    areaServed: {
      "@type": "Country",
      name: "Montenegro",
    },
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://instagram.com",
      "https://facebook.com",
      "https://linkedin.com",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Concierge Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private Aviation",
            description: "Private jet and helicopter charters",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yacht Charters",
            description: "Luxury yacht rentals and sailing experiences",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Hotels",
            description: "Booking at luxury hotels and resorts",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VIP Transfers",
            description: "Luxury vehicle transfers and chauffeur services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Planning",
            description: "Private and corporate event organization",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DSA Concierge",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;