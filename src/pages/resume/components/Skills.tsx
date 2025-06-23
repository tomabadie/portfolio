import { motion, useInView, useReducedMotion } from 'motion/react';
import { useMemo, useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { projectsDataEn } from '../../projects/data/projectsData.en';
import { projectsDataFr } from '../../projects/data/projectsData.fr';
import type { TechMap } from '../../projects/data/projectsDataType';
import { skillsDataEN } from '../data/profileData.en';
import { skillsDataFR } from '../data/profileData.fr';
import type { SkillsProps } from '../data/profileDataType';

const Skills = ({ className }: SkillsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const skillsList = language === 'en' ? skillsDataEN : skillsDataFR;
  const projectsList = language === 'en' ? projectsDataEn : projectsDataFr;

  /* Animations */

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

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

  /* Projects - TechMap */

  const technologiesMap = useMemo(() => {
    const techMap: TechMap = {};

    for (const project of projectsList) {
      for (const technology of project.stack) {
        for (const item of technology.content) {
          for (const skill of skillsList) {
            if (!techMap[skill.id]) {
              techMap[skill.id] = { label: skill.label, projects: [] };
            }
            if (item.toLowerCase() === skill.id) {
              if (!techMap[skill.id].projects.includes(project.name)) {
                techMap[skill.id].projects.push(project.name);
              }
            }
          }
        }
      }
    }

    return Object.entries(techMap);
  }, [skillsList, projectsList]);

  return (
    <motion.section
      ref={sectionRef}
      className={`border-primary transition-theme rounded-lg border px-2 py-2 motion-reduce:transition-none ${className} `}
    >
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-4 w-fit border-b-2 font-bold motion-reduce:transition-none">
        {language === 'en' ? 'Skills' : 'Compétences'}
      </h3>

      <motion.ul
        className="grid grid-cols-2 gap-2 lg:grid-cols-3"
        variants={shouldReduceMotion ? undefined : animatedList}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {technologiesMap.map(([id, skill]) => {
          const maxProjectsDisplayed = 2;
          const displayedProjects = skill.projects.slice(0, maxProjectsDisplayed);
          const extraCount = Math.max(skill.projects.length - maxProjectsDisplayed, 0);

          return (
            <motion.li
              key={id}
              data-cursor="hover"
              className="border-primary hover:border-accent-primary-light transition-theme dark:hover:border-accent-primary-dark group rounded-sm border px-2 py-2 motion-reduce:transition-none"
              variants={animatedListItem}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
            >
              <h4 className="group-hover:text-accent-light dark:group-hover:text-accent-dark transition-theme w-fit font-bold motion-reduce:transition-none">
                {skill.label}
              </h4>
              <ul className="list-inside list-disc">
                {skill.projects.length === 0 ? (
                  <li>{language === 'en' ? 'Still learning' : 'En cours'}</li>
                ) : (
                  <>
                    {displayedProjects.map((project) => {
                      return <li key={project}>{project}</li>;
                    })}
                    {extraCount !== 0 && (
                      <span>
                        {language === 'en'
                          ? `and ${extraCount} more...`
                          : `et ${extraCount} de plus...`}{' '}
                      </span>
                    )}
                  </>
                )}
              </ul>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
