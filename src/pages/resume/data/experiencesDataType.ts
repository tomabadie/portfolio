import type { Technology } from './educationDataType';

export interface ExperienceProps {
  id: string;
  type:
    | 'emploi'
    | 'stage'
    | 'formation'
    | 'bénévolat'
    | 'job'
    | 'internship'
    | 'training'
    | 'volunteering';
  company: string;
  link: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  duration?: string;
  context?: string;
  description: string;
  achievements: string[];
  stack?: Technology[];
  keywords: string[];
}
