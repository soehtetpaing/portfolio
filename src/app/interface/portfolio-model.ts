export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  detailImage: string;
  description: string;
  tech: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
  expanded: boolean;
}

export interface Resume {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  subject?: string;
}
