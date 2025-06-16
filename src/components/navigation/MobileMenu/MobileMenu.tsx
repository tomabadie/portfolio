import { Dialog, DialogPanel } from '@headlessui/react';
import { NavLink } from 'react-router';
import { useLanguage } from '../../../contexts/LanguageContext';
import IconWrapper from '../../ui/IconWrapper';
import { BurgerIcon, CloseIcon } from '../../ui/Icons';
import type { MobileMenuProps } from './mobileMenuType';

const MobileMenu = ({ navList, isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center justify-center md:hidden">
      <button
        type="button"
        data-cursor="hover"
        className="group relative"
        onClick={() => setIsMenuOpen(true)}
        aria-label={language === 'en' ? 'Open mobile menu' : 'Ouvrir le menu mobile'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu-panel"
      >
        <IconWrapper
          variant="rounded-button"
          wrapperClassName="p-1 hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)] size-10"
        >
          <BurgerIcon />
        </IconWrapper>
      </button>

      <Dialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        transition
        className="relative z-40 transition duration-300 ease-out data-closed:opacity-0 motion-reduce:transition-none"
      >
        <div className="fixed inset-0 flex h-dvh w-dvw items-center justify-center">
          <DialogPanel
            className="text-primary bg-global-primary flex h-full w-full flex-col items-center justify-start gap-20 px-12"
            id="mobile-menu-panel"
            aria-label={language === 'en' ? 'Mobile menu' : 'Menu mobile'}
          >
            <div className="flex h-[61px] w-dvw justify-between px-4">
              <div className="w-10" />
              <h1 className="transition-theme text-primary cursor-none py-4 text-xl font-extrabold">
                Thomas Abadie
              </h1>
              <button
                type="button"
                data-cursor="hover"
                onClick={() => setIsMenuOpen(false)}
                aria-label={language === 'en' ? 'Close menu' : 'Fermer le menu'}
              >
                <IconWrapper
                  variant="rounded-button"
                  wrapperClassName="shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)] size-10"
                >
                  <CloseIcon />
                </IconWrapper>
              </button>
            </div>

            <nav>
              <ul className="flex flex-col items-start justify-center gap-14">
                {navList.map((item) => (
                  <li key={item.id} className="uppercase">
                    <NavLink
                      to={item.path}
                      data-cursor="hover"
                      className={({ isActive }) =>
                        `${isActive && 'dark:text-btn-primary-hover-dark text-secondary-light'} text-primary rounded-xl px-2 py-1 text-xl font-semibold`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileMenu;
