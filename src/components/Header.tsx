import { useState, useEffect } from "react";
import { resumeData } from "../data/resume";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { personalInfo } = resumeData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationItems = [
    { name: "About", id: "about", ariaLabel: "Go to About section" },
    { name: "Skills", id: "skills", ariaLabel: "Go to Skills section" },
    {
      name: "Experience",
      id: "experience",
      ariaLabel: "Go to Experience section",
    },
    { name: "Projects", id: "projects", ariaLabel: "Go to Projects section" },
    {
      name: "🤖 AI Story",
      id: "ai-portfolio",
      ariaLabel: "Go to AI Portfolio Story section",
    },
    { name: "Contact", id: "contact", ariaLabel: "Go to Contact section" },
  ];

  const initials = personalInfo.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out py-3`}
      role="banner"
    >
      <nav
        className={`container-custom px-6 sm:px-8 lg:px-12 mx-4 sm:mx-6 lg:mx-8 transition-all duration-700 ease-out card-glass rounded-2xl shadow-modern-lg ${
          isScrolled ? "py-3" : "py-4"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-out ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo with magnetic effect */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-3 text-xl font-bold transition-all duration-300 hover-magnetic"
              aria-label="Go to top"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  {initials}
                </div>
              </div>
              <span className="hidden sm:inline text-neo-900 dark:text-neo-100 transition-all duration-300 group-hover:translate-x-1 font-display">
                {personalInfo.name.split(" ")[0]}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-2" role="menubar">
              {navigationItems.map((item) => (
                <li key={item.id} role="none">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group relative px-4 py-2 rounded-xl text-sm font-medium text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover-magnetic"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle with modern design */}
            <button
              onClick={toggleTheme}
              className="group relative p-3 rounded-xl bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 text-neo-600 dark:text-neo-400 hover:text-neo-900 dark:hover:text-neo-100 transition-all duration-300 hover-magnetic hover:scale-110"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {darkMode ? (
                  <svg
                    className="relative z-10 w-5 h-5 transition-transform group-hover:rotate-180 duration-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="relative z-10 w-5 h-5 transition-transform group-hover:rotate-12 duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group md:hidden relative p-3 rounded-xl bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 text-neo-600 dark:text-neo-400 hover:text-neo-900 dark:hover:text-neo-100 transition-all duration-300 hover-magnetic hover:scale-110"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open main menu"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 w-5 h-5 flex flex-col justify-center items-center">
                  <span
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-0.5" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
                    }`}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with modern animations */}
        <div
          className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-4 pb-3 space-y-2 border-t border-neo-200/50 dark:border-neo-700/50 mt-4">
            <ul role="menu" className="space-y-2">
              {navigationItems.map((item, index) => (
                <li key={item.id} role="none">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-neo-100/50 dark:hover:bg-neo-800/50 transition-all duration-300 hover-lift"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                    style={{
                      animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      {item.name}
                      <svg
                        className="ml-auto w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
