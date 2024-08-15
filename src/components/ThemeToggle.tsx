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
    <button
      onClick={handleClick}
      id="theme-toggle"
      className="p-2  transition-colors duration-300"
    >
      <svg
        fill={theme === "dark" ? "white" : "#00ffff"}
        height="24px"
        width="24px"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path d="M42,12H18C8.075,12,0,20.075,0,30s8.075,18,18,18h24c9.925,0,18-8.075,18-18S51.925,12,42,12z M18,38c0,0.553-0.447,1-1,1 s-1-0.447-1-1V22c0-0.553,0.447-1,1-1s1,0.447,1,1V38z M42,43c-7.168,0-13-5.832-13-13s5.832-13,13-13s13,5.832,13,13 S49.168,43,42,43z" />
      </svg>
    </button>
  );
}
