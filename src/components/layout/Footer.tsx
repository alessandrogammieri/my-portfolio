import Link from "next/link";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const socialItems = [
  {
    href: "https://github.com/tuousername",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://linkedin.com/in/tuousername",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://behance.net/tuousername",
    label: "Behance",
    icon: FaBehance,
    external: true,
  },
  {
    href: "mailto:alessandrogammieri.it@gmail.com",
    label: "Email",
    icon: HiEnvelope,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="min-w-0 w-full relative flex flex-col md:flex-row justify-center bg-transparent">
      <div className="min-w-0 w-full md:w-5xl flex flex-col md:flex-row justify-between items-center p-2 md:p-6 gap-4 md:gap-0">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">© {new Date().getFullYear()} /</span>
          <span>agDeveloper</span>
          <span className="text-gray-400">/ Tutti i diritti riservati</span>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          {socialItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center cursor-pointer transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" />
                </Link>

                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-background border border-[#9595951A] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="h-24 w-full block md:hidden"></div>
    </footer>
  );
}
