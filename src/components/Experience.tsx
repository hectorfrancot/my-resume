import { resumeData } from "../data/resume";

const Experience = () => {
  const { experience } = resumeData;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate + "-01");
    const end = endDate ? new Date(endDate + "-01") : new Date();

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    if (years === 0) {
      return `${months} month${months !== 1 ? "s" : ""}`;
    } else if (months === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""}, ${months} month${
        months !== 1 ? "s" : ""
      }`;
    }
  };

  const getTechGradient = (index: number) => {
    const gradients = [
      "from-primary-500 to-primary-600",
      "from-accent-500 to-accent-600",
      "from-neon-500 to-neon-600",
      "from-primary-600 to-accent-500",
      "from-accent-600 to-neon-500",
      "from-neon-600 to-primary-500",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="experience"
      className="section-padding bg-gradient-to-br from-neo-50 to-neo-100 dark:from-neo-900 dark:to-neo-800 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-gradient-to-r from-neon-400/30 to-primary-400/30 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-gradient-to-r from-accent-400/30 to-neon-400/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Modern Section Header */}
          <header className="text-center mb-20">
            <div className="space-y-6">
              <h2
                id="experience-heading"
                className="text-4xl md:text-6xl font-display font-bold text-neo-900 dark:text-neo-100 animate-text-reveal"
              >
                <span className="text-gradient">Work</span>{" "}
                <span className="relative">
                  Experience
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur opacity-20 animate-pulse-glow" />
                </span>
              </h2>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-neon-500 rounded-full animate-width-expand" />
              </div>
              <p className="text-lg text-neo-600 dark:text-neo-400 max-w-3xl mx-auto leading-relaxed">
                My professional journey through innovative companies and
                exciting projects, continuously growing and delivering impactful
                solutions
              </p>
            </div>
          </header>

          {/* Enhanced Timeline */}
          <div
            className="relative"
            role="region"
            aria-label="Professional experience timeline"
          >
            {/* Modern Vertical Line with gradient */}
            <div
              className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-neon-500 rounded-full opacity-60"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-accent-500 to-neon-500 rounded-full blur-sm opacity-50" />
            </div>

            {/* Experience Items with enhanced design */}
            <ol className="space-y-16" role="list">
              {experience.map((exp, index) => (
                <li key={exp.id} className="relative group">
                  {/* Enhanced Timeline Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
                    aria-hidden="true"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                      <div className="relative w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-neo-50 dark:border-neo-900 shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-125">
                        <div className="absolute inset-1 bg-white dark:bg-neo-800 rounded-full opacity-50" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Card */}
                  <article
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:ml-auto md:pl-16"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="card-glass p-8 hover-lift hover-magnetic group/card relative overflow-hidden">
                      {/* Card background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Enhanced Header */}
                        <header className="mb-6">
                          <div className="flex flex-col space-y-3 mb-4">
                            <div className="flex items-start justify-between">
                              <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100 group-hover/card:text-primary-500 transition-colors duration-300">
                                {exp.position}
                              </h3>
                              <div className="flex items-center space-x-2 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-neo-200/50 dark:border-neo-700/50">
                                <div className="w-2 h-2 bg-neon-500 rounded-full animate-pulse" />
                                <time
                                  className="text-sm font-bold text-neo-700 dark:text-neo-300"
                                  dateTime={`${exp.startDate}/${
                                    exp.endDate ||
                                    new Date().toISOString().slice(0, 7)
                                  }`}
                                >
                                  {formatDate(exp.startDate)} -{" "}
                                  {exp.endDate
                                    ? formatDate(exp.endDate)
                                    : "Present"}
                                </time>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-modern">
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
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  {exp.website ? (
                                    <a
                                      href={exp.website}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-lg font-bold text-primary-500 hover:text-primary-600 transition-colors duration-300 hover-magnetic"
                                      aria-label={`Visit ${exp.company} website (opens in new tab)`}
                                    >
                                      {exp.company}
                                    </a>
                                  ) : (
                                    <span className="text-lg font-bold text-neo-800 dark:text-neo-200">
                                      {exp.company}
                                    </span>
                                  )}
                                  <address className="text-sm text-neo-600 dark:text-neo-400 not-italic flex items-center">
                                    <svg
                                      className="w-3 h-3 mr-1"
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
                                    {exp.location}
                                  </address>
                                </div>
                              </div>

                              <div className="mt-2 sm:mt-0">
                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent-500/20 to-neon-500/20 backdrop-blur-sm border border-accent-500/30 rounded-full text-sm font-bold text-accent-600 dark:text-accent-400">
                                  <svg
                                    className="w-3 h-3 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {calculateDuration(
                                    exp.startDate,
                                    exp.endDate,
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </header>

                        {/* Enhanced Description */}
                        <div className="mb-8">
                          <h4 className="sr-only">
                            Job responsibilities and achievements
                          </h4>
                          <ul className="space-y-3" role="list">
                            {exp.description.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start group/item"
                                style={{
                                  animationDelay: `${
                                    index * 200 + itemIndex * 100
                                  }ms`,
                                }}
                              >
                                <div className="relative mt-2 mr-4 flex-shrink-0">
                                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover/item:scale-125 transition-transform duration-300" />
                                  <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-sm opacity-50 group-hover/item:opacity-100 transition-opacity duration-300" />
                                </div>
                                <span className="text-neo-700 dark:text-neo-300 leading-relaxed group-hover/item:text-neo-900 dark:group-hover/item:text-neo-100 transition-colors duration-300">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Enhanced Technologies */}
                        <footer>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-6 h-6 bg-gradient-to-r from-neon-500 to-primary-500 rounded-lg flex items-center justify-center">
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
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            </div>
                            <h4 className="text-sm font-bold text-neo-900 dark:text-neo-100 uppercase tracking-wider">
                              Technologies Used
                            </h4>
                          </div>
                          <ul
                            className="flex flex-wrap gap-3"
                            role="list"
                            aria-label="Technologies used in this role"
                          >
                            {exp.technologies.map((tech, techIndex) => (
                              <li
                                key={tech}
                                style={{
                                  animationDelay: `${
                                    index * 200 + techIndex * 50
                                  }ms`,
                                }}
                              >
                                <span
                                  className={`group/tech relative inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${getTechGradient(
                                    techIndex,
                                  )} text-white text-xs font-bold rounded-full shadow-modern hover:shadow-glow transition-all duration-300 hover:scale-110 hover-magnetic`}
                                >
                                  <span className="relative z-10">{tech}</span>
                                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Enhanced Summary Stats */}
          <aside className="mt-20" aria-label="Professional statistics summary">
            <div className="card-neo p-8">
              <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100 mb-8 text-center">
                Career <span className="text-gradient">Highlights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    value: experience.length,
                    label: "Companies",
                    gradient: "from-primary-500 to-primary-600",
                    icon: "🏢",
                  },
                  {
                    value: `${
                      new Date().getFullYear() -
                      new Date(
                        experience[experience.length - 1].startDate,
                      ).getFullYear()
                    }+`,
                    label: "Years Experience",
                    gradient: "from-accent-500 to-accent-600",
                    icon: "⏱️",
                  },
                  {
                    value: [
                      ...new Set(experience.flatMap((exp) => exp.technologies)),
                    ].length,
                    label: "Technologies",
                    gradient: "from-neon-500 to-neon-600",
                    icon: "⚡",
                  },
                ].map(({ value, label, gradient, icon }, index) => (
                  <div
                    key={label}
                    className="text-center group hover-magnetic"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
                      <div className="relative space-y-4">
                        <div className="text-3xl">{icon}</div>
                        <div
                          className={`text-5xl font-display font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-count-up`}
                        >
                          {value}
                        </div>
                        <div className="text-sm font-medium text-neo-600 dark:text-neo-400 uppercase tracking-wider">
                          {label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
