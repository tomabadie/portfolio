import { useLanguage } from '../Language/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const rights = language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.';

  return (
    <footer className="bg-global-primary border-primary flex items-center justify-end border-t px-4 py-2">
      <p className="text-primary text-sm">
        {' '}
        &copy; {new Date().getFullYear()} Thomas Abadie. {rights}
      </p>
    </footer>
  );
};

export default Footer;
