import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  const primaryLightColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary-light')
    .trim();

  const primaryDarkColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary-dark')
    .trim();

  return (
    <DarkModeSwitch
      className="flex content-center justify-center"
      style={{ marginBottom: '' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
      moonColor="black"
      sunColor="lightgray"
    />
  );
};

export default DarkModeToggle;
