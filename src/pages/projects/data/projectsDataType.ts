export interface ProjectProps {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
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
}
