// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rromero09',
  },
  base: '/portfolio/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: ['rromero09/scheduler', 'rromero09/portfolio'],
      },
    },
    external: {
      header: 'Projects',
      projects: [
        {
          title: 'Analytics ETL Pipeline',
          description:
            'Automated ETL pipeline using Python (FastAPI), PostgreSQL, and Square POS API to extract, transform, and load sales data from 3 business locations into AWS RDS for Looker analytics. Processes 3,000+ transactions/month.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/rromero09',
        },
        {
          title: 'Staff Scheduling System',
          description:
            'Scheduling platform using Python (FastAPI), MongoDB, AWS EC2, Docker and Google Sheets API. Automated worker notifications via email with .ics file generation for calendar integration.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/rromero09/scheduler',
        },
      ],
    },
  },
  aboutMe:
    "I'm a Computer Science graduate from Northeastern Illinois University with a focus on backend development, data engineering, and cloud infrastructure. I specialize in building data pipelines, REST APIs, dashboards, and automating processes. I have hands-on experience with CI/CD pipelines, Docker, and cloud deployments. Outside tech, I keep myself together through beach volleyball, hikes, and exploring new tools that make life (and work) more efficient.",
  seo: {
    title: 'Rafael Romero - Software Developer',
    description:
      'Software Developer specializing in backend development, data engineering, and cloud infrastructure. Building ETL pipelines, REST APIs, and automation tools.',
    imageURL: '',
  },
  social: {
    linkedin: 'rafaelrr',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://rromero09.github.io/portfolio/',
    phone: '',
    email: 'rafael.rromero.dev@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1eUkRBavEGW7cvDwuD43r-03Rg6KTMCjuzaTRT7Qr4_I/export?format=pdf',
  },
  skills: [
    'Python',
    'Java',
    'SQL',
    'NoSQL',
    'FastAPI',
    'Flask',
    'Django',
    'Spring Boot',
    'PostgreSQL',
    'AWS',
    'Azure',
    'GCP',
    'Docker',
    'Git',
    'GitHub Actions',
    'CI/CD',
    'REST APIs',
    'DAGs',
    'Tableau',
    'Plotly',
    'Excel',
    'Power Query',
    'Agile',
  ],
  experiences: [
    {
      company: 'SemiAnalysis',
      position: 'Data Engineer Intern',
      from: 'February 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'The Bakehouse Chicago',
      position: 'Software & Analytics Contributor',
      from: 'June 2023',
      to: 'January 2026',
      companyLink: '',
    },
    {
      company: 'NEIU Student Media Board',
      position: 'Web Developer Intern',
      from: 'July 2024',
      to: 'December 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Advanced Python Development Techniques',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'Google Analytics Professional Certificate',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'AWS Cloud Essentials',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Northeastern Illinois University',
      degree: 'B.S., Computer Science',
      from: '2023',
      to: '2025',
    },
  ],
  publications: [],
  books: [
    {
      title: 'Fundamentals of Data Engineering: Plan and Build Robust Data Systems',
      author: 'Joe Reis & Matt Housley',
      status: 'reading' as const,
    },
    {
      title: '1984',
      author: 'George Orwell',
      status: 'reading' as const,
    },
    {
      title: 'The Plague',
      author: 'Albert Camus',
      status: 'reading' as const,
    },
    {
      title: 'Algorithms Illuminated: Part 2: Graph Algorithms and Data Structures',
      author: 'Tim Roughgarden',
      status: 'reading' as const,
    },
    {
      title: 'The Knight in Rusty Armor',
      author: 'Robert Fisher',
      status: 'read' as const,
    },
    {
      title: 'Algorithms Illuminated: Part 1: The Basics',
      author: 'Tim Roughgarden',
      status: 'read' as const,
    },
    {
      title: 'The Stranger',
      author: 'Albert Camus',
      status: 'read' as const,
    },
    {
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
      status: 'read' as const,
    },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      status: 'read' as const,
    },
    {
      title: 'The Aleph',
      author: 'Jorge Luis Borges',
      status: 'read' as const,
    },
    {
      title: 'A Song of Ice and Fire (Books 1–4)',
      author: 'George R.R. Martin',
      status: 'read' as const,
    },
  ],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
