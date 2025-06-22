import type { SVGProps } from 'react';
import type { VariantsProps } from '../../ui/IconWrapper';

export interface SocialLinksListProps {
  aboutPage?: boolean;
  socialLinksList: SocialLinkProps[];
  socialLinksClassName: string;
}

interface SocialLinkTitleProps {
  en: string;
  fr: string;
}

export interface SocialLinkProps {
  id: string;
  href: string;
  title: SocialLinkTitleProps;
  iconSvg: React.ReactElement<SVGProps<SVGSVGElement>>;
  iconVariant: VariantsProps;
}
