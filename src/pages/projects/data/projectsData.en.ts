import type { ProjectProps } from './projectsDataType';

export const projectsDataEn: ProjectProps[] = [
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    img: '/assets/img/projects/portfolio_dark.webp',
    shortDescription:
      'Modern, responsive, minimalist portfolio site showcasing my profile and projects.',
    detailedDescription:
      'Developed entirely solo, this site highlights my skills, background, and projects. I used Tailwind and a reusable component structure for a clean, modern, scalable, and accessible result.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Tailwind'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: [
          'Framer Motion',
          'ESLint',
          'Prettier',
          'Vite',
          'Excalidraw',
          'HeadlessUI',
          'Git',
          'Github',
        ],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'REST API'],
      },
    ],
    tags: ['Portfolio', 'Frontend', 'Tailwind', 'Solo project'],
    demoLink: 'https://tomabadie.dev',
    repoLink: 'https://github.com/tomabadie/portfolio',
    contributions: [
      'Modern stack: React, Tailwind, ESLint, Prettier, ...',
      'Clear and modular code architecture for scalability',
      'Minimalist and responsive design',
      'Accessibility focus (keyboard navigation, ARIA roles, etc.) for an inclusive experience',
      'Self-hosted icons to avoid external dependencies and keep full control',
    ],
    context: {
      type: 'Personal project',
      solo: true,
    },
    inProgress: true,
  },
  {
    id: 'seazn',
    name: 'SeazN',
    img: '/assets/img/projects/seazn.webp',
    shortDescription:
      'Collaborative recipe web app enriched with nutrition, ecology, and cost metrics for a more responsible daily cooking experience.',
    detailedDescription:
      'Full-stack project developed by a team of four web developers during our training program. Inspired by classic platforms, this app enhances the user experience with nutritional and environmental ratings, multi-level account access (visitor, free user, premium user, admin), and personalized features. Built to be scalable, it follows a clean monorepo architecture using external APIs and modern technologies.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Express', 'Node'],
      },
      {
        category: 'database',
        name: 'Databases',
        content: ['MySQL'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Monorepo', 'Excalidraw', 'Figma', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile', 'REST API'],
      },
    ],
    tags: ['Full Stack', 'Team Project', 'Recipes', 'Sustainability', 'Nutrition', 'Ecology'],
    repoLink: 'https://github.com/wildcodeschool-2025-03/JS-WestDevs-P3-SeazN',
    contributions: [
      'Defined the concept and features with a user- and product-driven approach',
      'Built a feature prioritization board based on value and implementation difficulty',
      'Collaborated within a 4-person dev team using Git and a monorepo structure',
      'Set up a modular and scalable architecture (Express backend, React + Vite frontend)',
      'Researched and began integrating external APIs for nutrition and environmental data',
    ],
    context: {
      type: 'Group project',
      solo: false,
    },
    inProgress: true,
  },
  {
    id: 'codewarts',
    name: 'CodeWarts',
    img: '/assets/img/projects/codewarts.webp',
    shortDescription: 'Playful quiz prototype with a Harry Potter theme, built in 48 hours.',
    detailedDescription:
      'Built during an internal hackathon, CodeWarts is a fun app to learn coding through themed quizzes inspired by the Harry Potter universe with nods to our instructors. The team delivered a functional MVP in 48 hours, with routing and dynamic quiz display.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Vite', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility'],
      },
    ],
    tags: ['Quiz', 'Hackathon', 'Code', 'Harry Potter', 'Fun'],
    repoLink: 'https://github.com/tomabadie/protojam_codewarts',
    demoLink: 'https://protojam-codewarts.vercel.app/',
    contributions: [
      'Robust technical structure under time pressure',
      'Fully responsive layout',
      'No external libraries used',
      'Dynamic quiz display and filters revealing images as the user progresses',
      "Fixed teammates' code",
    ],
    context: {
      type: 'Hackathon 48h - Group project',
      solo: false,
      comment:
        'Active participation in structure, UX/UI, and game logic. Project built in 48 hours.',
    },
  },
  {
    id: 'savor-safari',
    name: 'Savor Safari',
    img: '/assets/img/projects/savor_safari.webp',
    shortDescription:
      'A culinary world tour with interactive map and recipes linked to each country.',
    detailedDescription:
      'Group project built around the concept of international cooking. The interface is centered on an interactive map that allows users to access country-specific recipes from an external API. I independently handled the map implementation, responsive design, country selection logic, and bug fixing. I also contributed to the initial project idea, the API selection, and the overall UI/UX design.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: [
          'Biome',
          'Monorepo',
          'Vite',
          'Excalidraw',
          'Figma',
          'Fetch API',
          'React Simple Maps',
          'ThemealDB',
          'Git',
          'Github',
        ],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile', 'REST API'],
      },
    ],
    tags: ['Recipes', 'API', 'Interactive map', 'International'],
    repoLink: 'https://github.com/tomabadie/JS-WestDevs-P2-SavorSafari',
    demoLink: 'https://savorsafari.vercel.app/',
    contributions: [
      'Interactive map with react-simple-maps',
      'Dynamic country selection',
      'Optimized mobile UX',
      'Technical support and debugging',
    ],
    context: {
      type: 'Group project',
      solo: false,
      comment: 'Worked on interactive map, mobile responsiveness, and debugging code.',
    },
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    img: '/assets/img/projects/weather_app.webp',
    shortDescription: 'Quick React weather app based on a CSV file of weather stations.',
    detailedDescription:
      'Built solo during a 3-hours open workshop, this project aimed to practice using Fetch. I intentionally made it more complex by choosing non-standard stations data (CSV) to generate an interactive weather interface. The weather display algorithm is partially implemented.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Vite', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'REST API'],
      },
    ],
    tags: ['Weather', 'Fetch', 'CSV', 'React', 'Quick project'],
    repoLink: 'https://github.com/tomabadie/weather_app',
    contributions: [
      'Creation of a weather station selection interface',
      'CSV parsing with state management',
      'Partial implementation of the weather display algorithm (to be completed)',
    ],
    context: {
      type: 'Open workshop 3h',
      solo: true,
    },
    inProgress: true,
  },
  {
    id: 'solar-system',
    name: 'Solar System',
    img: '/assets/img/projects/solar_system.webp',
    shortDescription:
      'Planet and satellite exploration using an Open Data API, built in a few hours by two developers in training.',
    detailedDescription:
      'This project involved quickly integrating an API and organizing information in a clear React interface. Built in a duo in one day, it highlights rapid structuring and dynamic data rendering.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Vite', 'Fetch API', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'REST API'],
      },
    ],
    tags: ['Planets', 'API', 'React', 'Space data'],
    repoLink: 'https://github.com/tomabadie/solar-system',
    demoLink: 'https://solarsystem-sigma-opal.vercel.app/',
    contributions: [
      'Integration of the Solar System OpenData API',
      'Dynamic display using React',
      'Rapid project structuring in a pair programming context',
    ],
    context: {
      type: 'Open workshop 6h',
      solo: false,
    },
  },
  {
    id: 'click-dev-revamp',
    name: 'Click dev’ (solo revamp)',
    img: '/assets/img/projects/clickdev_dark.webp',
    shortDescription:
      'A fully functional HTML/CSS/JavaScript quiz, originally built as a team project then revamped solo to improve structure, design, and code quality.',
    detailedDescription:
      'Group project initiated after only three weeks of training. In the group version, I developed the overall structure, header, footer, global style, quiz algorithm, and all sets of questions. I later took over the codebase on my own to offer a cleaner version focused on the essentials: the homepage and the quiz. I kept the parts I had written, removed two pages and recoded the homepage for a more professional look.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: ['Biome', 'Excalidraw', 'Figma', 'Git', 'Github'],
      },
      {
        category: 'method',
        name: 'Methods',
        content: ['Responsive', 'Accessibility', 'Agile'],
      },
    ],
    tags: ['Quiz', 'Algorithm', 'Revamp', 'Dark/Light mode', 'Responsive'],
    repoLink: 'https://github.com/tomabadie/click-dev',
    contributions: [
      'Solo revamp based on the initial group version',
      'Code cleanup',
      'Development of the core logic: quiz algorithm and random question selection',
      'Creation of 8 sets of 50 questions (10 random used per game)',
      'Responsive design and accessibility',
      'Helped other trainees implement dark/light mode',
    ],
    context: {
      type: 'Revamp',
      solo: true,
      fromGroupProject: true,
      comment: 'Originally a group project (4 people), later reworked solo.',
    },
    inProgress: true,
  },
];
