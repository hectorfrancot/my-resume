import React from "react";
import { resumeData } from "../data/resume";
import type { Skill } from "../types/resume";

const Skills = () => {
  const { skills } = resumeData;

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getLevelColor = (level: Skill["level"]) => {
    switch (level) {
      case "Expert":
        return "from-neon-500 to-neon-600";
      case "Advanced":
        return "from-primary-500 to-primary-600";
      case "Intermediate":
        return "from-accent-500 to-accent-600";
      case "Beginner":
        return "from-neo-400 to-neo-500";
      default:
        return "from-neo-300 to-neo-400";
    }
  };

  const getLevelWidth = (level: Skill["level"]) => {
    switch (level) {
      case "Expert":
        return "w-full";
      case "Advanced":
        return "w-4/5";
      case "Intermediate":
        return "w-3/5";
      case "Beginner":
        return "w-2/5";
      default:
        return "w-1/5";
    }
  };

  const getLevelPercentage = (level: Skill["level"]) => {
    switch (level) {
      case "Expert":
        return 100;
      case "Advanced":
        return 80;
      case "Intermediate":
        return 60;
      case "Beginner":
        return 40;
      default:
        return 20;
    }
  };

  const categoryIcons: Record<string, React.ReactElement> = {
    Frontend: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    Backend: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    Database: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    DevOps: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    Tools: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    "Soft Skills": (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-br from-neo-100 to-neo-50 dark:from-neo-900 dark:to-neo-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-gradient-to-r from-neon-400/30 to-primary-400/30 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-10 left-1/2 w-64 h-64 bg-gradient-to-r from-accent-400/30 to-neon-400/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Modern Section Header */}
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-neo-900 dark:text-neo-100 animate-text-reveal">
                <span className="text-gradient">Skills</span>{" "}
                <span className="relative">
                  & Technologies
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur opacity-20 animate-pulse-glow" />
                </span>
              </h2>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-neon-500 rounded-full animate-width-expand" />
              </div>
              <p className="text-lg text-neo-600 dark:text-neo-400 max-w-3xl mx-auto leading-relaxed">
                A comprehensive showcase of my technical expertise across the
                full development stack, continuously evolved through hands-on
                experience and cutting-edge projects
              </p>
            </div>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {Object.entries(skillCategories).map(
              ([category, categorySkills], categoryIndex) => (
                <div
                  key={category}
                  className="group card-glass p-8 hover-lift hover-magnetic"
                  style={{ animationDelay: `${categoryIndex * 150}ms` }}
                >
                  {/* Enhanced Category Header */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white shadow-modern group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        {categoryIcons[category] || categoryIcons["Tools"]}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neo-900 dark:text-neo-100 ml-4 group-hover:text-primary-500 transition-colors duration-300">
                      {category}
                    </h3>
                  </div>

                  {/* Modern Skills List */}
                  <div className="space-y-6">
                    {categorySkills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group/skill"
                        style={{
                          animationDelay: `${
                            categoryIndex * 150 + skillIndex * 50
                          }ms`,
                        }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-bold text-neo-800 dark:text-neo-200 group-hover/skill:text-primary-500 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium text-neo-600 dark:text-neo-400 bg-neo-100 dark:bg-neo-800 px-2 py-1 rounded-full border border-neo-200 dark:border-neo-700">
                              {skill.level}
                            </span>
                            <span className="text-xs font-bold text-primary-500">
                              {getLevelPercentage(skill.level)}%
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-neo-200/50 dark:bg-neo-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-neo-200/50 dark:border-neo-600/50">
                            <div
                              className={`h-full bg-gradient-to-r ${getLevelColor(
                                skill.level,
                              )} ${getLevelWidth(
                                skill.level,
                              )} rounded-full relative overflow-hidden transition-all duration-1000 ease-out group-hover/skill:shadow-glow`}
                              style={{
                                animation:
                                  "fillProgress 1.5s ease-out forwards",
                                animationDelay: `${
                                  categoryIndex * 150 + skillIndex * 100
                                }ms`,
                              }}
                            >
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer" />
                            </div>
                          </div>

                          {/* Floating percentage indicator */}
                          <div
                            className={`absolute top-1/2 -translate-y-1/2 ${getLevelWidth(
                              skill.level,
                            )} -ml-4 opacity-0 group-hover/skill:opacity-100 transition-all duration-300`}
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-modern animate-bounce-subtle">
                              {getLevelPercentage(skill.level)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Modern Legend */}
          <div className="mb-16">
            <div className="card-modern p-8 hover-lift">
              <h4 className="text-xl font-bold text-neo-900 dark:text-neo-100 mb-6 text-center">
                Proficiency Levels
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    level: "Expert",
                    gradient: "from-neon-500 to-neon-600",
                    description:
                      "Professional mastery, can lead and teach others",
                    percentage: 100,
                  },
                  {
                    level: "Advanced",
                    gradient: "from-primary-500 to-primary-600",
                    description:
                      "Strong proficiency, independent problem-solving",
                    percentage: 80,
                  },
                  {
                    level: "Intermediate",
                    gradient: "from-accent-500 to-accent-600",
                    description:
                      "Solid understanding, occasional guidance needed",
                    percentage: 60,
                  },
                  {
                    level: "Beginner",
                    gradient: "from-neo-400 to-neo-500",
                    description:
                      "Foundational knowledge, active learning phase",
                    percentage: 40,
                  },
                ].map(({ level, gradient, description, percentage }, index) => (
                  <div
                    key={level}
                    className="group relative p-4 rounded-xl bg-neo-50 dark:bg-neo-800/50 border border-neo-200/50 dark:border-neo-700/50 hover:border-primary-500/50 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradient} shadow-modern`}
                      />
                      <span className="text-xs font-bold text-primary-500">
                        {percentage}%
                      </span>
                    </div>
                    <span className="text-sm font-bold text-neo-800 dark:text-neo-200 block mb-1">
                      {level}
                    </span>
                    <p className="text-xs text-neo-600 dark:text-neo-400 leading-relaxed">
                      {description}
                    </p>

                    {/* Hover tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-neo-900 dark:bg-neo-100 text-neo-100 dark:text-neo-900 text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-modern">
                        {description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neo-900 dark:border-t-neo-100" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Skills Summary */}
          <div className="card-neo p-8">
            <h4 className="text-2xl font-bold text-neo-900 dark:text-neo-100 mb-8 text-center">
              Skills <span className="text-gradient">Overview</span>
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  value: skills.filter((skill) => skill.level === "Expert")
                    .length,
                  label: "Expert Level",
                  gradient: "from-neon-500 to-neon-600",
                  icon: "🚀",
                },
                {
                  value: skills.filter((skill) => skill.level === "Advanced")
                    .length,
                  label: "Advanced",
                  gradient: "from-primary-500 to-primary-600",
                  icon: "⭐",
                },
                {
                  value: Object.keys(skillCategories).length,
                  label: "Categories",
                  gradient: "from-accent-500 to-accent-600",
                  icon: "📂",
                },
                {
                  value: skills.length,
                  label: "Total Skills",
                  gradient: "from-primary-500 to-accent-500",
                  icon: "🎯",
                },
              ].map(({ value, label, gradient, icon }, index) => (
                <div
                  key={label}
                  className="text-center group hover-magnetic"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
                    <div className="relative space-y-3">
                      <div className="text-2xl">{icon}</div>
                      <div
                        className={`text-4xl font-display font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-count-up`}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
