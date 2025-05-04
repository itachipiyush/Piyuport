import React from 'react';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    design: skills.filter(skill => skill.category === 'design'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
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
          <div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate Frontend Developer with over 5 years of experience building
                modern web applications. I specialize in creating clean, efficient, and
                user-friendly interfaces that provide exceptional user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My journey in web development began when I was in college, and since then,
                I've worked with various technologies and frameworks, always staying updated
                with the latest trends and best practices in the industry.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or enjoying outdoor activities.
              </p>
            </div>

            <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I'm Working On
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Currently, I'm focused on deepening my knowledge of React Server Components
                and exploring the capabilities of the new Next.js App Router. I'm also 
                experimenting with 3D animations using Three.js to create more engaging web experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                In my spare time, I'm building a personal blog platform with markdown support
                and developing a productivity tool to help developers manage their time more effectively.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Frontend Development
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillsByCategory.frontend.map(skill => (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
                    >
                      <span className="text-blue-600 dark:text-blue-400">
                        {renderIcon(skill.icon)}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Backend Development
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillsByCategory.backend.map(skill => (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
                    >
                      <span className="text-green-600 dark:text-green-400">
                        {renderIcon(skill.icon)}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Design
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillsByCategory.design.map(skill => (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
                    >
                      <span className="text-purple-600 dark:text-purple-400">
                        {renderIcon(skill.icon)}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Tools & Others
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillsByCategory.tools.map(skill => (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
                    >
                      <span className="text-orange-600 dark:text-orange-400">
                        {renderIcon(skill.icon)}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;