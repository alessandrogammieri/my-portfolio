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

const ThemeToggleButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !theme) {
      const systemTheme =
        resolvedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getThemeIcon = () => {
    if (!mounted) {
      return HiOutlineSun;
    }

    const effectiveTheme = resolvedTheme || theme;
    return effectiveTheme === "light" ? HiOutlineMoon : HiOutlineSun;
  };

  if (!mounted) {
    return (
      <button
        className={cn(
          "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
          "bg-transparent border border-transparent hover:bg-foreground-light/5 dark:hover:bg-foreground-dark/5 hover:border-foreground-light/10 dark:hover:border-foreground-dark/10"
        )}
        disabled
      >
        <HiOutlineSun className="w-4 h-4" />
      </button>
    );
  }

  const ThemeIcon = getThemeIcon();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
        "bg-transparent border border-transparent hover:bg-foreground-light/5 dark:hover:bg-foreground-dark/5 hover:border-foreground-light/10 dark:hover:border-foreground-dark/10"
      )}
    >
      <ThemeIcon className="w-4 h-4" />
    </button>
  );
};

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-center relative z-10 shadow-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 rounded-3xl p-1">
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
                  isActive &&
                    "bg-foreground-light/10 dark:bg-foreground-dark/10 border border-foreground-light/20 dark:border-foreground-dark/20",
                  !isActive &&
                    "bg-transparent border border-transparent hover:bg-foreground-light/5 dark:hover:bg-foreground-dark/5 hover:border-foreground-light/10 dark:hover:border-foreground-dark/10"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label && (
                  <span className="hidden md:inline">{item.label}</span>
                )}
              </Link>
              {index === 0 && (
                <div className="min-h-[1.5rem] min-w-[1px] h-[1.5rem] w-[1px] bg-foreground-light/30 dark:bg-foreground-dark/30 ms-2" />
              )}
            </div>
          );
        })}

        <div className="min-h-[1.5rem] min-w-[1px] h-[1.5rem] w-[1px] bg-foreground-light/30 dark:bg-foreground-dark/30" />

        <ThemeToggleButton />
      </nav>
    </div>
  );
}
