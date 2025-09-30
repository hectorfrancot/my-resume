import { resumeData } from "../data/resume";

const About = () => {
  const { personalInfo, education } = resumeData;

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-neo-50 to-neo-100 dark:from-neo-900 dark:to-neo-800 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-neon-400/20 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-neon-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with modern animations */}
          <header className="text-center mb-20">
            <div className="space-y-6">
              <h2
                id="about-heading"
                className="text-4xl md:text-6xl font-display font-bold text-neo-900 dark:text-neo-100 mb-6 animate-text-reveal"
              >
                <span className="text-gradient">About</span>{" "}
                <span className="relative">
                  Me
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300 animate-pulse-glow" />
                </span>
              </h2>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-width-expand" />
              </div>
              <p className="text-lg text-neo-600 dark:text-neo-400 max-w-2xl mx-auto leading-relaxed">
                Passionate developer crafting digital experiences that inspire
                and innovate
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Content with modern card design */}
            <article className="space-y-8">
              <div className="card-modern p-8 hover-lift group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-modern group-hover:shadow-glow transition-all duration-300">
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
                    </div>
                    <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100">
                      Hello! I'm{" "}
                      <span className="text-gradient">
                        {personalInfo.name.split(" ")[0]}
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-4 text-neo-700 dark:text-neo-300 leading-relaxed">
                    <p className="text-lg">{personalInfo.bio}</p>
                    <p>
                      I'm passionate about creating digital experiences that
                      make a difference. Whether it's building responsive web
                      applications, optimizing performance, or collaborating
                      with teams to solve complex problems, I bring enthusiasm
                      and attention to detail to every project.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new
                      technologies, contributing to open-source projects, or
                      enjoying the outdoors. I believe in continuous learning
                      and staying current with industry trends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Section */}
              <aside
                className="grid grid-cols-2 gap-6"
                aria-label="Professional statistics"
              >
                <div className="card-neo p-6 text-center group hover-magnetic">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative space-y-2">
                      <div className="text-3xl font-bold text-gradient font-display">
                        {new Date().getFullYear() - 2018}+
                      </div>
                      <div className="text-sm font-medium text-neo-600 dark:text-neo-400 uppercase tracking-wider">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-neo p-6 text-center group hover-magnetic">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-neon-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative space-y-2">
                      <div className="text-3xl font-bold text-gradient font-display">
                        {resumeData.projects.length}+
                      </div>
                      <div className="text-sm font-medium text-neo-600 dark:text-neo-400 uppercase tracking-wider">
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </article>

            {/* Skills Preview & Education with modern design */}
            <aside
              className="space-y-8"
              aria-labelledby="skills-education-heading"
            >
              <h3 id="skills-education-heading" className="sr-only">
                Skills and Education Information
              </h3>

              {/* Core Technologies with glassmorphism */}
              <section
                aria-labelledby="core-technologies-heading"
                className="card-glass p-8 hover-lift"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h4
                    id="core-technologies-heading"
                    className="text-xl font-bold text-neo-900 dark:text-neo-100"
                  >
                    Core Technologies
                  </h4>
                </div>

                <ul className="grid grid-cols-2 gap-3" role="list">
                  {resumeData.skills
                    .filter((skill) =>
                      ["React", "TypeScript", "Node.js", "PostgreSQL"].includes(
                        skill.name,
                      ),
                    )
                    .map((skill, index) => (
                      <li
                        key={skill.name}
                        className="group relative"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="btn-secondary flex items-center p-3 text-sm hover-magnetic">
                          <div
                            className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 group-hover:animate-pulse"
                            role="img"
                            aria-hidden="true"
                          />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      </li>
                    ))}
                </ul>
              </section>

              {/* Education with neomorphism */}
              <section
                aria-labelledby="education-heading"
                className="card-neo p-8"
              >
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
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h4
                    id="education-heading"
                    className="text-xl font-bold text-neo-900 dark:text-neo-100"
                  >
                    Education
                  </h4>
                </div>

                <div className="space-y-4" role="list">
                  {education.map((edu, index) => (
                    <div
                      key={edu.id}
                      className="group relative p-4 rounded-xl bg-neo-100/50 dark:bg-neo-800/50 border border-neo-200/50 dark:border-neo-700/50 hover:border-primary-500/50 transition-all duration-300 hover-lift"
                      role="listitem"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <h5 className="font-bold text-neo-900 dark:text-neo-100 mb-1">
                          {edu.degree}
                        </h5>
                        <p className="text-sm font-medium text-primary-500 dark:text-primary-400 mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-neo-600 dark:text-neo-400">
                          {edu.field} •{" "}
                          <time dateTime={edu.endDate}>
                            {edu.endDate?.slice(0, 4) || "Present"}
                          </time>
                          {edu.gpa && ` • GPA: ${edu.gpa}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enhanced Contact Info */}
              <section
                aria-labelledby="contact-info-heading"
                className="card-glass p-8"
              >
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
                  <h4
                    id="contact-info-heading"
                    className="text-xl font-bold text-neo-900 dark:text-neo-100"
                  >
                    Let's Connect
                  </h4>
                </div>

                <address className="space-y-3 not-italic">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group flex items-center text-neo-700 dark:text-neo-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover-magnetic"
                    aria-label={`Send email to ${personalInfo.email}`}
                  >
                    <div className="w-10 h-10 bg-neo-100 dark:bg-neo-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <span className="font-medium">{personalInfo.email}</span>
                  </a>

                  <div className="flex items-center text-neo-700 dark:text-neo-300">
                    <div className="w-10 h-10 bg-neo-100 dark:bg-neo-800 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4"
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
                    </div>
                    <span className="font-medium">{personalInfo.location}</span>
                  </div>
                </address>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
