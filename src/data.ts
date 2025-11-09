import { GitHubIcon, LinkedInIcon } from './icons'

export const data = {
  name: 'Michael Nguyen',
  role1: 'Full Stack Developer',
  role2: 'Software Engineer',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Internship', href: '#internship' }
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-nguyen-nl/', Icon: LinkedInIcon },
    { label: 'GitHub', href: 'https://github.com/mikkelng/', Icon: GitHubIcon }
  ],
  about: {
    paragraphs: [
      `I'm specialized in back-end development and system design with experience in full-stack applications and server-side technologies. With a background in mechanical engineering, I'm focused on creating efficient, secure solutions and eager to keep learning`
    ]
  },
  experience: [
    {
      period: 'Feb - Jul 2025',
      title: 'PLC Programmer',
      company: 'IMP Automation',
      location: 'North Brabant',
      link: '#',
      summary: 'Design, program, test, and maintain PLC-based automation systems',
      tags: ['PLC', 'Automation', 'Testing']
    }
  ],
  education: [
    {
      period: '2023 - 2024',
      title: 'Full‑Stack Developer Program',
      company: 'Ironhack',
      link: '#',
      summary: 'Built projects focusing on front-end and back-end development using HTML, CSS, JavaScript (Node.js, React), databases (MongoDB), and RESTful API design',
      tags: ['Node.js', 'React', 'MongoDB', 'APIs']
    },
    {
      period: '2022 - 2023',
      title: 'BASc, Electrical & Electronics Engineering (unfinished)',
      company: 'Avans University of Applied Science',
      link: '#',
      summary: 'Technical knowledge of electrical systems, wiring, circuits, electrical components and PLC programming',
      tags: ['Electronics', 'PLC']
    },
    {
      period: '2016 - 2022',
      title: 'BASC, Engineering',
      company: 'Koning Willem I College',
      link: '#',
      summary: 'Studied engineering with focus on programming, electronics, system design and mechanical systems',
      tags: ['Engineering']
    }
  ],
  internships: [
    {
      period: '2020 - 2021',
      title: 'Turbin',
      company: 'Rijen',
      link: '#',
      summary: 'Conducted FAT (Factory Acceptance Tests) for pump installations and created P&ID charts',
      tags: ['FAT', 'P&ID']
    },
    {
      period: '2019 - 2020',
      title: 'Verautomation',
      company: 'Middelbeers',
      link: '#',
      summary: 'Designed and programmed a lift for a machine line. Performed cost calculations and prepared a quotation for the project',
      tags: ['Automation', 'Costing']
    },
    {
      period: '2018 - 2019',
      title: 'AR Tooling',
      company: 'Tilburg',
      link: '#',
      summary: 'Worked as a wire EDM operator. Responsibilities included programming using CAM software and setting up the machine and maintenance',
      tags: ['EDM', 'CAM']
    },
    {
      period: '2017 - 2018',
      title: 'Fujifilm Manufacturing',
      company: 'Tilburg',
      link: '#',
      summary: 'Collaborated with supervisor to resolve malfunctions across the factory, including PLC malfunctions, leaks, maintenance tasks (P6 and P10)',
      tags: ['PLC', 'Maintenance']
    }
  ],
  skills: [
    {
      group: 'Web Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'REST API', 'JSON', 'NoSQL', 'MongoDB', 'Git', 'GitHub']
    },
    {
      group: 'Engineering',
      items: ['Basic Metalworking', 'Wiring', 'Conduits', 'Panels', 'Schematics', 'Inspection', 'Troubleshooting', 'PLC', 'Basic C & C#']
    }
  ]
} as const
