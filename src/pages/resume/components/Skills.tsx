import { useLanguage } from '../../../contexts/LanguageContext';
import { skillsDataEN } from '../data/profileData.en';
import { skillsDataFR } from '../data/profileData.fr';

const Skills = () => {
  const { language } = useLanguage();
  const skillsList = language === 'en' ? skillsDataEN : skillsDataFR;

  return (
    <div className="border-primary rounded-lg border px-2 py-1">
      <h3 className="border-b-orange-accent-light dark:border-b-orange-accent-dark mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Skills' : 'Compétences'}
      </h3>
      <ul className="flex flex-col">
        {skillsList.map((skill) => {
          return (
            <li key={skill.id} className="py-2">
              <h4 className="w-fit font-bold">{skill.label}</h4>
              {/* 
              To use later : rank by category
              <span className="border border-purple-500">{skill.category}</span>
              */}
              <div className="border-orange-accent-light dark:border-orange-accent-dark h-2.5 w-full rounded-full border p-0.5">
                <div
                  className="bg-orange-accent-light dark:bg-orange-accent-dark mr-auto h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
