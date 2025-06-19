import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, useReducedMotion } from 'motion/react';
import { NavLink } from 'react-router';
import { useLanguage } from '../../../contexts/LanguageContext';
import IconWrapper from '../../ui/IconWrapper';
import { BurgerIcon, CloseIcon } from '../../ui/Icons';
import type { MobileMenuProps } from './mobileMenuType';

const MobileMenu = ({ navList, isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  const { language } = useLanguage();

  const shouldReduceMotion = useReducedMotion();

  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

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
        <motion.div
          key={isMenuOpen ? 'close' : 'burger'}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
        >
          <IconWrapper
            variant="rounded-button"
            wrapperClassName="p-1 hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)] size-10"
          >
            {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
          </IconWrapper>
        </motion.div>
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
              <motion.ul
                className="flex flex-col items-start justify-center gap-14"
                variants={shouldReduceMotion ? undefined : listVariants}
                initial="closed"
                animate="open"
              >
                {navList.map((item) => (
                  <motion.li
                    key={item.id}
                    className="uppercase"
                    variants={shouldReduceMotion ? undefined : itemVariants}
                  >
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
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileMenu;
