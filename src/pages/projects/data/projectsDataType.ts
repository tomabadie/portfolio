import type { Technology } from '../../resume/data/timelineDataType';

export interface ProjectProps {
  id: string;
  name: string;
  img: string;
  shortDescription: string;
  detailedDescription: string;
  stack: Technology[];
  tags: string[];
  demoLink?: string;
  repoLink: string;
  contributions: string[];
  context: {
    type: string;
    solo: boolean;
    fromGroupProject?: boolean;
    comment?: string;
  };
  inProgress?: boolean;
}

export interface ProjectCardProps {
  project: ProjectProps;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedProject: React.Dispatch<React.SetStateAction<ProjectProps | null>>;
  index: number;
}

export interface ProjectDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  focusedProject: ProjectProps | null;
}

export interface ProjectLinksProps {
  demoLink: string | undefined;
  repoLink: string | undefined;
}
