import type { HardSkill, LanguageLevel, SoftSkill } from './profileDataType';

export const skillsDataFR: HardSkill[] = [
  { id: 'html', label: 'HTML', category: 'language' },
  { id: 'css', label: 'CSS', category: 'language' },
  { id: 'javascript', label: 'JavaScript', category: 'language' },
  { id: 'typescript', label: 'TypeScript', category: 'language' },
  { id: 'react', label: 'React', category: 'framework' },
  { id: 'tailwind', label: 'TailwindCSS', category: 'framework' },
  { id: 'node', label: 'Node.js', category: 'framework' },
  { id: 'express', label: 'Express.js', category: 'framework' },
  { id: 'mysql', label: 'MySQL', category: 'tool' },
  { id: 'git', label: 'Git', category: 'tool' },
  { id: 'github', label: 'GitHub', category: 'tool' },
  { id: 'responsive', label: 'Responsive design', category: 'method' },
  { id: 'accessibility', label: 'Accessibilité', category: 'method' },
  { id: 'agile', label: 'Méthodes agiles (Scrum)', category: 'method' },
  { id: 'tests', label: 'Tests (Mocha & Chai)', category: 'tool' },
  { id: 'tdd', label: 'TDD', category: 'method' },
  { id: 'api', label: 'API REST', category: 'method' },
  { id: 'ci-cd', label: 'CI/CD', category: 'tool' },
  { id: 'docker', label: 'Docker', category: 'tool' },
];

export const softSkillsDataFR: SoftSkill[] = [
  { id: 'analytical-creative', label: 'Pensée analytique et créative' },
  { id: 'autonomy', label: 'Autonomie' },
  { id: 'organization', label: 'Sens de l’organisation' },
  { id: 'adaptability', label: 'Capacité d’adaptation' },
  { id: 'teamwork', label: 'Travail en équipe' },
  { id: 'curiosity', label: 'Curiosité et soif d’apprentissage' },
  { id: 'problem-anticipation', label: 'Anticipation des problèmes' },
  { id: 'sociability', label: 'Sociabilité' },
  { id: 'methodical', label: 'Méthodique et sens du détail' },
  { id: 'scientific-culture', label: 'Culture scientifique' },
  { id: 'multicultural', label: 'Expériences multiculturelles' },
];

export const languagesDataFR: LanguageLevel[] = [
  { id: 'fr', name: 'Français', levelEu: 'C2', levelNumb: 6 },
  { id: 'en', name: 'Anglais', levelEu: 'C1', levelNumb: 5 },
  { id: 'es', name: 'Espagnol', levelEu: 'C1', levelNumb: 5 },
  { id: 'pt', name: 'Portugais', levelEu: 'B1', levelNumb: 3 },
  { id: 'it', name: 'Italien', levelEu: 'A2', levelNumb: 2 },
];
