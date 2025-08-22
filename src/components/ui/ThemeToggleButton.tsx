"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export default function ThemeToggleButton() {
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
}
