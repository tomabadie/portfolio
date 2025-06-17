import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { GrLanguage } from 'react-icons/gr';
import { useLanguage } from '../../../contexts/LanguageContext';

const LanguageToggle = () => {
  const { setLanguage } = useLanguage();

  return (
    <Popover>
      <PopoverButton
        className="text-primary flex content-center justify-center"
        data-cursor="hover"
      >
        <GrLanguage size={24} />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="divide-border-primary grid divide-y rounded-lg bg-none text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(6)] data-closed:-translate-y-1 data-closed:opacity-0"
      >
        <button
          type="button"
          data-cursor="hover"
          className="text-primary bg-global-secondary border-primary hover:bg-btn-primary-hover-light dark:hover:bg-btn-primary-hover-dark block rounded-lg border px-3 py-2 font-semibold transition"
          onClick={() => {
            setLanguage('en');
          }}
        >
          English
        </button>
        <button
          type="button"
          data-cursor="hover"
          className="text-primary bg-global-secondary border-primary hover:bg-btn-primary-hover-light dark:hover:bg-btn-primary-hover-dark block rounded-lg border px-3 py-2 font-semibold transition"
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
