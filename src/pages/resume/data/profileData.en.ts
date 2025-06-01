import type { LanguageLevel, PersonalityItem, Skill } from './profileDataType';

export const skillsDataEN: Skill[] = [
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
  { id: 'accessibility', label: 'Accessibility', category: 'method' },
  { id: 'agile', label: 'Agile methods (Scrum)', category: 'method' },
  { id: 'tests', label: 'Tests (Mocha & Chai)', category: 'tool' },
  { id: 'tdd', label: 'TDD', category: 'method' },
  { id: 'api', label: 'REST API', category: 'method' },
  { id: 'ci-cd', label: 'CI/CD', category: 'tool' },
  { id: 'docker', label: 'Docker', category: 'tool' },
];

export const personalityDataEN: PersonalityItem[] = [
  { id: 'analytical-creative', label: 'Analytical and creative thinking' },
  { id: 'autonomy', label: 'Autonomy' },
  { id: 'organization', label: 'Sense of organization' },
  { id: 'adaptability', label: 'Adaptability' },
  { id: 'teamwork', label: 'Teamwork' },
  { id: 'curiosity', label: 'Curiosity and eagerness to learn' },
  { id: 'problem-anticipation', label: 'Problem anticipation' },
  { id: 'sociability', label: 'Sociability' },
  { id: 'rigor', label: 'Rigor' },
  { id: 'scientific-culture', label: 'Scientific background' },
  { id: 'multicultural', label: 'Multicultural experiences' },
];

export const languagesDataEN: LanguageLevel[] = [
  { id: 'fr', name: 'French', level: 6 },
  { id: 'en', name: 'English', level: 5 },
  { id: 'es', name: 'Spanish', level: 5 },
  { id: 'pt', name: 'Portuguese', level: 3 },
  { id: 'it', name: 'Italian', level: 2 },
];
