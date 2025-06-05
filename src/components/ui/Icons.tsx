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

interface LocationIcon {
  className?: string;
}

export const LocationIcon = ({ className }: LocationIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-none transition-transform`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>Location</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

interface CompanyIcon {
  className?: string;
}

export const CompanyIcon = ({ className }: CompanyIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-none transition-transform`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>Company</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    />
  </svg>
);

interface SchoolIcon {
  className?: string;
}

export const SchoolIcon = ({ className }: SchoolIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-none transition-transform`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>School</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);

interface DurationIcon {
  className?: string;
}

export const DurationIcon = ({ className }: DurationIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-none transition-transform`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>Duration</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

interface StarIcon {
  className?: string;
}

export const StarIcon = ({ className }: StarIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} fill-none transition-transform`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <title>Star</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);
