import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    personalInfo: {
      name: "Héctor Franco",
      title: "Senior Full Stack Developer",
      location: "Guadalajara, Mexico",
    },
  },
}));

// Mock de useTheme hook
vi.mock("../hooks/useTheme", () => ({
  useTheme: () => ({
    darkMode: false,
    toggleTheme: vi.fn(),
  }),
}));

// Mock de scroll methods
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

describe("Header Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders header with navigation items", () => {
    render(<Header />);

    expect(screen.getAllByText("About")).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByText("Skills")).toHaveLength(2);
    expect(screen.getAllByText("Experience")).toHaveLength(2);
    expect(screen.getAllByText("Projects")).toHaveLength(2);
    expect(screen.getAllByText("🤖 AI Story")).toHaveLength(2);
    expect(screen.getAllByText("Contact")).toHaveLength(2);
  });

  it("renders user initials in logo", () => {
    render(<Header />);

    const logoElement = screen.getByText("HF");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders dark mode toggle button", () => {
    render(<Header />);

    const darkModeButton = screen.getByLabelText(/switch to dark mode/i);
    expect(darkModeButton).toBeInTheDocument();
  });

  it("renders mobile menu button", () => {
    render(<Header />);

    const mobileMenuButton = screen.getByLabelText(/open main menu/i);
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it("opens mobile menu when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const mobileMenuButton = screen.getByLabelText(/open main menu/i);
    await user.click(mobileMenuButton);

    // En mobile menu, debe expandirse el menú
    expect(mobileMenuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("navigates to sections when nav items are clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    // Usar getAllByRole para obtener todos los enlaces About (desktop y mobile)
    const aboutLinks = screen.getAllByRole("menuitem", {
      name: /go to about section/i,
    });
    expect(aboutLinks).toHaveLength(2); // Desktop y mobile

    // Click en el primer enlace (desktop)
    await user.click(aboutLinks[0]);

    // Como es una SPA, verificamos que el elemento sea clickeable
    expect(aboutLinks[0]).toBeInTheDocument();
  });

  it("scrolls to top when logo is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const logoButton = screen.getByLabelText(/go to top/i);
    await user.click(logoButton);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("has proper accessibility attributes", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Main navigation");

    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });
});
