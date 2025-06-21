import { useLanguage } from '../../contexts/LanguageContext';
import IconWrapper from '../ui/IconWrapper';
import type { SocialLinksListProps } from './data/socialLinksType';

const SocialLinks = ({
  aboutPage = false,
  socialLinksList,
  socialLinksClassName,
}: SocialLinksListProps) => {
  const { language } = useLanguage();

  return (
    <nav aria-label="social media links and more about me">
      <ul className={socialLinksClassName}>
        {socialLinksList.map((link, index) => (
          <li key={link.id} className="flex flex-col items-center gap-2">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={language === 'en' ? link.title.en : link.title.fr}
            >
              <IconWrapper
                variant={link.iconVariant}
                wrapperClassName="h-8 w-8 shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border"
              >
                {link.iconSvg}
              </IconWrapper>
            </a>
            {aboutPage === true && index === 2 && (
              <p className="hidden font-semibold md:block">
                {' '}
                {language === 'en' ? 'Download my resume' : 'Télécharger mon CV'}{' '}
              </p>
            )}
            {aboutPage === true && index === 3 && (
              <p className="hidden font-semibold md:block">abadie.thomas@gmail.com</p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
