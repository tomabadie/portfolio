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
  { id: 'responsive', label: 'Responsive design', category: 'method', level: 75 },
  { id: 'accessibility', label: 'Accessibility', category: 'method', level: 60 },
  { id: 'agile', label: 'Agile methods (Scrum)', category: 'method', level: 65 },
  { id: 'tests', label: 'Tests (Mocha & Chai)', category: 'tool', level: 15 },
  { id: 'tdd', label: 'TDD', category: 'method', level: 15 },
  { id: 'api', label: 'REST API', category: 'method', level: 70 },
  { id: 'ci-cd', label: 'CI/CD', category: 'tool', level: 15 },
  { id: 'docker', label: 'Docker', category: 'tool', level: 15 },
];

export const softSkillsDataEN: SoftSkill[] = [
  { id: 'analytical-creative', label: 'Analytical and creative thinking' },
  { id: 'autonomy', label: 'Autonomy' },
  { id: 'organization', label: 'Sense of organization' },
  { id: 'adaptability', label: 'Adaptability' },
  { id: 'teamwork', label: 'Teamwork' },
  { id: 'curiosity', label: 'Curiosity and eagerness to learn' },
  { id: 'problem-anticipation', label: 'Problem anticipation' },
  { id: 'sociability', label: 'Sociability' },
  { id: 'methodical', label: 'Methodical and detail-oriented' },
  { id: 'scientific-culture', label: 'Scientific background' },
  { id: 'multicultural', label: 'Multicultural experiences' },
];

export const languagesDataEN: LanguageLevel[] = [
  { id: 'fr', name: 'French', levelEu: 'C2', levelNumb: 6 },
  { id: 'en', name: 'English', levelEu: 'C1', levelNumb: 5 },
  { id: 'es', name: 'Spanish', levelEu: 'C1', levelNumb: 5 },
  { id: 'pt', name: 'Portuguese', levelEu: 'B1', levelNumb: 3 },
  { id: 'it', name: 'Italian', levelEu: 'A2', levelNumb: 2 },
];
