import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IconButtonVariant = "primary" | "ghost" | "soft";
export type IconButtonSize = "sm" | "md" | "lg";

const variants: Record<IconButtonVariant, string> = {
  primary: "bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white",
  ghost:
    "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 text-slate-600 dark:text-slate-300",
  soft:
    "bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/60 active:bg-brand-200 text-brand-700 dark:text-brand-300"
};

const sizes: Record<IconButtonSize, string> = {
  sm: "h-8 w-8 rounded-md",
  md: "h-10 w-10 rounded-lg",
  lg: "h-12 w-12 rounded-xl"
};

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  children?: ReactNode;
}

const IconButton = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}: IconButtonProps) => (
  <button
    type={type}
    className={cn(
      "inline-flex items-center justify-center",
      "transition-all duration-150 ease-out",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950",
      variants[variant],
      sizes[size],
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
