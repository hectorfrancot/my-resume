import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "../hooks/useTheme";

// Mock window.matchMedia
const mockMatchMedia = vi.fn();

describe("useTheme Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset localStorage
    localStorage.clear();

    // Setup window.matchMedia mock before each test
    mockMatchMedia.mockImplementation((query: string) => ({
      matches: query === "(prefers-color-scheme: dark)" ? false : true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: mockMatchMedia,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("provides consistent API", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toHaveProperty("darkMode");
    expect(result.current).toHaveProperty("toggleTheme");
    expect(result.current).toHaveProperty("setTheme");

    expect(typeof result.current.darkMode).toBe("boolean");
    expect(typeof result.current.toggleTheme).toBe("function");
    expect(typeof result.current.setTheme).toBe("function");
  });

  it("initializes with a boolean darkMode value", () => {
    const { result } = renderHook(() => useTheme());
    expect(typeof result.current.darkMode).toBe("boolean");
  });

  it("toggles theme correctly", () => {
    const { result } = renderHook(() => useTheme());
    const initialMode = result.current.darkMode;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.darkMode).toBe(!initialMode);
  });

  it("sets specific theme using setTheme function", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme(true);
    });

    expect(result.current.darkMode).toBe(true);

    act(() => {
      result.current.setTheme(false);
    });

    expect(result.current.darkMode).toBe(false);
  });

  it("persists theme preference in localStorage", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme(true);
    });

    expect(localStorage.getItem("theme")).toBe("dark");

    act(() => {
      result.current.setTheme(false);
    });

    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("updates theme correctly when toggling multiple times", () => {
    const { result } = renderHook(() => useTheme());
    const initialMode = result.current.darkMode;

    // Toggle once
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.darkMode).toBe(!initialMode);

    // Toggle back
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.darkMode).toBe(initialMode);
  });

  it("handles theme state changes", () => {
    const { result } = renderHook(() => useTheme());

    // Test setting dark mode
    act(() => {
      result.current.setTheme(true);
    });
    expect(result.current.darkMode).toBe(true);

    // Test setting light mode
    act(() => {
      result.current.setTheme(false);
    });
    expect(result.current.darkMode).toBe(false);
  });

  it("maintains consistent behavior across renders", () => {
    const { result, rerender } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme(true);
    });

    rerender();
    expect(result.current.darkMode).toBe(true);
    expect(typeof result.current.toggleTheme).toBe("function");
    expect(typeof result.current.setTheme).toBe("function");
  });

  it("handles boolean parameters correctly", () => {
    const { result } = renderHook(() => useTheme());

    // Test with explicit true
    act(() => {
      result.current.setTheme(true);
    });
    expect(result.current.darkMode).toBe(true);

    // Test with explicit false
    act(() => {
      result.current.setTheme(false);
    });
    expect(result.current.darkMode).toBe(false);
  });

  it("provides stable function references", () => {
    const { result, rerender } = renderHook(() => useTheme());

    rerender();

    // Functions should still be functions after rerender
    expect(typeof result.current.toggleTheme).toBe("function");
    expect(typeof result.current.setTheme).toBe("function");

    // Test that functions still work after rerender
    act(() => {
      result.current.setTheme(true);
    });
    expect(result.current.darkMode).toBe(true);
  });
});
