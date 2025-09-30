import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hero from "../components/Hero";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    personalInfo: {
      name: "Héctor Franco",
      title: "Senior Full Stack Developer & Tech Lead",
      location: "Guadalajara, Mexico",
      bio: "Software Team-Tech Lead at London Markets, leading transaction management systems for insurance marketplace, specializing in UI solutions for transaction lifecycle management. Expert in AI-assisted development and modern coding practices with AI tools.",
      avatar: "https://via.placeholder.com/300x300/0ea5e9/ffffff?text=HF",
      linkedin: "https://www.linkedin.com/in/h%C3%A9ctor-franco-3a6515171/",
      github: "https://github.com/hectorfrancot",
      email: "hectorft.hf@gmail.com",
    },
  },
}));

// Mock de addEventListener para mouse events
Object.defineProperty(window, "addEventListener", {
  writable: true,
  value: vi.fn(),
});

Object.defineProperty(window, "removeEventListener", {
  writable: true,
  value: vi.fn(),
});

// Mock de getElementById para scroll functionality
Object.defineProperty(document, "getElementById", {
  writable: true,
  value: vi.fn(),
});

describe("Hero Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders personal information correctly", () => {
    render(<Hero />);

    // El nombre está dividido en spans, buscar por contenido parcial
    expect(screen.getByText("Héctor")).toBeInTheDocument();
    expect(screen.getByText("Franco")).toBeInTheDocument();
    expect(
      screen.getByText("Senior Full Stack Developer & Tech Lead"),
    ).toBeInTheDocument();
    expect(screen.getByText("Guadalajara, Mexico")).toBeInTheDocument();
  });

  it("renders bio text", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Software Team-Tech Lead at London Markets/),
    ).toBeInTheDocument();
    expect(screen.getByText(/AI-assisted development/)).toBeInTheDocument();
  });

  it("renders call-to-action buttons", () => {
    render(<Hero />);

    const contactButton = screen.getByRole("button", { name: /get in touch/i });
    const projectsButton = screen.getByRole("button", {
      name: /view my work/i,
    });

    expect(contactButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Hero />);

    expect(screen.getByLabelText(/linkedin profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/send email/i)).toBeInTheDocument();
  });

  it("renders avatar image with correct alt text", () => {
    render(<Hero />);

    const avatar = screen.getByAltText("Portrait of Héctor Franco");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute(
      "src",
      "https://via.placeholder.com/300x300/0ea5e9/ffffff?text=HF",
    );
  });

  it("navigates to contact section when contact button is clicked", async () => {
    const user = userEvent.setup();
    const mockElement = { scrollIntoView: vi.fn() };

    vi.mocked(document.getElementById).mockReturnValue(
      mockElement as unknown as HTMLElement,
    );

    render(<Hero />);

    const contactButton = screen.getByRole("button", { name: /get in touch/i });
    await user.click(contactButton);

    expect(document.getElementById).toHaveBeenCalledWith("contact");
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  it("navigates to projects section when projects button is clicked", async () => {
    const user = userEvent.setup();
    const mockElement = { scrollIntoView: vi.fn() };

    vi.mocked(document.getElementById).mockReturnValue(
      mockElement as unknown as HTMLElement,
    );

    render(<Hero />);

    const projectsButton = screen.getByRole("button", {
      name: /view my work/i,
    });
    await user.click(projectsButton);

    expect(document.getElementById).toHaveBeenCalledWith("projects");
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  it("has proper semantic HTML structure", () => {
    render(<Hero />);

    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute("id", "hero");

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const subheading = screen.getByRole("heading", { level: 2 });
    expect(subheading).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<Hero />);

    const section = screen.getByRole("banner");
    expect(section).toHaveAttribute("aria-labelledby", "hero-heading");

    const address = screen.getByText("Guadalajara, Mexico");
    expect(address.closest("address")).toBeInTheDocument();
  });
});
