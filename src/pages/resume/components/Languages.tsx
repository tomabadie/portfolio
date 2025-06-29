import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { languagesDataEN } from '../data/profileData.en';
import { languagesDataFR } from '../data/profileData.fr';
import type { LanguagesProps } from '../data/profileDataType';

const Languages = ({ className }: LanguagesProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const languagesList = language === 'en' ? languagesDataEN : languagesDataFR;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.6, once: true });

  return (
    <motion.section
      ref={sectionRef}
      className={`border-primary transition-theme rounded-lg border px-2 py-2 motion-reduce:transition-none ${className} `}
    >
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-4 w-fit border-b-2 font-bold motion-reduce:transition-none">
        {language === 'en' ? 'Languages' : 'Langues'}
      </h3>
      <ul className="flex flex-wrap justify-center p-2">
        {languagesList.map((lang) => {
          const dashOffset = 251 * (1 - lang.levelNumb / 6);
          return (
            <li key={lang.id} className="grid h-28 w-28 place-items-center">
              <h4 className="transition-theme font-bold motion-reduce:transition-none">
                {lang.name}
              </h4>
              <span className="transition-theme col-start-1 col-end-2 row-start-1 row-end-2 font-bold motion-reduce:transition-none">
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
                <motion.circle
                  r="40"
                  strokeDasharray="251"
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 251 }}
                  animate={{ strokeDashoffset: isInView ? dashOffset : 251 }}
                  transition={
                    shouldReduceMotion ? { duration: 0 } : { duration: 2, ease: 'easeInOut' }
                  }
                  className="stroke-accent-light dark:stroke-accent-dark transition-theme translate-50/100 overflow-visible fill-none stroke-4 motion-reduce:transition-none"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default Languages;
