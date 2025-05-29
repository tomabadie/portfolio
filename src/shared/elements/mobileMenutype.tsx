import type { NavigationItemProps } from '../components/Header/data/headerType';

export interface MobileMenuProps {
  navList: NavigationItemProps[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
