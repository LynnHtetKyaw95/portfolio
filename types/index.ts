export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  stack: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Activity {
  type: 'building' | 'learning' | 'interested';
  text: string;
}
