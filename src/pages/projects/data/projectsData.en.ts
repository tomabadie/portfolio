import type { ProjectProps } from './projectsDataType';

export const projectsDataEn: ProjectProps[] = [
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    shortDescription:
      'Modern, responsive, minimalist portfolio site showcasing my profile and projects.',
    detailedDescription:
      'Developed entirely solo, this site highlights my skills, background, and projects. I used Tailwind and a reusable component structure for a clean, modern, scalable, and accessible result.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'Frameworks',
        content: ['React', 'Tailwind'],
      },
      {
        name: 'Tools',
        content: ['ESLint', 'Prettier', 'Vite', 'Headless UI'],
      },
    ],
    tags: ['Portfolio', 'Frontend', 'Tailwind', 'Solo project'],
    repoLink: 'https://github.com/tomabadie/portfolio',
    contributions: [
      'Modern stack: React, Tailwind, ESLint, Prettier, ...',
      'Clear and modular code architecture for scalability',
      'Minimalist and responsive design',
      'Accessibility focus (keyboard navigation, ARIA roles, etc.) for an inclusive experience',
      'Self-hosted icons to avoid external dependencies and keep full control',
    ],
    context: {
      type: 'personal project',
      solo: true,
    },
    inProgress: true,
  },
  {
    id: 'seazn',
    name: 'SeazN',
    shortDescription:
      'Collaborative recipe web app enriched with nutrition, ecology, and cost metrics for a more responsible daily cooking experience.',
    detailedDescription:
      'Full-stack project developed by a team of four web developers during our training program. Inspired by classic platforms, this app enhances the user experience with nutritional and environmental ratings, multi-level account access (visitor, free user, premium user, admin), and personalized features. Built to be scalable, it follows a clean monorepo architecture using external APIs and modern technologies.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        name: 'Frameworks',
        content: ['React', 'Express'],
      },
      {
        name: 'Databases',
        content: ['MySQL'],
      },
      {
        name: 'Tools',
        content: ['Biome', 'Monorepo'],
      },
    ],
    tags: ['Full Stack', 'Team Project', 'Recipes', 'Sustainability', 'Nutrition', 'Ecology'],
    repoLink: '',
    contributions: [
      'Defined the concept and features with a user- and product-driven approach',
      'Built a feature prioritization board based on value and implementation difficulty',
      'Collaborated within a 4-person dev team using Git and a monorepo structure',
      'Set up a modular and scalable architecture (Express backend, React + Vite frontend)',
      'Researched and began integrating external APIs for nutrition and environmental data',
    ],
    context: {
      type: 'final bootcamp project',
      solo: false,
    },
    inProgress: true,
  },
  {
    id: 'codewarts',
    name: 'CodeWarts',
    shortDescription: 'Fun quiz prototype with a Harry Potter theme, built in 48 hours.',
    detailedDescription:
      'Built during an internal hackathon, CodeWarts is a fun app to learn coding through themed quizzes inspired by the Harry Potter universe with nods to our instructors. The team delivered a functional MVP in 48 hours, with routing and dynamic quiz display.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'Frameworks',
        content: ['React'],
      },
      {
        name: 'Tools',
        content: ['Biome', 'Vite'],
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
      type: 'hackathon',
      solo: false,
      comment:
        'Active participation in structure, UX/UI, and game logic. Project built in 48 hours.',
    },
  },
  {
    id: 'savor-safari',
    name: 'Savor Safari',
    shortDescription:
      'A culinary world tour with interactive map and recipes linked to each country.',
    detailedDescription:
      'Group project built around the concept of international cooking. The interface is centered on an interactive map that allows users to access country-specific recipes from an external API. I independently handled the map implementation, responsive design, country selection logic, and bug fixing. I also contributed to the initial project idea, the API selection, and the overall UI/UX design.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'Frameworks',
        content: ['React'],
      },
      {
        name: 'Tools',
        content: ['Biome', 'Monorepo', 'Fetch API', 'React Simple Maps', 'ThemealDB', 'Vite'],
      },
    ],
    tags: ['Recipes', 'API', 'Interactive map', 'International'],
    repoLink: 'https://github.com/tomabadie/JS-WestDevs-P2-SavorSafari',
    contributions: [
      'Interactive map with react-simple-maps',
      'Dynamic country selection',
      'Optimized mobile UX',
      'Technical support and debugging',
    ],
    context: {
      type: 'group project',
      solo: false,
      comment: 'Worked on interactive map, mobile responsiveness, and debugging code.',
    },
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    shortDescription: 'Quick React weather app based on a CSV file of weather stations.',
    detailedDescription:
      'Built solo during a 3-hours open workshop, this project aimed to practice using Fetch. I intentionally made it more complex by choosing non-standard stations data (CSV) to generate an interactive weather interface. The weather display algorithm is partially implemented.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'Frameworks',
        content: ['React'],
      },
      {
        name: 'Tools',
        content: ['Biome', 'Vite'],
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
      type: 'open workshop',
      solo: true,
    },
    inProgress: true,
  },
  {
    id: 'solar-system',
    name: 'Solar System',
    shortDescription:
      'Planet and satellite exploration using an Open Data API, built in a few hours by two developers in training.',
    detailedDescription:
      'This project involved quickly integrating an API and organizing information in a clear React interface. Built in a duo in one day, it highlights rapid structuring and dynamic data rendering.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'Frameworks',
        content: ['React'],
      },
      {
        name: 'Tools',
        content: ['Biome', 'Vite', 'Fetch API'],
      },
    ],
    tags: ['Planets', 'API', 'React', 'Space data'],
    repoLink: 'https://github.com/tomabadie/solar-system',
    contributions: [
      'Integration of the Solar System OpenData API',
      'Dynamic display using React',
      'Rapid project structuring in a pair programming context',
    ],
    context: {
      type: 'educational exercise',
      solo: false,
    },
  },
  {
    id: 'click-dev-revamp',
    name: 'Click dev’ (solo revamp)',
    shortDescription:
      'A fully functional HTML/CSS/JavaScript quiz, originally built as a team project then revamped solo to improve structure, design, and code quality.',
    detailedDescription:
      'Group project initiated after only three weeks of training. In the group version, I developed the overall structure, header, footer, global style, quiz algorithm, and all sets of questions. I later took over the codebase on my own to offer a cleaner version focused on the essentials: the homepage and the quiz. I kept the parts I had written, removed two pages, cleaned up the styling, and recoded the homepage for a more professional look.',
    stack: [
      {
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: 'Tools',
        content: ['Biome'],
      },
    ],
    tags: ['Quiz', 'Algorithm', 'Revamp', 'Dark/Light mode', 'Responsive'],
    repoLink: 'https://github.com/tonpseudo/click-dev-refonte',
    demoLink: 'https://click-dev-refonte.vercel.app',
    contributions: [
      'Complete solo revamp based on the initial group version',
      'Code cleanup',
      'Development of the core logic: quiz algorithm and random question selection',
      'Creation of 8 sets of 50 questions (10 random used per game)',
      'Responsive design and accessibility',
      'Helped other trainees implement dark/light mode',
    ],
    context: {
      type: 'revamp',
      solo: true,
      fromGroupProject: true,
      comment: 'Originally a group project (4 people), later reworked solo.',
    },
    inProgress: true,
  },
];
