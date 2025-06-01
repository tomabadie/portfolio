import type { NavigationItemProps } from '../../layouts/Header/data/headerType';

export interface MobileMenuProps {
  navList: NavigationItemProps[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
