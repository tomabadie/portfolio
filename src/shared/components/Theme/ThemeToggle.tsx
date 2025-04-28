import { Within } from '@theme-toggles/react'; /* React 19.x : npm install --legacy-peer-deps @theme-toggles/react */
import '@theme-toggles/react/css/Within.css';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Within
      type="button"
      className="text-primary border border-amber-400 text-3xl"
      toggled={theme === 'dark'}
      toggle={toggleTheme}
      duration={1250}
      reversed={false}
    />
  );
};

export default ThemeToggle;
