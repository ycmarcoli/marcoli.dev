import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import ObfuscatedText from "./ObfuscatedText";

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("class", "dark");
    } else {
      document.documentElement.removeAttribute("class");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className={`${className}`}>
      {darkMode ? (
        <div className="flex items-center">
          <ObfuscatedText text="light" icon={<HiSun />} />
        </div>
      ) : (
        <div className="flex items-center">
          <ObfuscatedText text="dark" icon={<HiMoon />} />
        </div>
      )}
    </button>
  );
}
