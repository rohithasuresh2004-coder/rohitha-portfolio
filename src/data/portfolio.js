// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: 'Rohitha S',
  title: 'Full Stack (MERN) Developer | MCA Student',
  location: 'Alappuzha, Kerala, India',
  email: 'rohithasuresh2004@gmail.com',
  phone: '+91 77367 55363',
  phoneHref: '+917736755363',
  linkedin: 'https://linkedin.com/in/rohitha-s-9b2469334',
  github: 'https://github.com/rohithasuresh2004-coder',
  githubHandle: 'rohithasuresh2004-coder',
  resume: '/Rohitha_S_Resume.pdf', // put your PDF in /public with this exact name
  roles: ['MERN Stack Developer', 'Full Stack Developer', 'Software Developer'],
}

export const navLinks = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['experience', 'Experience'], ['education', 'Education'], ['certifications', 'Certifications'], ['contact', 'Contact'],
]

export const skillGroups = [
  { title: 'Programming Languages', icon: 'terminal', items: ['JavaScript', 'Python', 'Java', 'PHP'] },
  { title: 'Frontend Development', icon: 'monitor', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Backend Development', icon: 'server', items: ['Node.js', 'Express.js', 'PHP'] },
  { title: 'Databases', icon: 'database', items: ['MongoDB', 'MySQL'] },
  { title: 'Tools and Platforms', icon: 'wrench', items: ['Git', 'GitHub', 'Postman', 'Visual Studio Code'] },
]

// github / live: add real URLs as strings. While null, the buttons stay hidden.
export const projects = [
  {
    id: 'clinical', icon: 'heart', accent: '#22d3ee',
    title: 'Clinical Management System',
    overview: 'A full-stack web application developed to manage patient and clinic records through a centralized digital system.',
    problem: 'Patient and clinic records need one organized place where they can be added, found and kept up to date.',
    features: [
      'Create, read, update and delete operations',
      'React.js user interface',
      'REST APIs built with Node.js and Express.js',
      'MongoDB database integration',
      'Add, search, update and delete patient and clinic records',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: null, live: null,
  },
  {
    id: 'tourism', icon: 'landmark', accent: '#f59e0b',
    title: 'Traditional Tourism Development Department',
    overview: 'A web platform designed to promote tribal culture, heritage, handicrafts, traditional art forms, local attractions and sustainable tourism.',
    problem: 'Tribal heritage, crafts and local attractions need a dedicated place where visitors can discover them and administrators can keep the information current.',
    features: [
      'Explore tribal villages',
      'Browse cultural events',
      'Discover traditional art forms',
      'Explore handicrafts and local attractions',
      'View accommodation information',
      'Administrators can add and update tourism content',
    ],
    tech: null, github: null, live: null,
  },
  {
    id: 'car', icon: 'car', accent: '#ef4444',
    title: 'Car Sale Management System',
    overview: 'A vehicle sales management application that supports vehicle inventory, customer records, bookings, sales and purchase inquiries.',
    problem: 'Inventory, customers, bookings and sales are easier to handle when vehicle and sales information is centralized in one system.',
    features: [
      'Browse available vehicles',
      'View vehicle specifications',
      'Compare models',
      'Submit purchase inquiries',
      'Manage inventory',
      'Organize customer and sales information',
    ],
    tech: null, github: null, live: null,
  },
  {
    id: 'tutor', icon: 'grad', accent: '#8b5cf6',
    title: 'Private Tutor Finder System',
    overview: 'A web platform that connects parents with tutors and supports tutor discovery, profile management, demo-class requests, bookings and feedback.',
    problem: 'Parents need a clear way to find suitable tutors, and tutors need a structured way to receive demo-class and booking requests.',
    features: [
      'Search tutors by subject',
      'Filter tutors by location, teaching mode and fees',
      'Manage tutor profiles',
      'Role-based access for administrators, tutors and parents',
      'Approve tutor registrations',
      'Request demo classes',
      'Manage booking workflows',
      'Collect ratings and feedback',
      'Provide notifications',
    ],
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    github: null, live: null,
  },
]

export const experience = [
  {
    role: 'Front End and Back End Development Intern',
    org: 'Faith Infotech, Trivandrum',
    year: '2026',
    points: [
      'Built the React.js frontend for a Clinical Management System',
      'Developed the backend using Node.js and Express.js',
      'Worked with MongoDB',
      'Connected application interfaces and APIs',
      'Supported clinical record management',
      'Implemented CRUD functionality',
    ],
  },
]

export const education = [
  { degree: 'Master of Computer Applications (MCA)', years: '2025–2027', status: 'Pursuing', school: 'Mar Athanasius College for Advanced Studies, Thiruvalla', uni: 'MG University', current: true },
  { degree: 'Bachelor of Computer Applications (BCA)', years: '2022–2025', status: null, school: 'Mar Gregorios College for Arts and Science, Punnapra', uni: 'Kerala University', current: false },
]

// image / url: add a certificate image path (e.g. '/certs/mern.jpg') or verification URL when available.
export const certifications = [
  { title: 'Full Stack Web Development – MERN Stack', issuer: 'Capital Infotech, Thiruvalla', detail: 'A Grade | 50 hours', date: 'June 2026', image: null, url: null },
  { title: 'Python for Data Science', issuer: 'NPTEL, IIT Madras', detail: 'Score: 60%', date: 'July–August 2026', image: null, url: null },
  { title: 'Introduction to Artificial Intelligence (AI)', issuer: 'IBM via Coursera', detail: null, date: 'April 2025', image: null, url: null },
]
