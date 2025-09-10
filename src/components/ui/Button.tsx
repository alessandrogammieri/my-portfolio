import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  ComponentType,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HiChevronRight } from "react-icons/hi2";

type ButtonProps = {
  icon?: ComponentType<{ className?: string }>;
  children?: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  chevron?: boolean;
};

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      className,
      icon: Icon,
      children,
      href,
      external,
      chevron = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "group min-h-10 h-10 w-fit flex justify-center items-center gap-3",
      "bg-gray-500/10 hover:bg-gray-400/15 dark:bg-cyan-500/10 dark:hover:bg-cyan-400/15 border border-cyan-600 dark:border-cyan-500 rounded-full",
      "px-4 transition-all duration-[400ms] ease-out relative",
      "hover:shadow-md hover:shadow-gray-400/20 dark:hover:shadow-cyan-500/20",
      chevron && "pr-12 lg:pr-4 lg:hover:pr-12 overflow-hidden",
      className
    );

    const content = (
      <>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-[1.5s] ease-in-out"></span>

        {Icon && (
          <span className="h-fit w-fit inline-flex relative transition-all duration-300 ease-out dark:group-hover:text-cyan-400">
            <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-500 transition-colors duration-300" />
          </span>
        )}

        <div className="relative text-md transition-all duration-300 ease-out dark:group-hover:text-cyan-50">
          <span>{children}</span>
        </div>

        {chevron && (
          <span
            className="absolute right-3 h-fit w-fit inline-flex bg-gray-500/10 dark:bg-cyan-500/10 border border-gray-400/30 dark:border-gray-400/15 rounded-full p-1
             lg:opacity-0 lg:scale-[0.97] lg:translate-x-[-5px] opacity-100 scale-100 translate-x-0
             lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:translate-x-0
             transition-all duration-[450ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <HiChevronRight className="w-5 h-5 text-gray-600 dark:text-white" />
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={baseStyles}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        className={baseStyles}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
