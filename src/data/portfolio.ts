import { Project, Experience, Skill } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Un portfolio moderno costruito con Next.js 15 e Tailwind CSS",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/alessandrogammieri/my-portfolio",
    liveUrl: "https://alessandrogammieri.dev",
    category: "web",
    featured: true,
    year: 2025,
  },
  // Aggiungi altri progetti qui...
];

export const experiences: Experience[] = [
  {
    id: "current-role",
    company: "La tua azienda",
    position: "Sviluppatore Frontend",
    location: "Roma, Italia",
    startDate: "2024-01-01",
    description: "Sviluppo di applicazioni web moderne utilizzando React e Next.js",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    current: true,
  },
  // Aggiungi altre esperienze qui...
];

export const skills: Skill[] = [
  { name: "React", level: "advanced", category: "frontend" },
  { name: "Next.js", level: "advanced", category: "frontend" },
  { name: "TypeScript", level: "intermediate", category: "frontend" },
  { name: "Tailwind CSS", level: "advanced", category: "frontend" },
  { name: "Node.js", level: "intermediate", category: "backend" },
  // Aggiungi altre skills qui...
];

export const personalInfo = {
  name: "Alessandro Gammieri",
  title: "Full Stack Developer",
  location: "Roma, Italia",
  email: "alessandro@example.com",
  bio: "Sono uno sviluppatore full-stack appassionato di tecnologie moderne e design pulito.",
  social: {
    github: "https://github.com/alessandrogammieri",
    linkedin: "https://linkedin.com/in/alessandrogammieri",
    twitter: "https://twitter.com/alessandrogammieri",
  },
};
