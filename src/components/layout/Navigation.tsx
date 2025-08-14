"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center relative z-10 shadow-lg bg-background border border-[#9595951A] rounded-3xl p-2">
      <nav className="flex items-center gap-4">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                width: "fit-content",
              }}
              className={`text-sm rounded-[1.25rem] px-3 py-1 cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-[#9595954D] border border-[#9595951A]"
                  : "bg-transparent border border-transparent hover:bg-[#9595951A] hover:border-[#9595951A]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
