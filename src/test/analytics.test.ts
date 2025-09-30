import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { 
  GA_TRACKING_ID, 
  gtag, 
  initGA, 
  trackEvent, 
  trackPageView, 
  trackPortfolioEvent 
} from "../utils/analytics";

// Mock window.gtag and dataLayer
const mockGtag = vi.fn();
const mockDataLayer: unknown[] = [];

Object.defineProperty(window, 'gtag', {
  writable: true,
  value: mockGtag,
});

Object.defineProperty(window, 'dataLayer', {
  writable: true,
  value: mockDataLayer,
});

// Mock document
Object.defineProperty(document, 'head', {
  writable: true,
  value: {
    appendChild: vi.fn(),
  },
});

Object.defineProperty(document, 'createElement', {
  writable: true,
  value: vi.fn(() => ({
    src: '',
    async: false,
    innerHTML: '',
  })),
});

describe("Analytics Utility", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockDataLayer.length = 0;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("GA_TRACKING_ID", () => {
    it("exports a tracking ID constant", () => {
      expect(typeof GA_TRACKING_ID).toBe("string");
      expect(GA_TRACKING_ID).toBeDefined();
    });
  });

  describe("gtag function", () => {
    it("calls window.gtag when available", () => {
      gtag("config", "GA_TRACKING_ID");
      
      expect(mockGtag).toHaveBeenCalledWith("config", "GA_TRACKING_ID");
    });

    it("does not throw error when window.gtag is unavailable", () => {
      const originalGtag = window.gtag;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag = undefined;
      
      expect(() => {
        gtag("config", "GA_TRACKING_ID");
      }).not.toThrow();
      
      window.gtag = originalGtag;
    });

    it("handles multiple arguments", () => {
      gtag("event", "click", { category: "button" });
      
      expect(mockGtag).toHaveBeenCalledWith("event", "click", { category: "button" });
    });
  });

  describe("initGA function", () => {
    it("creates and appends Google Analytics scripts", () => {
      const mockScript1 = { src: '', async: false };
      const mockScript2 = { innerHTML: '' };
      const mockCreateElement = vi.fn()
        .mockReturnValueOnce(mockScript1)
        .mockReturnValueOnce(mockScript2);
      
      document.createElement = mockCreateElement;
      
      initGA();
      
      expect(mockCreateElement).toHaveBeenCalledWith("script");
      expect(mockCreateElement).toHaveBeenCalledTimes(2);
      expect(document.head.appendChild).toHaveBeenCalledTimes(2);
    });

    it("sets correct script attributes", () => {
      const mockScript1 = { src: '', async: false };
      const mockScript2 = { innerHTML: '' };
      
      document.createElement = vi.fn()
        .mockReturnValueOnce(mockScript1)
        .mockReturnValueOnce(mockScript2);
      
      initGA();
      
      expect(mockScript1.src).toContain(GA_TRACKING_ID);
      expect(mockScript1.async).toBe(true);
      expect(mockScript2.innerHTML).toContain("gtag");
    });
  });

  describe("trackEvent function", () => {
    it("calls gtag with correct event parameters", () => {
      trackEvent("test_event", "category", "label");
      
      expect(mockGtag).toHaveBeenCalledWith("event", "test_event", {
        event_category: "category",
        event_label: "label",
      });
    });

    it("handles optional value parameter", () => {
      trackEvent("test_event", "category", "label", 100);
      
      expect(mockGtag).toHaveBeenCalledWith("event", "test_event", {
        event_category: "category",
        event_label: "label",
        value: 100,
      });
    });

    it("works without value parameter", () => {
      trackEvent("test_event", "category", "label");
      
      expect(mockGtag).toHaveBeenCalledWith("event", "test_event", {
        event_category: "category",
        event_label: "label",
      });
    });
  });

  describe("trackPageView function", () => {
    it("calls gtag with page view parameters", () => {
      trackPageView("/test-page", "Test Page");
      
      expect(mockGtag).toHaveBeenCalledWith("config", GA_TRACKING_ID, {
        page_path: "/test-page",
        page_title: "Test Page",
      });
    });

    it("works with just page path", () => {
      trackPageView("/test-page");
      
      expect(mockGtag).toHaveBeenCalledWith("config", GA_TRACKING_ID, {
        page_path: "/test-page",
        page_title: "Héctor Franco - Senior Full Stack Developer",
      });
    });
  });

  describe("trackPortfolioEvent object", () => {
    it("has all expected tracking methods", () => {
      expect(trackPortfolioEvent).toHaveProperty("viewProject");
      expect(trackPortfolioEvent).toHaveProperty("contactForm");
      expect(trackPortfolioEvent).toHaveProperty("downloadResume");
      expect(trackPortfolioEvent).toHaveProperty("socialClick");
      expect(trackPortfolioEvent).toHaveProperty("skillsView");
      
      expect(typeof trackPortfolioEvent.viewProject).toBe("function");
      expect(typeof trackPortfolioEvent.contactForm).toBe("function");
      expect(typeof trackPortfolioEvent.downloadResume).toBe("function");
      expect(typeof trackPortfolioEvent.socialClick).toBe("function");
      expect(typeof trackPortfolioEvent.skillsView).toBe("function");
    });

    describe("viewProject method", () => {
      it("tracks project view events", () => {
        trackPortfolioEvent.viewProject("test-project");
        
        expect(mockGtag).toHaveBeenCalledWith("event", "view_project", {
          event_category: "portfolio",
          event_label: "test-project",
        });
      });
    });

    describe("contactForm method", () => {
      it("tracks contact form events", () => {
        trackPortfolioEvent.contactForm("email");
        
        expect(mockGtag).toHaveBeenCalledWith("event", "contact_attempt", {
          event_category: "engagement",
          event_label: "email",
        });
      });
    });

    describe("downloadResume method", () => {
      it("tracks resume download events", () => {
        trackPortfolioEvent.downloadResume();
        
        expect(mockGtag).toHaveBeenCalledWith("event", "download_resume", {
          event_category: "engagement",
          event_label: "pdf_download",
        });
      });
    });

    describe("socialClick method", () => {
      it("tracks social media click events", () => {
        trackPortfolioEvent.socialClick("linkedin");
        
        expect(mockGtag).toHaveBeenCalledWith("event", "social_click", {
          event_category: "external_link",
          event_label: "linkedin",
        });
      });
    });

    describe("skillsView method", () => {
      it("tracks skills view events", () => {
        trackPortfolioEvent.skillsView("Frontend");
        
        expect(mockGtag).toHaveBeenCalledWith("event", "view_skills", {
          event_category: "portfolio",
          event_label: "Frontend",
        });
      });
    });
  });

  describe("browser environment detection", () => {
    it("handles server-side rendering gracefully", () => {
      const originalWindow = global.window;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any).window;
      
      expect(() => {
        gtag("config", "test");
        initGA();
        trackEvent("test", "test", "test");
      }).not.toThrow();
      
      global.window = originalWindow;
    });
  });
});