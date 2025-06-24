import { useLanguage } from '../../contexts/LanguageContext';

const SkipToContent = () => {
  const { language } = useLanguage();

  const handleSkip = () => {
    const anchor = document.getElementById('main-focus-anchor');
    anchor?.focus();
  };

  return (
    <button
      type="button"
      className="focus:bg-accent-primary-light dark:focus:bg-accent-dark focus:text-primary absolute top-auto left-[-999px] h-px w-px overflow-hidden transition focus:top-4 focus:left-4 focus:z-50 focus:h-auto focus:w-auto focus:rounded focus:p-2"
      onClick={handleSkip}
    >
      {language === 'en' ? 'Skip to main content' : 'Aller au contenu principal'}
    </button>
  );
};

export default SkipToContent;
