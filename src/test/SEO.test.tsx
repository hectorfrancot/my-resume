import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import SEO from "../components/SEO";

describe("SEO Component", () => {
  beforeEach(() => {
    // Reset document head before each test
    document.title = "";
    // Remove existing meta tags
    const existingMetas = document.querySelectorAll(
      'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter"], link[rel="canonical"], script[data-component]',
    );
    existingMetas.forEach((meta) => meta.remove());

    // Add default meta tags to test updates
    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "default description");
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", "default keywords");
    document.head.appendChild(metaKeywords);

    const canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", "https://default.com");
    document.head.appendChild(canonicalLink);

    // Add Open Graph tags
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", "default og title");
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", "default og description");
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.setAttribute("content", "https://default.com/image.jpg");
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.setAttribute("content", "https://default.com");
    document.head.appendChild(ogUrl);

    // Add Twitter Card tags
    const twitterTitle = document.createElement("meta");
    twitterTitle.setAttribute("name", "twitter:title");
    twitterTitle.setAttribute("content", "default twitter title");
    document.head.appendChild(twitterTitle);

    const twitterDescription = document.createElement("meta");
    twitterDescription.setAttribute("name", "twitter:description");
    twitterDescription.setAttribute("content", "default twitter description");
    document.head.appendChild(twitterDescription);

    const twitterImage = document.createElement("meta");
    twitterImage.setAttribute("name", "twitter:image");
    twitterImage.setAttribute("content", "https://default.com/twitter.jpg");
    document.head.appendChild(twitterImage);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders without crashing", () => {
    render(<SEO />);
    // SEO component doesn't render visible content, just updates head
    expect(document.title).toBeTruthy();
  });

  it("sets default title", () => {
    render(<SEO />);
    expect(document.title).toBe(
      "Héctor Franco - Senior Full Stack Developer & Tech Lead",
    );
  });

  it("sets custom title", () => {
    const customTitle = "Custom Page Title";
    render(<SEO title={customTitle} />);
    expect(document.title).toBe(customTitle);
  });

  it("handles description prop", () => {
    const customDescription = "Custom page description";
    render(<SEO description={customDescription} />);
    expect(document.title).toBeTruthy(); // Component should still work
  });

  it("handles keywords prop", () => {
    const customKeywords = "react, developer, portfolio";
    render(<SEO keywords={customKeywords} />);
    expect(document.title).toBeTruthy(); // Component should still work
  });

  it("handles canonical prop", () => {
    const customCanonical = "https://example.com/page";
    render(<SEO canonical={customCanonical} />);
    expect(document.title).toBeTruthy(); // Component should still work
  });

  it("handles ogImage prop", () => {
    const customImage = "https://example.com/custom-image.jpg";
    render(<SEO ogImage={customImage} />);
    expect(document.title).toBeTruthy(); // Component should still work
  });

  it("handles jsonLd prop", () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Héctor Franco",
    };
    render(<SEO jsonLd={jsonLd} />);
    expect(document.title).toBeTruthy(); // Component should still work
  });

  it("renders with all props", () => {
    const props = {
      title: "Custom Title",
      description: "Custom description",
      keywords: "custom, keywords",
      canonical: "https://example.com",
      ogImage: "https://example.com/image.jpg",
      jsonLd: { "@type": "WebPage" },
    };
    render(<SEO {...props} />);
    expect(document.title).toBe("Custom Title");
  });

  it("updates document title on re-render", () => {
    const { rerender } = render(<SEO title="First Title" />);
    expect(document.title).toBe("First Title");

    rerender(<SEO title="Second Title" />);
    expect(document.title).toBe("Second Title");
  });

  it("updates meta description when element exists", () => {
    render(<SEO description="New description" />);
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription?.getAttribute("content")).toBe("New description");
  });

  it("updates meta keywords when element exists", () => {
    render(<SEO keywords="new, keywords" />);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    expect(metaKeywords?.getAttribute("content")).toBe("new, keywords");
  });

  it("updates canonical link when element exists", () => {
    render(<SEO canonical="https://newsite.com" />);
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute("href")).toBe("https://newsite.com");
  });

  it("updates Open Graph tags when they exist", () => {
    render(
      <SEO
        title="New OG Title"
        description="New OG Description"
        ogImage="https://newsite.com/newimage.jpg"
        canonical="https://newsite.com"
      />,
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    expect(ogTitle?.getAttribute("content")).toBe("New OG Title");
    expect(ogDescription?.getAttribute("content")).toBe("New OG Description");
    expect(ogImage?.getAttribute("content")).toBe(
      "https://newsite.com/newimage.jpg",
    );
    expect(ogUrl?.getAttribute("content")).toBe("https://newsite.com");
  });

  it("updates Twitter Card tags when they exist", () => {
    render(
      <SEO
        title="New Twitter Title"
        description="New Twitter Description"
        ogImage="https://newsite.com/twitter.jpg"
      />,
    );

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    expect(twitterTitle?.getAttribute("content")).toBe("New Twitter Title");
    expect(twitterDescription?.getAttribute("content")).toBe(
      "New Twitter Description",
    );
    expect(twitterImage?.getAttribute("content")).toBe(
      "https://newsite.com/twitter.jpg",
    );
  });

  it("adds JSON-LD script when jsonLd prop is provided", () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Héctor Franco",
    };

    render(<SEO jsonLd={jsonLd} />);

    const jsonLdScript = document.querySelector(
      'script[type="application/ld+json"][data-component="seo"]',
    );
    expect(jsonLdScript).toBeTruthy();
    expect(jsonLdScript?.textContent).toBe(JSON.stringify(jsonLd));
  });

  it("replaces existing JSON-LD script when jsonLd prop changes", () => {
    const firstJsonLd = { "@type": "Person", name: "First" };
    const secondJsonLd = { "@type": "Person", name: "Second" };

    const { rerender } = render(<SEO jsonLd={firstJsonLd} />);

    let jsonLdScript = document.querySelector('script[data-component="seo"]');
    expect(jsonLdScript?.textContent).toBe(JSON.stringify(firstJsonLd));

    rerender(<SEO jsonLd={secondJsonLd} />);

    const allScripts = document.querySelectorAll(
      'script[data-component="seo"]',
    );
    expect(allScripts.length).toBe(1); // Should replace, not add

    jsonLdScript = document.querySelector('script[data-component="seo"]');
    expect(jsonLdScript?.textContent).toBe(JSON.stringify(secondJsonLd));
  });

  it("adds breadcrumb schema script", () => {
    render(<SEO canonical="https://example.com" />);

    const breadcrumbScript = document.querySelector(
      'script[data-component="breadcrumb"]',
    );
    expect(breadcrumbScript).toBeTruthy();

    const breadcrumbData = JSON.parse(breadcrumbScript?.textContent || "{}");
    expect(breadcrumbData["@type"]).toBe("BreadcrumbList");
    expect(breadcrumbData.itemListElement).toHaveLength(2);
  });

  it("cleans up scripts on unmount", () => {
    const jsonLd = { "@type": "Person" };
    const { unmount } = render(<SEO jsonLd={jsonLd} />);

    // Verify scripts exist
    expect(document.querySelector('script[data-component="seo"]')).toBeTruthy();
    expect(
      document.querySelector('script[data-component="breadcrumb"]'),
    ).toBeTruthy();

    unmount();

    // Verify scripts are removed
    expect(document.querySelector('script[data-component="seo"]')).toBeFalsy();
    expect(
      document.querySelector('script[data-component="breadcrumb"]'),
    ).toBeFalsy();
  });
});
