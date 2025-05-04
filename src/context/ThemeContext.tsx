"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  startTransition,
} from "react";
import { ThemeMode } from "../types";

// Define the context type
type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    }, 0);
  }, [theme]);

  const toggleTheme = () => {
    startTransition(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook to access theme and toggle it
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
