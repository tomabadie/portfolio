import IconWrapper from './IconWrapper';
import type { SocialLinksListProps } from './socialLinksType';

const SocialLinks = ({
  aboutPage = false,
  socialLinksList,
  socialLinksClassName,
}: SocialLinksListProps) => {
  return (
    <div className={socialLinksClassName}>
      {socialLinksList.map((link, index) => (
        <>
          <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
            <IconWrapper
              variant={link.iconVariant}
              wrapperClassName="h-8 w-8 cursor-pointer shadow-sm/30 dark:shadow-sm/50 dark:shadow-btn-primary-hover-dark border"
            >
              {link.iconSvg}
            </IconWrapper>
          </a>
          {aboutPage === true && index === 2 && (
            <p key={link.id} className="hidden font-semibold md:block">
              Download my resume
            </p>
          )}
          {aboutPage === true && index === 3 && (
            <p key={link.id} className="hidden font-semibold md:block">
              abadie.thomas@gmail.com
            </p>
          )}
        </>
      ))}
    </div>
  );
};

export default SocialLinks;
