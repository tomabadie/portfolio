import SocialGlobal from '../../../components/social/SocialGlobal/SocialGlobal';
import { useLanguage } from '../../../contexts/LanguageContext';
import { projectsDataEn } from '../data/projectsData.en';
import { projectsDataFR } from '../data/projectsData.fr';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { language } = useLanguage();
  const projectsList = language === 'en' ? projectsDataEn : projectsDataFR;

  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-start">
      <SocialGlobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold">
          {language === 'en' ? 'My projects' : 'Réalisations'}
        </h2>
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
