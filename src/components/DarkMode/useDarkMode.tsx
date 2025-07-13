import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const element = document.documentElement;
  useEffect(() => {
    const storedtheme = localStorage.getItem("theme");
    if (storedtheme) {
      setTheme(storedtheme);
      element.classList.add(storedtheme);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    element.classList.remove(theme === "dark" ? "light" : "dark");
    element.classList.add(theme);
  }, [theme]);
  return { theme, toggleTheme };
};
