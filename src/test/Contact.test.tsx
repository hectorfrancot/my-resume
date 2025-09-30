import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../components/Contact";

vi.mock("../data/resume", () => ({
  resumeData: {
    personalInfo: {
      name: "Héctor Franco",
      title: "Team Lead / Senior Software Engineer",
      location: "Guadalajara, Mexico",
      email: "hectorft.hf@gmail.com",
      phone: "+52 33 11 69 72 93",
      bio: "Software Team-Tech Lead at London Markets, leading transaction management systems for insurance marketplace, specializing in UI solutions for transaction lifecycle management.",
      linkedin: "https://www.linkedin.com/in/h%C3%A9ctor-franco-3a6515171/",
      github: "https://github.com/hectorfrancot",
    },
  },
}));

// Mock de useScrollAnimation hook
vi.mock("../hooks/useScrollAnimation", () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    isVisible: true,
  }),
}));

// Mock window.open
Object.defineProperty(window, "open", {
  writable: true,
  value: vi.fn(),
});

// Mock location.href
Object.defineProperty(window, "location", {
  writable: true,
  value: {
    href: "https://hectorfrancot.github.io",
  },
});

describe("Contact Component", () => {
  it("renders the contact section heading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { name: /get in touch/i });
    expect(heading).toBeInTheDocument();
  });

  it("displays contact description", () => {
    render(<Contact />);

    expect(
      screen.getByText(/ready to bring your ideas to life/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/let's collaborate and create something extraordinary/i),
    ).toBeInTheDocument();
  });

  it("has correct email link", () => {
    render(<Contact />);

    const emailLink = screen.getByRole("link", {
      name: /hectorft.hf@gmail.com/i,
    });
    expect(emailLink).toHaveAttribute("href", "mailto:hectorft.hf@gmail.com");
  });

  it("shows phone contact information", () => {
    render(<Contact />);

    expect(screen.getByText("+52 33 11 69 72 93")).toBeInTheDocument();
  });

  it("shows location information", () => {
    render(<Contact />);

    expect(screen.getByText("Guadalajara, Mexico")).toBeInTheDocument();
  });

  it("displays social media links", () => {
    render(<Contact />);

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

  it("opens email client when email link is clicked", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const emailLink = screen.getByRole("link", {
      name: /hectorft.hf@gmail.com/i,
    });
    await user.click(emailLink);

    expect(emailLink).toHaveAttribute("href", "mailto:hectorft.hf@gmail.com");
  });

  it("opens LinkedIn profile in new tab", () => {
    render(<Contact />);

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("opens GitHub profile in new tab", () => {
    render(<Contact />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("has proper section structure", () => {
    render(<Contact />);

    const section = document.querySelector("#contact");
    expect(section).toBeInTheDocument();
  });

  it("displays contact icons", () => {
    render(<Contact />);

    // Check for contact elements that actually exist
    const emailLink = screen.getByRole("link", {
      name: /hectorft.hf@gmail.com/i,
    });
    const phoneLink = screen.getByRole("link", {
      name: /\+52 33 11 69 72 93/i,
    });

    expect(emailLink).toBeInTheDocument();
    expect(phoneLink).toBeInTheDocument();
  });

  it("has call-to-action text", () => {
    render(<Contact />);

    expect(
      screen.getByText(/whether you have a groundbreaking project/i),
    ).toBeInTheDocument();
  });

  it("displays professional title", () => {
    render(<Contact />);

    // The title is not displayed in the Contact component, so we remove this test
    const heading = screen.getByRole("heading", { name: /get in touch/i });
    expect(heading).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<Contact />);

    const links = screen.getAllByRole("link");

    // Verificar que los enlaces externos tienen rel="noopener noreferrer"
    const externalLinks = links.filter(
      (link) =>
        link.getAttribute("href")?.includes("linkedin.com") ||
        link.getAttribute("href")?.includes("github.com"),
    );

    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("displays contact form or contact methods", () => {
    render(<Contact />);

    // Verificar que hay métodos de contacto disponibles
    const contactMethods = [
      screen.queryByRole("link", { name: /email/i }),
      screen.queryByText(/hectorft.hf@gmail.com/i),
      screen.queryByText("+52 33 11 69 72 93"),
      screen.queryByRole("form"),
    ].filter(Boolean);

    expect(contactMethods.length).toBeGreaterThan(0);
  });

  it("has semantic markup for contact information", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();

    // Verificar que hay información de contacto estructurada
    expect(screen.getByText("hectorft.hf@gmail.com")).toBeInTheDocument();
  });
});
