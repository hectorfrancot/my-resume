import { resumeData } from "../data/resume";

const Projects = () => {
  const { projects } = resumeData;
  const featuredProjects = projects.filter((project) => project.featured);

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
      id="projects"
      className="section-padding bg-gradient-to-br from-neo-100 to-neo-50 dark:from-neo-900 dark:to-neo-800 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-neon-400/30 to-primary-400/30 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-accent-400/30 to-neon-400/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Modern Section Header */}
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-neo-900 dark:text-neo-100 animate-text-reveal">
                <span className="text-gradient">Featured</span>{" "}
                <span className="relative">
                  Projects
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur opacity-20 animate-pulse-glow" />
                </span>
              </h2>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-neon-500 rounded-full animate-width-expand" />
              </div>
              <p className="text-lg text-neo-600 dark:text-neo-400 max-w-3xl mx-auto leading-relaxed">
                A showcase of my most impactful work - innovative solutions that
                blend cutting-edge technology with exceptional user experiences
              </p>
            </div>
          </div>

          {/* Enhanced Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group card-glass overflow-hidden hover-lift hover-magnetic"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Enhanced Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-neon-500/20" />
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-200 dark:from-neo-800 dark:to-neo-700">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-modern">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <span className="text-xl font-bold text-gradient">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-8">
                  <header className="mb-6">
                    <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neo-700 dark:text-neo-300 leading-relaxed">
                      {project.description}
                    </p>
                  </header>

                  {/* Enhanced Technologies */}
                  <div className="mb-8">
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
                      <span className="text-sm font-bold text-neo-900 dark:text-neo-100 uppercase tracking-wider">
                        Built With
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`group/tech relative inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${getTechGradient(
                            techIndex,
                          )} text-white text-xs font-bold rounded-full shadow-modern hover:shadow-glow transition-all duration-300 hover:scale-110 hover-magnetic`}
                          style={{
                            animationDelay: `${index * 200 + techIndex * 50}ms`,
                          }}
                        >
                          <span className="relative z-10">{tech}</span>
                          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Links */}
                  <footer className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center space-x-2 text-sm hover-magnetic"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center space-x-2 text-sm hover-magnetic"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View Code</span>
                      </a>
                    )}
                  </footer>
                </div>
              </article>
            ))}
          </div>

          {/* Enhanced Other Projects */}
          {projects.length > featuredProjects.length && (
            <section>
              <header className="text-center mb-12">
                <h3 className="text-3xl font-bold text-neo-900 dark:text-neo-100 mb-4">
                  More <span className="text-gradient">Projects</span>
                </h3>
                <p className="text-neo-600 dark:text-neo-400 max-w-2xl mx-auto">
                  Additional projects showcasing my diverse skill set and
                  continuous learning journey
                </p>
              </header>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects
                  .filter((project) => !project.featured)
                  .map((project, index) => (
                    <article
                      key={project.id}
                      className="group card-modern p-8 hover-lift hover-magnetic"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative space-y-6">
                          {/* Project Header */}
                          <header className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                                <svg
                                  className="w-5 h-5 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-xl font-bold text-neo-900 dark:text-neo-100 group-hover:text-primary-500 transition-colors duration-300">
                                {project.title}
                              </h4>
                            </div>

                            <div className="flex items-center space-x-2">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-neo-100 dark:bg-neo-800 rounded-lg flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-primary-500 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300 hover-magnetic"
                                  aria-label={`View live demo of ${project.title}`}
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 bg-neo-100 dark:bg-neo-800 rounded-lg flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-neo-900 dark:hover:text-neo-100 hover:bg-neo-200 dark:hover:bg-neo-700 transition-all duration-300 hover-magnetic"
                                  aria-label={`View source code for ${project.title}`}
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </header>

                          {/* Project Description */}
                          <p className="text-neo-700 dark:text-neo-300 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          {/* Compact Technologies */}
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies
                                .slice(0, 4)
                                .map((tech, techIndex) => (
                                  <span
                                    key={tech}
                                    className={`px-2 py-1 bg-gradient-to-r ${getTechGradient(
                                      techIndex,
                                    )} text-white text-xs font-medium rounded-md shadow-sm hover:shadow-modern transition-all duration-300 hover:scale-105`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 4 && (
                                <span className="px-2 py-1 bg-neo-200 dark:bg-neo-700 text-neo-600 dark:text-neo-400 text-xs font-medium rounded-md">
                                  +{project.technologies.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
