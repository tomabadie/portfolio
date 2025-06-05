import { forwardRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { skillsDataEN } from '../data/profileData.en';
import { skillsDataFR } from '../data/profileData.fr';
import type { SkillsProps } from '../data/profileDataType';

const Skills = forwardRef<HTMLElement, SkillsProps>(({ className, visible }, ref) => {
  const { language } = useLanguage();
  const skillsList = language === 'en' ? skillsDataEN : skillsDataFR;

  return (
    <section
      ref={ref}
      className={`border-primary transition-theme rounded-lg border px-2 py-2 ${className} `}
    >
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-4 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Skills' : 'Compétences'}
      </h3>
      <ul className="grid grid-cols-2 gap-2">
        {skillsList.map((skill) => {
          return (
            <li key={skill.id} className="py-2">
              <h4 className="w-fit font-bold">{skill.label}</h4>
              {/* 
              To use later : rank by category
              <span className="border border-purple-500">{skill.category}</span>
              */}
              <div className="border-accent-light dark:border-accent-dark transition-theme h-2.5 w-full rounded-full border p-0.5">
                <div
                  style={{ width: visible ? `${skill.level}%` : 0 }}
                  className="bg-accent-light dark:bg-accent-dark transition-theme mr-auto h-full rounded-full transition-[width] duration-2000 ease-in-out"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
});

export default Skills;
