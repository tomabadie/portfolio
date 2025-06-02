import { useLanguage } from '../../../contexts/LanguageContext';
import { softSkillsDataEN } from '../data/profileData.en';
import { softSkillsDataFR } from '../data/profileData.fr';

const SoftSkills = () => {
  const { language } = useLanguage();
  const softSkillsList = language === 'en' ? softSkillsDataEN : softSkillsDataFR;

  return (
    <div className="border-primary rounded-lg border px-2 py-1">
      <h3 className="font-bold">{language === 'en' ? 'Soft Skills' : 'Personnalité'}</h3>
      <ul className="flex flex-row flex-wrap justify-between">
        {softSkillsList.map((skill) => {
          return (
            <li key={skill.id} className="border-primary min-w-28 rounded-sm border px-1">
              {skill.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SoftSkills;
