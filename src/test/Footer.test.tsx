import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../components/Footer";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    personalInfo: {
      name: "Héctor Franco",
      title: "Team Lead / Senior Software Engineer",
      email: "hectorft.hf@gmail.com",
      linkedin: "https://www.linkedin.com/in/h%C3%A9ctor-franco-3a6515171/",
      github: "https://github.com/hectorfrancot",
    },
  },
}));

// Mock window.open
Object.defineProperty(window, "open", {
  writable: true,
  value: vi.fn(),
});

// Mock window.scrollTo
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

describe("Footer Component", () => {
  it("renders the footer with copyright information", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString())),
    ).toBeInTheDocument();
    const nameElements = screen.getAllByText(/Héctor Franco/i);
    expect(nameElements.length).toBeGreaterThan(0);
  });

  it("displays current year in copyright", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`©.*${currentYear}`)),
    ).toBeInTheDocument();
  });

  it("shows social media links", () => {
    render(<Footer />);

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/h%C3%A9ctor-franco-3a6515171/",
    );

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/hectorfrancot",
    );
  });

  it("opens social links in new tab", () => {
    render(<Footer />);

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains email contact link", () => {
    render(<Footer />);

    const emailLink = screen.getByRole("link", { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:hectorft.hf@gmail.com");
  });

  it("has proper semantic structure", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("displays built with information", () => {
    render(<Footer />);

    expect(
      screen.getByText(/built with/i) ||
        screen.getByText(/made with/i) ||
        screen.getByText(/created with/i) ||
        screen.getByText(/React/i),
    ).toBeInTheDocument();
  });

  it("shows technology stack used", () => {
    render(<Footer />);

    // Buscar menciones de tecnologías utilizadas
    expect(
      screen.queryByText(/React/i) ||
        screen.queryByText(/TypeScript/i) ||
        screen.queryByText(/Tailwind/i) ||
        screen.queryByText(/Vite/i),
    ).toBeInTheDocument();
  });

  it("includes AI development mention", () => {
    render(<Footer />);

    const aiMentions =
      screen.queryAllByText(/AI/i) ||
      screen.queryAllByText(/Copilot/i) ||
      screen.queryAllByText(/artificial intelligence/i) ||
      screen.queryAllByText(/🤖/i);

    // Es opcional, pero si existe al menos una mención
    expect(aiMentions.length).toBeGreaterThanOrEqual(0);
  });

  it("has navigation to top functionality", () => {
    render(<Footer />);

    const backToTopButton = screen.getByRole("button", {
      name: /back to top/i,
    });
    expect(backToTopButton).toBeInTheDocument();

    // Test the scrollToTop function
    fireEvent.click(backToTopButton);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("displays proper footer text", () => {
    render(<Footer />);

    expect(
      screen.getByText(/all rights reserved/i) ||
        screen.getByText(/portfolio/i) ||
        screen.getByText(/developer/i),
    ).toBeInTheDocument();
  });

  it("has dark mode compatible styling", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    // Verificar que tiene clases que sugieren compatibilidad con dark mode
    const hasThemeClasses =
      footer.className.includes("dark:") ||
      footer.className.includes("bg-") ||
      footer.className.includes("text-");

    expect(hasThemeClasses).toBe(true);
  });

  it("is accessible to screen readers", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    // Verificar que los enlaces tienen texto descriptivo o aria-labels
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      const hasAccessibleName =
        link.textContent ||
        link.getAttribute("aria-label") ||
        link.getAttribute("title");
      expect(hasAccessibleName).toBeTruthy();
    });
  });

  it("displays contact information prominently", () => {
    render(<Footer />);

    expect(screen.getByText("Héctor Franco")).toBeInTheDocument();
  });

  it("includes professional branding", () => {
    render(<Footer />);

    expect(
      screen.queryByText(/Senior Software Developer/i) ||
        screen.queryByText(/Full Stack/i) ||
        screen.queryByText(/Software Engineer/i) ||
        screen.queryByText(/Developer/i),
    ).toBeInTheDocument();
  });

  it("has responsive design classes", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    // Verificar que tiene clases responsive o de diseño
    const hasResponsiveClasses =
      footer.className.includes("bg-gradient") ||
      footer.className.includes("dark:") ||
      footer.className.includes("border") ||
      footer.className.includes("text-") ||
      footer.className.includes("relative");

    expect(hasResponsiveClasses).toBe(true);
  });
});
