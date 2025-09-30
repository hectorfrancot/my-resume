import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Héctor Franco - Senior Full Stack Developer & Tech Lead",
  description = "Senior Full Stack Developer & Tech Lead at London Markets. Expert in React, Angular, TypeScript, Java Spring Boot, .NET Core, and AI-assisted development.",
  keywords = "Héctor Franco, Senior Full Stack Developer, Tech Lead, React, Angular, TypeScript, AI Development",
  canonical = "https://hectorfrancot.github.io/my-resume/",
  ogImage = "https://hectorfrancot.github.io/hector-franco-developer.jpg",
  jsonLd,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonical);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (ogImageMeta) ogImageMeta.setAttribute("content", ogImage);
    if (ogUrl) ogUrl.setAttribute("content", canonical);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle) twitterTitle.setAttribute("content", title);
    if (twitterDescription)
      twitterDescription.setAttribute("content", description);
    if (twitterImage) twitterImage.setAttribute("content", ogImage);

    // Add JSON-LD structured data if provided
    if (jsonLd) {
      const existingJsonLd = document.querySelector(
        'script[type="application/ld+json"][data-component="seo"]',
      );
      if (existingJsonLd) {
        existingJsonLd.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-component", "seo");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // Add breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: canonical,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Héctor Franco Portfolio",
          item: canonical,
        },
      ],
    };

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.setAttribute("data-component", "breadcrumb");
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Cleanup: remove dynamic scripts
      const dynamicJsonLd = document.querySelector(
        'script[data-component="seo"]',
      );
      const dynamicBreadcrumb = document.querySelector(
        'script[data-component="breadcrumb"]',
      );
      if (dynamicJsonLd) dynamicJsonLd.remove();
      if (dynamicBreadcrumb) dynamicBreadcrumb.remove();
    };
  }, [title, description, keywords, canonical, ogImage, jsonLd]);

  return null;
};

export default SEO;
