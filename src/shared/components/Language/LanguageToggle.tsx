import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { GrLanguage } from 'react-icons/gr';
import { useLanguage } from './LanguageContext';

const LanguageToggle = () => {
  const { setLanguage } = useLanguage();

  return (
    <Popover>
      <PopoverButton className="text-primary flex cursor-pointer content-center justify-center">
        <GrLanguage size={24} />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="bg-global-secondary divide-border-primary grid divide-y rounded-lg text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(6)] data-closed:-translate-y-1 data-closed:opacity-0"
      >
        <button
          type="button"
          className="text-primary border-primary hover:bg-btn-primary-hover-light dark:hover:bg-btn-primary-hover-dark block cursor-pointer rounded-lg border px-3 py-2 font-semibold transition"
          onClick={() => {
            setLanguage('en');
          }}
        >
          English
        </button>
        <button
          type="button"
          className="text-primary border-primary hover:bg-btn-primary-hover-light dark:hover:bg-btn-primary-hover-dark block cursor-pointer rounded-lg border px-3 py-2 font-semibold transition"
          onClick={() => {
            setLanguage('fr');
          }}
        >
          Français
        </button>
      </PopoverPanel>
    </Popover>
  );
};

export default LanguageToggle;
