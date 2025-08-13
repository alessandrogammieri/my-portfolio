"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm transition-all duration-300 hover:text-blue-400 relative ${
            pathname === item.href
              ? "text-blue-400"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {item.label}
          {pathname === item.href && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
}
