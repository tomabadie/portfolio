import { useState } from 'react';
import SocialGlobal from '../../../components/social/SocialGlobal/SocialGlobal';
import { useLanguage } from '../../../contexts/LanguageContext';
import { projectsDataEn } from '../data/projectsData.en';
import { projectsDataFR } from '../data/projectsData.fr';
import type { ProjectProps } from '../data/projectsDataType';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';

const Projects = () => {
  const { language } = useLanguage();
  const projectsList = language === 'en' ? projectsDataEn : projectsDataFR;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedProject, setFocusedProject] = useState<ProjectProps | null>(null);

  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-start">
      <SocialGlobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 motion-reduce:transition-none sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
          {language === 'en' ? 'My projects' : 'Réalisations'}
        </h2>
        {projectsList.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            project={project}
            setIsOpen={setIsOpen}
            setFocusedProject={setFocusedProject}
          />
        ))}
      </section>
      <ProjectDialog isOpen={isOpen} setIsOpen={setIsOpen} focusedProject={focusedProject} />
    </div>
  );
};

export default Projects;
