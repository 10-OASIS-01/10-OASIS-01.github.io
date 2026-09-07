import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";
interface ThemeContextType {
  theme: Theme;
  preference: ThemePreference;
  setPreference: (value: ThemePreference) => void;
  toggleTheme: () => void;
  switchable: boolean;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, updatePreference] = useState<ThemePreference>(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* System preference works when storage is unavailable. */
    }
    return "system";
  });
  const [systemTheme, setSystemTheme] = useState<Theme>(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );
  const theme = preference === "system" ? systemTheme : preference;
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", update);
    update();
    const sync = (event: StorageEvent) => {
      if (event.key !== "theme" && event.key !== null) return;
      updatePreference(
        event.newValue === "dark" || event.newValue === "light"
          ? event.newValue
          : "system",
      );
    };
    window.addEventListener("storage", sync);
    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("storage", sync);
    };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    const changed = root.classList.contains("dark") !== isDark;
    if (
      changed &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      root.classList.add("theme-transitioning");
      // Apply transition styles before changing the theme's color variables.
      void root.offsetWidth;
    }
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = theme;
    const cleanup = window.setTimeout(
      () => root.classList.remove("theme-transitioning"),
      350,
    );
    return () => {
      window.clearTimeout(cleanup);
      root.classList.remove("theme-transitioning");
    };
  }, [theme]);
  const setPreference = (value: ThemePreference) => {
    updatePreference(value);
    try {
      localStorage.setItem("theme", value);
    } catch {
      /* Keep the in-memory choice. */
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        preference,
        setPreference,
        toggleTheme: () => setPreference(theme === "light" ? "dark" : "light"),
        switchable: true,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
