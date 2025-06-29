import type { TimelineItem } from './timelineDataType';

export const educationDataEN: TimelineItem[] = [
  {
    id: 'codecademy-wcs-2025',
    type: 'training',
    company: 'Wild Code School & Codecademy',
    link: 'https://www.wildcodeschool.com/',
    position: 'Full-Stack Web Developer',
    location: 'Remote',
    startDate: '2025/01',
    endDate: '2025/08',
    duration: '5 months',
    context:
      'Hybrid training combining self-paced learning on Codecademy and an intensive bootcamp at Wild Code School.',
    description:
      'In-depth learning of front-end and back-end web development through guided courses, real-world projects, teamwork, and personal projects.',
    achievements: [
      'Built applications with complex business logic',
      'Used React, TypeScript, and Tailwind',
      'Developed REST APIs with Express and SQL databases',
    ],
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Express', 'TailwindCSS'],
      },
      {
        category: 'database',
        name: 'Databases',
        content: ['MySQL'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Git', 'GitHub', 'Excalidraw', 'Figma', 'Trello', 'Motion'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile', 'REST API'],
      },
    ],
    keywords: [
      'web development',
      'front end',
      'back end',
      'full-stack',
      'bootcamp',
      'React',
      'Express',
      'self-learning',
      'web projects',
    ],
  },
  {
    id: 'bilan-competences-2024',
    type: 'training',
    company: 'Career Assessment',
    link: 'https://www.evolutis-landes.fr/',
    position: 'Career shift to web development',
    location: 'France',
    startDate: '2024/06',
    endDate: '2024/06',
    context:
      'A reflective process to assess skills and career goals, leading to a professional transition into web development.',
    description:
      'Exploration of motivations, transferable skills, learning needs, and compatibility with digital careers. Result: A clear, structured professional project.',
    achievements: [
      'Clarification of career goals',
      'Evaluation of transferable skills',
      'Validation of the decision to train in web development',
    ],
    keywords: ['career assessment', 'career change', 'reskilling', 'digital'],
  },
  {
    id: 'polytech-2013',
    type: 'training',
    company: 'Polytech Grenoble',
    link: 'https://www.polytech-grenoble.fr/',
    position: 'Engineering Degree in Materials Science',
    location: 'Grenoble, France',
    startDate: '2013/09',
    endDate: '2013/09',
    duration: '5 years',
    context:
      'Materials specialization at Polytech Grenoble - INP, UGA, training generalist engineers with a specialization in materials science, with the ability to work on all types of materials and their manufacturing processes.',
    description:
      'A multidisciplinary scientific program covering thermodynamics, crystallochemistry, mechanics, physics, chemistry, and electrochemistry, applied to metals, polymers, ceramics, composites, semiconductors, and biomaterials. The goal is to train engineers capable of selecting, characterizing, and implementing the most suitable materials based on usage, quality standards, and industrial or environmental requirements.',
    achievements: [
      'Mastery of materials properties and processing (design, characterization, selection)',
      'Team-based applied projects in collaboration with industry',
      'Internships in industrial environments',
    ],
    stack: [
      {
        category: 'tool',
        name: 'Tools',
        content: ['Matlab', 'SolidWorks', 'Catia', 'Ansys'],
      },
    ],
    keywords: [
      'materials',
      'engineering',
      'ceramics',
      'polymers',
      'composites',
      'characterization',
      'innovation',
      'applied sciences',
      'processes',
    ],
  },
];
