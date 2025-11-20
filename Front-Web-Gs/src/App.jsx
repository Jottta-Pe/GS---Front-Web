import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center transition-all ease-in-out dark:bg-gray-700">

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50
                   rounded-full p-2 shadow-md
                   shadow-purple-400 text-gray-700 hover:text-purple-500
                   transition-all ease-in-out cursor-pointer
                   bg-white
                   dark:bg-gray-800 dark:text-yellow-300 dark:hover:text-yellow-400 dark:shadow-amber-400"
      >
        {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
      </button>

      <div className="text-lg dark:text-white mt-10">
        {theme === "light"
          ? "🌞 Bright mode activated"
          : "🌙 Welcome to the dark side"}
      </div>

    </div>
  );
}

export default App;
