import { LinkedInIcon, GitHubIcon } from './icons'

export const data = {
  name: 'Michael Nguyen',
  role1: 'Full Stack Developer',
  role2: 'Software Engineer',
  location: 'Netherlands',
  languages: ['English', 'Dutch'],
  email: 'michael.nguyen@live.nl',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Internship', href: '#internship' }
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-nguyen-nl/', Icon: LinkedInIcon },
    { label: 'GitHub', href: 'https://github.com/mikkelng', Icon: GitHubIcon }
  ],
  about: {
    paragraphs: [
      `I'm specialized in back-end development and system design with experience in full-stack applications and server-side technologies. With a background in mechanical engineering, I'm focused on creating efficient, secure solutions and eager to keep learning.`
    ]
  },
  experience: [
    {
      period: 'Feb - Jul 2025',
      title: 'PLC Programmer',
      company: 'IMP Automation',
      location: 'Diessen',
      summary: 'Design, program, test, and maintain PLC-based automation systems.',
      tags: ['PLC', 'Troubleshooting', 'Schematics']
    }
  ],
  education: [
    {
      period: '2023 - 2024',
      title: 'Full‑Stack Developer Program',
      company: 'Ironhack',
      summary: 'Built projects focusing on front-end and back-end development using HTML, CSS, JavaScript (Node.js, React), databases (MongoDB), and RESTful API design.',
      tags: ['Node.js', 'React.js', 'MongoDB', 'REST API']
    },
    {
      period: '2022 - 2023',
      title: 'BASc, Electrical & Electronics Engineering',
      company: 'Avans University of Applied Science',
      summary: '(Unfinished Degree) Technical knowledge of electrical systems, wiring, circuits, electrical components and PLC programming.',
      tags: ['Wiring', 'PLC', 'Schematics']
    },
    {
      period: '2016 - 2022',
      title: 'BASc, Engineering',
      company: 'Koning Willem I College',
      summary: 'Studied engineering with focus on programming, electronics, system design and mechanical systems.',
      tags: ['C', 'Schematics', 'Basic Metalworking']
    }
  ],
  internships: [
    {
      period: 'Dec 2020 - May 2021',  
      title: 'System Test & Design Engineer',
      company: 'Turbin',
      location: 'Rijen',
      summary: 'Conducted FAT (Factory Acceptance Tests) for pump installations and created P&ID charts.',
      tags: ['Inspection', 'Schematics']
    },
    {
      period: 'Nov 2019 - Feb 2020',
      title: 'Automation Engineer',
      company: 'VerAutomation',
      location: 'Middelbeers',
      summary: 'Designed and programmed a lift for a machine line. Performed cost calculations and prepared a quotation for the project.',
      tags: ['PLC', 'Schematics']
    },
    {
      period: 'Nov 2018 - Feb 2019',
      title: 'CNC Programmer & EDM Operator',
      company: 'ARTooling',
      location: 'Tilburg',
      summary: 'Responsibilities included programming using CAM software and setting up the machine and maintenance.',
      tags: ['C', 'Basic Metalworking']
    },
    {
      period: 'Dec 2017 - Mar 2018',
      title: 'Maintenance Technician',
      company: 'Fujifilm Manufacturing',
      location: 'Tilburg',
      summary: 'Collaborated with supervisor to resolve malfunctions across the factory, including PLC malfunctions, leaks, maintenance tasks (P6 and P10).',
      tags: ['PLC', 'Troubleshooting']
    }
  ],
  skills: [
    {
      group: 'Full-Stack Development',
      items: ['JavaScript', 'PHP', 'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Laravel', 'REST API', 'JSON', 'MongoDB', 'NoSQL', 'Git']
    },
    {
      group: 'Hardware & Systems Engineering',
      items: ['PLC', 'C', 'C#', 'Schematics', 'Troubleshooting', 'Wiring', 'Panels', 'Conduits', 'Inspection', 'Basic Metalworking']
    }
  ],
  projects: [
    {
      name: 'Nominal',
      description: 'A minimalist text editor.',
      url: 'https://nominal.netlify.app/',
      tags: ['React.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']
    },
    {
      name: 'Wally',
      description: 'An expense tracking application.',
      url: 'https://wally-expense.netlify.app/',
      tags: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Git']
    }
  ]
} as const
