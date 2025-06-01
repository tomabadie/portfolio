import { useLanguage } from '../../../contexts/LanguageContext';
import { experiencesDataEN } from '../data/experiencesData.en';
import { experiencesDataFR } from '../data/experiencesData.fr';

const WorkExperiences = () => {
  const { language } = useLanguage();
  const experiencesList = language === 'en' ? experiencesDataEN : experiencesDataFR;

  return <div>Work Experiences</div>;
};

export default WorkExperiences;
