export interface NavigationItemProps {
  id: string;
  name: string;
  path: string;
}

export interface HeaderProps {
  en: NavigationItemProps[];
  fr: NavigationItemProps[];
}
