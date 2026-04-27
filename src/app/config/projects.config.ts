export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  detailImages: string[];
  description: string;
  tech: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
  expanded: boolean;
}

export const projectFilters = [
    { key: "All", translateKey: "projects.filterAll" },
    { key: "Web Apps", translateKey: "projects.filterWeb" },
    { key: "REST Services", translateKey: "projects.filterAPI" },
    { key: "MVC Apps", translateKey: "projects.filterMVC" },
    { key: "Mobile Apps", translateKey: "projects.filterMobile" }
];

export const projects: Project[] = [
    {
        id: 4,
        title: "Snap Noti",
        category: "REST Services",
        image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-snap-noti-1.0.png",
        detailImages : [
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-snap-noti-1.1.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-snap-noti-1.2.png"
        ],
        description: "Snap Noti is a RESTful API service built with Express.js that enables email notification functionality. It provides endpoints to send and receive emails, with support for auto-reply features and project-based credential management.",
        tech: ["NodeJS", "ExpressJS", "Swagger", "Nodemailer",  "CORS", "nodemon", "Docker"],
        features: [
          "Send emails via Gmail SMTP with project-based authentication",
          "Receive messages and forward them to the configured owner email",
          "Automatic response to incoming emails",
          "Secure OTP generation",
          "API includes Swagger documentation for easy testing and integration",
          "Configurable cross-origin resource sharing with origin whitelist"
        ],
        demoLink: "https://snap-noti.onrender.com/",
        githubLink: "https://github.com/soehtetpaing/snap-noti",
        expanded: false
    },
    {
        id: 3,
        title: "Portfolio 2.0",
        category: "Web Apps",
        image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.0.gif",
        detailImages : [
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.1.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.2.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.3.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.4.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.5.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-2.6.png"
        ],
        description: "A high-performance, responsive web architecture built with Angular 21 and Advanced SCSS. This system features a sophisticated design language centered on Glassmorphism, dynamic Multi-Language localization (EN, MM, KR), and a robust Runtime Theming Engine. It is engineered to bridge the gap between creative visual storytelling and scalable frontend engineering.",
        tech: ["Angular", "TypeScript", "SCSS", "Design Tokens", "BEM Architecture", "Localization (i18n)", "UX/UI Design"],
        features: [
          "Adaptive Glassmorphism UI",
          "Tri-Lingual Localization",
          "Intelligent Theme Engine",
          "Modular Component Architecture",
          "Smooth UX & Motion Design"
        ],
        demoLink: "https://portfolio.pages.dev",
        githubLink: "https://github.com/soehtetpaing/portfolio",
        expanded: false
    },
    {
        id: 2,
        title: "Utils Express",
        category: "REST Services",
        image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-utils-express-1.0.png",
        detailImages : [
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-utils-express-1.1.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-utils-express-1.2.png",
        ],
        description: "A RESTful API service built with Express.js that provides utility endpoints for common operations like authentication, datetime handling, media processing, and encryption utilities.",
        tech: ["NodeJS", "ExpressJS", "Swagger", "CORS", "nodemon", "mssql", "mysql2", "pg", "Docker"],
        features: [
          "Authentication Utilities — Encryption, decryption, API token generation",
          "Common Utilities — Syskey generation, system operations",
          "DateTime Utilities — Date/time manipulation and formatting",
          "Media Utilities — Media file processing endpoints",
          "API Documentation — Interactive Swagger UI at /api-docs",
          "CORS Protection — Configurable origin whitelist"
        ],
        demoLink: "https://utils-express.onrender.com/",
        githubLink: "https://github.com/soehtetpaing/utils-express",
        expanded: false
    },
    {
        id: 1,
        title: "Portfolio 1.0",
        category: "Web Apps",
        image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-1.0.png",
        detailImages : [
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-1.1.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-1.2.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-1.3.png",
          "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/project/project-portfolio-1.4.png",
        ],
        description: "A dynamic, single-page professional portfolio designed to showcase technical expertise and a creative project history. The site features a \'mobile-first\' responsive architecture, utilizing a custom-built JavaScript engine to inject project data dynamically from a structured data set. It balances high-performance aesthetics with functional navigation, incorporating scroll-spy features and interactive UI components to provide an engaging user experience (UX) across all device types.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Animate.css", "ScrollReveal.js"],
        features: [
          "Dynamic Project Rendering",
          "Interactive UI/UX",
          "Sticky Floating Brand Icon",
          "Adaptive Navigation",
          "Skill Visualization"
        ],
        demoLink: "https://soehtetpaing.github.io/portfolio-v1/",
        githubLink: "https://github.com/soehtetpaing/portfolio-v1",
        expanded: false
    }
];
