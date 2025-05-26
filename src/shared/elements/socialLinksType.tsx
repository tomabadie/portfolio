import type { SVGProps } from 'react';
import type { VariantsProps } from './IconWrapper';

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
