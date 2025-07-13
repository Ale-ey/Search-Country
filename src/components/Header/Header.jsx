import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../DarkMode/useDarkMode";
export const Header = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <div className="bg-white dark:bg-gray-700 transition-theme py-4 shadow-md flex items-center justify-between px-8">
      <div className="text-xl text-black dark:text-white transition-theme font-bold">
        {/* left logo side  */}
        <h1>Where is the World?</h1>
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="px-4  hover:bg-gray-400 rounded-md cursor-pointer font-semibold py-2 flex items-center gap-2 bg-gray-200 dark:bg-white transition-theme text-black"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
          Dark Mode
        </button>
      </div>
    </div>
  );
};
