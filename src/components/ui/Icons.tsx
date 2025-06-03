export interface ChevronDownIcon {
  isOpen: boolean;
  size?: string;
  className?: string;
}

export const ChevronDownIcon = ({ isOpen, size = '6', className }: ChevronDownIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} transition-transform ${isOpen ? 'rotate-180' : ''} h-6 w-6 fill-none stroke-current`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    height={size}
    width={size}
  >
    <title>Chevron-down</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);
