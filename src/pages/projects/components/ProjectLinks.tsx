import IconWrapper from '../../../components/ui/IconWrapper';
import { GithubIcon, LinkIcon } from '../../../components/ui/Icons';
import type { ProjectLinksProps } from '../data/projectsDataType';

const ProjectLinks = ({ demoLink, repoLink }: ProjectLinksProps) => {
  return (
    <div className="flex gap-2">
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <IconWrapper
            variant="primary"
            wrapperClassName="cursor-pointer shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border w-8 h-8"
          >
            <LinkIcon className="h-6 w-6 stroke-current" />
          </IconWrapper>
        </a>
      )}
      {repoLink && (
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <IconWrapper
            variant="primary"
            wrapperClassName="cursor-pointer shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border w-8 h-8"
          >
            <GithubIcon className="h-6 w-6 stroke-current" />
          </IconWrapper>
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
