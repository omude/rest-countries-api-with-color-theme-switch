import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("dark-mode");
    return stored ? (JSON.parse(stored) as boolean) : false;
  });

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const handleThemeToggle = (_e: React.MouseEvent<HTMLDivElement>) => {
    document.body.classList.toggle("light-mode");
    setDarkMode((prev) => !prev);
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("dark-mode", JSON.stringify(!isLight));
  };
  return (
    <div
      onClick={handleThemeToggle}
      className="flex gap-2 items-center cursor-pointer"
    >
      <IoMoon />
      <p className="font-semibold text-[16px]">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </p>
    </div>
  );
};

export default DarkModeBtn;
