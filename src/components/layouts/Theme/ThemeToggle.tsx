import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useTheme } from '../../../contexts/ThemeContext';
import IconWrapper from '../../ui/IconWrapper';
import { MoonIcon, SunIcon } from '../../ui/Icons';

const ThemeToggle: React.FC = () => {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        type="button"
        onClick={toggleTheme}
        data-cursor="hover"
        aria-label={language === 'en' ? 'Switch theme' : 'Changer le thème'}
        className="flex items-center justify-center"
        key={theme === 'dark' ? 'moon' : 'sun'}
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
      >
        <IconWrapper variant="plain" wrapperClassName="h-7 w-7">
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </IconWrapper>
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeToggle;
