const iconVariants = {
  primary:
    'text-primary bg-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark border-primary border',
  secondary: '',
};

const IconWrapper = () => {
  return (
    <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg">Icon</span>
  );
};

export default IconWrapper;
