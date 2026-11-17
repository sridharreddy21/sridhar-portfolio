export const personalInfo = {
  name: "B. Rama Sridhar Reddy",
  shortName: "Sridhar Reddy",
  heroHeading: "Hi, I'm Sridhar Reddy.",
  subheading: "Computer Science Student | Software Developer | Building Intelligent Digital Experiences",
  heroDescription:
    "I'm a second-year Computer Science student passionate about building practical software solutions across full-stack development, computer vision, and algorithms. I enjoy transforming ideas into functional applications through code, experimentation, and continuous learning.",
  aboutHeading: "Beyond the Code.",
  aboutDescription: [
    "I'm B. Rama Sridhar Reddy, a Computer Science and Engineering student at Amrita Vishwa Vidyapeetham.",
    "I enjoy developing software that solves practical problems. My experience spans Python-based applications, full-stack web development, computer vision, database integration, and algorithmic problem-solving.",
    "Through academic projects and hackathons, I've explored the complete development process — from understanding a problem and designing an architecture to implementing, testing, and presenting a working solution.",
    "I'm continuously exploring new technologies and looking for opportunities to contribute to real-world engineering projects."
  ],
  status: "Open to Internship Opportunities",
  availableForWork: true,
  email: "sridharreddy2112@gmail.com",
  github: "https://github.com/sridharreddy21",
  location: "Nandyal, Andhra Pradesh, India",
  college: "Amrita Vishwa Vidyapeetham",
  degree: "B.Tech – Computer Science and Engineering",
  duration: "2025 – Present",
  cgpa: "8.29"
};

