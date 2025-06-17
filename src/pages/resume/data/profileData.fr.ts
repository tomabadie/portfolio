import type { HardSkill, LanguageLevel, SoftSkill } from './profileDataType';
export const skillsDataFR: HardSkill[] = [
  { id: 'html', label: 'HTML', category: 'language', level: 90 },
  { id: 'css', label: 'CSS', category: 'language', level: 75 },
  { id: 'javascript', label: 'JavaScript', category: 'language', level: 75 },
  { id: 'typescript', label: 'TypeScript', category: 'language', level: 65 },

  { id: 'react', label: 'React', category: 'framework', level: 70 },
  { id: 'tailwind', label: 'TailwindCSS', category: 'framework', level: 70 },
  { id: 'node', label: 'Node.js', category: 'framework', level: 65 },
  { id: 'express', label: 'Express.js', category: 'framework', level: 65 },

  { id: 'mysql', label: 'MySQL', category: 'database', level: 60 },

  { id: 'git', label: 'Git', category: 'tool', level: 85 },
  { id: 'github', label: 'GitHub', category: 'tool', level: 85 },
  { id: 'framer-motion', label: 'Framer Motion', category: 'tool', level: 50 },
  { id: 'tests', label: 'Mocha - Chai', category: 'tool', level: 15 },
  { id: 'docker', label: 'Docker', category: 'tool', level: 15 },

  { id: 'responsive', label: 'Responsive', category: 'method', level: 75 },
  { id: 'accessibility', label: 'Accessibilité', category: 'method', level: 60 },
  { id: 'agile', label: 'Agile', category: 'method', level: 65 },
  { id: 'tdd', label: 'TDD', category: 'method', level: 15 },
  { id: 'api', label: 'API REST', category: 'method', level: 70 },
  { id: 'ci-cd', label: 'CI/CD', category: 'method', level: 15 },
];

export const softSkillsDataFR: SoftSkill[] = [
  { id: 'analytical-creative', label: 'Pensée analytique et créative', long: true },
  { id: 'autonomy', label: 'Autonomie', long: false },
  { id: 'organization', label: 'Sens de l’organisation', long: false },
  { id: 'adaptability', label: 'Capacité d’adaptation', long: false },
  { id: 'teamwork', label: 'Travail en équipe', long: false },
  { id: 'curiosity', label: 'Curiosité', long: false },
  { id: 'problem-anticipation', label: 'Anticipation des problèmes', long: true },
  { id: 'sociability', label: 'Sociabilité', long: false },
  { id: 'methodical', label: 'Méthodique', long: false },
  { id: 'detail-oriented', label: 'Sens du détail', long: false },
  { id: 'scientific-culture', label: 'Culture scientifique', long: false },
  { id: 'multicultural', label: 'Expériences multiculturelles', long: true },
];

export const languagesDataFR: LanguageLevel[] = [
  { id: 'fr', name: 'Français', levelEu: 'C2', levelNumb: 6 },
  { id: 'en', name: 'Anglais', levelEu: 'C1', levelNumb: 5 },
  { id: 'es', name: 'Espagnol', levelEu: 'C1', levelNumb: 5 },
  { id: 'pt', name: 'Portugais', levelEu: 'B1', levelNumb: 3 },
  { id: 'it', name: 'Italien', levelEu: 'A2', levelNumb: 2 },
];
