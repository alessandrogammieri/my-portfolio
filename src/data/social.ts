import { NavItem } from "@/lib/types";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

export const social: NavItem[] = [
  {
    href: "https://github.com/alessandrogammieri",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/alessandro-gammieri/",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://www.behance.net/alessangammier",
    label: "Behance",
    icon: FaBehance,
    external: true,
  },
  {
    href: "mailto:agammieri.dev@gmail.com",
    label: "Email",
    icon: HiEnvelope,
  },
];

export default social;
