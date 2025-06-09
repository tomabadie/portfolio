import type { SVGProps } from 'react';
import type { VariantsProps } from '../../../ui/IconWrapper';

export interface NavigationItemProps {
  id: string;
  name: string;
  path: string;
  info: string;
  iconSvg: React.ReactElement<SVGProps<SVGSVGElement>>;
  iconVariant: VariantsProps;
}
