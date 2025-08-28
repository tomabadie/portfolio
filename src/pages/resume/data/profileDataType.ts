import type { TechnologyCategory } from './timelineDataType';

export interface HardSkill {
  id: string;
  label: string;
  category: TechnologyCategory;
  icon?: string;
}

export interface SkillProjects {
  label: string;
  category: TechnologyCategory;
  projects: string[];
}

export interface TechMap {
  [key: string]: SkillProjects;
}

export interface SkillsDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  focusedSkill: SkillProjects | null;
}

export interface SkillsProps {
  className: string;
}

export interface SoftSkill {
  id: string;
  label: string;
  long: boolean;
}

export interface SoftSkillsProps {
  className: string;
}

export interface LanguageLevel {
  id: string;
  name: string;
  levelEu: string;
  levelNumb: number;
}

export interface LanguagesProps {
  className: string;
}
