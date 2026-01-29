import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "MediShare - Share Unused Meds, Save Lives",
    description:
      "Platform for donating sealed, valid medicines and allowing verified users to claim them, promoting reuse and reducing waste.",
    image: "https://i.ibb.co/4nZXyzh3/Screenshot-2026-01-29-141146.png",
    techStack: ["React", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    demoLink: "https://medishare-opal.vercel.app/",
    githubLink: "https://github.com/itachipiyush/MediShare",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    demoLink: "https://example.com/demo2",
    githubLink: "https://github.com/username/task-manager",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time updates and forecasts using modern weather APIs.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["JavaScript", "CSS", "OpenWeather API"],
    githubLink: "https://github.com/username/weather-app",
  },
  {
    id: "4",
    title: "Social Media Platform",
    description:
      "A social networking application with profiles, posts, comments, and real-time messaging.",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "GraphQL", "PostgreSQL", "Socket.io"],
    githubLink: "https://github.com/username/social-media",
    featured: true,
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and professional experience.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    demoLink: "https://example.com/demo3",
    githubLink: "https://github.com/username/portfolio",
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "An application to track workouts, nutrition, and fitness goals with visualization of progress.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React Native", "Redux", "Firebase"],
    githubLink: "https://github.com/username/fitness-tracker",
  },
];
