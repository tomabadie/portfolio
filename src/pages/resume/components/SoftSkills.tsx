import { useLanguage } from '../../../contexts/LanguageContext';
import { softSkillsDataEN } from '../data/profileData.en';
import { softSkillsDataFR } from '../data/profileData.fr';
import type { SoftSkillsProps } from '../data/profileDataType';

const SoftSkills = ({ className }: SoftSkillsProps) => {
  const { language } = useLanguage();
  const softSkillsList = language === 'en' ? softSkillsDataEN : softSkillsDataFR;

  return (
    <section className={`border-primary transition-theme rounded-lg border px-2 py-2 ${className}`}>
      <h3 className="border-b-accent-light dark:border-b-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Soft Skills' : 'Personnalité'}
      </h3>
      <ul className="grid list-inside list-disc grid-cols-2 gap-2">
        {softSkillsList.map((skill) => {
          return (
            <li key={skill.id} className="w-fit justify-self-start rounded-sm px-1">
              {skill.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SoftSkills;
