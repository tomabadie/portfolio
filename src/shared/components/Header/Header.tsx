import { Link } from 'react-router';

import LanguageToggle from '../Language/LanguageToggle';
import DarkModeToggle from '../Theme/DarkModeToggle';

import type { NavigationListProps } from './data/headerType.en';

const Header = ({ navList }: NavigationListProps) => {
  return (
    <header className="bg-bg-light border-border-light flex items-center justify-between border px-4">
      <h1 className="text-text-light py-4 text-3xl font-extrabold">Thomas Abadie</h1>
      <nav>
        <ul className="flex gap-4 p-0">
          {navList.map((item) => (
            <li key={item.id} className="uppercase">
              <Link to={item.path} className="text-text-light p-2 text-xl font-semibold">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4">
        <DarkModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
