import LanguageToggle from '../Language/LanguageToggle';
import ThemeToggle from '../Theme/ThemeToggle';

import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../../../contexts/LanguageContext';
import DesktopMenu from '../../navigation/DesktopMenu/DesktopMenu';
import MobileMenu from '../../navigation/MobileMenu/MobileMenu';
import { navDataEn } from '../../navigation/data/navData.en';
import { navDataFr } from '../../navigation/data/navData.fr';

const Header = () => {
  const { language } = useLanguage();
  const navList = language === 'en' ? navDataEn : navDataFr;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-global-primary border-primary transition-theme flex items-center justify-between border-b px-4">
      <Link to={'/'}>
        <h1
          className="transition-theme text-primary cursor-none py-4 text-xl font-extrabold"
          data-cursor="hover"
        >
          Thomas Abadie
        </h1>
      </Link>
      <DesktopMenu navList={navList} />
      <div className="order-first flex items-center gap-4 md:order-none md:flex-row-reverse">
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <MobileMenu navList={navList} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
