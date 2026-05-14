import { useRef, useState } from "react";
import {
  Check,
  Monitor,
  Moon,
  Palette,
  Sun,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useTheme } from "../hooks/useTheme";
import {
  ACCENTS,
  COLOR_MODES,
  RADII,
  type ColorMode
} from "../data/themes";

const MODE_ICONS: Record<ColorMode, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor
};

const SectionLabel = ({ children }: { children: string }) => (
  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
    {children}
  </div>
);

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    accent,
    setAccent,
    radius,
    setRadius,
    mode,
    setMode,
    resolvedMode
  } = useTheme();

  useClickOutside(containerRef, () => setOpen(false), open);

  const TriggerIcon = resolvedMode === "dark" ? Moon : Sun;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Tema ayarları"
        className={cn(
          "inline-flex items-center gap-2 h-9 px-3 rounded-lg",
          "bg-slate-100 dark:bg-slate-800",
          "border border-slate-200 dark:border-slate-700",
          "text-slate-700 dark:text-slate-200",
          "hover:bg-slate-200/70 dark:hover:bg-slate-700",
          "active:scale-95 transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950",
          open && "bg-slate-200/70 dark:bg-slate-700"
        )}
      >
        <TriggerIcon size={15} />
        <span className="text-sm font-medium">Tema</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Tema seçenekleri"
          className={cn(
            "absolute right-0 mt-2 w-72 z-50 origin-top-right",
            "rounded-2xl p-4",
            "bg-white dark:bg-slate-900",
            "border border-slate-200 dark:border-slate-800",
            "shadow-xl shadow-slate-900/10",
            "animate-fade-in"
          )}
        >
          <div className="flex items-center gap-2 mb-4">
            <Palette size={16} className="text-brand-600 dark:text-brand-400" />
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Görünüm
            </h3>
          </div>

          <section className="mb-4">
            <SectionLabel>Renk</SectionLabel>
            <div className="grid grid-cols-5 gap-2">
              {ACCENTS.map((option) => {
                const selected = option.id === accent;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setAccent(option.id)}
                    aria-label={option.label}
                    aria-pressed={selected}
                    className={cn(
                      "relative h-9 w-9 rounded-full transition-all duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900",
                      "hover:scale-110",
                      selected
                        ? "ring-2 ring-offset-2 dark:ring-offset-slate-900 scale-110"
                        : "ring-1 ring-slate-200 dark:ring-slate-700"
                    )}
                    style={{
                      backgroundColor: option.preview,
                      ["--tw-ring-color" as string]: option.preview
                    }}
                  >
                    {selected && (
                      <Check
                        size={14}
                        className="absolute inset-0 m-auto text-white drop-shadow"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="mb-4">
            <SectionLabel>Köşe Yuvarlaklığı</SectionLabel>
            <div className="grid grid-cols-3 gap-2">
              {RADII.map((option) => {
                const selected = option.id === radius;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setRadius(option.id)}
                    aria-pressed={selected}
                    className={cn(
                      "flex flex-col items-center gap-1.5 p-2 transition-all duration-150",
                      "border-2",
                      selected
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-950/40"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    )}
                    style={{ borderRadius: option.preview }}
                  >
                    <div
                      className={cn(
                        "h-6 w-10 border-2",
                        selected
                          ? "border-brand-500 bg-brand-500/10"
                          : "border-slate-300 dark:border-slate-600"
                      )}
                      style={{ borderRadius: option.preview }}
                    />
                    <span
                      className={cn(
                        "text-[11px] font-medium",
                        selected
                          ? "text-brand-700 dark:text-brand-300"
                          : "text-slate-600 dark:text-slate-400"
                      )}
                    >
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <SectionLabel>Mod</SectionLabel>
            <div
              role="radiogroup"
              className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800"
            >
              {COLOR_MODES.map((option) => {
                const Icon = MODE_ICONS[option.id];
                const selected = option.id === mode;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setMode(option.id)}
                    className={cn(
                      "inline-flex items-center justify-center gap-1.5 h-9 rounded-lg text-xs font-medium",
                      "transition-all duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                      selected
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    )}
                  >
                    <Icon size={14} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
