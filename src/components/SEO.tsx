import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const DEFAULT_TITLE =
  "DSA Concierge - Premium Luxury Services in Montenegro";

const DEFAULT_DESCRIPTION =
  "Experience unparalleled luxury with DSA Concierge. Premium concierge services in Montenegro offering exclusive access and personalized experiences.";

const DEFAULT_IMAGE = "/og-image.webp"; // положи файл в public/
const DEFAULT_URL = "http://dsa-concierge.com"; // поменяешь позже

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = DEFAULT_URL,
  type = "website",
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const fullTitle = title.includes("DSA Concierge")
    ? title
    : `${title} | DSA Concierge`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;