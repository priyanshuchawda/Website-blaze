import { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', icon: 'code', category: 'language' },
  { name: 'TypeScript', icon: 'file-code', category: 'language' },
  { name: 'Python', icon: 'code', category: 'language' },
  { name: 'Java', icon: 'code', category: 'language' },
  { name: 'C++', icon: 'code', category: 'language' },
  { name: 'SQL', icon: 'database', category: 'language' },
  
  // Frameworks
  { name: 'React', icon: 'component', category: 'framework' },
  { name: 'Next.js', icon: 'layout', category: 'framework' },
  { name: 'Node.js', icon: 'server', category: 'framework' },
  { name: 'Express', icon: 'server', category: 'framework' },
  { name: 'Django', icon: 'layout', category: 'framework' },
  { name: 'TailwindCSS', icon: 'palette', category: 'framework' },
  { name: 'Flask', icon: 'flask-conical', category: 'framework' },
  
  // AI/ML
  { name: 'TensorFlow', icon: 'brain', category: 'aiml' },
  { name: 'PyTorch', icon: 'brain', category: 'aiml' },
  { name: 'Scikit-Learn', icon: 'brain', category: 'aiml' },
  { name: 'OpenAI API', icon: 'bot', category: 'aiml' },
  { name: 'Hugging Face', icon: 'bot', category: 'aiml' },
  { name: 'Computer Vision', icon: 'eye', category: 'aiml' },
  { name: 'NLP', icon: 'message-square', category: 'aiml' },
  
  // Tools
  { name: 'Git', icon: 'git-branch', category: 'tool' },
  { name: 'Docker', icon: 'container', category: 'tool' },
  { name: 'AWS', icon: 'cloud', category: 'tool' },
  { name: 'MongoDB', icon: 'database', category: 'tool' },
  { name: 'PostgreSQL', icon: 'database', category: 'tool' },
  { name: 'Firebase', icon: 'flame', category: 'tool' },
  { name: 'GraphQL', icon: 'webhook', category: 'tool' },
  { name: 'Redis', icon: 'database', category: 'tool' },
];