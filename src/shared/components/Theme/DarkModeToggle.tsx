import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      className="dark-toggle-wrapper"
      style={{ marginBottom: "" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
      moonColor="white"
      sunColor="black"
    />
  );
};

export default DarkModeToggle;
