import type { HardSkill, LanguageLevel, SoftSkill } from './profileDataType';

export const skillsDataEN: HardSkill[] = [
  { id: 'html', label: 'HTML', category: 'language' },
  { id: 'css', label: 'CSS', category: 'language' },
  { id: 'javascript', label: 'JavaScript', category: 'language' },
  { id: 'typescript', label: 'TypeScript', category: 'language' },

  { id: 'react', label: 'React', category: 'framework' },
  { id: 'tailwind', label: 'TailwindCSS', category: 'framework' },
  { id: 'node', label: 'Node', category: 'framework' },
  { id: 'express', label: 'Express', category: 'framework' },

  { id: 'mysql', label: 'MySQL', category: 'database' },

  { id: 'shadcn', label: 'Shadcn', category: 'library' },
  { id: 'radix', label: 'Radix', category: 'library' },
  { id: 'tanstack table', label: 'TanStack Table', category: 'library' },
  { id: 'react hook form', label: 'React Hook Form', category: 'library' },
  { id: 'zod', label: 'Zod', category: 'library' },

  { id: 'git', label: 'Git', category: 'tool' },
  { id: 'github', label: 'GitHub', category: 'tool' },
  { id: 'framer motion', label: 'Framer Motion', category: 'tool' },
  { id: 'tests', label: 'Mocha - Chai', category: 'tool' },
  { id: 'docker', label: 'Docker', category: 'tool' },
  { id: 'monorepo', label: 'Monorepo', category: 'tool' },

  { id: 'responsive', label: 'Responsive', category: 'method' },
  { id: 'accessibility', label: 'Accessibility', category: 'method' },
  { id: 'agile', label: 'Agile', category: 'method' },
  { id: 'tdd', label: 'TDD', category: 'method' },
  { id: 'rest api', label: 'REST API', category: 'method' },
  { id: 'ci/cd', label: 'CI/CD', category: 'method' },
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
