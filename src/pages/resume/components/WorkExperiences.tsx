import { useLanguage } from '../../../contexts/LanguageContext';
import { experiencesDataEN } from '../data/experiencesData.en';
import { experiencesDataFR } from '../data/experiencesData.fr';
import type { WorkExperiencesProps } from '../data/timelineDataType';
import Timeline from './Timeline';

const WorkExperiences = ({ className }: WorkExperiencesProps) => {
  const { language } = useLanguage();
  const experiencesList = language === 'en' ? experiencesDataEN : experiencesDataFR;

  return (
    <section
      className={`border-primary transition-theme rounded-lg border px-2 py-2 motion-reduce:transition-none ${className} `}
    >
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-4 w-fit border-b-2 font-bold motion-reduce:transition-none">
        {language === 'en' ? 'Work experiences' : 'Expériences'}
      </h3>
      <Timeline timelineList={experiencesList} />
    </section>
  );
};

export default WorkExperiences;
