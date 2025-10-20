import type { ProjectProps } from './projectsDataType';

export const projectsDataEn: ProjectProps[] = [
  {
    id: 'taverne',
    name: 'Taverne',
    img: '/assets/img/projects/houbliz.webp',
    shortDescription:
      'Full-stack beer bar management app: beer management, availability tracking, and dynamic menu to simplify daily operations for bar managers.',
    detailedDescription:
      'Personal full-stack project aimed at solving a real-world problem faced by beer bar managers. The application centralizes beer management (full CRUD), formats, availability tracking (in stock/out of stock), and automatically generates an interactive, clear menu for customers. It includes multi-level account management (user, admin, super-admin), a scalable modular architecture, and follows development best practices (strict typing, validation, security). The goal is to provide a professional, user-friendly, and reliable tool that meets real business needs.',
    stack: [
      {
        category: 'language',
        name: 'Languages',
        content: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'framework',
        name: 'Frameworks',
        content: ['React', 'Express', 'Node', 'Tailwind'],
      },
      {
        category: 'database',
        name: 'Databases',
        content: ['MySQL'],
      },
      {
        category: 'library',
        name: 'Libraries',
        content: ['Shadcn', 'Radix', 'TanStack Table', 'React Hook Form', 'Zod'],
      },
      {
        category: 'tool',
        name: 'Tools',
        content: [
          'Monorepo',
          'Vite',
          'ESLint',
          'Prettier',
          'Git',
          'Github',
          'Excalidraw',
          'Sentry',
          'UptimeRobot',
          'Plausible',
          'Cloudflare',
        ],
      },
      {
        category: 'method',
        name: 'Methods',
        content: [
          'Responsive',
          'Accessibility',
          'REST API',
          'CRUD',
          'Strict typing',
          'Validation',
          'Security',
          'Modular architecture',
          'Monitoring & Analytics',
        ],
      },
    ],
    tags: [
      'Full Stack',
      'Menu Management',
      'Beer Bars',
      'CRUD',
      'UI/UX',
      'Data Table',
      'Forms',
      'Scalable',
      'Real-world problem',
      'Production-ready',
    ],
    repoLink: 'https://github.com/tomabadie/',
    demoLink: 'https://houbliz.com',
    contributions: [
      'Design of the overall application architecture (REST backend, React frontend, database)',
      'Complete relational database modeling (beers, formats, bars, users)',
      'Development of the complete management interface: dashboards, advanced filters, CRUD on all entities',
      'Implementation of the dynamic interactive menu for customers (real-time display of available beers)',
      'Availability management system (in stock/out of stock) with real-time updates',
      'Creation of robust and strictly typed forms using React Hook Form and Zod',
      'Structured and filterable data tables with TanStack Table for dashboards',
      'Development of the complete REST API: authentication, secure CRUD, validation middlewares',
      'Multi-level account management system (user, admin, super-admin) with differentiated permissions',
      'Consistent and accessible user interface with Shadcn/ui and Radix UI',
      'Strict ESLint/Prettier configuration in a monorepo to ensure code quality',
      'Security implementation: CSRF protection, rate limiting, validation middlewares, DDoS protection (Cloudflare)',
      'Production deployment with custom domain and DNS configuration (Cloudflare)',
      'Error and performance monitoring (Sentry) and uptime surveillance (UptimeRobot)',
      'Privacy-friendly analytics integration (Plausible Analytics)',
    ],
    context: {
      type: 'Personal project',
      solo: true,
    },
    inProgress: false,
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    img: '/assets/img/projects/portfolio_dark.webp',
    shortDescription:
      'Modern, responsive, minimalist portfolio site showcasing my profile and projects.',
    detailedDescription:
      'Developed entirely solo, this website showcases my skills, background, and projects. I integrated Tailwind and organized a structure of reusable components for a clean, modern, scalable, and accessible design. The site is regularly updated, particularly regarding project and career data, to accurately reflect my ongoing progress.',
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
    inProgress: false,
  },
  {
    id: 'seazn',
    name: 'SeazN',
    img: '/assets/img/projects/seazn.webp',
    shortDescription:
      'Collaborative recipe web app enriched with nutrition, ecology, and cost metrics for a more responsible daily cooking experience.',
    detailedDescription:
      'Full-stack project developed in a team of four developers as part of a bootcamp capstone project. Inspired by traditional recipe websites, this application enhances the user experience with nutritional and environmental scoring, multi-level account management (visitor, subscriber, premium, admin), and personalized features. Built in a monorepo with a modular architecture, the project integrates an Express backend and a React frontend. Although the project is no longer maintained, it provided valuable experience in teamwork, best development practices, and project management.',
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
    repoLink: 'https://github.com/tomabadie/JS-WestDevs-P3-SeazN',
    contributions: [
      'Initiated the concept of the application and defined key features with a user-centered approach',
      'Designed the global wireframe of the application and contributed to the database architecture',
      'Developed four reusable recipe visualization components (cards) adapted to different levels of detail and display contexts',
      'Implemented the complete recipe search page (frontend and backend) with advanced filters, pagination, and performance optimization (debounce, etc.)',
      'Implemented and improved essential features (frontend and backend), including favorites management, user-specific recipes, and database schema enhancements',
      'Performed systematic code reviews (Pull Requests) and continuous debugging to ensure code quality and meet project deadlines',
    ],
    context: {
      type: 'Group project',
      solo: false,
    },
    inProgress: false,
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
      'Group project initiated after only three weeks of training. In the group version, I developed the overall structure, header, footer, global style, quiz algorithm, and all sets of questions. I later took over the codebase on my own to offer a cleaner version focused on the essentials: the homepage and the quiz. I kept the parts I had originally coded, removed some side features, and simplified the whole project to deliver a functional and consistent version.',
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
    inProgress: false,
  },
];
