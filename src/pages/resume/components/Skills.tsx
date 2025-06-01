import { useLanguage } from '../../../contexts/LanguageContext';
import { skillsDataEN } from '../data/profileData.en';
import { skillsDataFR } from '../data/profileData.fr';

const Skills = () => {
  const { language } = useLanguage();
  const skillsList = language === 'en' ? skillsDataEN : skillsDataFR;

  return <div>Skills</div>;
};

export default Skills;
