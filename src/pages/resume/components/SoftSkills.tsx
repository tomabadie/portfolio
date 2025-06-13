import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { softSkillsDataEN } from '../data/profileData.en';
import { softSkillsDataFR } from '../data/profileData.fr';
import type { SoftSkillsProps } from '../data/profileDataType';

const SoftSkills = ({ className }: SoftSkillsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const softSkillsList = language === 'en' ? softSkillsDataEN : softSkillsDataFR;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animatedList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const animatedListItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={`border-primary transition-theme rounded-lg border px-2 py-2 ${className}`}>
      <h3 className="border-b-accent-light dark:border-b-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Soft Skills' : 'Personnalité'}
      </h3>
      <motion.ul
        ref={ref}
        className="grid list-inside list-disc grid-cols-2 gap-2"
        variants={animatedList}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {softSkillsList.map((skill) => {
          return (
            <motion.li
              key={skill.id}
              className="w-fit justify-self-start rounded-sm px-1 opacity-0"
              variants={animatedListItem}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
            >
              {skill.label}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default SoftSkills;
