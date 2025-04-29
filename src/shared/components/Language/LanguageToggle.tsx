import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('english');

  return (
    <Popover>
      <PopoverButton className="text-primary flex content-center justify-center">
        <GrLanguage size={24} />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="bg-global-secondary divide-border-primary divide-y rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0" /* TO CHANGE */
      >
        <p className="text-primary border-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark block rounded-lg border px-3 py-2 font-semibold transition">
          English
        </p>

        <p className="text-primary border-primary hover:bg-btn-primary-hover-light hover:dark:hover:bg-btn-primary-hover-dark block rounded-lg border px-3 py-2 font-semibold transition">
          Français
        </p>
      </PopoverPanel>
    </Popover>
  );
};

export default LanguageToggle;
