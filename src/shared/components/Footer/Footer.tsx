import { useLanguage } from '../Language/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const rights = language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.';

  return (
    <footer className="bg-global-primary border-primary col-span-8 col-start-5 row-start-4 flex items-center justify-between border-t px-4 py-2">
      <p className="text-primary text-sm"> &copy; 2025 Thomas Abadie. {rights}</p>
    </footer>
  );
};

export default Footer;
