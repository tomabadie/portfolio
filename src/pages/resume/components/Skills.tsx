import { motion, useInView, useReducedMotion } from 'motion/react';
import { Fragment, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { projectsDataEn } from '../../projects/data/projectsData.en';
import { projectsDataFr } from '../../projects/data/projectsData.fr';
import { skillsDataEN } from '../data/profileData.en';
import { skillsDataFR } from '../data/profileData.fr';
import type { SkillProjects, SkillsProps, TechMap } from '../data/profileDataType';
import SkillsDialog from './SkillsDialog';

const Skills = ({ className }: SkillsProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const skillsList = language === 'en' ? skillsDataEN : skillsDataFR;
  const projectsList = language === 'en' ? projectsDataEn : projectsDataFr;

  /* Animations */

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedSkill, setFocusedSkill] = useState<SkillProjects | null>(null);

  const handleClick = (skill: SkillProjects) => {
    setIsOpen(true);
    setFocusedSkill(skill);
  };

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
              techMap[skill.id] = { label: skill.label, category: skill.category, projects: [] };
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

    return Object.entries(techMap).sort((entryA, entryB) => {
      const a = entryA[1];
      const b = entryB[1];
      if (a.projects.length > 0 && b.projects.length === 0) return -1;
      if (a.projects.length === 0 && b.projects.length > 0) return 1;
      return 0;
    });
  }, [skillsList, projectsList]);

  return (
    <>
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
          {technologiesMap.map(([id, skill], index) => {
            const maxProjectsDisplayed = 3;
            const displayedProjects = skill.projects.slice(0, maxProjectsDisplayed);
            const extraCount = Math.max(skill.projects.length - maxProjectsDisplayed, 0);
            const isFirstWithoutProjects =
              skill.projects.length === 0 &&
              (index === 0 || technologiesMap[index - 1][1].projects.length > 0);

            return (
              <Fragment key={id}>
                {isFirstWithoutProjects && (
                  <div className="col-span-full mt-4 mb-2">
                    <h4 className="text-primary font-semibold">
                      {language === 'en' ? 'Currently learning' : "En cours d'apprentissage"}
                    </h4>
                  </div>
                )}
                <motion.li
                  data-cursor="hover"
                  className="border-primary hover:border-accent-primary-light transition-theme dark:hover:border-accent-primary-dark group rounded-sm border motion-reduce:transition-none"
                  variants={animatedListItem}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                >
                  <button
                    type="button"
                    className="flex h-full w-full flex-col justify-start px-2 py-2 text-start"
                    onClick={() => handleClick(skill)}
                  >
                    <div className="flex justify-between">
                      <h4 className="group-hover:text-accent-light dark:group-hover:text-accent-dark transition-theme w-fit font-bold motion-reduce:transition-none">
                        {skill.label}
                      </h4>
                    </div>
                    <ul className="list-inside list-disc text-sm">
                      {skill.projects.length === 0 ? (
                        <span>{language === 'en' ? 'Currently learning' : 'En cours'}</span>
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
                  </button>
                </motion.li>
              </Fragment>
            );
          })}
        </motion.ul>
      </motion.section>
      <SkillsDialog isOpen={isOpen} setIsOpen={setIsOpen} focusedSkill={focusedSkill} />
    </>
  );
};

export default Skills;
