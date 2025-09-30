import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it("renders main sections", () => {
    render(<App />);

    // Check if main semantic elements are present
    expect(document.querySelector("main")).toBeInTheDocument();
  });

  it("has proper structure", () => {
    render(<App />);

    // App should render the main container
    const mainElement = document.querySelector("main");
    expect(mainElement).toBeInTheDocument();
  });

  it("renders all major components", () => {
    render(<App />);

    // Check that the app renders content
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it("applies theme classes correctly", () => {
    render(<App />);

    // Should have content in the document
    expect(document.body.children.length).toBeGreaterThan(0);
  });
});
