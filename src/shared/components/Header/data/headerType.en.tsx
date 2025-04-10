export interface NavigationItemProps {
    id: string;
    name: string;
    path: string;
}

export interface NavigationListProps {
    navList: NavigationItemProps[];
}