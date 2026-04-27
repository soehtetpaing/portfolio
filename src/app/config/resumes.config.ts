export interface Resume {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
}

export const resumes: Resume[] = [
    {
      id: 3,
      title: "Software Engineer",
      category: "REST APIs, UI/UX",
      image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/resume/resume-3.0.png",
      description: "Complete brand identity package for a tech startup including logo design, color palette, typography, and brand guidelines.",
      link: "https://canva.link/4eu6hr8fn3o7t6j"
    },
    {
      id: 2,
      title: "Backend Developer",
      category: "REST APIs",
      image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/resume/resume-2.0.png",
      description: "Modern mobile app interface with intuitive navigation and beautiful animations for a fitness tracking application.",
      link: "https://canva.link/3w4737p0rep3p47"
    },
    {
      id: 1,
      title: "Frontend Developer",
      category: "UI/UX Design",
      image: "https://cdn.jsdelivr.net/gh/soehtetpaing/cdn-assets@v1.0.2/image/resume/resume-1.0.png",
      description: "Complete website redesign for a corporate client focusing on modern aesthetics and improved user experience.",
      link: "https://canva.link/0bh26yrza0r0wdm"
    }
];
