import { resumeData } from "../data/resume";

const Footer = () => {
  const { personalInfo } = resumeData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-neo-100/95 to-neo-200/95 dark:from-neo-900/95 dark:to-neo-800/95 backdrop-blur-md border-t border-neo-200/50 dark:border-neo-700/50 text-neo-900 dark:text-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-neon-400/30 to-primary-400/30 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-accent-400/30 to-neon-400/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Enhanced About Section */}
            <div className="md:col-span-2">
              <div className="card-glass p-8 hover-lift">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-modern">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">
                    {personalInfo.name}
                  </h3>
                </div>
                <p className="text-neo-600 dark:text-neo-300 mb-6 leading-relaxed text-lg">
                  {personalInfo.title} passionate about creating exceptional
                  digital experiences. Always learning, always growing, always
                  coding with cutting-edge technologies.
                </p>
                <div className="flex space-x-4">
                  {personalInfo.linkedin && (
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 bg-neo-200/50 dark:bg-neo-700/50 backdrop-blur-md border border-neo-300/50 dark:border-neo-600/50 rounded-xl flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 hover-magnetic hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <svg
                        className="w-6 h-6 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {personalInfo.github && (
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 bg-neo-200/50 dark:bg-neo-700/50 backdrop-blur-md border border-neo-300/50 dark:border-neo-600/50 rounded-xl flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-white hover:border-neo-600/50 transition-all duration-300 hover-magnetic hover:scale-110"
                      aria-label="GitHub"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-neo-600 to-neo-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <svg
                        className="w-6 h-6 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {personalInfo.website && (
                    <a
                      href={personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 bg-neo-200/50 dark:bg-neo-700/50 backdrop-blur-md border border-neo-300/50 dark:border-neo-600/50 rounded-xl flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-white hover:border-accent-500/50 transition-all duration-300 hover-magnetic hover:scale-110"
                      aria-label="Website"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-neon-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <svg
                        className="w-6 h-6 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group relative w-12 h-12 bg-neo-200/50 dark:bg-neo-700/50 backdrop-blur-md border border-neo-300/50 dark:border-neo-600/50 rounded-xl flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-white hover:border-neon-500/50 transition-all duration-300 hover-magnetic hover:scale-110"
                    aria-label="Email"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-500 to-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg
                      className="w-6 h-6 relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="card-glass p-8 hover-lift">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-neon-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neo-900 dark:text-neo-100">
                  Quick Links
                </h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium">About</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("skills")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Skills</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("experience")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    <div className="w-2 h-2 bg-neon-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Experience</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Projects</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-medium">Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div className="card-glass p-8 hover-lift">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-500 to-primary-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neo-900 dark:text-neo-100">
                  Get In Touch
                </h4>
              </div>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">{personalInfo.email}</span>
                </a>
                <div className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400">
                  <div className="w-6 h-6 bg-gradient-to-r from-accent-500 to-neon-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="group flex items-center space-x-3 text-neo-300 dark:text-neo-400 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-500 to-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{personalInfo.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="border-t border-neo-700/50 dark:border-neo-600/50 pt-10">
            <div className="card-glass p-8 hover-lift">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <div className="text-neo-800 dark:text-neo-200 text-lg font-medium mb-2">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                  </div>
                  <div className="text-neo-600 dark:text-neo-400 text-sm">
                    Crafted with passion and modern technologies
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-neo-700 dark:text-neo-300 text-sm font-medium">
                      Built with
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="tech-badge">React 19</div>
                      <div className="tech-badge">TypeScript</div>
                      <div className="tech-badge">Tailwind CSS</div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToTop}
                    className="group relative w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover-magnetic shadow-modern hover:shadow-glow"
                    aria-label="Back to top"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-neon-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg
                      className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-y-1 duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
