interface ChevronDownIcon {
  isOpen: boolean;
  className?: string;
}

export const ChevronDownIcon = ({ isOpen, className }: ChevronDownIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} transition-transform ${isOpen ? 'rotate-180' : ''} fill-none`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>Chevron-down</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

interface CloseIcon {
  className?: string;
}

export const CloseIcon = ({ className }: CloseIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-none transition-transform`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>Close</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
