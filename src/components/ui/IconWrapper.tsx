export type VariantsProps = 'square-link' | 'rounded-button' | 'plain';

const iconVariants: Record<VariantsProps, string> = {
  'square-link':
    'text-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark border-primary rounded-lg  hover:duration-150 hover:after:duration-150 motion-reduce:transition-none',
  'rounded-button':
    'border-primary text-primary transition-theme rounded-full border motion-reduce:transition-none',
  plain: 'text-primary',
};

export type IconWrapperProps = React.PropsWithChildren<{
  variant?: VariantsProps;
  wrapperClassName?: string;
}>;

const IconWrapper: React.FC<IconWrapperProps> = ({
  variant = 'plain',
  wrapperClassName,
  children,
}) => {
  return (
    <>
      <span
        data-cursor={(variant === 'square-link' || variant === 'rounded-button') && 'hover'}
        className={`transition-theme flex items-center justify-center motion-reduce:transition-none ${iconVariants[variant]} ${wrapperClassName}`}
      >
        {children}
      </span>
    </>
  );
};

export default IconWrapper;
