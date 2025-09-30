import { useState } from "react";

const AIPortfolioInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { label: "Build Time", value: "~2 hours", icon: "⏱️" },
    { label: "Lines Saved", value: "~2000+", icon: "💾" },
    { label: "Coffee Consumed", value: "Moderate", icon: "☕" },
    { label: "AI Prompts", value: "Countless", icon: "🤖" },
    { label: "Human Frustration", value: "Minimal", icon: "😌" },
    { label: "Satisfaction", value: "Maximum", icon: "🚀" },
  ];

  const techStack = [
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "GitHub Copilot",
    "Human Creativity",
    "Coffee ☕",
  ];

  return (
    <section id="ai-portfolio" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neo-900 dark:text-neo-100 mb-4 font-display">
            🤖 AI-Powered Portfolio
          </h2>
          <p className="text-lg text-neo-600 dark:text-neo-400 max-w-3xl mx-auto leading-relaxed">
            This entire portfolio was built in collaboration with GitHub
            Copilot, because why spend weeks coding when you can spend hours
            prompt engineering? 😎
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Main Info Card */}
          <div className="card-glass rounded-3xl p-8 lg:p-10 shadow-modern-lg hover:shadow-glow transition-all duration-500 hover-lift">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-modern">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100 font-display">
                  The AI Story
                </h3>
              </div>

              <div className="space-y-4 text-neo-700 dark:text-neo-300">
                <p className="leading-relaxed">
                  Modern problems require modern solutions - and apparently
                  modern solutions involve having very detailed conversations
                  with an AI about glassmorphism effects and gradient colors.
                </p>

                <p className="leading-relaxed">
                  This portfolio showcases the power of AI-assisted development,
                  featuring modern design trends like glassmorphism, neomorphism
                  shadows, and magnetic hover interactions.
                </p>

                {isExpanded && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="leading-relaxed">
                      Built using the latest technologies with GitHub Copilot as
                      my co-pilot (pun intended), this project demonstrates how
                      AI can accelerate development while maintaining code
                      quality and creativity.
                    </p>

                    <p className="leading-relaxed">
                      From component architecture to responsive design, every
                      line of code was enhanced by AI assistance, proving that
                      the future of development is a collaboration between human
                      creativity and artificial intelligence.
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group mt-6 flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-all duration-300"
              >
                {isExpanded ? "Show Less" : "Read More"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats & Tech */}
          <div className="space-y-6">
            {/* Fun Stats */}
            <div className="card-glass rounded-3xl p-8 shadow-modern-lg hover:shadow-glow transition-all duration-500 hover-lift">
              <h4 className="text-xl font-bold text-neo-900 dark:text-neo-100 mb-6 font-display">
                📊 Fun Stats
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="group p-4 rounded-2xl bg-neo-50/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 hover:border-primary-500/50 transition-all duration-300 hover-magnetic"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-sm font-medium text-neo-900 dark:text-neo-100 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neo-500 dark:text-neo-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="card-glass rounded-3xl p-8 shadow-modern-lg hover:shadow-glow transition-all duration-500 hover-lift">
              <h4 className="text-xl font-bold text-neo-900 dark:text-neo-100 mb-6 font-display">
                🛠️ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl text-sm font-medium text-neo-700 dark:text-neo-300 hover:from-primary-500/20 hover:to-accent-500/20 hover:border-primary-500/40 transition-all duration-300 hover-magnetic"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-glass rounded-3xl p-8 shadow-modern-lg hover:shadow-glow transition-all duration-500 hover-lift text-center">
              <p className="text-sm text-neo-600 dark:text-neo-400 mb-4">
                Want to build something amazing with AI assistance?
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-modern hover:shadow-glow transition-all duration-300 hover-magnetic hover:scale-105"
              >
                <span className="relative z-10">Let's Chat!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPortfolioInfo;
