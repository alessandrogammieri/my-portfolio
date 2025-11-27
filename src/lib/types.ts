import { ComponentType, HTMLAttributes, ReactNode } from 'react';
import { IconType } from "react-icons";

// Navigation & Menu
export interface NavItem {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
}

// Projects
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

export interface ProjectsSliderProps {
  projects?: Project[];
  startIndex?: number;
  count?: number;
}

// Blog
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

// Work Experience
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

// Technical Skills
export interface TechnicalSkill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: TechnicalSkill[];
}

// Education
export interface Education {
  id: string;
  institution: string;
  institutionUrl?: string;
  description: string;
}

// UI Components
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export interface LightboxProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  onClose: () => void;
}

export interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
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

// Forms & Contact
export interface ContactFormProps {
  title?: string;
  description?: string;
  actionUrl?: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactNotificationProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
