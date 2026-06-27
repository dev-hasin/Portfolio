import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const themeStorageKey = "portfolio-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document === "undefined" ? true : document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", isDark ? "#0a0a0f" : "#f7f7fb");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((current) => !current)}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-violet-500/30 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
