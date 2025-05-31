import type { ProjectProps } from './projectsDataType';

export const projectsDataFR: ProjectProps[] = [
  {
    id: 'click-dev-refonte',
    title: 'Click dev’ (refonte solo)',
    shortDescription:
      'Un quiz HTML/CSS/JavaScript entièrement fonctionnel, conçu à l’origine en groupe puis refondu en solo pour en améliorer la structure, le design et la propreté du code.',
    detailedDescription: `Ce projet de quiz web est né d’un travail de groupe réalisé après seulement 3 semaines de formation. J’ai initialement développé la structure globale, l’algo du quiz, les 8 sets de questions sur 4 thèmes et 2 niveaux de difficulté, ainsi que le dark/light mode. 
J’ai ensuite repris l’ensemble du code en solo pour proposer une version plus propre, plus cohérente et recentrée sur l’essentiel : la page d’accueil et le quiz. J’ai restructuré les dossiers, revu le responsive, nettoyé le style et recodé certaines parties pour un rendu professionnel.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Biome'],
    tags: ['Quiz', 'Algo', 'Refonte', 'Dark/Light mode', 'Responsive'],
    repoLink: 'https://github.com/tonpseudo/click-dev-refonte',
    demoLink: 'https://click-dev-refonte.vercel.app',
    contributions: [
      'Reprise intégrale du projet en solo à partir de la version initiale en groupe',
      'Nettoyage du code, refonte du design et restructuration des fichiers',
      'Développement du cœur fonctionnel : algorithme du quiz et sélection aléatoire',
      'Création de 8 sets de 50 questions (dont 10 utilisées à chaque session)',
      'Implémentation du dark/light mode, responsive design et accessibilité',
    ],
    context: {
      type: 'refonte',
      solo: true,
      fromGroupProject: true,
      comment: 'Projet initialement en groupe (4 personnes), retravaillé seul.',
    },
  },
  {
    id: 'solar-system',
    title: 'Solar System',
    shortDescription:
      'Exploration des planètes et satellites via une API Open Data, projet réalisé en 24h à deux.',
    detailedDescription: `Ce projet consistait à intégrer rapidement une API et structurer l'information dans une interface React claire. Réalisé en binôme en 24h, il met en valeur la réactivité, la structuration et l'affichage dynamique de données complexes.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Biome', 'Fetch API'],
    tags: ['Planètes', 'API', 'React', 'Données spatiales'],
    repoLink: 'https://github.com/tomabadie/solar-system',
    contributions: [
      'Utilisation de l’API Solar System OpenData',
      'Affichage dynamique avec React',
      'Structuration rapide du projet en binôme',
    ],
    context: {
      type: 'exercice pédagogique',
      solo: false,
    },
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    shortDescription:
      'Application météo rapide en React à partir d’un fichier CSV de stations météo.',
    detailedDescription:
      'Réalisé en autonomie pendant un atelier libre de 3h, ce projet visait à utiliser Fetch avec des données non classiques (CSV) pour générer une interface météo interactive. L’algorithme d’affichage météo est partiellement implémenté.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Biome'],
    tags: ['Météo', 'Fetch', 'CSV', 'React', 'Projet rapide'],
    repoLink: 'https://github.com/tomabadie/weather_app',
    contributions: [
      'Création d’une interface de sélection de station météo',
      'Parsing de fichier CSV avec gestion d’état',
      'Déploiement partiel de l’algorithme météo',
    ],
    context: {
      type: 'atelier libre',
      solo: true,
    },
  },
  {
    id: 'savor-safari',
    title: 'Savor Safari',
    shortDescription:
      'Tour du monde culinaire avec carte interactive et recettes liées à chaque pays.',
    detailedDescription:
      'Application de groupe réalisée en 4 semaines autour d’un concept de cuisine internationale. L’interface est centrée sur une carte interactive permettant d’accéder à des recettes par pays, issues d’une API externe. J’ai pris en charge la carte, le responsive mobile, la sélection de pays et la résolution de bugs.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Biome',
      'Monorepo',
      'Fetch API',
      'React Simple Maps',
      'ThemealDB',
    ],
    tags: ['Recettes', 'API', 'Carte interactive', 'International'],
    repoLink: 'https://github.com/tomabadie/JS-WestDevs-P2-SavorSafari',
    contributions: [
      'Carte interactive avec react-simple-maps',
      'Sélection dynamique par pays',
      'UX mobile optimisée',
      'Support technique et débogage',
    ],
    context: {
      type: 'projet de groupe',
      solo: false,
      comment:
        "Travail sur la carte interactive, le responsive mobile et le debug. Code partiellement écrit par d'autres membres.",
    },
  },
  {
    id: 'codewarts',
    title: 'CodeWarts',
    shortDescription:
      'Prototype ludique de quiz autour de la thématique Harry Potter, réalisé en 48h.',
    detailedDescription:
      'Conçu lors d’un hackathon interne à la promo, CodeWarts est une application fun pour apprendre à coder en répondant à des quiz dans un univers inspiré d’Harry Potter. L’équipe de 4 a livré un MVP fonctionnel en 48h avec routes, filtres, et affichage dynamique.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Biome'],
    tags: ['Quiz', 'Hackathon', 'Code', 'Harry Potter', 'Fun'],
    repoLink: 'https://github.com/tomabadie/protojam_codewarts',
    demoLink: 'https://protojam-codewarts.vercel.app/',
    contributions: [
      'Structure technique solide dans un temps contraint',
      'Responsive complet sans bibliothèque',
      'Affichage dynamique des quiz et filtres',
      'Correction du code de collègues',
    ],
    context: {
      type: 'hackathon',
      solo: false,
      comment:
        'Participation active à la structure, à l’UI et à la logique de jeu. Projet réalisé en 48h.',
    },
  },
  {
    id: 'portfolio',
    title: 'Portfolio personnel',
    shortDescription:
      'Site portfolio moderne, responsive et minimaliste pour valoriser mon profil et mes projets.',
    detailedDescription:
      'Développé entièrement en solo, ce site met en avant mes compétences, mon parcours et mes projets. J’y ai intégré Headless UI, Tailwind et une structure de composants réutilisables pour un rendu clair, moderne et accessible.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind',
      'ESLint',
      'Prettier',
      'Headless UI',
    ],
    tags: ['Portfolio', 'Frontend', 'Tailwind', 'Projet solo'],
    repoLink: 'https://github.com/tomabadie/portfolio',
    contributions: [
      'Stack moderne : Tailwind, ESLint, Prettier',
      'Architecture de code claire et modulaire',
      'Design responsive et minimaliste',
      'Intégration de composants Headless UI',
    ],
    context: {
      type: 'projet personnel',
      solo: true,
    },
  },
];
