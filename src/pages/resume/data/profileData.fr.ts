import type { LanguageLevel, PersonalityItem, Skill } from './profileDataType';

export const skillsDataFR: Skill[] = [
  { id: 'html', label: 'HTML', category: 'language' },
  { id: 'css', label: 'CSS', category: 'language' },
  { id: 'javascript', label: 'JavaScript', category: 'language' },
  { id: 'typescript', label: 'TypeScript', category: 'language' },
  { id: 'react', label: 'React', category: 'framework' },
  { id: 'tailwind', label: 'TailwindCSS', category: 'framework' },
  { id: 'node', label: 'Node.js', category: 'framework' },
  { id: 'express', label: 'Express.js', category: 'framework' },
  { id: 'mysql', label: 'MySQL', category: 'tool' },
  { id: 'git', label: 'Git / GitHub', category: 'tool' },
  { id: 'responsive', label: 'Responsive design', category: 'method' },
  { id: 'accessibility', label: 'Accessibilité', category: 'method' },
  { id: 'agile', label: 'Méthodes agiles (Scrum)', category: 'method' },
  { id: 'tests', label: 'Tests (Mocha & Chai)', category: 'tool' },
  { id: 'tdd', label: 'TDD', category: 'method' },
  { id: 'api', label: 'API REST', category: 'method' },
  { id: 'ci-cd', label: 'CI/CD', category: 'tool' },
  { id: 'docker', label: 'Docker', category: 'tool' },
];

export const personalityDataFR: PersonalityItem[] = [
  { id: 'analytical-creative', label: 'Pensée analytique et créative' },
  { id: 'autonomy', label: 'Autonomie' },
  { id: 'organization', label: 'Sens de l’organisation' },
  { id: 'adaptability', label: 'Capacité d’adaptation' },
  { id: 'teamwork', label: 'Travail en équipe' },
  { id: 'curiosity', label: 'Curiosité et soif d’apprentissage' },
  { id: 'problem-anticipation', label: 'Anticipation des problèmes' },
  { id: 'sociability', label: 'Sociabilité' },
  { id: 'rigor', label: 'Rigueur' },
  { id: 'scientific-culture', label: 'Culture scientifique' },
  { id: 'multicultural', label: 'Expériences multiculturelles' },
];

export const languagesDataFR: LanguageLevel[] = [
  { id: 'fr', name: 'Français', level: 6 },
  { id: 'en', name: 'Anglais', level: 5 },
  { id: 'es', name: 'Espagnol', level: 5 },
  { id: 'pt', name: 'Portugais', level: 3 },
  { id: 'it', name: 'Italien', level: 2 },
];
