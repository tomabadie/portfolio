import { useLanguage } from '../../../contexts/LanguageContext';
import { educationDataEN } from '../data/educationData.en';
import { educationDataFR } from '../data/educationData.fr';

const Education = () => {
  const { language } = useLanguage();
  const educationList = language === 'en' ? educationDataEN : educationDataFR;

  return (
    <div className="border-primary transition-theme rounded-lg border px-2 py-1">
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Education' : 'Formation'}
      </h3>
      <ul className="before:bg-border-primary-light dark:before:bg-border-primary-dark transition-theme relative space-y-8 pl-1 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full">
        {educationList.map((item) => {
          return (
            <li key={item.id} className="relative -ms-1.5 flex items-start gap-4">
              <span className="border-accent-light dark:border-accent-dark bg-global-secondary transition-theme size-3 shrink-0 rounded-full border-2" />

              <div className="-mt-2">
                <time className="text-secondary text-xs/none font-medium">{item.endDate}</time>

                <h3 className="text-lg font-bold">{item.company}</h3>

                <p className="text-secondary mt-0.5 text-sm">{item.position}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
