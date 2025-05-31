export interface ExperienceProps {
  id: string;
  type:
    | 'emploi'
    | 'stage'
    | 'formation'
    | 'bénévolat'
    | 'job'
    | 'intership'
    | 'training'
    | 'volunteering';
  company: string;
  link: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  duration?: string;
  context?: string;
  description: string;
  achievements: string[];
  technologies?: {
    languages?: string[];
    frameworks?: string[];
    libraries?: string[];
    databases?: string[];
    tools?: string[];
  };
  keywords: string[];
}
