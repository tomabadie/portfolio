import type { NavigationItemProps } from './headerType';

export const navDataFr: NavigationItemProps[] = [
  {
    id: 'nav-1',
    name: 'À propos',
    path: '/about',
    info: "Découvre mon parcours, mes valeurs et ce qui m'anime.",
  },
  {
    id: 'nav-2',
    name: 'CV',
    path: '/resume',
    info: 'Mon expérience, mes compétences et mon parcours de formation.',
  },
  {
    id: 'nav-3',
    name: 'Projets',
    path: '/projects',
    info: 'Les projets terminés ou encore en développement.',
  },
  {
    id: 'nav-4',
    name: 'Contact',
    path: '/contact',
    info: 'Une idée, une envie ? Écris-moi ici directement.',
  },
];
