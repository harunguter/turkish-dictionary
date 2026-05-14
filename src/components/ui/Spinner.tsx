import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner = ({ size = 20, className = "" }: SpinnerProps) => (
  <Loader2
    size={size}
    className={cn("animate-spin text-brand-600", className)}
    aria-label="Yükleniyor"
  />
);

export default Spinner;
