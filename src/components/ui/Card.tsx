import type { HTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";
import { cn } from "@/lib/cn";

export type CardVariant = "default" | "dark" | "elevated";

const variants: Record<CardVariant, string> = {
  default:
    "bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-slate-900 dark:text-slate-100",
  dark: "bg-slate-900 border border-slate-800 text-white",
  elevated:
    "bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-lg shadow-slate-900/5 dark:shadow-black/30"
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  variant?: CardVariant;
  children?: ReactNode;
}

const Card = ({
  children,
  loading = false,
  variant = "default",
  className = "",
  ...props
}: CardProps) => (
  <div
    className={cn(
      "relative rounded-2xl p-6",
      "shadow-sm shadow-slate-900/[0.03]",
      variants[variant],
      className
    )}
    {...props}
  >
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl z-10">
        <Spinner size={28} />
      </div>
    )}
    <div className={cn(loading && "opacity-30 pointer-events-none")}>
      {children}
    </div>
  </div>
);

export default Card;
