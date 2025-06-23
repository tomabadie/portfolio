import type { HardSkill, LanguageLevel, SoftSkill } from './profileDataType';
export const skillsDataFR: HardSkill[] = [
  { id: 'html', label: 'HTML', category: 'language' },
  { id: 'css', label: 'CSS', category: 'language' },
  { id: 'javascript', label: 'JavaScript', category: 'language' },
  { id: 'typescript', label: 'TypeScript', category: 'language' },

  { id: 'react', label: 'React', category: 'framework' },
  { id: 'tailwind', label: 'TailwindCSS', category: 'framework' },
  { id: 'node', label: 'Node', category: 'framework' },
  { id: 'express', label: 'Express', category: 'framework' },

  { id: 'mysql', label: 'MySQL', category: 'database' },

  { id: 'git', label: 'Git', category: 'tool' },
  { id: 'github', label: 'GitHub', category: 'tool' },
  { id: 'framer motion', label: 'Framer Motion', category: 'tool' },
  { id: 'tests', label: 'Mocha - Chai', category: 'tool' },
  { id: 'docker', label: 'Docker', category: 'tool' },
  { id: 'monorepo', label: 'Monorepo', category: 'tool' },

  { id: 'responsive', label: 'Responsive', category: 'method' },
  { id: 'accessibility', label: 'Accessibilité', category: 'method' },
  { id: 'agile', label: 'Agile', category: 'method' },
  { id: 'tdd', label: 'TDD', category: 'method' },
  { id: 'rest api', label: 'REST API', category: 'method' },
  { id: 'ci-cd', label: 'CI/CD', category: 'method' },
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
