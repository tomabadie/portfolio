export type VariantsProps = 'primary' | 'secondary';

const iconVariants: Record<VariantsProps, string> = {
  primary:
    'text-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark border-primary border',
  secondary: '',
};

export type IconWrapperProps = React.PropsWithChildren<{
  variant?: VariantsProps;
  className?: string;
}>;

const IconWrapper: React.FC<IconWrapperProps> = ({ variant = 'primary', children }) => {
  return (
    <>
      <span
        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg ${iconVariants[variant]}`}
      >
        {children}
      </span>
    </>
  );
};

export default IconWrapper;
