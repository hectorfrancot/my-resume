// Google Analytics 4 Configuration
// Place this in your index.html or use this configuration

export const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual GA4 ID

// Extend window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Analytics gtag function
export const gtag = (...args: unknown[]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined") {
    // Add Google Analytics script
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: 'Héctor Franco - Senior Full Stack Developer',
        page_location: window.location.href,
        custom_map: {'dimension1': 'developer_type'}
      });
    `;
    document.head.appendChild(script2);
  }
};

// Track page views
export const trackPageView = (page_path: string, page_title?: string) => {
  gtag("config", GA_TRACKING_ID, {
    page_path,
    page_title: page_title || "Héctor Franco - Senior Full Stack Developer",
  });
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track specific developer portfolio events
export const trackPortfolioEvent = {
  viewProject: (projectName: string) => {
    trackEvent("view_project", "portfolio", projectName);
  },

  contactForm: (method: "email" | "phone" | "linkedin" | "github") => {
    trackEvent("contact_attempt", "engagement", method);
  },

  downloadResume: () => {
    trackEvent("download_resume", "engagement", "pdf_download");
  },

  socialClick: (platform: string) => {
    trackEvent("social_click", "external_link", platform);
  },

  skillsView: (category: string) => {
    trackEvent("view_skills", "portfolio", category);
  },
};
