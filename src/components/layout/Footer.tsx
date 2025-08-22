import Link from "next/link";
import { social } from "@/data/social";

export default function Footer() {
  return (
    <footer className="min-w-0 w-full relative flex flex-col md:flex-row justify-center bg-transparent">
      <div className="min-w-0 w-full md:w-5xl flex flex-col md:flex-row justify-between items-center p-2 md:p-6 gap-4 md:gap-0">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} /
          </span>
          <span>agDeveloper</span>
          <span className="text-gray-600 dark:text-gray-400">
            / Tutti i diritti riservati
          </span>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          {social.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center cursor-pointer transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200" />
                </Link>

                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-transparent dark:bg-background-dark border border-gray-400 dark:border-gray-600 text-foreground-light dark:text-foreground-dark text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
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
