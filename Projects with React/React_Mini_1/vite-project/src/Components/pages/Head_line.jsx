import React from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContext";

const Head_line = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="Head">
      <div className="headline">
        <img src="/src/assets/logo.svg" alt="Logo" />
        <div
          className="sun-logo"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        >
          {isDark ? <LuSun /> : <LuMoon />}
        </div>
      </div>
    </div>
  );
};

export default Head_line;
