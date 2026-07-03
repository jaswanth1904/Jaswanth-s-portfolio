export const aboutMe = {
  name: "Ampabathuni Venkata Sai Jaswanth",
  title: "Full Stack Developer | React.js Specialist",
  location: "India",
  email: "aj19.jaswanth@gmail.com",
  github: "https://github.com/jaswanth1904",
  linkedin: "https://linkedin.com/in/jaswanth-avs",
  summary: `Highly motivated B.Tech CSE graduate with strong hands-on experience in modern web development. Expert in building responsive, high-performance applications using React.js + Vite. Passionate about creating exceptional user experiences and scalable solutions.`,

  highlights: [
    "Built 3+ production-ready full-stack projects",
    "Specialized in React.js, TypeScript, and modern tooling",
    "Strong focus on performance, accessibility & clean architecture",
    "Deployed multiple projects on Vercel with CI/CD",
  ],

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    year: "2020 – 2024",
    gpa: "7.77 / 10.0"
  }
};

export const professionalSummary = {
  points: [
    "Expert in crafting high-performance, responsive web applications using React.js + Vite for lightning-fast development and optimized production builds.",
    "Proficient in building dynamic, component-based UIs with clean architecture, state management (Context/Redux), routing, and mobile-first responsive design.",
    "Experienced in full-stack development including authentication, real-time features, RESTful APIs, search/filter systems, and deployment.",
    "Strong focus on code quality (ESLint, clean code), performance optimization, and delivering complete projects from concept to live deployment.",
    "Passionate about creating intuitive user interfaces and solving real-world problems through technology."
  ]
};

export const skills = {
  frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Zustand", "Context API"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Java"],
  database: ["MongoDB", "MySQL"],
  tools: ["Git & GitHub", "Vite", "VS Code", "Vercel", "ESLint", "Postman", "NPM/Yarn"],
  languages: ["JavaScript", "TypeScript", "Java", "Python (Pandas, NumPy)"]
};

export const projects = [
  {
    id: 7,
    title: "SN Enviro Ticket Raising System",
    slug: "sn-enviro-ticket-raising-system",
    github: "https://github.com/jaswanth1904/SN-Enviro-Ticket-Raising-System",
    live: "https://snenvirotickets.in/",
    description: "A modern, high-performance, dual-interface issue tracking and telemetry management system designed specifically for field operations and centralized administration.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Socket.io"],
    image: "https://api.microlink.io/?url=https://snenvirotickets.in/&screenshot=true&meta=false&embed=screenshot.url",
    highlights: [
      "Dual Interface Architecture (Admin & Field Portal)",
      "Real-Time Socket Updates & Telemetry Data",
      "Automated Email Dispatching",
      "Dynamic SLA Monitoring"
    ]
  },
  {
    id: 1,
    title: "E2F Holidays - Travel Booking Platform",
    slug: "e2f-holidays",
    github: "https://github.com/jaswanth1904/e2f-holidays",
    live: "https://e2f-holidays.vercel.app",
    description: "A modern, high-performance travel booking web application built with React.js + Vite. Features responsive mobile-first UI, smooth navigation, performance optimizations, and clean component architecture.",
    tech: ["React.js", "Vite", "JavaScript", "Tailwind/CSS", "ESLint", "Vercel"],
    image: "https://api.microlink.io/?url=https://e2f-holidays.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    highlights: [
      "Hot Module Replacement for fast development",
      "Mobile-first responsive design",
      "Optimized production builds",
      "Updated February 2026"
    ],
    status: "Live"
  },
  {
    id: 2,
    title: "Sunvision Skill Development",
    slug: "sunvision-skill-dev",
    github: "https://github.com/jaswanth1904/Sunvision-Skill-Devlopment",
    live: "https://sunvision-skill-devlopment.vercel.app",
    description: "Educational and skill development platform showcasing courses and development programs. Built with modern TypeScript stack for robust typing and reliability.",
    tech: ["TypeScript", "React.js", "Tailwind CSS", "Vite"],
    image: "https://api.microlink.io/?url=https://sunvision-skill-devlopment.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    highlights: [
      "Type-safe component architecture",
      "Dynamic routing and modern UI",
      "Deployed seamlessly via Vercel"
    ]
  },
  {
    id: 3,
    title: "SN Enviro - Environmental Services",
    slug: "sn-enviro",
    github: "https://github.com/jaswanth1904/SN-Enviro-Website",
    live: "#",
    description: "Full modern website for environmental services with separate frontend and backend architecture. Heavy JavaScript implementation (98%+ JS) focusing on professional presentation and user engagement.",
    tech: ["React.js", "JavaScript", "Node.js", "MongoDB"],
    image: "/enviro.png",
    highlights: [
      "Modular & scalable architecture",
      "Ready for backend API integration",
      "Professional service-oriented design"
    ]
  },
  {
    id: 4,
    title: "SN Enviro Attendance Application",
    slug: "sn-enviro-attendance",
    github: "https://github.com/jaswanth1904/SN-Enviro-Attedance-Application",
    live: "https://sn-enviro-attedance-application.vercel.app",
    description: "Employee attendance management system allowing staff tracking and logging. Features a clean interface and robust data management for the company.",
    tech: ["JavaScript", "React.js", "Vercel", "CSS"],
    image: "/attendance.png",
    highlights: [
      "Internal tooling application",
      "Real-time attendance logging UI",
      "Vercel deployment"
    ]
  },
  {
    id: 5,
    title: "HappyShop E-Commerce App",
    slug: "my-shopping-app",
    github: "https://github.com/jaswanth1904/my-shopping-app",
    live: "#",
    description: "HappyShop is a modern and responsive React-based e-commerce web application designed for seamless online shopping. Features product management, cart functionality, and secure payment integration.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Firebase/MySQL"],
    image: "https://opengraph.githubassets.com/1/jaswanth1904/my-shopping-app?v=new1",
    highlights: [
      "Redux state management",
      "Firebase/MySQL backend integration",
      "Secure payment mockups"
    ]
  },
  {
    id: 6,
    title: "E-Commerce Shopping Web",
    slug: "ecommerce-shopping",
    github: "https://github.com/jaswanth1904/E-commerce-shopping-web",
    live: "#",
    description: "Complete React-based e-commerce platform featuring product catalog, advanced shopping cart, real-time updates, user authentication, search & filter, and simulated checkout.",
    tech: ["React.js", "React Router", "Context API", "Tailwind CSS"],
    image: "https://opengraph.githubassets.com/1/jaswanth1904/E-commerce-shopping-web?v=new1",
    highlights: [
      "Full authentication system",
      "Dynamic cart management",
      "Advanced filtering & search",
      "Modern UI/UX practices"
    ]
  }
];

export const experience = [
  {
    role: "Web Developer",
    company: "SN Enviro Pvt Ltd",
    period: "Feb 2020 – Present",
    location: "Hyderabad",
    points: [
      "Developing and maintaining full-stack web applications and company websites.",
      "Ensuring responsive design and cross-browser compatibility.",
      "Collaborating with teams to deliver scalable digital solutions."
    ]
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    period: "Past",
    location: "Remote",
    points: [
      "Developed multiple client projects using React.js and modern web technologies",
      "Built responsive websites and web applications from scratch",
      "Implemented full-stack features including authentication and database integration",
      "Deployed and maintained live applications on Vercel"
    ]
  }
];
