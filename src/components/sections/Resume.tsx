import React from 'react';
import { Download, Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../../data/experience';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            My professional journey and experience
          </p>
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-first:before:rounded-t-md group-last:before:rounded-b-md before:absolute before:left-2 sm:before:left-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="absolute left-0 sm:left-16 flex items-center justify-center mt-1">
                <div className="h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center">
                  <Briefcase size={16} />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                    {experience.company}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Resume;