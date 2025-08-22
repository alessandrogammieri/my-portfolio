import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  ComponentType,
} from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  avatar?: string; // URL per immagine avatar
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      avatar,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          // Base styles - simili all'immagine
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",

          // Variant styles basati sull'immagine
          {
            // Primary - blu scuro come nell'immagine "About - Selene Yu"
            "bg-[#1a2332] text-white hover:bg-[#2a3442] border border-[#2a3442] shadow-sm":
              variant === "primary",

            // Secondary - grigio neutro
            "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-700":
              variant === "secondary",

            // Outline - bordo con sfondo trasparente
            "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/30":
              variant === "outline",

            // Ghost - solo testo con hover
            "bg-transparent text-foreground hover:bg-foreground/5":
              variant === "ghost",

            // Success - verde
            "bg-green-600 text-white hover:bg-green-700 border border-green-700 shadow-sm":
              variant === "success",

            // Warning - arancione
            "bg-orange-600 text-white hover:bg-orange-700 border border-orange-700 shadow-sm":
              variant === "warning",

            // Danger - rosso
            "bg-red-600 text-white hover:bg-red-700 border border-red-700 shadow-sm":
              variant === "danger",
          },

          // Size styles
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Avatar a sinistra */}
        {avatar && (
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt=""
              className={cn("rounded-full object-cover", {
                "w-5 h-5": size === "sm",
                "w-6 h-6": size === "md",
                "w-8 h-8": size === "lg",
              })}
            />
          </div>
        )}

        {/* Icona a sinistra */}
        {Icon && iconPosition === "left" && !avatar && (
          <Icon
            className={cn({
              "w-4 h-4": size === "sm" || size === "md",
              "w-5 h-5": size === "lg",
            })}
          />
        )}

        {/* Contenuto del pulsante */}
        {children && <span className="flex-1 text-center">{children}</span>}

        {/* Icona a destra */}
        {Icon && iconPosition === "right" && !avatar && (
          <Icon
            className={cn({
              "w-4 h-4": size === "sm" || size === "md",
              "w-5 h-5": size === "lg",
            })}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
