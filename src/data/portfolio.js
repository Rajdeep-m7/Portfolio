// Single source of truth for all portfolio content.
// Edit text, links and projects here — components and SEO metadata read from this file.

export const site = {
  name: "Rajdeep Majumdar",
  initials: "RM",
  role: "Full Stack Developer",
  title: "Rajdeep Majumdar · Full Stack Developer (MERN, React Native, Generative AI)",
  description:
    "Rajdeep Majumdar is a Full Stack Web Developer from Siliguri, India, building modern web applications with React, Node.js, MongoDB and PostgreSQL, exploring React Native and Generative AI. Open to internships, freelance and full-time roles.",
  keywords: [
    "Rajdeep Majumdar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "React Native",
    "Generative AI",
    "Portfolio",
    "Siliguri",
    "India",
  ],
  location: "Siliguri, West Bengal, India",
  // Public address shown on the site (contact card, footer, structured data).
  email: "hello@rajdeepmajumdar.me",
  // Where contact-form messages are delivered unless CONTACT_TO_EMAIL is set.
  inbox: "amazumder781@gmail.com",
  github: "https://github.com/Rajdeep-m7",
  linkedin: "https://linkedin.com/in/rajdeep-majumdar-01736a28a",
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  availability: "Available for opportunities",
  headlineTop: "Full Stack",
  headlineAccent: "Developer",
  tagline:
    "Building modern web applications, mobile experiences, and AI-powered products.",
  intro:
    "a fourth-year BCA student at Siliguri Institute of Technology and a Full Stack Web Developer. I build practical digital products using modern web technologies, explore cross-platform mobile development with React Native, and experiment with Generative AI to create smarter application experiences.",
  footnote:
    "Open to internships, freelance projects, full-time roles, and technical collaborations.",
  terminal: [
    { cmd: "whoami", out: "Rajdeep Majumdar" },
    { cmd: "cat role.txt", out: "Full Stack Web Developer" },
    { cmd: "cat focus.txt", out: "React Native · Generative AI · Modern Web" },
  ],
  terminalStatus: "Open to opportunities (Internships & Full-time)",
  metrics: [
    {
      icon: "school",
      label: "Academic Metric",
      value: "8.63",
      caption: "SGPA (Current Academic Update)",
    },
    {
      icon: "code",
      label: "Engineering Artifacts",
      value: "3",
      caption: "Featured Independent Projects",
    },
    {
      icon: "military",
      label: "Recognition & Rank",
      value: "2",
      caption: "Academic & Hackathon Honors",
    },
  ],
};

export const about = {
  heading: "Building things for the web, mobile, and beyond.",
  paragraphs: [
    "I am currently in my final year of Bachelor of Computer Applications (BCA) at Siliguri Institute of Technology. Over the course of my degree, I moved beyond theoretical coursework to construct production-ready applications that solve tactile problems.",
    "My core engineering toolkit centers around React, Node.js, Express.js, MongoDB, and PostgreSQL. I take pride in clean API contracts, intuitive state management, resilient authentication boundaries, and low-latency bidirectional socket channels.",
    "As software platforms evolve, I am actively expanding into cross-platform application delivery with React Native and exploring practical integrations of Generative AI (Google Gemini LLM pipelines) to enhance real-world user flows. I also ship and run what I build, using Docker, Nginx on a VPS or Google Cloud, and GitHub Actions CI/CD pipelines.",
  ],
  features: [
    {
      icon: "layers",
      title: "Full Stack Development",
      text: "MERN & SQL architectures, scalable REST APIs, secure JWT auth, and structured data layers.",
    },
    {
      icon: "phone",
      title: "React Native Development",
      text: "Expo & cross-platform mobile application development with reusable mobile component systems.",
    },
    {
      icon: "psychology",
      title: "Generative AI Exploration",
      text: "Gemini LLM workflows, prompt engineering, conversational APIs, and agentic UX integration.",
    },
    {
      icon: "product",
      title: "Product Mindset",
      text: "User-centric UI, thoughtful developer experience, fast load times, accessibility, and high code clarity.",
    },
  ],
};

