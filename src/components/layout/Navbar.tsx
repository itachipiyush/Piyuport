import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import classNames from "classnames";

// Reusable NavLink Component
const NavLink: React.FC<{
  href: string;
  name: string;
  onClick?: () => void;
}> = ({ href, name, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
    aria-label={name}
  >
    {name}
  </a>
);

// Reusable SocialIcon Component
const SocialIcon: React.FC<{
  href: string;
  Icon: React.ElementType;
  label: string;
}> = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
);

// Theme Toggle Button
const ThemeToggleButton: React.FC<{
  theme: string;
  toggleTheme: () => void;
}> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? (
      <img src="/Moon.svg" alt="Light Mode" className="w-5 h-5" />
    ) : (
      <img src="/Sun.svg" alt="Dark Mode" className="w-5 h-5" />
    )}
  </button>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={classNames(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-gray-900 dark:text-white transition-colors"
          aria-label="Home"
        >
          Piyush
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} name={link.name} />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <SocialIcon
              href="https://github.com/itachipiyush"
              Icon={Github}
              label="GitHub"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/piyush-jha-a0a95022a/"
              Icon={Linkedin}
              label="LinkedIn"
            />
            <SocialIcon
              href="mailto:piyushjha.2312@gmail.com"
              Icon={Mail}
              label="Email"
            />
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={classNames(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col p-8 space-y-8 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              name={link.name}
              onClick={toggleMenu}
            />
          ))}
        </div>

        <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <SocialIcon
            href="https://github.com/itachipiyush"
            Icon={Github}
            label="GitHub"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/piyush-jha-a0a95022a/"
            Icon={Linkedin}
            label="LinkedIn"
          />
          <SocialIcon
            href="mailto:piyushjha.2312@gmail.com"
            Icon={Mail}
            label="Email"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