export const aboutHighlights = [
  {
    label: "Projects Built",
    value: "6",
    subtext: "End-to-end applications",
    icon: "FolderGit2"
  },
  {
    label: "Academic CGPA",
    value: "8.29",
    subtext: "B.Tech Computer Science",
    icon: "GraduationCap"
  },
  {
    label: "Dev Experience",
    value: "2025 – Present",
    subtext: "Active engineering focus",
    icon: "Calendar"
  },
  {
    label: "Hackathons",
    value: "Multiple",
    subtext: "Time-bound prototypes",
    icon: "Trophy"
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages for systems, algorithms & web stacks",
    skills: [
      { name: "Python", level: "Primary", tag: "Backend / CV / AI", icon: "terminal" },
      { name: "Java", level: "Advanced", tag: "OOP / Systems / JDBC", icon: "coffee" },
      { name: "JavaScript", level: "Modern ES6+", tag: "Full-Stack Web", icon: "file-code" },
      { name: "HTML5", level: "Semantic", tag: "Accessible Markup", icon: "layout" },
      { name: "CSS3", level: "Responsive", tag: "Modern Layouts / Animations", icon: "palette" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    description: "Robust application frameworks and compute libraries",
    skills: [
      { name: "React.js", level: "Frontend", tag: "Component Architecture / State", icon: "atom" },
      { name: "Flask", level: "Backend", tag: "RESTful APIs / Routing", icon: "flame" },
      { name: "Jinja2", level: "Templating", tag: "Dynamic SSR Views", icon: "code" },
      { name: "OpenCV", level: "Computer Vision", tag: "Frame Analysis & Filters", icon: "eye" },
      { name: "MediaPipe", level: "Real-Time AI", tag: "Face Mesh & Landmarks", icon: "sparkles" },
      { name: "NumPy", level: "Array Computing", tag: "Matrix Operations", icon: "cpu" },
      { name: "Chart.js", level: "Data Viz", tag: "Interactive Canvases", icon: "pie-chart" },
      { name: "PyMongo", level: "Driver", tag: "Document Object Mapping", icon: "database" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational and document storage architectures",
    skills: [
      { name: "MongoDB", level: "NoSQL", tag: "Document Store / Collections", icon: "database" },
      { name: "SQLite", level: "Embedded SQL", tag: "Relational Persistence", icon: "hard-drive" }
    ]
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    description: "Workflow tooling, source management, and environments",
    skills: [
      { name: "Git", level: "Version Control", tag: "Branching & Workflow", icon: "git-branch" },
      { name: "GitHub", level: "Collaboration", tag: "Remote Repos & Reviews", icon: "github" },
      { name: "VS Code", level: "IDE Environment", tag: "Modern Dev Setup", icon: "monitor" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "drowsy-guard",
    number: "01",
    title: "Drowsy-Guard PRO",
    category: "Computer Vision | Real-Time AI",
    badge: "AI Vision",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Playsound"],
    description:
      "A real-time driver drowsiness detection system designed to identify signs of driver fatigue using facial landmarks.",
    problemSolved:
      "Driver fatigue is a leading contributor to vehicular collisions. Drowsy-Guard PRO provides instantaneous edge-based fatigue intervention without needing heavy cloud compute, triggering audio deterrents the instant microsleep is detected.",
    keyFeatures: [
      "Real-time camera feed processing with high FPS stability.",
      "MediaPipe Face Mesh for high-precision 468-point facial landmark detection.",
      "Eye-closure detection using OpenCV and NumPy matrix calculations.",
      "Multithreading for uninterrupted audio alerts and parallel frame capture.",
      "Audio warnings triggered dynamically when signs of drowsiness persist."
    ],
    architecture:
      "Threaded Video Capture Pipeline -> MediaPipe Landmark Extractor -> Eye Aspect Ratio (EAR) Threshold Matrix -> Background Audio Alert Worker Daemon.",
    highlight: "Real-time computer vision combined with multithreaded processing.",
    githubUrl: null, // Academic Core Project
    repoStatus: "Academic Project",
    interactiveType: "vision-demo"
  },
  {
    id: "movie-booking",
    number: "02",
    title: "Movie Booking System",
    category: "Full-Stack Development",
    badge: "Full-Stack",
    technologies: ["Python", "Flask", "MongoDB", "PyMongo", "Jinja2"],
    description:
      "A full-stack web application that allows users to browse movies and book tickets.",
    problemSolved:
      "Designed to replace manual ticketing bottlenecks with an intuitive, dynamic reservation web portal that persists customer bookings securely and prevents conflicting seat reservations.",
    keyFeatures: [
      "Dynamic movie browsing with rich poster and showtime metadata.",
      "Movie ticket booking functionality with instant seat allocation.",
      "MongoDB database integration for flexible schema document storage.",
      "Dynamic frontend rendering using Jinja2 templates.",
      "Password security using Werkzeug cryptographic hashing.",
      "Environment variable management using python-dotenv for secret isolation."
    ],
    architecture:
      "Flask Controller Core -> Werkzeug Hash Authentication -> PyMongo Document Queries -> Jinja2 Dynamic Templating.",
    highlight: "Full-stack development, database design, and application security.",
    githubUrl: null,
    repoStatus: "Full-Stack Project",
    interactiveType: "booking-demo"
  },
  {
    id: "hotel-management",
    number: "03",
    title: "Hotel Management System",
    category: "Web Development",
    badge: "Web Dev",
    technologies: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    description:
      "A web-based hotel management application designed to manage hotel rooms and bookings.",
    problemSolved:
      "Streamlines hotel operations by digitizing room availability, managing check-in/check-out logs, and organizing customer reservations into an accessible operational dashboard.",
    keyFeatures: [
      "Comprehensive room status and tier management.",
      "Guest booking and check-in reservation handling.",
      "Modular Flask backend architecture with clean routing.",
      "Clean web-based interface built for fast staff interactions.",
      "SQLite relational persistence with structured relational tables."
    ],
    architecture:
      "Flask Application Gateway -> SQLite Relational DB Schema -> Session & State Management -> Custom Styled Responsive UI.",
    highlight: "Backend development and application workflow management.",
    githubUrl: "https://github.com/sridharreddy21/hotel_management",
    repoStatus: "Public GitHub Repo",
    repoName: "hotel_management",
    interactiveType: "hotel-demo"
  },
  {
    id: "study-planner",
    number: "04",
    title: "Smart Study Planner",
    category: "Frontend Development | Data Visualization",
    badge: "Data Viz",
    technologies: ["JavaScript", "HTML", "CSS", "Chart.js"],
    description:
      "A study planning tool designed to help users organize their academic activities and visualize study progress.",
    problemSolved:
      "Helps students overcome procrastination and inconsistent study pacing by combining interactive task scheduling with visual analytics that map weekly study hours and subject coverage.",
    keyFeatures: [
      "Structured study schedule planning and daily goal setting.",
      "Study timer for focused interval tracking.",
      "Interactive analytics charts using Chart.js to monitor productivity trends.",
      "Fast, responsive frontend running entirely client-side with zero latency."
    ],
    architecture:
      "Vanilla JS Event Bus -> Productivity State Store -> Chart.js Canvas Pipeline -> Responsive CSS Layout Engine.",
    highlight: "Interactive frontend development and data visualization.",
    githubUrl: "https://github.com/sridharreddy21/study-planner",
    repoStatus: "Public GitHub Repo",
    repoName: "study-planner",
    interactiveType: "planner-demo"
  },
  {
    id: "pharmacy-management",
    number: "05",
    title: "Pharmacy Management System",
    category: "Desktop & Database Systems",
    badge: "Enterprise Java",
    technologies: ["Java", "Swing", "MySQL", "JDBC", "Maven"],
    description:
      "A desktop-based enterprise Pharmacy Management System with role-based access control, medicine batch tracking, and automated billing.",
    problemSolved:
      "Prevents prescription billing discrepancies, tracks batch expiry dates, and alerts pharmacists when medicine stocks fall below safety thresholds.",
    keyFeatures: [
      "Role-based authentication for Admin and Pharmacist personnel.",
      "Full medicine CRUD operations with batch numbers and expiration date tracking.",
      "Supplier contact and supply chain catalog management.",
      "Point-of-sale billing engine that calculates totals, taxes, and auto-deducts inventory.",
      "Sales reports and low-stock notification triggers."
    ],
    architecture:
      "Java Swing View Layer -> MVC Controller Handlers -> DAO Pattern (JDBC) -> MySQL Relational Database.",
    highlight: "Enterprise Java MVC architecture, relational JDBC data integrity, and inventory management.",
    githubUrl: "https://github.com/sridharreddy21/PharmacyManagementSystem",
    repoStatus: "Public GitHub Repo",
    repoName: "PharmacyManagementSystem",
    interactiveType: "pharmacy-demo"
  },
  {
    id: "traffic-navigation",
    number: "06",
    title: "Smart Traffic Navigation System",
    category: "Algorithms & Graph Systems",
    badge: "Algorithms",
    technologies: ["Python", "Graph Algorithms", "Dijkstra", "Min-Heap", "GUI"],
    description:
      "Real-time traffic navigation system using custom graph data structures, dynamic travel time weights, and shortest-path algorithms.",
    problemSolved:
      "Solves urban transit routing under dynamic congestion by implementing algorithmic pathfinding from first principles with custom priority queues.",
    keyFeatures: [
      "Custom Binary Min-Heap priority queue implemented from scratch (zero external dependencies).",
      "Dynamic Dijkstra shortest-path calculations adjusting for live congestion levels.",
      "BFS and DFS network connectivity and reachability analyzers.",
      "Path reconstruction using predecessor tracking.",
      "Visual navigation interface showcasing calculated shortest routes."
    ],
    architecture:
      "Adjacency List Graph Engine -> Binary Min-Heap Priority Queue -> Dynamic Dijkstra Solver -> Route Visualizer.",
    highlight: "Algorithmic data structures from scratch and real-time shortest-path route computation.",
    githubUrl: "https://github.com/sridharreddy21/traffic-navigation",
    repoStatus: "Public GitHub Repo",
    repoName: "traffic-navigation",
    interactiveType: "graph-demo"
  }
];

export const experienceTimeline = [
  {
    role: "Independent Software Developer",
    organization: "Personal & Academic Projects",
    period: "2025 – Present",
    tagline: "Building Practical Software & Algorithmic Solutions",
    description: [
      "Designed and developed six end-to-end projects across computer vision, Flask applications, Java console development, and graph-based navigation.",
      "Worked across databases, backend systems, frontend development, and real-time processing.",
      "Applied password hashing and environment-based secret management.",
      "Implemented multithreading in real-time applications.",
      "Used Git and GitHub for version control.",
      "Participated in hackathons and developed working prototypes under tight deadlines."
    ],
    technologies: ["Python", "Java", "Flask", "React.js", "OpenCV", "MongoDB", "MySQL", "Git"]
  }
];

export const achievements = [
  {
    id: "srm-hackathon",
    title: "SRM Hackathon",
    track: "Web Development Track",
    type: "Hackathon",
    icon: "CodeXml",
    statusBadge: "Verified Participant",
    date: "2025 – 2026",
    summary:
      "Participated in the competitive Web Development track. Built a functional working prototype within the strict event time limit and received an official participation certificate.",
    highlight: "Time-pressured prototype delivery & responsive web development under strict constraints."
  },
  {
    id: "amrita-hackathon",
    title: "Amrita Vishwa Vidyapeetham, Chennai Hackathon",
    track: "Competitive Engineering Hackathon",
    type: "Hackathon",
    icon: "Trophy",
    statusBadge: "Competitor",
    date: "2025 – 2026",
    summary:
      "Competed at the institute hackathon, tackling complex technical problem statements and earning an official institute participation certificate.",
    highlight: "Architecture ideation, rapid implementation, and peer technical presentation."
  },
  {
    id: "institute-hackathons",
    title: "Institute-Level Hackathons",
    track: "Multi-Team Collaborative Hackathons",
    type: "Hackathon",
    icon: "Users2",
    statusBadge: "Active Collaborator",
    date: "2025 – Present",
    summary:
      "Participated in multiple institute hackathons. Collaborated with multi-disciplinary teams to conceptualize and develop functional solutions under tight deadlines.",
    highlight: "Cross-functional team coordination, Git workflow, and rapid prototyping."
  },
  {
    id: "scaler-react",
    title: "React Course – Scaler",
    track: "Frontend Engineering Certification",
    type: "Certification",
    icon: "Award",
    statusBadge: "Course Completion",
    date: "2025 – 2026",
    summary:
      "Completed comprehensive training on React.js covering component-based frontend development, JSX syntax, hooks, state management, and modern component lifecycles.",
    highlight: "Component-based architecture, hooks, state lifecycle, and clean UI engineering."
  },
  {
    id: "academic-cgpa",
    title: "Academic Excellence – 8.29 CGPA",
    track: "B.Tech Computer Science & Engineering",
    type: "Academic",
    icon: "GraduationCap",
    statusBadge: "8.29 CGPA",
    date: "2025 – Present",
    summary:
      "Consistently maintaining an 8.29 CGPA in B.Tech Computer Science and Engineering at Amrita Vishwa Vidyapeetham, demonstrating rigor across algorithms, data structures, and computer systems.",
    highlight: "Strong theoretical foundations paired with practical hands-on application building."
  }
];

export const publicGithubRepos = [
  {
    name: "hotel_management",
    repoUrl: "https://github.com/sridharreddy21/hotel_management",
    description: "A web-based Hotel Management System built using Python Flask, HTML, CSS, and SQLite.",
    language: "Python / Flask",
    langColor: "#3572A5"
  },
  {
    name: "PharmacyManagementSystem",
    repoUrl: "https://github.com/sridharreddy21/PharmacyManagementSystem",
    description: "Java-based Pharmacy Management System with login, billing, stock management, and file handling.",
    language: "Java",
    langColor: "#b07219"
  },
  {
    name: "study-planner",
    repoUrl: "https://github.com/sridharreddy21/study-planner",
    description: "Smart Study Planner is a web application for managing study tasks, tracking time using a timer, and analyzing productivity through charts. Built using HTML, CSS, JavaScript, and Chart.js.",
    language: "JavaScript",
    langColor: "#f1e05a"
  },
  {
    name: "traffic-navigation",
    repoUrl: "https://github.com/sridharreddy21/traffic-navigation",
    description: "Real-Time Traffic Navigation System using Graph Data Structures and Dynamic Shortest Path Algorithms",
    language: "Python",
    langColor: "#3572A5"
  }
];