export const experience = {
  heading: "Learning by building real products.",
  role: "App & Full Stack Developer Intern",
  company: "REBOOT AI",
  period: "May 2026 – Present",
  description:
    "Currently working as an App & Full Stack Developer Intern at REBOOT AI, contributing to both web and mobile application development and building practical experience with modern frontend, backend and deployment tooling in enterprise cycles. Collaborating with cross-functional teams to implement modular frontend components, architect robust backend endpoints, and streamline deployment workflows.",
  tags: [
    "React Components",
    "React Native",
    "Backend REST APIs",
    "Database Integration",
    "Docker",
    "GitHub Actions CI/CD",
    "Git Collaboration",
    "Application Performance",
  ],
  tracks: [
    {
      icon: "devices",
      title: "Full Stack Developer",
      subtitle: "Web applications",
      works: [
        "Build responsive React interfaces and reusable, modular components.",
        "Design and ship Node.js / Express REST APIs with secure authentication.",
        "Model data and integrate MongoDB and PostgreSQL with clean queries.",
        "Containerise services with Docker and automate delivery with GitHub Actions.",
      ],
      skills: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "CI/CD"],
    },
    {
      icon: "mobile",
      title: "App Developer",
      subtitle: "Cross-platform mobile",
      works: [
        "Build cross-platform mobile screens with React Native and Expo.",
        "Connect the app to backend APIs, authentication and real-time data.",
        "Manage app state and offline storage for a smooth mobile experience.",
        "Test on Android and iOS and tune performance on real devices.",
      ],
      skills: ["React Native", "Expo", "REST APIs", "Async Storage", "Mobile UX"],
    },
  ],
};

export const education = {
  heading: "Rigorous foundations and honors.",
  degree: {
    badge: "Undergraduate Degree",
    period: "2022 – 2026",
    title: "Bachelor of Computer Applications (BCA)",
    school: "Siliguri Institute of Technology, West Bengal, India",
    rows: [
      { label: "Academic Status", value: "Fourth Year (Current)", tone: "strong" },
      { label: "Department Ranking", value: "#1 in Semester 3", tone: "accent" },
      {
        label: "Core Curriculum",
        value: "Data Structures, DBMS, Java, Web Systems",
        tone: "muted",
      },
    ],
    gradeLabel: "Cumulative Grade Metric",
    grade: "8.63",
    gradeBadge: "Current SGPA",
  },
  achievements: [
    {
      icon: "trophy",
      eyebrow: "Department Rank #1",
      title: "Third Semester Topper",
      text: "Ranked #1 in the third semester at Siliguri Institute of Technology across the entire department, reflecting consistent dedication to core computer science fundamentals, algorithm design, and applied labs.",
      footerLeft: "Siliguri Institute of Technology",
      footerRight: "[ Academic Honor ]",
    },
    {
      icon: "military",
      eyebrow: "Competitive Hackathon",
      title: "SIH Hackathon Runner-up",
      text: "Secured second place in the SIT internal Smart India Hackathon 2025 competition. Architected and pitched a rapid prototype with real-time collaborative state management under rigorous 24-hour evaluation constraints.",
      footerLeft: "Internal Round // 2025",
      footerRight: "[ 2nd Place ]",
    },
  ],
};

