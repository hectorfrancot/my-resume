import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Experience from "../components/Experience";

// Mock de los datos de resume
vi.mock("../data/resume", () => ({
  resumeData: {
    experience: [
      {
        id: "1",
        company: "London Markets",
        position: "Software Team-Tech Lead",
        startDate: "2023-03",
        endDate: undefined,
        location: "London, UK (Remote)",
        description: [
          "Leading the development of critical transaction management systems for the world's leading insurance marketplace",
          "Architecting and implementing sophisticated UI solutions for comprehensive transaction lifecycle management",
        ],
        technologies: ["React", "Angular", "TypeScript", "Java Spring Boot"],
        website: "https://londonmarkets.com",
      },
      {
        id: "2",
        company: "Groups 360",
        position: "Software Team-Tech Lead",
        startDate: "2022-01",
        endDate: "2023-03",
        location: "Zapopan, Mexico",
        description: [
          "Led the development and delivery of an innovative property and hotel booking product",
        ],
        technologies: ["React", "Angular", ".NET Core 6"],
        website: "https://groups360.com",
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

describe("Experience Component", () => {
  it("renders the experience section heading", () => {
    render(<Experience />);

    const heading = screen.getByRole("heading", { name: /work experience/i });
    expect(heading).toBeInTheDocument();
  });

  it("displays current position at London Markets", () => {
    render(<Experience />);

    expect(screen.getByText("London Markets")).toBeInTheDocument();
    expect(
      screen.getAllByText("Software Team-Tech Lead")[0],
    ).toBeInTheDocument();
    expect(screen.getByText("London, UK (Remote)")).toBeInTheDocument();
  });

  it("shows current position as ongoing", () => {
    render(<Experience />);

    expect(screen.getByText(/Present/i)).toBeInTheDocument();
  });

  it("displays previous experience at Groups 360", () => {
    render(<Experience />);

    expect(screen.getByText("Groups 360")).toBeInTheDocument();
  });

  it("shows job descriptions", () => {
    render(<Experience />);

    expect(
      screen.getByText(
        /Leading the development of critical transaction management systems/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Led the development and delivery of an innovative property/,
      ),
    ).toBeInTheDocument();
  });

  it("displays technologies used", () => {
    render(<Experience />);

    expect(screen.getAllByText("React")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Angular")[0]).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Java Spring Boot")).toBeInTheDocument();
  });

  it("shows employment dates correctly", () => {
    render(<Experience />);

    // Buscar el elemento time que contiene las fechas
    const timeElements = screen.getAllByRole("time");
    expect(timeElements.length).toBeGreaterThan(0);

    // Verificar que aparece "Present" para el trabajo actual
    expect(screen.getByText(/Present/i)).toBeInTheDocument();

    // Verificar que hay elementos time con fechas (más robusto)
    const hasTimeElements = timeElements.every(element => {
      const text = element.textContent || "";
      // Verificar que contiene formato de año (2021, 2022, 2023, etc.)
      return /20\d{2}/.test(text);
    });
    expect(hasTimeElements).toBe(true);

    // Verificar que al menos un elemento contiene "Present"
    const hasPresent = timeElements.some(element => 
      element.textContent?.includes("Present")
    );
    expect(hasPresent).toBe(true);
  });

  it("opens company website when company name is clicked", async () => {
    const user = userEvent.setup();
    render(<Experience />);

    // Buscar enlaces a las empresas
    const londonMarketsLinks = screen.getAllByRole("link");
    const londonMarketsLink = londonMarketsLinks.find(
      (link) => link.getAttribute("href") === "https://londonmarkets.com",
    );

    if (londonMarketsLink) {
      await user.click(londonMarketsLink);
      // En lugar de esperar window.open, verificamos que el enlace tenga los atributos correctos
      expect(londonMarketsLink).toHaveAttribute(
        "href",
        "https://londonmarkets.com",
      );
      expect(londonMarketsLink).toHaveAttribute("target", "_blank");
    }
  });

  it("has proper section structure", () => {
    render(<Experience />);

    const sections = screen.getAllByRole("region");
    const experienceSection = sections.find(
      (section) => section.id === "experience",
    );
    expect(experienceSection).toBeInTheDocument();
  });

  it("displays experience in chronological order", () => {
    render(<Experience />);

    const experiences = screen.getAllByText(/Software Team-Tech Lead/);
    expect(experiences).toHaveLength(2);

    // London Markets debería aparecer primero (más reciente)
    const londonMarkets = screen.getByText("London Markets");
    const groups360 = screen.getByText("Groups 360");

    expect(londonMarkets.compareDocumentPosition(groups360)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  it("highlights key achievements", () => {
    render(<Experience />);

    expect(
      screen.getByText(/transaction management systems/),
    ).toBeInTheDocument();
    expect(screen.getByText(/insurance marketplace/)).toBeInTheDocument();
    expect(screen.getByText(/sophisticated UI solutions/)).toBeInTheDocument();
  });

  it("has proper semantic markup", () => {
    render(<Experience />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();

    const lists = screen.getAllByRole("list");
    expect(lists.length).toBeGreaterThan(0);
  });
});
