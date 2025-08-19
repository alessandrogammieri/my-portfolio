"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  {
    href: "/",
    label: "",
    icon: HiOutlineHome,
  },
  {
    href: "/profilo",
    label: "Profilo",
    icon: HiOutlineUserCircle,
  },
  {
    href: "/progetti",
    label: "Progetti",
    icon: HiOutlineSquares2X2,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: HiOutlineBookOpen,
  },
  {
    href: "/contatti",
    label: "Contatti",
    icon: HiOutlineEnvelope,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="flex justify-center relative z-10 shadow-lg bg-background border border-[#9595951A] rounded-3xl p-1">
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
                style={{
                  width: "fit-content",
                }}
                className={cn(
                  "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
                  isActive && "bg-[#9595954D] border border-[#9595951A]",
                  !isActive &&
                    "bg-transparent border border-transparent hover:bg-[#9595951A] hover:border-[#9595951A]"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label && (
                  <span className="hidden md:inline">{item.label}</span>
                )}
              </Link>
              {index === 0 && (
                <div
                  style={{
                    backgroundColor: "#9595954D",
                  }}
                  className="min-h-[1.5rem] min-w-[1px] h-[1.5rem] w-[1px] ms-2"
                ></div>
              )}
            </div>
          );
        })}

        <div
          style={{
            backgroundColor: "#9595954D",
          }}
          className="min-h-[1.5rem] min-w-[1px] h-[1.5rem] w-[1px]"
        ></div>

        <button
          onClick={() => setIsDark(!isDark)}
          className={cn(
            "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
            "bg-transparent border border-transparent hover:bg-[#9595951A] hover:border-[#9595951A]"
          )}
        >
          {isDark ? (
            <HiOutlineSun className="w-4 h-4" />
          ) : (
            <HiOutlineMoon className="w-4 h-4" />
          )}
        </button>
      </nav>
    </div>
  );
}