export const skills = {
  heading: "Technologies I work with.",
  intro:
    "A disciplined stack focused on rapid development, maintainable clean code, and resilient client-server bridges.",
  domains: [
    {
      icon: "devices",
      title: "Frontend Engineering",
      text: "Building accessible, responsive, and performance-tuned browser interfaces with modular architectures.",
      items: [
        "React.js",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "JavaScript ES6+",
        "Redux Toolkit",
        "Zustand",
        "Framer Motion",
      ],
      footerLeft: "Component-Driven",
      footerRight: "Responsive & Accessible",
    },
    {
      icon: "server",
      title: "Backend & Services",
      text: "Designing resilient RESTful microservices, real-time message protocols, and hardened authentication filters.",
      items: ["Node.js", "Express.js", "Socket.io", "JWT Authentication", "RESTful APIs"],
      footerLeft: "Server Execution",
      footerRight: "Stateless & Scalable",
    },
    {
      icon: "database",
      title: "Data Persistence",
      text: "Structuring flexible document storage and relational schemas with index optimizations and clean aggregations.",
      items: ["MongoDB", "PostgreSQL", "Mongoose ODM", "SQL Data Modeling"],
      footerLeft: "Storage Layers",
      footerRight: "ACID & Document",
    },
    {
      icon: "mobile",
      title: "Mobile Systems",
      text: "Building cross-platform touch interfaces with native bridge performance and unified codebases.",
      items: ["React Native", "Expo Framework", "Mobile UX Flow", "Async Storage"],
      footerLeft: "Runtime Target",
      footerRight: "iOS & Android",
    },
    {
      icon: "robot",
      title: "Generative AI Workflows",
      text: "Integrating Large Language Models into user-facing software to create assisted workflows and generative experiences.",
      items: ["Gemini API", "LLM Integration", "Prompt Engineering", "AI Automation"],
      footerLeft: "Model Architecture",
      footerRight: "Context-Aware",
    },
    {
      icon: "cloud",
      wide: true,
      title: "DevOps & Deployment",
      text: "Packaging, shipping and running applications in production: containers, servers, cloud infrastructure, reverse proxies and automated pipelines.",
      items: [
        "Docker",
        "VPS Hosting",
        "Google Cloud Platform (GCP)",
        "Nginx",
        "GitHub Actions CI/CD",
      ],
      footerLeft: "Delivery Pipeline",
      footerRight: "Build → Test → Deploy",
    },
    {
      icon: "terminal",
      title: "Tools & Foundational",
      text: "Developer toolchains, version tracking, API benchmarking suites, and object-oriented foundations.",
      items: ["Core Java", "Git & GitHub", "Postman Testing", "VS Code"],
      footerLeft: "Toolchain",
      footerRight: "Version-Controlled",
    },
  ],
};

export const projects = {
  heading: "Projects I've built. Problems I've explored.",
  intro:
    "A selection of independent projects that demonstrate my approach to application development, backend engineering, real-time communication, and product design.",
  featured: [
    {
      slug: "styleo",
      preview: "storefront",
      category: "Full Stack / MERN",
      name: "E-Commerce App (Styleo)",
      description:
        "A full-stack shopping platform featuring product listings, cart functionality, JWT authentication, and order management, built with a clean and scalable application structure. Implements fine-grained state slices via Redux Toolkit and transactional order pipelines.",
      techs: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Redux"],
      live: "https://styleo.onrender.com/",
      github: "https://github.com/Rajdeep-m7/Ecom-Styleo",
    },
    {
      slug: "talksy",
      preview: "chat",
      category: "Real-Time Applications",
      name: "Realtime Chat WebApp (Talksy)",
      description:
        "An instant messaging application featuring private rooms, live online presence indication, and real-time bidirectional communication powered by Socket.io, with state synchronization governed by Zustand.",
      techs: ["Socket.io", "React", "MongoDB", "Express.js", "Zustand", "JWT Auth"],
      live: "https://talksy-vrku.onrender.com/",
      github: "https://github.com/Rajdeep-m7/chat-app",
    },
    {
      slug: "cafe-management",
      preview: "admin",
      category: "Full Stack / MERN",
      name: "Cafe Menu Management",
      description:
        "A full CRUD cafe menu management application with an administrative console for organizing product categories, dynamically modifying menu item pricing, and updating stocks in real-time.",
      techs: ["React", "MongoDB", "Express.js", "Node.js"],
      live: "https://cafe-management-frontend.onrender.com/",
      github: "https://github.com/Rajdeep-m7/Cafe_management",
    },
  ],
};

