import React from "react";
import HotelImage from "../../image/Logo.png"
interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string; // URL to the featured image
  url?: string; // Canonical URL
  twitterCardType?: "summary" | "summary_large_image"; // Twitter card type
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Welcome to Paradise Guest House.",
  keywords = "guest house, luxury stay, Paradise Guest House",
  author = "Paradise Guest House",
  image = HotelImage,
  url = "https://example.com",
  twitterCardType = "summary_large_image",
}) => {
  React.useEffect(() => {
    // Update the document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper function to set or update Open Graph tags
    const setPropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Standard meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", author);

    // Open Graph tags
    setPropertyTag("og:title", title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:image", image);
    setPropertyTag("og:url", url);
    setPropertyTag("og:type", "website");

    // Twitter Card tags
    setMetaTag("twitter:card", twitterCardType);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

  }, [title, description, keywords, author, image, url, twitterCardType]);

  return null;
};

export default SEO;
