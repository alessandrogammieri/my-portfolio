import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

export default function Card({
  children,
  className,
  variant = "default",
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        {
          "bg-gray-900/50 border border-gray-800": variant === "default",
          "backdrop-blur-sm bg-white/5 border border-white/10":
            variant === "glass",
          "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700":
            variant === "gradient",
        },
        hover && "hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
