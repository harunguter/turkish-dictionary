import { createContext } from "react";
import type {
  AccentColor,
  ColorMode,
  RadiusScale,
  ResolvedColorMode
} from "../data/themes";

export interface ThemeContextValue {
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  radius: RadiusScale;
  setRadius: (radius: RadiusScale) => void;
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  resolvedMode: ResolvedColorMode;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
