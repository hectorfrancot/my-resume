import "@testing-library/jest-dom";
import { vi } from "vitest";

/** ---------- matchMedia configurable ---------- **/
let __matchesReduced = false;

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches:
      __matchesReduced && query.includes("(prefers-reduced-motion: reduce)"),
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// helper para cambiar el valor por prueba
// @ts-expect-error expuesto para pruebas
window.__setPrefersReducedMotion = (v: boolean) => {
  __matchesReduced = v;
};

/** ---------- IntersectionObserver con instancias ---------- **/
type IOCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) => void;

// Type declaration for globalThis to avoid 'any' usage
declare global {
  var __ioInstances: __MockIntersectionObserver[];
}

class __MockIntersectionObserver {
  public observe = vi.fn();
  public unobserve = vi.fn();
  public disconnect = vi.fn();
  public __cb: IOCallback;
  public __options?: IntersectionObserverInit;

  constructor(cb: IOCallback, options?: IntersectionObserverInit) {
    this.__cb = cb;
    this.__options = options;

    // registra la instancia para poder acceder desde los tests
    if (!globalThis.__ioInstances) {
      globalThis.__ioInstances = [];
    }
    globalThis.__ioInstances.push(this);
  }

  /** Dispara entradas artificiales */
  trigger(entries: Partial<IntersectionObserverEntry>[]) {
    const normalized = entries.map((e) => ({
      isIntersecting: false,
      target: document.createElement("div"),
      intersectionRatio: 0,
      time: 0,
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRect: {} as DOMRectReadOnly,
      rootBounds: null,
      ...e,
    })) as IntersectionObserverEntry[];

    this.__cb(normalized, this as unknown as IntersectionObserver);
  }
}

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  value: vi
    .fn()
    .mockImplementation(
      (cb: IOCallback, options?: IntersectionObserverInit) =>
        new __MockIntersectionObserver(cb, options),
    ),
});

/** ---------- (deja aquí tus mocks de localStorage y gtag tal como los tenías) ---------- **/

// Mock localStorage (tu versión original)
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

// Mock window.gtag (tu versión original)
Object.defineProperty(window, "gtag", {
  writable: true,
  value: vi.fn(),
});
