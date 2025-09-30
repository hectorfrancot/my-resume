/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";
import useScrollAnimation from "../hooks/useScrollAnimation"; // <- ajusta la ruta

const getIO = () => {
  const list = (globalThis as any).__ioInstances as any[] | undefined;
  if (!list || list.length === 0) throw new Error("No IO instances registered");
  return list[list.length - 1]; // última creada por este render
};

const TestComponent: React.FC<{
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}> = ({ threshold, rootMargin, triggerOnce }) => {
  const ref = useScrollAnimation({ threshold, rootMargin, triggerOnce });
  return (
    <div data-testid="box" ref={ref as React.RefObject<HTMLDivElement>}>
      content
    </div>
  );
};

describe("useScrollAnimation", () => {
  beforeEach(() => {
    cleanup();
    // reset helpers
    // @ts-expect-error helper del setup
    window.__setPrefersReducedMotion?.(false);
    (globalThis as any).__ioInstances = [];
  });

  afterEach(() => {
    cleanup();
  });

  it("añade .visible inmediatamente si el usuario prefiere reduced motion", () => {
    // @ts-expect-error helper del setup
    window.__setPrefersReducedMotion?.(true);

    render(<TestComponent />);
    const box = screen.getByTestId("box");

    expect(box).toHaveClass("visible");
    // en reduced motion no se crea observer
    expect((global as any).IntersectionObserver).not.toHaveBeenCalled();
  });

  it("observa el elemento y agrega .visible al intersectar", () => {
    render(<TestComponent />);
    const box = screen.getByTestId("box");

    // se creó un observer y observó el elemento
    expect((global as any).IntersectionObserver).toHaveBeenCalledTimes(1);
    const io = getIO();
    expect(io.observe).toHaveBeenCalledWith(box);

    // entra al viewport
    io.trigger([{ target: box, isIntersecting: true }]);
    expect(box).toHaveClass("visible");
  });

  it("con triggerOnce=true deja de observar tras la primera intersección", () => {
    render(<TestComponent triggerOnce />);
    const box = screen.getByTestId("box");
    const io = getIO();

    io.trigger([{ target: box, isIntersecting: true }]);
    expect(box).toHaveClass("visible");
    expect(io.unobserve).toHaveBeenCalledWith(box);
  });

  it("con triggerOnce=false remueve .visible cuando deja de intersectar", () => {
    render(<TestComponent triggerOnce={false} />);
    const box = screen.getByTestId("box");
    const io = getIO();

    io.trigger([{ target: box, isIntersecting: true }]);
    expect(box).toHaveClass("visible");

    io.trigger([{ target: box, isIntersecting: false }]);
    expect(box).not.toHaveClass("visible");
  });

  it("pasa threshold y rootMargin al constructor", () => {
    render(<TestComponent threshold={0.25} rootMargin="0px 0px -100px 0px" />);
    const io = getIO();

    expect(io.__options?.threshold).toEqual(0.25);
    expect(io.__options?.rootMargin).toEqual("0px 0px -100px 0px");
  });

  it("desconecta el observer en unmount", () => {
    const { unmount } = render(<TestComponent />);
    const io = getIO();

    unmount();
    expect(io.disconnect).toHaveBeenCalled();
  });
});
