import type { SVGProps } from 'react';
import type { VariantsProps } from './IconWrapper';
import IconWrapper from './IconWrapper';

export interface SocialLinksListProps {
  socialLinksList: SocialLinkProps[];
  socialLinksClassName: string;
}

export interface SocialLinkProps {
  id: string;
  href: string;
  iconSvg: React.ReactElement<SVGProps<SVGSVGElement>>;
  iconVariant: VariantsProps;
}

const SocialLinksAbout = ({ socialLinksList, socialLinksClassName }: SocialLinksListProps) => {
  return (
    <div className="flex flex-col gap-3">
      {socialLinksList.map((link) => (
        <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
          <IconWrapper variant={link.iconVariant}>{link.iconSvg}</IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default SocialLinksAbout;
