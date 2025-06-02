import { useLanguage } from '../../../contexts/LanguageContext';
import { softSkillsDataEN } from '../data/profileData.en';
import { softSkillsDataFR } from '../data/profileData.fr';

const SoftSkills = () => {
  const { language } = useLanguage();
  const softSkillsList = language === 'en' ? softSkillsDataEN : softSkillsDataFR;

  return (
    <section className="border-primary transition-theme rounded-lg border px-2 py-1">
      <h3 className="border-b-accent-light dark:border-b-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Soft Skills' : 'Personnalité'}
      </h3>
      <ul className="flex flex-row flex-wrap justify-between">
        {softSkillsList.map((skill) => {
          return (
            <li key={skill.id} className="border-primary min-w-28 rounded-sm border px-1">
              {skill.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SoftSkills;
