import { useLanguage } from '../../../contexts/LanguageContext';
import { experiencesDataEN } from '../data/experiencesData.en';
import { experiencesDataFR } from '../data/experiencesData.fr';

const WorkExperiences = () => {
  const { language } = useLanguage();
  const experiencesList = language === 'en' ? experiencesDataEN : experiencesDataFR;

  return (
    <div className="border-primary transition-theme rounded-lg border px-2 py-1">
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Work experiences' : 'Expériences'}
      </h3>
      <ul className="before:bg-border-primary-light dark:before:bg-border-primary-dark transition-theme relative space-y-8 pl-1 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full">
        {experiencesList.map((item) => {
          const startYear = item.startDate.split('/')[1];
          const endYear = !item.endDate ? startYear : item.endDate.split('/')[1];

          return (
            <li key={item.id} className="relative -ms-1.5 flex items-start gap-4">
              <span className="border-accent-light dark:border-accent-dark bg-global-secondary transition-theme size-3 shrink-0 rounded-full border-2" />
              <div className="-mt-2">
                <time className="text-secondary transition-theme text-xs/none font-medium">
                  {startYear === endYear ? endYear : `${startYear} – ${endYear}`} - {item.duration}
                </time>
                <h3 className="transition-theme text-lg font-bold">{item.company}</h3>
                <p className="text-secondary transition-theme mt-0.5 text-sm">{item.position}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkExperiences;
