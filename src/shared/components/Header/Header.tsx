import { Link } from 'react-router';

import LanguageToggle from '../Language/LanguageToggle';
import ThemeToggle from '../Theme/ThemeToggle';

import { useLanguage } from '../Language/LanguageContext';
import type { HeaderProps } from './data/headerType';

const Header = (headerData: HeaderProps) => {
  const { language } = useLanguage();
  const navList = headerData[language];

  return (
    <header className="bg-global-primary border-primary flex items-center justify-between border-b px-4">
      <h1 className="text-primary py-4 text-2xl font-extrabold">Thomas Abadie</h1>
      <nav>
        <ul className="flex gap-4 p-0">
          {navList.map((item) => (
            <li key={item.id} className="uppercase">
              <Link to={item.path} className="text-primary p-2 text-xl font-semibold">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
