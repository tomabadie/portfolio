export interface HardSkill {
  id: string;
  label: string;
  category: 'language' | 'framework' | 'tool' | 'method';
  level: number;
  icon?: string;
}

export interface SkillsProps {
  className: string;
  visible: boolean;
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
  visible: boolean;
}
