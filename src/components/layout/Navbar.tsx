import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Home,
  Briefcase,
  User,
  FileText,
  Send,
} from "lucide-react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Lock/unlock body scroll when menu opens/closes
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "About", href: "#about", icon: User },
    { name: "Resume", href: "#resume", icon: FileText },
    { name: "Contact", href: "#contact", icon: Send },
  ];

  return (
    <nav
      className={classNames(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent",
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

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={classNames(
          "fixed right-0 top-0 bottom-0 z-40 w-full sm:w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ height: "100vh" }}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-50">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium transition-all duration-200 active:scale-95"
              >
                <IconComponent
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Social Links and Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-6 space-y-6">
          {/* Social Icons */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Connect with me
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/itachipiyush"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-jha-a0a95022a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:piyushjha.2312@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
