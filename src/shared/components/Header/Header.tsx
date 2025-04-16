import { Link } from "react-router";

import "./Header.css";

import DarkModeToggle from "../Theme/DarkModeToggle";
import LanguageToggle from "../Language/LanguageToggle";

import type { NavigationListProps } from "./data/headerType.en";

const Header = ({ navList }: NavigationListProps) => {
  return (
    <header>
      <h1>Thomas Abadie</h1>
      <nav>
        <ul className="nav-list">
          {navList.map((item) => (
            <li key={item.id} className="nav-item">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="toggle-container">
        <DarkModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
