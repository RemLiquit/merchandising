import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
      <i onClick={handleClick} class="fas fa-adjust" />
    </div>
  );
};

export default DarkMode;
