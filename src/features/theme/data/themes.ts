export type AccentColor =
  | "emerald"
  | "blue"
  | "violet"
  | "rose"
  | "amber";

export type RadiusScale = "sharp" | "default" | "rounded";

export type ColorMode = "light" | "dark" | "system";

export type ResolvedColorMode = "light" | "dark";

export interface AccentPalette {
  id: AccentColor;
  label: string;
  preview: string;
}

export interface RadiusOption {
  id: RadiusScale;
  label: string;
  preview: string;
}

export interface ColorModeOption {
  id: ColorMode;
  label: string;
}

export const ACCENTS: readonly AccentPalette[] = [
  { id: "emerald", label: "Yeşil", preview: "#16a34a" },
  { id: "blue", label: "Mavi", preview: "#2563eb" },
  { id: "violet", label: "Mor", preview: "#7c3aed" },
  { id: "rose", label: "Pembe", preview: "#e11d48" },
  { id: "amber", label: "Amber", preview: "#d97706" }
] as const;

export const RADII: readonly RadiusOption[] = [
  { id: "sharp", label: "Köşeli", preview: "0px" },
  { id: "default", label: "Yumuşak", preview: "12px" },
  { id: "rounded", label: "Yuvarlak", preview: "20px" }
] as const;

export const COLOR_MODES: readonly ColorModeOption[] = [
  { id: "light", label: "Açık" },
  { id: "dark", label: "Koyu" },
  { id: "system", label: "Sistem" }
] as const;

export const DEFAULT_ACCENT: AccentColor = "emerald";
export const DEFAULT_RADIUS: RadiusScale = "default";
export const DEFAULT_MODE: ColorMode = "system";

export const STORAGE_KEYS = {
  accent: "theme:accent",
  radius: "theme:radius",
  mode: "theme:mode"
} as const;
