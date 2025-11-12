import { ComponentType } from 'react';
import { IconType } from "react-icons";

export interface NavItem {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  featured: boolean;
  year: number;
  slug?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readTime: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface Education {
  id: string;
  institution: string;
  institutionUrl?: string;
  description: string;
}

export interface TechnicalSkill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: TechnicalSkill[];
}

export interface WorkExperience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description?: string;
  consultingFor?: {
    name: string;
    url: string;
  };
  achievements: string[];
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export interface VideoProps {
  src: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  className?: string;
  poster?: string;
}
