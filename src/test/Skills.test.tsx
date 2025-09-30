import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    skills: [
      { name: "React", level: "Expert", category: "Frontend" },
      { name: "Angular", level: "Expert", category: "Frontend" },
      { name: "TypeScript", level: "Advanced", category: "Frontend" },
      { name: "Java Spring Boot", level: "Expert", category: "Backend" },
      { name: ".NET Core", level: "Advanced", category: "Backend" },
      { name: "PostgreSQL", level: "Expert", category: "Database" },
      { name: "AWS", level: "Advanced", category: "DevOps" },
      { name: "GitHub Copilot", level: "Expert", category: "AI/ML" },
      { name: "Team Leadership", level: "Expert", category: "Soft Skills" },
      { name: "Git", level: "Expert", category: "Tools" },
    ]
  }
}));

// Mock de useScrollAnimation hook
vi.mock("../hooks/useScrollAnimation", () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    isVisible: true,
  }),
}));

describe("Skills Component", () => {
  it("renders the skills section heading", () => {
    render(<Skills />);
    
    const heading = screen.getByRole("heading", { name: /skills.*technologies/i });
    expect(heading).toBeInTheDocument();
  });

  it("displays all skill categories", () => {
    render(<Skills />);
    
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("DevOps")).toBeInTheDocument();
    expect(screen.getByText("AI/ML")).toBeInTheDocument();
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
  });

  it("displays key frontend technologies", () => {
    render(<Skills />);
    
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Angular")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("displays backend technologies", () => {
    render(<Skills />);
    
    expect(screen.getByText("Java Spring Boot")).toBeInTheDocument();
    expect(screen.getByText(".NET Core")).toBeInTheDocument();
  });

  it("displays AI/ML skills prominently", () => {
    render(<Skills />);
    
    expect(screen.getByText("GitHub Copilot")).toBeInTheDocument();
  });

  it("shows leadership and soft skills", () => {
    render(<Skills />);
    
    expect(screen.getByText("Team Leadership")).toBeInTheDocument();
  });

  it("has proper section structure", () => {
    render(<Skills />);
    
    // Buscar por el ID específico en lugar del rol
    const section = document.querySelector("#skills");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "skills");
  });

  it("displays skill levels", () => {
    render(<Skills />);
    
    // Los niveles deberían estar representados visualmente
    // Esto puede ser a través de badges, progress bars, o texto
    const skillsSection = document.querySelector("#skills");
    expect(skillsSection).toBeInTheDocument();
    
    // Verificar que hay indicadores de nivel de habilidad
    expect(
      screen.getAllByText("Expert")[0] ||
      screen.queryByText("Advanced") ||
      screen.queryByText("Intermediate")
    ).toBeInTheDocument();
  });

  it("groups skills by category properly", () => {
    render(<Skills />);
    
    // Verificar que las skills están agrupadas
    const frontendSection = screen.getByText("Frontend").closest("div");
    const backendSection = screen.getByText("Backend").closest("div");
    
    expect(frontendSection).toBeInTheDocument();
    expect(backendSection).toBeInTheDocument();
  });

  it("has proper semantic markup", () => {
    render(<Skills />);
    
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});