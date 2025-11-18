import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Darkmode() {
  const [theme, setTheme] = useState("light");

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", newTheme);
  };

  // Carregar tema salvo
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    const root = document.documentElement;
    if (storedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 shadow-md
                 shadow-purple-400 text-gray-700 hover:text-purple-500
                 transition-all ease-in-out cursor-pointer
                 bg-white
                 dark:bg-[#2b382b] dark:text-yellow-300 dark:hover:text-yellow-400 dark:shadow-amber-400"
      aria-label="Alternar tema"
    >
      {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
    </button>
  );
}

