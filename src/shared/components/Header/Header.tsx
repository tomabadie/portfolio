import LanguageToggle from '../Language/LanguageToggle';
import ThemeToggle from '../Theme/ThemeToggle';

import { useState } from 'react';
import DesktopMenu from '../../elements/DesktopMenu';
import MobileMenu from '../../elements/MobileMenu';
import { useLanguage } from '../Language/LanguageContext';
import type { HeaderProps, NavigationItemProps } from './data/headerType';

const Header = (headerData: HeaderProps) => {
  const { language } = useLanguage();
  const navList: NavigationItemProps[] = headerData[language];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-global-primary border-primary flex items-center justify-between border-b px-4">
      <MobileMenu navList={navList} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <h1 className="text-primary py-4 text-xl font-extrabold">Thomas Abadie</h1>
      <DesktopMenu navList={navList} />
      <div className={`flex items-center gap-4 ${isMenuOpen && 'hidden'}`}>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
