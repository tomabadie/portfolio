export interface Skill {
  id: string;
  label: string;
  category: 'language' | 'framework' | 'tool' | 'method';
  level?: 1 | 2 | 3;
  icon?: string;
}

export interface PersonalityItem {
  id: string;
  label: string;
}

export interface LanguageLevel {
  id: string;
  name: string;
  level: number;
}
