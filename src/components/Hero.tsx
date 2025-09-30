import { resumeData } from "../data/resume";
import { useEffect, useState } from "react";

const Hero = () => {
  const { personalInfo } = resumeData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.3), transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-primary-300/15 to-accent-300/15 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-accent-300/15 to-primary-300/15 rounded-full blur-xl animate-float-delayed" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Avatar with modern effects */}
          <div className="mb-12 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <img
                src={personalInfo.avatar}
                alt={`Portrait of ${personalInfo.name}`}
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-white/20 dark:border-neo-700/20 shadow-modern-lg animate-float hover-magnetic"
                loading="eager"
                width="192"
                height="192"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-accent-500/20 backdrop-blur-sm" />
            </div>
          </div>

          {/* Name and Title with text reveal */}
          <hgroup className="mb-12">
            <h1
              id="hero-heading"
              className="text-hero text-gradient mb-6 animate-stagger-1"
            >
              <span itemProp="name">
                {personalInfo.name.split(" ").map((word, index) => (
                  <span
                    key={word}
                    className="inline-block animate-char-reveal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {word}
                    {index < personalInfo.name.split(" ").length - 1 && " "}
                  </span>
                ))}
              </span>
            </h1>

            <div className="relative animate-stagger-2">
              <h2
                className="text-display text-neo-700 dark:text-neo-300 mb-4 font-display"
                itemProp="jobTitle"
              >
                {personalInfo.title}
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-3xl -z-10" />
            </div>

            <address
              className="text-xl text-neo-600 dark:text-neo-400 flex items-center justify-center not-italic animate-stagger-3 hover-magnetic"
              itemProp="address"
            >
              <svg
                className="w-5 h-5 mr-3 text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {personalInfo.location}
            </address>
          </hgroup>

          {/* Bio with enhanced styling */}
          <div className="mb-16 animate-stagger-4">
            <p className="text-xl md:text-2xl text-neo-700 dark:text-neo-300 leading-relaxed max-w-4xl mx-auto font-light">
              {personalInfo.bio}
            </p>
          </div>

          {/* CTA Buttons with modern design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-stagger-5">
            <button
              onClick={scrollToContact}
              className="btn-primary group"
              aria-describedby="contact-description"
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
            <span id="contact-description" className="sr-only">
              Navigate to contact section to send me a message
            </span>

            <button
              onClick={scrollToProjects}
              className="btn-secondary group"
              aria-describedby="projects-description"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0l-4-4m4 4l-4 4"
                  />
                </svg>
              </span>
            </button>
            <span id="projects-description" className="sr-only">
              Navigate to projects section to see my portfolio
            </span>
          </div>

          {/* Social Links with modern hover effects */}
          <nav className="animate-stagger-5" aria-label="Social media links">
            <ul className="flex justify-center space-x-8">
              {personalInfo.linkedin && (
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-2xl bg-white/10 dark:bg-neo-900/10 backdrop-blur-md border border-white/20 dark:border-neo-700/20 text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover-magnetic hover-lift"
                    aria-label={`View ${personalInfo.name}'s LinkedIn profile (opens in new tab)`}
                  >
                    <svg
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              )}
              {personalInfo.github && (
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-2xl bg-white/10 dark:bg-neo-900/10 backdrop-blur-md border border-white/20 dark:border-neo-700/20 text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover-magnetic hover-lift"
                    aria-label={`View ${personalInfo.name}'s GitHub profile (opens in new tab)`}
                  >
                    <svg
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              )}
              {personalInfo.website && (
                <li>
                  <a
                    href={personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-2xl bg-white/10 dark:bg-neo-900/10 backdrop-blur-md border border-white/20 dark:border-neo-700/20 text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover-magnetic hover-lift"
                    aria-label={`Visit ${personalInfo.name}'s personal website (opens in new tab)`}
                  >
                    <svg
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group relative p-4 rounded-2xl bg-white/10 dark:bg-neo-900/10 backdrop-blur-md border border-white/20 dark:border-neo-700/20 text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover-magnetic hover-lift"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  <svg
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neo-300 dark:border-neo-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neo-300 dark:bg-neo-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
