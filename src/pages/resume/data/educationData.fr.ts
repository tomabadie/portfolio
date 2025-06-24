import type { TimelineItem } from './timelineDataType';

export const educationDataFR: TimelineItem[] = [
  {
    id: 'codecademy-wcs-2025',
    type: 'formation',
    company: 'Wild Code School & Codecademy',
    link: 'https://www.wildcodeschool.com/',
    position: 'Développeur full-stack',
    location: 'Remote',
    startDate: '2025/01',
    endDate: '2025/08',
    duration: '5 mois',
    context:
      'Parcours hybride de formation combinant autoformation sur Codecademy et bootcamp intensif à la Wild Code School.',
    description:
      'Approfondissement des compétences web front-end et back-end à travers des cours guidés, des projets réels, du travail en équipe et des projets personnels.',
    achievements: [
      'Création d’applications avec logique métier complexe',
      'Utilisation de React, TypeScript, Tailwind',
      'Développement d’API REST avec Express et bases de données SQL',
    ],
    stack: [
      {
        category: 'language',
        name: 'Langages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Express', 'TailwindCSS'],
      },
      {
        category: 'database',
        name: 'Bases de données',
        content: ['MySQL'],
      },
      {
        category: 'tool',
        name: 'Outils',
        content: ['Git', 'GitHub', 'Excalidraw', 'Figma', 'Trello', 'Motion'],
      },
      {
        category: 'method',
        name: 'Méthodes',
        content: ['Responsive', 'Accessibility', 'Agile', 'REST API'],
      },
    ],
    keywords: [
      'développement web',
      'front end',
      'back end',
      'full-stack',
      'bootcamp',
      'React',
      'Express',
      'autonomie',
      'projets web',
    ],
  },
  {
    id: 'bilan-competences-2024',
    type: 'formation',
    company: 'Bilan de compétences',
    link: 'https://www.evolutis-landes.fr/',
    position: 'Réorientation vers le développement web',
    location: 'France',
    startDate: '2024/06',
    endDate: '2024/06',
    context:
      'Démarche d’analyse de compétences et d’objectifs professionnels ayant conduit à une reconversion vers les métiers du développement web.',
    description:
      'Travail sur les motivations, les aptitudes, les besoins d’apprentissage et l’adéquation avec les métiers numériques. Résultat : un projet professionnel clair et structuré.',
    achievements: [
      'Clarification du projet de reconversion',
      'Évaluation des compétences transférables',
      'Validation du choix de formation en développement web',
    ],
    keywords: ['bilan de compétences', 'réorientation', 'reconversion', 'numérique'],
  },
  {
    id: 'polytech-2013',
    type: 'formation',
    company: 'Polytech Grenoble',
    link: 'https://www.polytech-grenoble.fr/',
    position: 'Diplôme d’ingénieur en Matériaux',
    location: 'Grenoble, France',
    startDate: '2013/09',
    endDate: '2013/09',
    duration: '5 ans',
    context:
      'Spécialité Matériaux de Polytech Grenoble - INP, UGA, formant des ingénieurs généralistes en science et génie des matériaux, capables d’appréhender les différentes familles de matériaux et leurs procédés de mise en œuvre.',
    description:
      'Formation scientifique pluridisciplinaire basée sur la thermodynamique, la cristallochimie, la mécanique, la physique, la chimie et l’électrochimie, appliquée aux matériaux métalliques, polymères, céramiques, composites, semi-conducteurs et bio-matériaux. L’objectif est de former des ingénieurs capables de sélectionner, caractériser et mettre en œuvre les matériaux les plus adaptés selon leur usage, en tenant compte des normes de qualité et des enjeux industriels ou environnementaux.',
    achievements: [
      'Maîtrise des propriétés et procédés des matériaux (élaboration, caractérisation, sélection)',
      'Projets d’application en lien avec l’industrie',
      'Stages dans un environnement industriel',
    ],
    stack: [
      {
        category: 'tool',
        name: 'Outils',
        content: ['Matlab', 'SolidWorks', 'Catia', 'Ansys'],
      },
    ],
    keywords: [
      'matériaux',
      'ingénieur',
      'céramiques',
      'polymères',
      'composites',
      'caractérisation',
      'innovation',
      'sciences appliquées',
      'procédés',
    ],
  },
];
