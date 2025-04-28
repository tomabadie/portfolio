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
        className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0" /* TO CHANGE */
      >
        <p className="block rounded-lg px-3 py-2 font-semibold text-white transition hover:bg-white/5">
          English
        </p>

        <p className="block rounded-lg px-3 py-2 font-semibold text-white transition hover:bg-white/5">
          Français
        </p>
      </PopoverPanel>
    </Popover>
  );
};

export default LanguageToggle;
