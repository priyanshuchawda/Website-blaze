export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  liveLink?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'aiml' | 'tool';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  title: string;
  company: string;
  text: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  image: string;
  social: {
    github: string;
    linkedin: string;
    telegram: string;
  };
  skills: string[];
}