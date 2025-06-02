export interface HardSkill {
  id: string;
  label: string;
  category: 'language' | 'framework' | 'tool' | 'method';
  level?: 1 | 2 | 3;
  icon?: string;
}

export interface SoftSkill {
  id: string;
  label: string;
}

export interface LanguageLevel {
  id: string;
  name: string;
  levelEu: string;
  levelNumb: number;
}

export interface LanguagesProps {
  visible: boolean;
}