// Decorative, illustrative UI previews shown inside the featured project cards.
export const previews = {
  storefront: {
    title: "STYLEO STOREFRONT",
    badge: "Preview",
    meta: ["Cart: 3", "Secure Checkout"],
    products: [
      { icon: "checkroom", name: "Editorial Wool Knit", price: "$89.00" },
      { icon: "style", name: "Canvas Field Parka", price: "$145.00" },
    ],
    footerLeft: "Checkout: JWT session → MongoDB order",
    footerRight: "Redux cart state",
  },
  chat: {
    channel: "# general-channel",
    status: "Socket.io Connected",
    messages: [
      {
        from: "Alex (Client)",
        text: "Hey Rajdeep, is the new authentication handshake deployed?",
        mine: false,
      },
      {
        from: "You",
        text: "Yes, socket heartbeat & token refresh are verified.",
        mine: true,
      },
    ],
  },
  admin: {
    columns: ["Item", "Category", "Price", "Status"],
    rows: [
      ["Espresso Roast", "Beverages", "$3.50", "In Stock"],
      ["Almond Croissant", "Bakery", "$4.20", "In Stock"],
    ],
  },
};

export const beyond = {
  eyebrow: "Foundational Expansion",
  heading: "Beyond the Browser.",
  intro:
    "While web applications form the cornerstone of my daily output, my curiosity extends across the entire computing stack—from native device sensor bridges to autonomous LLM orchestration.",
  items: [
    {
      title: "01 / Full Stack Engineering",
      text: "Architecting end-to-end applications where data contracts flow predictably from persistent database collections to reactive UI views.",
    },
    {
      title: "02 / Mobile Development",
      text: "Leveraging the React Native paradigm to produce coherent handheld user experiences without duplicating core business logic.",
    },
    {
      title: "03 / Generative AI",
      text: "Augmenting traditional user interactions through programmatic model invocations, intelligent schema validation, and conversational UX.",
    },
  ],
};

export const philosophy = {
  eyebrow: "Core Principles",
  heading: "Development Philosophy.",
  intro:
    "How I approach technical problems, project structure, and sustainable software craft every day.",
  items: [
    {
      title: "Product Thinking",
      text: "I focus on understanding the underlying problem and creating an experience that is genuinely useful, intuitive, and easy to navigate for end users.",
      footer: "Clarity over complexity",
    },
    {
      title: "Engineering Mindset",
      text: "I care about maintainable code, reliable integrations, predictable data flow, and building resilient applications that work as intended.",
      footer: "Robust architecture",
    },
    {
      title: "Continuous Learning",
      text: "I continuously explore new technologies, from mobile development to Generative AI, to expand the scope and caliber of products I can build.",
      footer: "Daily iteration",
    },
  ],
  commitment: "Commitment: Rigorous, readable code with zero artificial bloat.",
  locale: "SILIGURI, INDIA // IST (UTC+5:30)",
};

export const contact = {
  heading: "Let's build something great together.",
  intro:
    "Open to internships, freelance projects, full-time opportunities, and collaborations. Have an idea or an opportunity in mind? Let's connect and make it real.",
  links: [
    {
      icon: "mail",
      label: "Direct Email",
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: "code",
      label: "GitHub Profile",
      value: "github.com/Rajdeep-m7",
      href: site.github,
      external: true,
    },
    {
      icon: "work",
      label: "LinkedIn Network",
      value: "Rajdeep Majumdar",
      href: site.linkedin,
      external: true,
    },
  ],
  intents: [
    { value: "Full-Time / Internship Opportunity", label: "Full-Time / Internship Opportunity" },
    { value: "Freelance Contract / Project Inquiry", label: "Freelance Contract / Project Inquiry" },
    { value: "Technical Collaboration / Hackathon", label: "Technical Collaboration / Hackathon" },
    { value: "General Inquiry / Mentorship", label: "General Inquiries & Mentorship" },
  ],
  responseTime: "Typical response time: < 24 hours",
};
