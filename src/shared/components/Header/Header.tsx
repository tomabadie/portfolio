import { NavLink } from 'react-router';

import LanguageToggle from '../Language/LanguageToggle';
import ThemeToggle from '../Theme/ThemeToggle';

import { useState } from 'react';
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
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 p-0">
          {navList.map((item) => (
            <li key={item.id} className="uppercase">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-primary px-2.5 py-1.5 text-lg font-semibold ${isActive && 'bg-global-secondary border-primary rounded-lg border'} ${!isActive && "after:bg-text-primary-light dark:after:bg-text-primary-dark relative block w-fit after:absolute after:left-1/2 after:block after:h-[1px] after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:transition after:duration-300 after:content-[''] hover:after:scale-x-100"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`flex items-center gap-4 ${isMenuOpen && 'hidden'}`}>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
