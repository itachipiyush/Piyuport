export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink?: string;
  githubLink: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export type ThemeMode = 'light' | 'dark';