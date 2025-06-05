import type { HardSkill, LanguageLevel, SoftSkill } from './profileDataType';

export const skillsDataEN: HardSkill[] = [
  { id: 'html', label: 'HTML', category: 'language', level: 90 },
  { id: 'css', label: 'CSS', category: 'language', level: 75 },
  { id: 'javascript', label: 'JavaScript', category: 'language', level: 75 },
  { id: 'typescript', label: 'TypeScript', category: 'language', level: 65 },
  { id: 'react', label: 'React', category: 'framework', level: 70 },
  { id: 'tailwind', label: 'TailwindCSS', category: 'framework', level: 70 },
  { id: 'node', label: 'Node.js', category: 'framework', level: 65 },
  { id: 'express', label: 'Express.js', category: 'framework', level: 65 },
  { id: 'mysql', label: 'MySQL', category: 'tool', level: 60 },
  { id: 'git', label: 'Git', category: 'tool', level: 85 },
  { id: 'github', label: 'GitHub', category: 'tool', level: 85 },
  { id: 'responsive', label: 'Responsive', category: 'method', level: 75 },
  { id: 'accessibility', label: 'Accessibility', category: 'method', level: 60 },
  { id: 'agile', label: 'Agile', category: 'method', level: 65 },
  { id: 'tests', label: 'Mocha - Chai', category: 'tool', level: 15 },
  { id: 'tdd', label: 'TDD', category: 'method', level: 15 },
  { id: 'api', label: 'REST API', category: 'method', level: 70 },
  { id: 'ci-cd', label: 'CI/CD', category: 'tool', level: 15 },
  { id: 'docker', label: 'Docker', category: 'tool', level: 15 },
];

export const softSkillsDataEN: SoftSkill[] = [
  { id: 'analytical-creative', label: 'Analytical and creative thinking', long: true },
  { id: 'autonomy', label: 'Autonomy', long: false },
  { id: 'organization', label: 'Sense of organization', long: false },
  { id: 'adaptability', label: 'Adaptability', long: false },
  { id: 'teamwork', label: 'Teamwork', long: false },
  { id: 'curiosity', label: 'Curiosity', long: false },
  { id: 'problem-anticipation', label: 'Problem anticipation', long: false },
  { id: 'sociability', label: 'Sociability', long: false },
  { id: 'methodical', label: 'Methodical', long: false },
  { id: 'detail-oriented', label: 'Detail-oriented', long: false },
  { id: 'scientific-culture', label: 'Scientific background', long: false },
  { id: 'multicultural', label: 'Multicultural experiences', long: true },
];

export const languagesDataEN: LanguageLevel[] = [
  { id: 'fr', name: 'French', levelEu: 'C2', levelNumb: 6 },
  { id: 'en', name: 'English', levelEu: 'C1', levelNumb: 5 },
  { id: 'es', name: 'Spanish', levelEu: 'C1', levelNumb: 5 },
  { id: 'pt', name: 'Portuguese', levelEu: 'B1', levelNumb: 3 },
  { id: 'it', name: 'Italian', levelEu: 'A2', levelNumb: 2 },
];
