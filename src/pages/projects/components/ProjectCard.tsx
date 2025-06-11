import IconWrapper from '../../../components/ui/IconWrapper';
import { GithubIcon, LinkIcon } from '../../../components/ui/Icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { ProjectCardProps, ProjectProps } from '../data/projectsDataType';
import ProjectStack from './ProjectStack';

const ProjectCard = ({ project, setIsOpen, setFocusedProject, index }: ProjectCardProps) => {
  const { language } = useLanguage();
  const isEven = index % 2 === 0;

  const handleClick = (project: ProjectProps) => {
    setIsOpen(true);
    setFocusedProject(project);
  };

  return (
    <article
      className={`border-primary flex w-full flex-col gap-2 rounded-lg border px-2 py-2 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} `}
    >
      <button
        type="button"
        className="border-primary flex cursor-pointer items-center justify-center rounded-md border p-1 md:max-w-[min(50%,384px)]"
        onClick={() => handleClick(project)}
      >
        <img
          className="text-secondary h-full w-full object-cover"
          alt={project.name}
          src={project.img}
          loading="lazy"
        />
      </button>

      <div className="flex flex-col gap-2">
        {/* Name */}
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => handleClick(project)}>
            <h3 className="transition-theme hover:text-accent-light dark:hover:text-accent-dark cursor-pointer text-start text-lg font-bold">
              {project.name}
            </h3>
          </button>
          {project.inProgress && (
            <span className="border-accent-light dark:border-accent-dark transition-theme h-fit rounded-full border px-2.5 py-0.5 text-xs font-medium">
              {language === 'en' ? 'In progress' : 'En cours'}
            </span>
          )}
        </div>
        {/* Links */}
        <div className="flex gap-2">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <IconWrapper
              variant="primary"
              wrapperClassName="cursor-pointer shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border w-8 h-8"
            >
              <LinkIcon className="h-6 w-6 stroke-current" />
            </IconWrapper>
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <IconWrapper
              variant="primary"
              wrapperClassName="cursor-pointer shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border w-8 h-8"
            >
              <GithubIcon className="h-6 w-6 stroke-current" />
            </IconWrapper>
          </a>
        </div>
        {/* Description */}
        <p className="transition-theme text-primary max-w-[80ch]">{project.shortDescription}</p>
        {/* Stack */}
        <ul className="flex flex-wrap">
          {project.stack.map((type) => {
            return (
              <li key={type.name} className="text-secondary flex">
                {type.name !== 'Tools' && <ProjectStack type={type} variant="icons" />}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
