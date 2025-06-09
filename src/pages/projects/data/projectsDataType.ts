import type { Technology } from '../../resume/data/timelineDataType';

export interface ProjectProps {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  stack: Technology[];
  tags: string[];
  repoLink: string;
  demoLink?: string;
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
}
