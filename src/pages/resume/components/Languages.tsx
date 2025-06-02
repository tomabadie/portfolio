import { forwardRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { languagesDataEN } from '../data/profileData.en';
import { languagesDataFR } from '../data/profileData.fr';
import type { LanguagesProps } from '../data/profileDataType';

const Languages = forwardRef<HTMLDivElement, LanguagesProps>(({ visible }, ref) => {
  const { language } = useLanguage();
  const languagesList = language === 'en' ? languagesDataEN : languagesDataFR;

  return (
    <div ref={ref} className="border-primary rounded-lg border px-2 py-1">
      <h3 className="border-b-orange-accent-light dark:border-b-orange-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Languages' : 'Langues'}
      </h3>
      <div className="flex flex-wrap justify-center p-2">
        {languagesList.map((lang) => {
          const dashOffset = 251 * (1 - lang.levelNumb / 6);
          return (
            <div key={lang.id} className="grid h-28 w-28 place-items-center">
              <h4 className="font-bold">{lang.name}</h4>
              <span className="col-start-1 col-end-2 row-start-1 row-end-2 font-bold">
                {lang.levelEu}
              </span>
              <svg className="col-start-1 col-end-2 row-start-1 row-end-2">
                <title>{lang.name}</title>
                <circle
                  r="40"
                  style={{
                    strokeDasharray: '251',
                  }}
                  className="translate-50/100 overflow-visible fill-none stroke-zinc-300 stroke-4"
                />
                <circle
                  r="40"
                  style={{
                    strokeDasharray: '251',
                    strokeDashoffset: visible ? `${dashOffset}` : '251',
                    strokeLinecap: 'round',
                  }}
                  className="stroke-orange-accent-light dark:stroke-orange-accent-dark translate-50/100 overflow-visible fill-none stroke-4 transition-[stroke-dashoffset] duration-2000 ease-in-out"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Languages;
