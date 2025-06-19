export interface Technology {
  name: string;
  content: string[];
}

export interface TimelineItem {
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

export interface TimelineProps {
  timelineList: TimelineItem[];
}

export interface TimelineDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  focusedItem: TimelineItem | null;
}

export interface WorkExperiencesProps {
  className: string;
}

export interface EducationProps {
  className: string;
}
