"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  HomeIcon,
  UserCircleIcon,
  Squares2X2Icon,
  BookOpenIcon,
  EnvelopeIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigationItems = [
  { href: "/", label: "", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserCircleIcon },
  { href: "/works", label: "Works", icon: Squares2X2Icon },
  { href: "/blog", label: "Blog", icon: BookOpenIcon },
  { href: "/contact", label: "Contact", icon: EnvelopeIcon },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center relative z-10 shadow-lg bg-background border border-[#9595951A] rounded-3xl p-1">
      <nav className="flex items-center gap-2">
        {navigationItems.map((item, index) => {
          const isActive = pathname === item.href;
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
                <Icon className="size-4" />
                {item.label && <span>{item.label}</span>}
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
          className={cn(
            "flex items-center gap-3 text-sm rounded-[1.25rem] px-2 py-1.5 cursor-pointer transition-all duration-200",
            "bg-transparent border border-transparent hover:bg-[#9595951A] hover:border-[#9595951A]"
          )}
        >
          <SunIcon className="size-4" />
        </button>
      </nav>
    </div>
  );
}
