import type { SVGProps } from 'react';
import type { VariantsProps } from './IconWrapper';
import IconWrapper from './IconWrapper';

export interface SocialLinksListProps {
  aboutPage?: boolean;
  socialLinksList: SocialLinkProps[];
  socialLinksClassName: string;
}

export interface SocialLinkProps {
  id: string;
  href: string;
  iconSvg: React.ReactElement<SVGProps<SVGSVGElement>>;
  iconVariant: VariantsProps;
}

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
            <IconWrapper variant={link.iconVariant}>{link.iconSvg}</IconWrapper>
          </a>
          {aboutPage === true && index === 2 && (
            <p key={link.id} className="font-semibold">
              Download my resume
            </p>
          )}
          {aboutPage === true && index === 3 && (
            <p key={link.id} className="font-semibold">
              abadie.thomas@gmail.com
            </p>
          )}
        </>
      ))}
    </div>
  );
};

export default SocialLinks;
