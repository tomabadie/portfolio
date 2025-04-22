import { Link } from 'react-router';

import DarkModeToggle from '../Theme/DarkModeToggle';
import LanguageToggle from '../Language/LanguageToggle';

import type { NavigationListProps } from './data/headerType.en';

const Header = ({ navList }: NavigationListProps) => {
  return (
    <header className="bg-secondary-dark flex items-center justify-between px-4">
      <h1 className="font-extrabold">Thomas Abadie</h1>
      <nav>
        <ul className="flex gap-4 border p-0">
          {navList.map((item) => (
            <li key={item.id} className="nav-item uppercase">
              <Link to={item.path} className="p-2 font-semibold text-pink-800">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2 border">
        <DarkModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
