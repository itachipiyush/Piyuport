import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Piyush Kumar Jha
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Passionate about building web applications that make a difference.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 justify-center md:justify-end">
              <a
                href="https://github.com/itachipiyush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-jha-a0a95022a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:piyushjha.2312@gmail.com"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="#home"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Piyush Jha. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0 flex items-center">
            Made with <Heart className="ml-1 mr-1 text-red-500" size={14} /> by
            Piyush Jha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
