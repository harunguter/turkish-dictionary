import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "default" | "brand" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
  brand: "bg-brand-100 dark:bg-brand-950/60 text-brand-800 dark:text-brand-300",
  outline:
    "bg-transparent text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
};

export interface BadgeProps {
  children?: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge = ({
  children,
  variant = "default",
  className = ""
}: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      variants[variant],
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
