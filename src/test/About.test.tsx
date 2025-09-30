import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    personalInfo: {
      name: "Héctor Franco",
      bio: "Software Team-Tech Lead at London Markets, leading transaction management systems for insurance marketplace, specializing in UI solutions for transaction lifecycle management. Expert in AI-assisted development and modern coding practices with AI tools.",
    },
    skills: [
      { name: "React", level: "Expert", category: "Frontend" },
      { name: "TypeScript", level: "Advanced", category: "Frontend" },
      { name: "Angular", level: "Expert", category: "Frontend" },
    ],
    projects: [
      { id: "1", title: "Test Project 1" },
      { id: "2", title: "Test Project 2" },
    ],
    experience: [{ id: "1", company: "Test Company" }],
    education: [
      {
        id: "1",
        institution: "Test University",
        degree: "Bachelor's Degree",
        field: "Computer Science",
        startDate: "2015-02",
        endDate: "2019-02",
        description: "Test education description",
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

describe("About Component", () => {
  it("renders the about section heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the bio text", () => {
    render(<About />);

    expect(
      screen.getByText(/Software Team-Tech Lead at London Markets/),
    ).toBeInTheDocument();
    expect(screen.getByText(/AI-assisted development/)).toBeInTheDocument();
  });

  it("has proper section structure", () => {
    render(<About />);

    const section = document.querySelector("#about");
    expect(section).toBeInTheDocument();
  });

  it("contains key professional highlights", () => {
    render(<About />);

    expect(
      screen.getByText(/transaction management systems/),
    ).toBeInTheDocument();
    expect(screen.getByText(/insurance marketplace/)).toBeInTheDocument();
    expect(screen.getByText(/UI solutions/)).toBeInTheDocument();
  });

  it("highlights AI expertise", () => {
    render(<About />);

    expect(screen.getByText(/AI-assisted development/)).toBeInTheDocument();
    expect(
      screen.getByText(/modern coding practices with AI tools/),
    ).toBeInTheDocument();
  });

  it("has proper semantic markup", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
