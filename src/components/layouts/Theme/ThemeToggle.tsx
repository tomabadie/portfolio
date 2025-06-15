import { Within } from '@theme-toggles/react'; /* React 19.x : npm install --legacy-peer-deps @theme-toggles/react */
import '@theme-toggles/react/css/Within.css';
import { useTheme } from '../../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Within
      type="button"
      data-cursor="hover"
      className="text-primary !cursor-none text-3xl"
      toggled={theme === 'dark'}
      toggle={toggleTheme}
      duration={1250}
      reversed={false}
    />
  );
};

export default ThemeToggle;
