export const portfolioData = {
  about: {
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "I am a passionate software engineer with a knack for building beautiful, scalable, and robust web applications. I specialize in React, Node.js, and modern web technologies.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Figma"] }
  ],
  projects: [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, Stripe, and Prisma. Includes user authentication, product management, and order processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "task-manager",
      title: "Task Management App",
      description: "A Kanban-style task management tool with drag-and-drop functionality, real-time updates using WebSockets, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "portfolio",
      title: "VS Code Portfolio",
      description: "The website you are currently viewing! A personal portfolio designed to mimic the look and feel of Visual Studio Code.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    }
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      description: "Led the development of the core product dashboard using React and Redux. Improved application performance by 40% through code splitting and lazy loading.",
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency Co.",
      duration: "2018 - 2021",
      description: "Developed and maintained multiple client websites and web applications. Collaborated closely with designers to implement pixel-perfect UIs.",
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2014 - 2018",
      details: "Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction."
    }
  ],
  activities: [
    {
      title: "Open Source Contributor",
      description: "Active contributor to several popular open-source React libraries."
    },
    {
      title: "Tech Meetup Organizer",
      description: "Organize monthly meetups for local web developers to share knowledge and network."
    }
  ]
};

export const fileStructure = [
  { id: 'about', name: 'about.ts', icon: 'ts', component: 'About' },
  { id: 'skills', name: 'skills.ts', icon: 'ts', component: 'Skills' },
  { id: 'projects', name: 'projects.ts', icon: 'ts', component: 'Projects' },
  { id: 'experience', name: 'experience.ts', icon: 'ts', component: 'Experience' },
  { id: 'education', name: 'education.ts', icon: 'ts', component: 'Education' },
  { id: 'activities', name: 'activities.ts', icon: 'ts', component: 'Activities' },
  { id: 'contact', name: 'contact.ts', icon: 'ts', component: 'Contact' },
];
