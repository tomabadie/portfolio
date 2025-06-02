import { useLanguage } from '../../../contexts/LanguageContext';
import { skillsDataEN } from '../data/profileData.en';
import { skillsDataFR } from '../data/profileData.fr';

const Skills = () => {
  const { language } = useLanguage();
  const skillsList = language === 'en' ? skillsDataEN : skillsDataFR;

  return (
    <div className="border-primary rounded-lg border px-2 py-1">
      <h3 className="border-b-orange-accent-light dark:border-b-orange-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Skills' : 'Compétences'}
      </h3>
    </div>
  );
};

export default Skills;
