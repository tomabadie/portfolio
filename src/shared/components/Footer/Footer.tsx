import { useLanguage } from '../Language/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const rights = language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.';
  console.log('Langue actuelle dans le footer:', language);

  return (
    <footer className="bg-global-primary border-primary flex items-center justify-between border-t px-4">
      <p className="text-primary text-sm"> &copy; 2025 Thomas Abadie. {rights}</p>
    </footer>
  );
};

export default Footer;
