import { useEffect, useState } from "react";

export default function ThemeToggle() {
  //? Fallback Initial State
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  //? Addressing the Client/Server Mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <button onClick={handleClick} id="theme-toggle">
      {theme === "dark" ? (
        <img src="/assets/sun.svg" alt="Theme Icon" width="24" height="24" />
      ) : (
        <img src="/assets/moon.svg" alt="Theme Icon" width="24" height="24" />
      )}
    </button>
  );
}
