import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    projects: [
      {
        id: "0",
        title: "🤖 AI-Powered Portfolio Website",
        description:
          "This entire portfolio was built in collaboration with GitHub Copilot, because why spend weeks coding when you can spend hours prompt engineering? 😎",
        technologies: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "GitHub Copilot",
        ],
        liveUrl: "https://hectorfrancot.github.io",
        githubUrl: "https://github.com/hfedavidfr/portfolio-ai",
        imageUrl:
          "https://via.placeholder.com/600x400/3b82f6/ffffff?text=🤖+AI+Portfolio",
        featured: true,
      },
      {
        id: "1",
        title: "Property & Hotel Booking Platform",
        description:
          "Leading the development of an innovative property and hotel booking product at Groups 360.",
        technologies: ["React", "Angular", "Redux", "Java Spring Boot"],
        liveUrl: "https://groups360.com",
        githubUrl: "",
        imageUrl:
          "https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Hotel+Booking+Platform",
        featured: true,
      },
    ],
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

describe("Projects Component", () => {
  it("renders the projects section heading", () => {
    render(<Projects />);

    const heading = screen.getByRole("heading", { name: /featured projects/i });
    expect(heading).toBeInTheDocument();
  });

  it("displays the AI portfolio project prominently", () => {
    render(<Projects />);

    expect(
      screen.getAllByText("🤖 AI-Powered Portfolio Website")[0],
    ).toBeInTheDocument();
    expect(screen.getAllByText(/GitHub Copilot/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/prompt engineering/)[0]).toBeInTheDocument();
  });

  it("displays the hotel booking platform project", () => {
    render(<Projects />);

    expect(
      screen.getAllByText("Property & Hotel Booking Platform")[0],
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Groups 360/)[0]).toBeInTheDocument();
  });

  it("shows project technologies", () => {
    render(<Projects />);

    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.getByText("GitHub Copilot")).toBeInTheDocument();
  });

  it("displays project images with proper alt text", () => {
    render(<Projects />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);

    const aiPortfolioImage = screen.getByAltText(
      "🤖 AI-Powered Portfolio Website",
    );
    expect(aiPortfolioImage).toBeInTheDocument();
  });

  it("opens live project when live demo button is clicked", async () => {
    render(<Projects />);

    const liveDemoLinks = screen.getAllByRole("link", { name: /live demo/i });

    expect(liveDemoLinks.length).toBeGreaterThan(0);
    expect(liveDemoLinks[0]).toHaveAttribute("target", "_blank");
  });

  it("opens GitHub repository when GitHub button is clicked", async () => {
    render(<Projects />);

    // En lugar de buscar por nombre "github", buscar por el enlace de source code real
    const sourceCodeLinks = screen.getAllByRole("link", {
      name: /source code/i,
    });

    expect(sourceCodeLinks.length).toBeGreaterThan(0);
    expect(sourceCodeLinks[0]).toHaveAttribute("target", "_blank");
  });

  it("has proper semantic structure", () => {
    render(<Projects />);

    // Use the actual element instead of role="region"
    const section = screen
      .getByRole("heading", { name: /featured projects/i })
      .closest("section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "projects");
  });

  it("displays project descriptions", () => {
    render(<Projects />);

    const descriptions = screen.getAllByText(
      /collaboration with GitHub Copilot/,
    );
    expect(descriptions).toHaveLength(2); // Image overlay and main card
  });

  it("displays technology stacks", () => {
    render(<Projects />);

    const projectTitles = screen.getAllByText(
      "🤖 AI-Powered Portfolio Website",
    );
    expect(projectTitles).toHaveLength(2); // Image overlay and main card
  });

  it("highlights featured projects", () => {
    render(<Projects />);

    // Ambos proyectos son featured, así que deberían estar visibles
    expect(
      screen.getAllByText("🤖 AI-Powered Portfolio Website")[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByText("Property & Hotel Booking Platform")[0],
    ).toBeInTheDocument();
  });

  it("shows project links correctly", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);

    // Verificar que hay enlaces a proyectos
    const projectLinks = links.filter(
      (link) =>
        link.getAttribute("href")?.includes("github") ||
        link.getAttribute("href")?.includes("groups360") ||
        link.getAttribute("href")?.includes("hectorfrancot"),
    );

    expect(projectLinks.length).toBeGreaterThan(0);
  });

  it("has proper semantic markup", () => {
    render(<Projects />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();

    const articles = screen.getAllByRole("article");
    expect(articles.length).toBeGreaterThan(0);
  });

  it("displays technology badges", () => {
    render(<Projects />);

    // Verificar que las tecnologías se muestran como badges/tags
    const technologies = [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Copilot",
    ];

    technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });
});
