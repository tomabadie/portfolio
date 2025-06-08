export type VariantsProps = 'primary' | 'secondary' | 'basic';

const iconVariants: Record<VariantsProps, string> = {
  primary:
    'text-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark border-primary rounded-lg  hover:duration-150 hover:after:duration-150',
  secondary: '',
  basic: 'text-primary',
};

export type IconWrapperProps = React.PropsWithChildren<{
  variant?: VariantsProps;
  wrapperClassName?: string;
}>;

const IconWrapper: React.FC<IconWrapperProps> = ({
  variant = 'primary',
  wrapperClassName,
  children,
}) => {
  return (
    <>
      <span
        className={`transition-theme flex items-center justify-center ${iconVariants[variant]} ${wrapperClassName}`}
      >
        {children}
      </span>
    </>
  );
};

export default IconWrapper;
