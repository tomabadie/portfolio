import { useLanguage } from '../../../contexts/LanguageContext';
import { educationDataEN } from '../data/educationData.en';
import { educationDataFR } from '../data/educationData.fr';
import type { EducationProps } from '../data/timelineDataType';
import Timeline from './Timeline';

const Education = ({ className }: EducationProps) => {
  const { language } = useLanguage();
  const educationList = language === 'en' ? educationDataEN : educationDataFR;

  return (
    <section className={`border-primary transition-theme rounded-lg border px-2 py-2 ${className}`}>
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-4 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Education' : 'Formation'}
      </h3>
      <Timeline timelineList={educationList} />
    </section>
  );
};

export default Education;
