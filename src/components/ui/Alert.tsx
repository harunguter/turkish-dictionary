import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";
import { cn } from "@/lib/cn";

export type AlertVariant = "error" | "warning" | "info" | "success";

interface AlertVariantStyles {
  container: string;
  icon: string;
  title: string;
}

const variants: Record<AlertVariant, AlertVariantStyles> = {
  error: {
    container:
      "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/60 text-red-800 dark:text-red-300",
    icon: "text-red-600 dark:text-red-400",
    title: "text-red-900 dark:text-red-200"
  },
  warning: {
    container:
      "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-400",
    title: "text-amber-900 dark:text-amber-200"
  },
  info: {
    container:
      "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/60 text-blue-800 dark:text-blue-300",
    icon: "text-blue-600 dark:text-blue-400",
    title: "text-blue-900 dark:text-blue-200"
  },
  success: {
    container:
      "bg-brand-50 dark:bg-brand-950/30 border-brand-200 dark:border-brand-900/60 text-brand-800 dark:text-brand-300",
    icon: "text-brand-600 dark:text-brand-400",
    title: "text-brand-900 dark:text-brand-200"
  }
};

export interface AlertProps {
  variant?: AlertVariant;
  icon?: ComponentType<LucideProps>;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const Alert = ({
  variant = "info",
  icon: Icon,
  title,
  children,
  className = ""
}: AlertProps) => {
  const styles = variants[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl border",
        styles.container,
        className
      )}
    >
      {Icon && (
        <Icon size={20} className={cn("mt-0.5 flex-shrink-0", styles.icon)} />
      )}
      <div className="flex-1 text-sm">
        {title && (
          <div className={cn("font-semibold mb-0.5", styles.title)}>
            {title}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
