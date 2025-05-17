export type VariantsProps = 'primary' | 'secondary';

const iconVariants: Record<VariantsProps, string> = {
  primary:
    'text-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark border-primary border rounded-lg',
  secondary: '',
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
        className={`flex items-center justify-center ${iconVariants[variant]} ${wrapperClassName}`}
      >
        {children}
      </span>
    </>
  );
};

export default IconWrapper;
