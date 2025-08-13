import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none",
          // Variant styles
          {
            "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25":
              variant === "primary",
            "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600":
              variant === "secondary",
            "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white":
              variant === "outline",
            "text-gray-300 hover:text-white hover:bg-gray-800":
              variant === "ghost",
          },
          // Size styles
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4": size === "md",
            "h-12 px-6 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
