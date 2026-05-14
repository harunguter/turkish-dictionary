import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full h-12 px-4 text-base",
        "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500",
        "border border-slate-200 dark:border-slate-700 rounded-xl",
        "shadow-sm transition-all duration-150",
        "hover:border-slate-300 dark:hover:border-slate-600",
        "outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:focus:ring-brand-500/30",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;
