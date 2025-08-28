import { motion, useReducedMotion } from 'motion/react';
import StackList from '../../../components/ui/StackList';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { ProjectCardProps, ProjectProps } from '../data/projectsDataType';
import ProjectLinks from './ProjectLinks';

const ProjectCard = ({ project, setIsOpen, setFocusedProject, index }: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isEven = index % 2 === 0;

  const handleClick = (project: ProjectProps) => {
    setIsOpen(true);
    setFocusedProject(project);
  };

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
      viewport={{ once: true }}
    >
      <article
        className={`border-primary flex w-full flex-col gap-2 rounded-lg border px-2 py-2 lg:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} `}
      >
        <button
          type="button"
          data-cursor="hover"
          className="border-primary flex items-center justify-center overflow-hidden rounded-md border md:max-w-[min(50%,750px)]"
          onClick={() => handleClick(project)}
        >
          <div className="aspect-[2850/1800] w-full">
            <img
              className="text-secondary h-full w-full object-cover transition-transform duration-300 hover:scale-102"
              alt={project.name}
              src={project.img}
              loading="lazy"
            />
          </div>
        </button>

        <div className="flex flex-col gap-2">
          {/* Name */}
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" data-cursor="hover" onClick={() => handleClick(project)}>
              <h3 className="transition-theme hover:text-accent-light dark:hover:text-accent-dark text-start text-lg font-bold motion-reduce:transition-none">
                {project.name}
              </h3>
            </button>
            {project.inProgress && (
              <span className="border-accent-light dark:border-accent-dark transition-theme h-fit rounded-full border px-2.5 py-0.5 text-xs font-medium motion-reduce:transition-none">
                {language === 'en' ? 'In progress' : 'En cours'}
              </span>
            )}
          </div>
          {/* Links */}
          <ProjectLinks demoLink={project.demoLink} repoLink={project.repoLink} />

          {/* Description */}
          <p className="transition-theme text-primary max-w-[80ch] motion-reduce:transition-none">
            {project.shortDescription}
          </p>
          {/* Stack */}
          <ul className="flex flex-wrap">
            {project.stack.map((type) => {
              return (
                <li key={type.name} className="text-secondary flex">
                  {type.category !== 'tool' &&
                    type.category !== 'method' &&
                    type.category !== 'library' && (
                      <StackList type={type} styleVariant="icons" orientationVariant="row" />
                    )}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </motion.article>
  );
};

export default ProjectCard;
