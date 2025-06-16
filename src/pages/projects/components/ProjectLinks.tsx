import IconWrapper from '../../../components/ui/IconWrapper';
import { GithubIcon, LinkIcon } from '../../../components/ui/Icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { ProjectLinksProps } from '../data/projectsDataType';

const ProjectLinks = ({ demoLink, repoLink }: ProjectLinksProps) => {
  const { language } = useLanguage();

  return (
    <div className="flex gap-2">
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === 'en' ? 'Visit the live website' : 'Voir le site en ligne'}
        >
          <IconWrapper
            variant="primary"
            wrapperClassName="shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border w-8 h-8"
          >
            <LinkIcon className="h-6 w-6 stroke-current" />
          </IconWrapper>
        </a>
      )}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            language === 'en' ? 'View source code on GitHub' : 'Voir le code source sur GitHub'
          }
        >
          <IconWrapper
            variant="primary"
            wrapperClassName="shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border w-8 h-8"
          >
            <GithubIcon className="h-6 w-6 stroke-current" />
          </IconWrapper>
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
