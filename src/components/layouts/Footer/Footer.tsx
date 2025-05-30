import { useLanguage } from '../../../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const rights = language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.';

  return (
    <footer className="bg-global-primary border-primary transition-theme flex items-center justify-center border-t px-4 py-2 sm:justify-end">
      <p className="text-primary transition-theme text-sm">
        {' '}
        &copy; {new Date().getFullYear()} Thomas Abadie. {rights}
      </p>
    </footer>
  );
};

export default Footer;
