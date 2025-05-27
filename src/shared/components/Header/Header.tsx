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
      <h1 className="text-primary py-4 text-xl font-extrabold">Thomas Abadie</h1>
      <nav>
        <ul className="flex gap-4 p-0">
          {navList.map((item) => (
            <li key={item.id} className="p-2 uppercase">
              <Link
                to={item.path}
                className="text-primary after:bg-text-primary-light dark:after:bg-text-primary-dark relative block w-fit p-0 text-lg font-semibold after:absolute after:block after:h-[1px] after:w-full after:origin-center after:scale-x-0 after:transition after:duration-300 after:content-[''] hover:after:scale-x-100"
              >
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
