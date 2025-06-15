import IconWrapper from '../../ui/IconWrapper';
import type { SocialLinksListProps } from './socialLinksType';

const SocialLinks = ({
  aboutPage = false,
  socialLinksList,
  socialLinksClassName,
}: SocialLinksListProps) => {
  return (
    <nav aria-label="social media links and more about me">
      <ul className={socialLinksClassName}>
        {socialLinksList.map((link, index) => (
          <li key={link.id} className="flex flex-col items-center gap-2">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <IconWrapper
                variant={link.iconVariant}
                wrapperClassName="h-8 w-8 shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border"
              >
                {link.iconSvg}
              </IconWrapper>
            </a>
            {aboutPage === true && index === 2 && (
              <p className="hidden font-semibold md:block">Download my resume</p>
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
