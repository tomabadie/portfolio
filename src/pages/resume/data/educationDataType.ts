export interface Technology {
  name: string;
  content: string[];
}

export interface EducationProps {
  id: string;
  type: 'formation' | 'training';
  company: string;
  link: string;
  position: string;
  location: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  context?: string;
  description: string;
  achievements: string[];
  technologies?: Technology[];
  keywords: string[];
}
