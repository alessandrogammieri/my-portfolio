"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menu } from "@/data/menu";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center relative z-10 shadow-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 rounded-3xl p-1">
      <nav className="flex items-center gap-2">
        {menu.map((item, index) => {
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
