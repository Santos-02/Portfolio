export const DATA = {
  home: {
    hero: {
      name: "João Lucas",
      title: "Full stack developer",
      subtitle:
        "I build clean, scalable and visually polished software experiences with a focus on performance and usability.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        " Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        {
          name: "Backend Development",
          level: 90,
          icon: "lucide:video",
          color: "warning",
        },
        {
          name: "Frontend Development",
          level: 80,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Mobile Development",
          level: 80,
          icon: "lucide:smartphone",
          color: "success",
        },
      ],
    },
    // testimonials: {
    //   sectionTitle: "Client Testimonials",
    //   sectionDescription: "What clients say about working together",
    //   items: [
    //     {
    //       id: 1,
    //       name: "Sarah Johnson",
    //       role: "Product Manager at TechNova",
    //       content:
    //         "The design system created for our SaaS platform reduced our development time by 40% while improving consistency across all our products. The attention to accessibility standards was particularly impressive.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
    //     },
    //     {
    //       id: 2,
    //       name: "Michael Chen",
    //       role: "CTO at StartUpGrid",
    //       content:
    //         "Working with this team transformed our mobile app's user retention by 35% in just three months. Their data-driven design approach helped us identify pain points we didn't even know existed.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
    //     },
    //     {
    //       id: 3,
    //       name: "David Rodriguez",
    //       role: "UX Director at FinTech Global",
    //       content:
    //         "The dashboard redesign resulted in a 50% reduction in support tickets. Their ability to balance complex financial data with clean visualization is unmatched in the industry.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
    //     },
    //     {
    //       id: 4,
    //       name: "Priya Patel",
    //       role: "E-commerce Manager at StyleHub",
    //       content:
    //         "Our conversion rate increased by 28% after implementing their checkout flow redesign. They understood our international user base better than our internal team.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=4",
    //     },
    //     {
    //       id: 5,
    //       name: "James Wilson",
    //       role: "Head of Product at HealthTrack",
    //       content:
    //         "The healthcare app we built together received FDA approval largely due to its intuitive patient interface. Their understanding of regulatory requirements saved us months of rework.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=5",
    //     },
    //     {
    //       id: 6,
    //       name: "Lisa Nguyen",
    //       role: "Marketing Director at EduTech Solutions",
    //       content:
    //         "Our user onboarding completion rate went from 65% to 92% after their redesign. The way they simplified complex educational concepts into clear interfaces was remarkable.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=6",
    //     },
    //     {
    //       id: 7,
    //       name: "Thomas Okafor",
    //       role: "Founder at AgriTech Africa",
    //       content:
    //         "They designed an agricultural monitoring app that works perfectly even in low-connectivity rural areas. Cultural sensitivity and technical innovation in perfect balance.",
    //       avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=7",
    //     },
    //   ],
    // },
  },
  about: {
    profile: {
      name: "João Lucas",
      title: "Full Stack Developer",
      image:
        "/profile.jpg",
      description: [
        "I'm a software developer passionate about building reliable, scalable, and maintainable applications. I enjoy solving complex problems and transforming ideas into practical solutions through clean code and solid software architecture.",
        "My experience includes back-end development, relational databases, REST APIs, mobile apps, and web development technologies. I'm always looking to improve my technical skills and learn new tools and frameworks.",
        "Outside of coding, I'm interested in technology, good readings, music, and continuous learning. I enjoy exploring new challenges and creating solutions that make a real impact.",
      ],
    },
    education: [
      {
        title: "Computer Science Bachelor's Degree - UNIFESO",
        date: "2022 - 2025",
        icon: "mdi:school",
        description:
          "Bachelor's degree in Computer Science, with a strong foundation in software engineering, algorithms, data structures, databases, computer networks, and systems development. Throughout the program, I worked on academic and practical projects involving software design, web development, object-oriented programming, and system architecture, strengthening both my technical and problem-solving skills.",
      },
      {
        title: "ICT Residency - Serratec",
        date: "2020",
        icon: "mdi:palette",
        description:
          "Intensive software development residency program focused on both theoretical and hands-on training. The program equips participants with industry-relevant skills and awards a nationally recognized certification.",
      },
    ],
    experience: [
      {
        title: "Technical Writer",
        date: "2024 - Present — Alterdata Software",
        icon: "mdi:file-document-edit",
        description:
          "Create and maintain technical system documentation. Collaborate with product and development teams to translate complex technical concepts into clear and accessible manuals.",
      },
      {
        title: "Administrative Assistant",
        date: "2022 - 2024 — Alterdata Software",
        icon: "mdi:office-building",
        description:
          "Managed instructors' schedules, handled administrative processes through the UCA Portal, and supported department supervisors with training data, reports, and operational activities.",
      },
      {
        title: "Corporate Training Instructor Apprentice",
        date: "2021 - 2022 — Alterdata Software",
        icon: "mdi:school",
        description:
          "Assisted the corporate training team by reviewing and grading training activities, updating learning materials, and supporting the maintenance of educational content used in employee development programs.",
      },
    ],
    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          { name: "Bootstrap", icon: "logos:bootstrap" },
        ],
      },
      backend: {
        description:
          "I develop robust APIs and maintainable backend systems with a focus on scalability and reliability.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "NestJS", icon: "simple-icons:nestjs" },
          // { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          // { name: "SQL Server", icon: "logos:sql-server" },
          { name: "Java", icon: "logos:java" },
          { name: "Spring Boot", icon: "logos:spring-icon" },
          { name: "C++", icon: "logos:c-plusplus" },
          { name: "JUCE", icon: "simple-icons:juce" },
        ],
      },
      mobile: {
        description:
          "I build high-performance mobile applications with a focus on intuitive user experiences, cross-platform compatibility, and seamless integration with backend services.",
        tools: [
          { name: "Flutter", icon: "logos:flutter" },
          { name: "Dart", icon: "logos:dart" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "React Native", icon: "logos:react" },
          { name: "Expo", icon: "simple-icons:expo" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing development expertise",
    work: [
      {
        id: 1,
        title: "Drazzer (FM Synth)",
        description:
          "Drazzer is a polyphonic Frequency Modulation (FM) synthesizer developed as an Undergraduate Thesis Project for the Computer Science program at UNIFESO.",
        image: "/Drazzer 1.png",
        gallery: [
          "/Drazzer 1.png",
          "/Drazzer 2.png",
        ],
        category: "Desktop Applications",
        details:
          "The project aims to overcome the flexibility and usability limitations of traditional FM synthesis models by providing an intuitive interface and a comprehensive exploration of sound design possibilities through an open architecture.",
        github: "https://github.com/Santos-02/FMSynth",
        live: "https://github.com/Santos-02/FMSynth/releases/download/1.0/Drazzer.v1.0.rar",
        tech: [
          { name: "C++", icon: "logos:c-plusplus" },
          { name: "JUCE", icon: "simple-icons:juce" },
        ],
      },
      {
        id: 2,
        title: "To-do List API",
        description:
          "The To-Do List API is a task management solution developed with Java 17 and Spring Boot 3.0.11.",
        image: "/API schema.jpeg",
        gallery: [
          "/API schema.jpeg",
          "/Database schema.jpeg",
        ],
        category: "Backend Development",
        details:
          "This system was designed to provide a robust and streamlined structure for organizing tasks, focusing on relational data persistence and modern web development practices. The project follows a monolithic architecture and was built to ensure that each task is strictly associated with its owner, providing data security and integrity.",
        github: "https://github.com/Santos-02/To-Do-List",
        tech: [
          { name: "Java", icon: "logos:java" },
          { name: "Spring Boot", icon: "logos:spring-icon" },
          { name: "Maven", icon: "logos:maven" },
        ],
      },
      {
        id: 3,
        title: "Taksable App",
        description:
          "A simple and efficient task manager with support for custom tags and date/time scheduling.",
        image: "/icon.png",
        gallery: [
          "https://github.com/Santos-02/Taskable-App/raw/main/assets/screenshots/home.png",
          "https://github.com/Santos-02/Taskable-App/raw/main/assets/screenshots/task.png",
          "https://github.com/Santos-02/Taskable-App/raw/main/assets/screenshots/tags.png",
        ],
        category: "Applications",
        details:
          "Taskable is a Flutter application designed to help users organize their daily tasks in a practical way. This project was originally developed as part of a college assignment. Users can create, edit, and delete tasks, categorize them with tags, and assign dates for better control.",
        github: "https://github.com/Santos-02/Taskable-App",
        live: "https://github.com/Santos-02/Taskable-App/releases/download/1.0/Taskable.App.apk",
        tech: [
          { name: "Dart", icon: "logos:dart" },
          { name: "Flutter", icon: "logos:flutter" },
          { name: "Android Studio", icon: "simple-icons:androidstudio" },
        ],
      },
      {
        id: 4,
        title: "PetLife - Landing Page",
        description:
          "PetLife is a landing page built with HTML, CSS, and JavaScript for a fictional pet shop.",
        image: "https://github.com/Santos-02/PetLife/raw/main/assets/screenshot.png",
        gallery: [
          "https://github.com/Santos-02/PetLife/raw/main/assets/screenshot.png",
        ],
        category: "Web Development",
        details:
          "This project was developed during a basic programming course as a way to practice building institutional web pages focused on content presentation, layout structuring, and visual design.",
        github: "https://github.com/Santos-02/PetLife",
        live: "https://santos-02.github.io/PetLife/",
        tech: [
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          { name: "JavaScript", icon: "logos:javascript" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    // location: {
    //   mapSrc:
    //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
    //   address: "Teresópolis, RJ",
    // },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "João Lucas",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "joaolucasdossantos126@gmail.com",
      phone: "+55 (21) 96899-6705",
      location: "Teresópolis, RJ",
    },
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/_santos.02_?igsh=aGI2Mzg4a3lvYjQ2", icon: "simple-icons:instagram" },
      { platform: "GitHub", url: "https://github.com/Santos-02", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/joão-lucas-dos-santos-139a54213",
        icon: "mdi:linkedin",
      },
    ],
    services: ["Full-stack Development", "API Development", "Web Development", "Mobile Apps"],
  },
} as const;
