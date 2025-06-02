import { useLanguage } from '../../../contexts/LanguageContext';
import { experiencesDataEN } from '../data/experiencesData.en';
import { experiencesDataFR } from '../data/experiencesData.fr';

const WorkExperiences = () => {
  const { language } = useLanguage();
  const experiencesList = language === 'en' ? experiencesDataEN : experiencesDataFR;

  return (
    <div className="border-primary rounded-lg border px-2 py-1">
      <h3 className="border-b-orange-accent-light dark:border-b-orange-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Work experiences' : 'Expériences'}
      </h3>
    </div>
  );
};

export default WorkExperiences;
