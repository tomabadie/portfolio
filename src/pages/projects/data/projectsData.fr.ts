import type { ProjectProps } from './projectsDataType';

export const projectsDataFr: ProjectProps[] = [
  {
    id: 'taverne',
    name: 'Taverne',
    img: '/assets/img/projects/tavern.webp',
    shortDescription:
      "Application de gestion de stocks et de carte dynamique pensée pour les bars disposant d'une large sélection de bières.",
    detailedDescription:
      'Projet en cours visant à faciliter la gestion des bars à bières avec une carte conséquente. L’application centralise les informations sur les bières, gère les stocks et génère automatiquement une carte claire et interactive. Elle inclut des comptes différenciés (user, admin, super-admin) et met l’accent sur la scalabilité pour répondre à de vrais besoins concrets. L’objectif est de fournir un outil ergonomique, fiable et adaptable, avec une architecture propre, un design responsive et des bonnes pratiques de développement full stack.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Express', 'Node', 'Tailwind'],
      },
      {
        category: 'database',
        name: 'Databases',
        content: ['MySQL'],
      },
      {
        category: 'library',
        name: 'Libraries',
        content: ['Shadcn', 'Radix', 'TanStack Table', 'React Hook Form', 'Zod'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Monorepo', 'Vite', 'ESLint', 'Prettier', 'Git', 'Github', 'Excalidraw'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: [
          'Responsive',
          'Accessibility',
          'REST API',
          'CRUD',
          'Strict form typing',
          'Security middlewares',
        ],
      },
    ],
    tags: [
      'Full Stack',
      'Stocks',
      'Bars à bières',
      'Gestion',
      'CRUD',
      'UI/UX',
      'Data Table',
      'Forms',
      'Real problem',
    ],
    repoLink: 'https://github.com/tomabadie/',
    contributions: [
      'Conception de l’architecture globale de l’application et modélisation de la base de données',
      'Développement des composants frontend (interface de gestion, affichage dynamique de la carte des bières, dashboards filtrables, etc.)',
      'Mise en place des routes backend pour le CRUD des bières, formats, bars et gestion des comptes (admin, super-admin)',
      'Implémentation de formulaires robustes et typés avec React Hook Form et Zod',
      'Affichage structuré et filtrable sur les dashboards grâce à TanStack Table',
      'Travail sur l’ergonomie, la cohérence de l’UI et la navigation avec shadcn et Radix',
      'Mise en place d’un monorepo avec une configuration ESLint/Prettier stricte pour éviter les régressions',
      'Préparation de l’authentification et des middlewares de sécurité pour la vérification des données envoyées',
    ],
    context: {
      type: 'Projet personnel',
      solo: true,
    },
    inProgress: true,
  },
  {
    id: 'portfolio',
    name: 'Portfolio personnel',
    img: '/assets/img/projects/portfolio_dark.webp',
    shortDescription:
      'Site portfolio moderne, responsive et minimaliste pour valoriser mon profil et mes projets.',
    detailedDescription:
      'Développé entièrement en solo, ce site met en avant mes compétences, mon parcours et mes projets. J’y ai intégré Tailwind et organisé une structure de composants réutilisables pour un rendu clair, moderne, scalable et accessible. Le site est régulièrement maintenu à jour, notamment au niveau des données de parcours et de projets, afin de refléter fidèlement mon évolution.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Tailwind'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: [
          'Framer Motion',
          'ESLint',
          'Prettier',
          'Vite',
          'Excalidraw',
          'HeadlessUI',
          'Git',
          'Github',
        ],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'REST API'],
      },
    ],
    tags: ['Portfolio', 'Frontend', 'Tailwind', 'Projet solo'],
    demoLink: 'https://tomabadie.dev',
    repoLink: 'https://github.com/tomabadie/portfolio',
    contributions: [
      'Stack moderne : React, Tailwind, ESLint, Prettier, ...',
      'Architecture de code claire et modulaire pour gagner en scalabilité',
      'Design responsive et minimaliste',
      `Attention portée sur l'accessibilité (focus clavier, rôles Aria, etc) pour une expérience inclusive`,
      'Conservation des icônes en self-custody pour garder la main et éviter les dépendances',
    ],
    context: {
      type: 'Projet personnel',
      solo: true,
    },
    inProgress: false,
  },
  {
    id: 'seazn',
    name: 'SeazN',
    img: '/assets/img/projects/seazn.webp',
    shortDescription:
      'Application web collaborative de recettes enrichies avec des dimensions nutrition, écologie et coût pour un quotidien plus responsable.',
    detailedDescription:
      'Projet full stack réalisé en équipe de 4 développeurs en formation (projet de fin de bootcamp). Inspiré des sites de recettes classiques, cette application enrichit l’expérience utilisateur grâce à une notation nutritionnelle et environnementale, une gestion de compte multi-niveaux (visiteur, abonné, premium, admin) et des fonctionnalités personnalisées. Conçu dans un monorepo avec une architecture modulaire, le projet intègre un backend Express et un frontend React. Bien que le projet ne soit plus maintenu, il a constitué une expérience riche en collaboration, bonnes pratiques de développement et gestion de projet.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Express', 'Node'],
      },
      {
        category: 'database',
        name: 'Databases',
        content: ['MySQL'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Monorepo', 'Excalidraw', 'Figma', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile', 'REST API'],
      },
    ],
    tags: ['Full Stack', 'Projet en équipe', 'Recettes', 'Responsable', 'Nutrition', 'Écologie'],
    repoLink: 'https://github.com/tomabadie/JS-WestDevs-P3-SeazN',
    contributions: [
      'Initiation du concept de l’application et définition des fonctionnalités clés avec une approche orientée utilisateur',
      'Réalisation du wireframe global de l’application et contribution à la conception de l’architecture de la base de données',
      'Développement de quatre composants de visualisation de recettes (cards) réutilisables, adaptés à différents niveaux de détail et contextes d’affichage',
      'Création complète de la page de recherche de recettes (frontend et backend) avec filtres avancés, pagination et optimisation des performances (debounce, etc)',
      'Implémentation et amélioration de fonctionnalités essentielles (frontend et backend) : gestion des favoris, recettes par utilisateur, enrichissement et optimisation du schéma de base de données',
      'Revue de code systématique (Pull Requests) et débogage continu pour garantir la qualité du projet et respecter les deadlines',
    ],
    context: {
      type: 'Projet de groupe',
      solo: false,
    },
    inProgress: false,
  },
  {
    id: 'codewarts',
    name: 'CodeWarts',
    img: '/assets/img/projects/codewarts.webp',
    shortDescription:
      'Prototype ludique de quiz autour de la thématique Harry Potter, réalisé en 48h.',
    detailedDescription:
      "Conçu lors d’un hackathon interne à la promo, CodeWarts est une application fun pour apprendre à coder en répondant à des quiz dans un univers inspiré d’Harry Potter avec des clins d'oeil à nos formateurs. L’équipe a livré un MVP fonctionnel en 48h avec routes et affichage dynamique.",
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Vite', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility'],
      },
    ],
    tags: ['Quiz', 'Hackathon', 'Code', 'Harry Potter', 'Fun'],
    repoLink: 'https://github.com/tomabadie/protojam_codewarts',
    demoLink: 'https://protojam-codewarts.vercel.app/',
    contributions: [
      'Structure technique solide dans un temps contraint',
      'Responsive complet',
      'Pas de libraries externes',
      "Affichage dynamique des quiz et filtres pour révéler les photos avec la progession de l'utilisateur",
      'Correction du code de collègues',
    ],
    context: {
      type: 'Hackathon 48h - Projet de groupe',
      solo: false,
      comment:
        'Participation active sur la structure, l’UX/UI et la logique de jeu. Projet réalisé en 48h.',
    },
  },
  {
    id: 'savor-safari',
    name: 'Savor Safari',
    img: '/assets/img/projects/savor_safari.webp',
    shortDescription:
      'Tour du monde culinaire avec carte interactive et recettes liées à chaque pays.',
    detailedDescription:
      'Application de groupe réalisée autour d’un concept de cuisine internationale. L’interface est centrée sur une carte interactive permettant d’accéder à des recettes par pays, issues d’une API externe. J’ai pris en charge seul la carte, le responsive, la sélection de pays et la résolution de bugs. J’ai également contribué à l’idée initiale du projet, à la recherche de l’API adaptée et à la co-conception du design global.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: [
          'Biome',
          'Monorepo',
          'Vite',
          'Excalidraw',
          'Figma',
          'Fetch API',
          'React Simple Maps',
          'ThemealDB',
          'Git',
          'Github',
        ],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile', 'REST API'],
      },
    ],
    tags: ['Recettes', 'API', 'Carte interactive', 'International'],
    repoLink: 'https://github.com/tomabadie/JS-WestDevs-P2-SavorSafari',
    demoLink: 'https://savorsafari.vercel.app/',
    contributions: [
      'Carte interactive avec react-simple-maps',
      'Sélection dynamique par pays',
      'UX mobile optimisée',
      'Support technique et débogage',
    ],
    context: {
      type: 'Projet de groupe',
      solo: false,
      comment: 'Travail sur la carte interactive, le responsive mobile et le debug.',
    },
  },

  {
    id: 'weather-app',
    name: 'Weather App',
    img: '/assets/img/projects/weather_app.webp',
    shortDescription:
      'Application météo rapide en React à partir d’un fichier CSV de stations météo.',
    detailedDescription:
      "Réalisé en autonomie pendant un atelier libre de 3h, ce projet visait à apprendre à utiliser Fetch. J'ai volontairement choisi de le complexifier avec des données de stations non classiques (CSV) pour générer une interface météo interactive. L’algorithme d’affichage météo est partiellement implémenté.",
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Vite', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'REST API'],
      },
    ],
    tags: ['Météo', 'Fetch', 'CSV', 'React', 'Projet rapide'],
    repoLink: 'https://github.com/tomabadie/weather_app',
    contributions: [
      'Création d’une interface de sélection de station météo',
      'Parsing de fichier CSV avec gestion d’état',
      'Déploiement partiel de l’algorithme météo : à terminer',
    ],
    context: {
      type: 'Atelier libre de 3h',
      solo: true,
    },
    inProgress: true,
  },
  {
    id: 'solar-system',
    name: 'Solar System',
    img: '/assets/img/projects/solar_system.webp',
    shortDescription:
      'Exploration des planètes et satellites via une API Open Data, travail pratique réalisé en quelques heures par deux développeurs en formation.',
    detailedDescription: `Ce projet consistait à intégrer rapidement une API et structurer l'information dans une interface React claire. Réalisé en binôme en une journée, il met en valeur la structuration et l'affichage dynamique de données.`,
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Vite', 'Fetch API', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'REST API'],
      },
    ],
    tags: ['Planètes', 'API', 'React', 'Données spatiales'],
    repoLink: 'https://github.com/tomabadie/solar-system',
    demoLink: 'https://solarsystem-sigma-opal.vercel.app/',
    contributions: [
      'Utilisation de l’API Solar System OpenData',
      'Affichage dynamique avec React',
      'Structuration rapide du projet en binôme',
    ],
    context: {
      type: 'Atelier libre de 3h',
      solo: false,
    },
  },
  {
    id: 'click-dev-revamp',
    name: 'Click dev’ (refonte solo)',
    img: '/assets/img/projects/clickdev_dark.webp',
    shortDescription:
      'Un quiz HTML/CSS/JavaScript entièrement fonctionnel, conçu à l’origine en groupe puis retravaillé en solo pour en améliorer la structure, le design et la propreté du code.',
    detailedDescription:
      "Travail de groupe réalisé après seulement trois semaines de formation. Au sein du projet de groupe, j'avais développé la structure globale, header, footer, le style global, l’algo du quiz et les sets de questions. J’ai ensuite repris le code en solo pour proposer une version plus propre et recentrée sur l’essentiel : la page d’accueil et le quiz. J’ai conservé les parties que j'avais codées, supprimé des parties annexes et simplifié l’ensemble pour obtenir une version fonctionnelle et cohérente.",
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Excalidraw', 'Figma', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile'],
      },
    ],
    tags: ['Quiz', 'Algo', 'Refonte', 'Dark/Light mode', 'Responsive'],
    repoLink: 'https://github.com/tomabadie/click-dev',
    contributions: [
      'Refonte du projet en solo à partir de la version initiale en groupe',
      'Nettoyage du code',
      'Développement du cœur fonctionnel : algorithme du quiz et sélection aléatoire des questions',
      'Création de 8 sets de 50 questions (10 aléatoires à chaque lancement)',
      'Responsive design et accessibilité',
      "Aide à l'implémentation du dark/light mode",
    ],
    context: {
      type: 'Refonte',
      solo: true,
      fromGroupProject: true,
      comment: 'Projet initialement en groupe (4 personnes), retravaillé seul.',
    },
    inProgress: false,
  },
];
