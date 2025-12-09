import { SkillCategory } from "@/lib/types";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiSass,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiChartdotjs,
  SiReact,
  SiAlpinedotjs,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiVite,
  SiWordpress,
  SiJoomla,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd,
} from "react-icons/si";
import { LuClock } from "react-icons/lu";

export const technicalSkills: SkillCategory[] = [
  {
    id: "languages",
    title: "Linguaggi",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Sass", icon: SiSass },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    id: "databases",
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: "css-libraries",
    title: "Librerie CSS",
    skills: [
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "js-libraries",
    title: "Librerie JavaScript",
    skills: [
      { name: "jQuery", icon: SiJquery },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Moment.js", icon: LuClock },
      { name: "Alpine.js", icon: SiAlpinedotjs },
      { name: "React", icon: SiReact },
    ],
  },
  {
    id: "frameworks",
    title: "Framework",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    id: "cms",
    title: "CMS",
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Joomla", icon: SiJoomla },
    ],
  },
  {
    id: "tools",
    title: "Strumenti",
    skills: [
      { name: "npm", icon: SiNpm },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    id: "design",
    title: "Design & Grafica",
    skills: [
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
      { name: "InDesign", icon: SiAdobeindesign },
      { name: "Adobe XD", icon: SiAdobexd },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
