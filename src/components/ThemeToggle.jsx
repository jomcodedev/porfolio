import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import twMergeClassnames from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={twMergeClassnames(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus: outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Moon className="h-6 w-6 text-white-900" />
      ) : (
        <Sun className="h-6 w6 text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
