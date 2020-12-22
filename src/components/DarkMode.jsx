import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/components/DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "bg_light" ? updateTheme("bg_dark") : updateTheme("bg_light");
  };

  return (
    <div className="darkmode">
      <button
        type="darkmode-button"
        onClick={handleClick}
        className="header_button"
      >
        <i class="fas fa-adjust"></i>
      </button>
    </div>
  );
};

export default DarkMode;
