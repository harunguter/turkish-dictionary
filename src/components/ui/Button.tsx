import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white shadow-sm",
  secondary:
    "bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:bg-slate-100 dark:active:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm",
  outline:
    "bg-transparent hover:bg-brand-50 dark:hover:bg-brand-950/40 active:bg-brand-100 text-brand-700 dark:text-brand-400 border border-brand-300 dark:border-brand-700",
  ghost:
    "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 text-slate-700 dark:text-slate-300"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-md gap-1.5",
  md: "h-10 px-4 text-sm rounded-lg gap-2",
  lg: "h-12 px-6 text-base rounded-xl gap-2"
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    className={cn(
      "inline-flex items-center justify-center font-medium",
      "transition-all duration-150 ease-out",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
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

export default Button;
