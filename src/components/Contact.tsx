import { useState } from "react";
import { resumeData } from "../data/resume";

const Contact = () => {
  const { personalInfo } = resumeData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll create a mailto link
    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio",
    );
    const body = encodeURIComponent(
      `Hi ${personalInfo.name.split(" ")[0]},\n\n${
        formData.message
      }\n\nBest regards,\n${formData.name}\n${formData.email}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-neo-50 to-neo-100 dark:from-neo-900 dark:to-neo-800 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-neon-400/30 to-primary-400/30 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent-400/30 to-neon-400/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Modern Section Header */}
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-neo-900 dark:text-neo-100 animate-text-reveal">
                <span className="text-gradient">Get In</span>{" "}
                <span className="relative">
                  Touch
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur opacity-20 animate-pulse-glow" />
                </span>
              </h2>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-neon-500 rounded-full animate-width-expand" />
              </div>
              <p className="text-lg text-neo-600 dark:text-neo-400 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's collaborate and create
                something extraordinary together. I'm always excited about new
                challenges and innovative projects.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Information */}
            <div className="card-glass p-8 hover-lift">
              <div className="space-y-8">
                <header>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-modern">
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100">
                      Let's <span className="text-gradient">Connect</span>
                    </h3>
                  </div>
                  <p className="text-neo-700 dark:text-neo-300 leading-relaxed text-lg">
                    Whether you have a groundbreaking project in mind, want to
                    discuss exciting opportunities, or simply want to say hello,
                    I'd love to hear from you. Let's create something amazing
                    together!
                  </p>
                </header>

                {/* Enhanced Contact Details */}
                <div className="space-y-6">
                  <div className="group relative p-4 rounded-xl bg-neo-100/50 dark:bg-neo-800/50 border border-neo-200/50 dark:border-neo-700/50 hover:border-primary-500/50 transition-all duration-300 hover-lift hover-magnetic">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-neo-900 dark:text-neo-100 mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-primary-500 hover:text-primary-600 transition-colors duration-300 font-medium hover-magnetic"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group relative p-4 rounded-xl bg-neo-100/50 dark:bg-neo-800/50 border border-neo-200/50 dark:border-neo-700/50 hover:border-accent-500/50 transition-all duration-300 hover-lift hover-magnetic">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-neon-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-neon-500 rounded-xl flex items-center justify-center shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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
                      <div>
                        <p className="font-bold text-neo-900 dark:text-neo-100 mb-1">
                          Location
                        </p>
                        <p className="text-neo-600 dark:text-neo-400 font-medium">
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {personalInfo.phone && (
                    <div className="group relative p-4 rounded-xl bg-neo-100/50 dark:bg-neo-800/50 border border-neo-200/50 dark:border-neo-700/50 hover:border-neon-500/50 transition-all duration-300 hover-lift hover-magnetic">
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-500/5 to-primary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-500 to-primary-500 rounded-xl flex items-center justify-center shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-neo-900 dark:text-neo-100 mb-1">
                            Phone
                          </p>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="text-neon-500 hover:text-neon-600 transition-colors duration-300 font-medium hover-magnetic"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced Social Links */}
                <div className="pt-8 border-t border-neo-200/50 dark:border-neo-700/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-neon-500 rounded-lg flex items-center justify-center">
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
                    <p className="font-bold text-neo-900 dark:text-neo-100">
                      Connect With Me
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    {personalInfo.linkedin && (
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 rounded-xl flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 hover-magnetic hover:scale-110"
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
                        className="group relative w-12 h-12 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 rounded-xl flex items-center justify-center text-neo-600 dark:text-neo-400 hover:text-white hover:border-neo-800/50 transition-all duration-300 hover-magnetic hover:scale-110"
                        aria-label="GitHub"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-neo-700 to-neo-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <svg
                          className="w-6 h-6 relative z-10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="card-neo p-10 hover-lift">
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-neon-500 rounded-xl flex items-center justify-center shadow-modern">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neo-900 dark:text-neo-100">
                    Send a <span className="text-gradient">Message</span>
                  </h3>
                </div>
                <p className="text-neo-600 dark:text-neo-400">
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-neo-800 dark:text-neo-200 mb-3 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neo-900 dark:text-neo-100 placeholder-neo-500 dark:placeholder-neo-400 transition-all duration-300 hover:border-primary-500/50 focus:bg-neo-50 dark:focus:bg-neo-900"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-neo-800 dark:text-neo-200 mb-3 uppercase tracking-wider"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neo-900 dark:text-neo-100 placeholder-neo-500 dark:placeholder-neo-400 transition-all duration-300 hover:border-primary-500/50 focus:bg-neo-50 dark:focus:bg-neo-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-neo-800 dark:text-neo-200 mb-3 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neo-900 dark:text-neo-100 placeholder-neo-500 dark:placeholder-neo-400 transition-all duration-300 hover:border-primary-500/50 focus:bg-neo-50 dark:focus:bg-neo-900"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-neo-800 dark:text-neo-200 mb-3 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-neo-100/50 dark:bg-neo-800/50 backdrop-blur-md border border-neo-200/50 dark:border-neo-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neo-900 dark:text-neo-100 placeholder-neo-500 dark:placeholder-neo-400 transition-all duration-300 hover:border-primary-500/50 focus:bg-neo-50 dark:focus:bg-neo-900 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-bold hover-magnetic group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span>Send Message</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
