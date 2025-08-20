"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineSquares2X2,
  HiOutlineBookOpen,
  HiOutlineEnvelope,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";

const navigationItems = [
  { href: "/", label: "", icon: HiOutlineHome },
  { href: "/profilo", label: "Profilo", icon: HiOutlineUserCircle },
  { href: "/progetti", label: "Progetti", icon: HiOutlineSquares2X2 },
  { href: "/blog", label: "Blog", icon: HiOutlineBookOpen },
  { href: "/contatti", label: "Contatti", icon: HiOutlineEnvelope },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getThemeIcon = () => {
    if (!mounted) return HiOutlineSun;

    return theme === "light" ? HiOutlineMoon : HiOutlineSun;
  };

  const ThemeIcon = getThemeIcon();

  return (
    <div className="flex justify-center relative z-10 shadow-lg bg-background border border-foreground/10 rounded-3xl p-1">
      <nav className="flex items-center gap-2">
        {navigationItems.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== "/");
          const Icon = item.icon;

          return (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                title={item.label || "Home"}
                className={cn(
                  "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
                  isActive && "bg-foreground/10 border border-foreground/20",
                  !isActive &&
                    "bg-transparent border border-transparent hover:bg-foreground/5 hover:border-foreground/10"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label && (
                  <span className="hidden md:inline">{item.label}</span>
                )}
              </Link>
              {index === 0 && (
                <div className="min-h-[1.5rem] min-w-[1px] h-[1.5rem] w-[1px] bg-foreground/30 ms-2" />
              )}
            </div>
          );
        })}

        <div className="min-h-[1.5rem] min-w-[1px] h-[1.5rem] w-[1px] bg-foreground/30" />

        <button
          onClick={toggleTheme}
          title={
            mounted
              ? `Passa a tema ${theme === "light" ? "scuro" : "chiaro"}`
              : "Cambia tema"
          }
          className={cn(
            "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
            "bg-transparent border border-transparent hover:bg-foreground/5 hover:border-foreground/10"
          )}
        >
          <ThemeIcon className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
