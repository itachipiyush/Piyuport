import React, { useMemo } from "react";
import { skills } from "../../data/skills";
import { Box, Code, Database, Figma, Github } from "lucide-react";

const About: React.FC = () => {
  // Render icons with type safety and fallback
  const renderIcon = (iconName: string) => {
    const icons = { Box, Code, Database, Figma, Github };
    const LucideIcon = icons[iconName as keyof typeof icons] || Box; // Fallback to "Box" icon
    return <LucideIcon size={20} />;
  };

  // Memoize skills by category for performance
  const skillsByCategory = useMemo(
    () => ({
      frontend: skills.filter((skill) => skill.category === "frontend"),
      backend: skills.filter((skill) => skill.category === "backend"),
      design: skills.filter((skill) => skill.category === "design"),
      tools: skills.filter((skill) => skill.category === "tools"),
    }),
    [skills],
  );

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Section */}
          <div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm Piyush Jha, a passionate software developer with a knack for
                creating efficient and scalable web applications. With a strong
                foundation in both frontend and backend technologies, I enjoy
                building solutions that not only meet user needs but also
                provide an exceptional user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My journey in web development began when I was in college, and
                since then, I've worked with various technologies and
                frameworks, always staying updated with the latest trends and
                best practices in the industry.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Beyond coding, I have a keen interest in Anime and gaming, which
                often inspires my creativity and problem-solving approach in
                development.
              </p>
            </div>

            <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I'm Working On
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Currently, I'm working on student grievance portal system for my
                college that aims to streamline the process of addressing
                student concerns and feedback. This project involves both
                frontend and backend development, allowing me to apply my
                full-stack skills.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Additionally, I'm exploring new technologies such as .NET core
                and Csharp to expand my skill set and stay versatile in the
                ever-evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>

            <div className="space-y-8">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Frontend Development
                </h4>
                {skillsByCategory.frontend.length > 0 ? (
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skillsByCategory.frontend.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`Skill: ${skill.name}`}
                      >
                        <span className="text-blue-600 dark:text-blue-400">
                          {renderIcon(skill.icon)}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    No skills available
                  </p>
                )}
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Backend Development
                </h4>
                {skillsByCategory.backend.length > 0 ? (
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skillsByCategory.backend.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`Skill: ${skill.name}`}
                      >
                        <span className="text-green-600 dark:text-green-400">
                          {renderIcon(skill.icon)}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    No skills available
                  </p>
                )}
              </div>

              {/* Design Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Design
                </h4>
                {skillsByCategory.design.length > 0 ? (
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skillsByCategory.design.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`Skill: ${skill.name}`}
                      >
                        <span className="text-purple-600 dark:text-purple-400">
                          {renderIcon(skill.icon)}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    No skills available
                  </p>
                )}
              </div>

              {/* Tools & Others */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Tools & Others
                </h4>
                {skillsByCategory.tools.length > 0 ? (
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skillsByCategory.tools.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`Skill: ${skill.name}`}
                      >
                        <span className="text-orange-600 dark:text-orange-400">
                          {renderIcon(skill.icon)}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    No skills available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
