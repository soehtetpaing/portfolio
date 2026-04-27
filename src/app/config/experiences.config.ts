export interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    logoColor: string;
    logoUrl: string;
}

export const experiences: Experience[] = [
    {
        id: 3,
        company: "Myanmar Information Technology",
        position: "Developer (Full Stack/Module Lead)",
        period: "Aug 2024 - Present",
        location: "No.656, Maha Thukhitar Road, Insein Township",
        description: "experience.descriptionId3",
        responsibilities: [
        "Design and deliver system integrations, performance optimizations, and built cross‑platform applications for web and mobile",
        "Mentor and lead junior developers and conduct code reviews to ensure high-quality deliverables",
        "Collaborate with third‑party teams to implement payment gateways & other backend services, ensuring secure and reliable processing"
        ],
        technologies: ["REST APIs", "Java", "Angular", "TypeScript", "AngularJS", "MSSQL", "PostgreSQL", "Android ADT", "C#", "GitLab"],
        logoColor: "#e42781",
        logoUrl: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/company/mit.jpg"
    },
    {
        id: 2,
        company: "Soft Guide",
        position: "Web Developer Intern",
        period: "May 2024 - Jul 2024",
        location: "No.575B, Pyay Road, Kamuryut Township, Yangon, Myanmar",
        description: "experience.descriptionId2",
        responsibilities: [
        "Calculator Mini Project",
        "Online Shop Mini Project",
        "Student Communication System - Studcom"
        ],
        technologies: ["PHP", "Laravel", "phpMyAdmin", "Git", "GitHub"],
        logoColor: "#05881f",
        logoUrl: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/company/softguide.jpg"
    },
    {
        id: 1,
        company: "University of Computer Studies, Pyay",
        position: "Bachelor of Computer Science (B.C.Sc)",
        period: "Nov 2016 - Mar 2024",
        location: "Pyay Aunglan Main Road, Pyay Wetern, Pyay",
        description: "experience.descriptionId1",
        responsibilities: [
        "6D (Qualified to M.C.Sc) (5th year 2024)",
        "The Best Project Award 2024 and 3rd Prize in ITPC with Trip Advisor, Srikestra",
        "Top 10 web project at Student Exhibation 2018 – Sri Ksetra",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "JavaSE", "JavaEE", "C#", "ASP.NET", "DBMS", "MySQL", "SE"],
        logoColor: "#0471ac",
        logoUrl: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/company/ucsp.jpg"
    }
];
