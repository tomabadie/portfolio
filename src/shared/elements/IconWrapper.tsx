type VariantsProps = 'primary' | 'secondary';

const iconVariants: Record<VariantsProps, string> = {
  primary:
    'text-primary bg-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark border-primary border',
  secondary: 'btn-primary',
};

export type IconWrapperProps = React.PropsWithChildren<{
  variant?: VariantsProps;
  className?: string;
}>;

const IconWrapper: React.FC<IconWrapperProps> = ({ variant = 'primary', className, children }) => {
  return (
    <>
      <span
        className={`${className} flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg ${iconVariants[variant]}`}
      >
        {children}
      </span>
    </>
  );
};

export default IconWrapper;
