import { SkillCategory, Activity } from '@/types';

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Prisma', 'REST APIs']
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['PostgreSQL']
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Vercel']
  }
];

export const activities: Activity[] = [
  { type: 'building', text: 'Hotel Reservation System' },
  { type: 'learning', text: 'System Design' },
  { type: 'interested', text: 'Scalable Web Applications' }
];
