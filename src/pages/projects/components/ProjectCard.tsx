import { useLanguage } from '../../../contexts/LanguageContext';
import type { ProjectCardProps } from '../data/projectsDataType';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language } = useLanguage();

  return (
    <article className="w-full px-2">
      <div className="flex gap-2">
        <h3 className="text-l transition-theme my-2 font-bold">{project.title}</h3>
        {project.inProgress && (
          <span className="border-accent-light dark:border-accent-dark transition-theme h-fit rounded-full border px-2.5 py-0.5 text-xs font-medium">
            {language === 'en' ? 'In progress' : 'En cours'}
          </span>
        )}
      </div>
      <p className="transition-theme text-primary max-w-[80ch]">{project.shortDescription}</p>
    </article>
  );
};

export default ProjectCard;
