import {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode
} from "react";
import { ThemeContext, type ThemeContextValue } from "./ThemeContext";
import {
  type AccentColor,
  type ColorMode,
  type RadiusScale,
  type ResolvedColorMode,
  DEFAULT_ACCENT,
  DEFAULT_MODE,
  DEFAULT_RADIUS,
  STORAGE_KEYS
} from "../data/themes";

const isAccent = (value: string | null): value is AccentColor =>
  value === "emerald" ||
  value === "blue" ||
  value === "violet" ||
  value === "rose" ||
  value === "amber";

const isRadius = (value: string | null): value is RadiusScale =>
  value === "sharp" || value === "default" || value === "rounded";

const isMode = (value: string | null): value is ColorMode =>
  value === "light" || value === "dark" || value === "system";

const readStorage = <T extends string>(
  key: string,
  guard: (value: string | null) => value is T,
  fallback: T
): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return guard(value) ? value : fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (key: string, value: string): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore quota / privacy errors */
  }
};

const subscribeToSystemMode = (callback: () => void): (() => void) => {
  if (typeof window === "undefined") return () => undefined;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

const getSystemMode = (): ResolvedColorMode => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getServerSystemMode = (): ResolvedColorMode => "light";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [accent, setAccentState] = useState<AccentColor>(() =>
    readStorage(STORAGE_KEYS.accent, isAccent, DEFAULT_ACCENT)
  );
  const [radius, setRadiusState] = useState<RadiusScale>(() =>
    readStorage(STORAGE_KEYS.radius, isRadius, DEFAULT_RADIUS)
  );
  const [mode, setModeState] = useState<ColorMode>(() =>
    readStorage(STORAGE_KEYS.mode, isMode, DEFAULT_MODE)
  );

  const systemMode = useSyncExternalStore(
    subscribeToSystemMode,
    getSystemMode,
    getServerSystemMode
  );

  const resolvedMode: ResolvedColorMode =
    mode === "system" ? systemMode : mode;

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
  }, [accent]);

  useEffect(() => {
    document.documentElement.setAttribute("data-radius", radius);
  }, [radius]);

  useEffect(() => {
    const root = document.documentElement;
    if (resolvedMode === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [resolvedMode]);

  const setAccent = useCallback((value: AccentColor) => {
    setAccentState(value);
    writeStorage(STORAGE_KEYS.accent, value);
  }, []);

  const setRadius = useCallback((value: RadiusScale) => {
    setRadiusState(value);
    writeStorage(STORAGE_KEYS.radius, value);
  }, []);

  const setMode = useCallback((value: ColorMode) => {
    setModeState(value);
    writeStorage(STORAGE_KEYS.mode, value);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next: ColorMode = prev === "dark" ? "light" : "dark";
      writeStorage(STORAGE_KEYS.mode, next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      accent,
      setAccent,
      radius,
      setRadius,
      mode,
      setMode,
      resolvedMode,
      toggleMode
    }),
    [
      accent,
      setAccent,
      radius,
      setRadius,
      mode,
      setMode,
      resolvedMode,
      toggleMode
    ]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
