/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono Variable",
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
        display: ["Cal Sans", "Inter Variable", "Inter", "sans-serif"],
      },
      colors: {
        // Modern gradient-based color system
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },
        neo: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        // Neon colors for modern accents
        neon: {
          cyan: "#00ffff",
          purple: "#bf00ff",
          pink: "#ff0080",
          green: "#00ff41",
          orange: "#ff8c00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh":
          "linear-gradient(45deg, var(--tw-gradient-stops)), linear-gradient(-45deg, var(--tw-gradient-stops))",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        // Modern entrance animations
        "fade-in": "fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "fade-in-down": "fadeInDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "slide-in-left":
          "slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "slide-in-right":
          "slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",

        // Stagger animations
        "stagger-1":
          "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both",
        "stagger-2":
          "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both",
        "stagger-3":
          "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both",
        "stagger-4":
          "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both",
        "stagger-5":
          "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both",

        // Continuous animations
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        magnetic: "magnetic 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",

        // Modern micro-interactions
        morphing: "morphing 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        liquid: "liquid 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "elastic 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",

        // Text animations
        "text-reveal": "textReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "char-reveal": "charReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "drop-shadow(0 0 20px rgba(14, 165, 233, 0.4))",
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.05)",
            filter: "drop-shadow(0 0 30px rgba(14, 165, 233, 0.8))",
          },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        magnetic: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.1) rotate(2deg)" },
          "100%": { transform: "scale(1.05) rotate(0deg)" },
        },
        morphing: {
          "0%": { borderRadius: "10px", transform: "scale(1)" },
          "50%": { borderRadius: "50px", transform: "scale(1.05)" },
          "100%": { borderRadius: "20px", transform: "scale(1)" },
        },
        liquid: {
          "0%": { borderRadius: "20px" },
          "25%": { borderRadius: "50px 20px 20px 50px" },
          "50%": { borderRadius: "20px 50px 50px 20px" },
          "75%": { borderRadius: "50px 20px 20px 50px" },
          "100%": { borderRadius: "20px" },
        },
        elastic: {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.25)" },
          "40%": { transform: "scale(0.75)" },
          "50%": { transform: "scale(1.15)" },
          "65%": { transform: "scale(0.95)" },
          "75%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        textReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        charReveal: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neo-light": "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
        "neo-dark": "8px 8px 16px #0f172a, -8px -8px 16px #1e293b",
        glow: "0 0 20px rgba(14, 165, 233, 0.4)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.6)",
        modern: "0 8px 32px rgba(0, 0, 0, 0.12)",
        "modern-lg": "0 16px 64px rgba(0, 0, 0, 0.16)",
      },
      blur: {
        "4xl": "72px",
        "5xl": "96px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
