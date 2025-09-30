import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AIPortfolioInfo from "../components/AIPortfolioInfo";

// Mock de useScrollAnimation hook
vi.mock("../hooks/useScrollAnimation", () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    isVisible: true,
  }),
}));

describe("AIPortfolioInfo Component", () => {
  it("renders the main heading", () => {
    render(<AIPortfolioInfo />);

    const heading = screen.getByRole("heading", {
      name: /ai-powered portfolio/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("mentions GitHub Copilot", () => {
    render(<AIPortfolioInfo />);

    const copilotMentions = screen.getAllByText(/GitHub Copilot/i);
    expect(copilotMentions.length).toBeGreaterThan(0);
  });

  it("shows the AI collaboration message", () => {
    render(<AIPortfolioInfo />);

    expect(
      screen.getByText(/collaboration with GitHub Copilot/i),
    ).toBeInTheDocument();
  });

  it("includes emoji or visual indicators", () => {
    render(<AIPortfolioInfo />);

    expect(screen.getAllByText(/🤖/i)[0]).toBeInTheDocument();
  });

  it("mentions specific AI tools used", () => {
    render(<AIPortfolioInfo />);

    expect(screen.getAllByText(/GitHub Copilot/i)[0]).toBeInTheDocument();
  });

  it("displays development philosophy", () => {
    render(<AIPortfolioInfo />);

    expect(
      screen.getByText(/Modern problems require modern solutions/i),
    ).toBeInTheDocument();
  });

  it("shows humorous take on modern development", () => {
    render(<AIPortfolioInfo />);

    expect(
      screen.getByText(/why spend weeks/i) ||
        screen.getByText(/hours prompt engineering/i) ||
        screen.getByText(/😎/i) ||
        screen.getByText(/modern developer/i),
    ).toBeInTheDocument();
  });

  it("has proper section structure", () => {
    render(<AIPortfolioInfo />);

    const section = document.getElementById("ai-portfolio");
    expect(section).toBeInTheDocument();
  });

  it("includes technical details about AI integration", () => {
    render(<AIPortfolioInfo />);

    expect(
      screen.getByText(/React/i) ||
        screen.getByText(/TypeScript/i) ||
        screen.getByText(/code generation/i) ||
        screen.getByText(/development/i),
    ).toBeInTheDocument();
  });

  it("demonstrates transparency about AI usage", () => {
    render(<AIPortfolioInfo />);

    // Expandir contenido primero
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.click(readMoreButton);

    expect(
      screen.getByText(
        /collaboration between human creativity and artificial intelligence/i,
      ),
    ).toBeInTheDocument();
  });

  it("shows benefits of AI-assisted development", () => {
    render(<AIPortfolioInfo />);

    // Expandir contenido primero
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.click(readMoreButton);

    expect(
      screen.getByText(/AI can accelerate development/i),
    ).toBeInTheDocument();
  });

  it("includes call-to-action or conclusion", () => {
    render(<AIPortfolioInfo />);

    // Expandir contenido primero
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.click(readMoreButton);

    expect(screen.getByText(/the future of development/i)).toBeInTheDocument();
  });

  it("has appropriate styling for emphasis", () => {
    render(<AIPortfolioInfo />);

    const section = document.getElementById("ai-portfolio");

    // Verificar que tiene clases de estilo apropiadas
    expect(section?.className).toContain("py-");
  });

  it("is accessible with proper headings", () => {
    render(<AIPortfolioInfo />);

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);

    // Verificar que tiene estructura de headings apropiada
    const mainHeading =
      screen.getByRole("heading", { level: 2 }) ||
      screen.getByRole("heading", { level: 3 });
    expect(mainHeading).toBeInTheDocument();
  });

  it("provides educational value about AI in development", () => {
    render(<AIPortfolioInfo />);

    expect(
      screen.getByText(
        /This portfolio showcases the power of AI-assisted development/i,
      ),
    ).toBeInTheDocument();
  });

  it("maintains professional tone despite humor", () => {
    render(<AIPortfolioInfo />);

    // Expandir contenido primero
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.click(readMoreButton);

    expect(
      screen.getByText(/maintaining code quality and creativity/i),
    ).toBeInTheDocument();
  });

  it("encourages modern development practices", () => {
    render(<AIPortfolioInfo />);

    expect(screen.getAllByText(/modern/i)[0]).toBeInTheDocument();
  });
});
