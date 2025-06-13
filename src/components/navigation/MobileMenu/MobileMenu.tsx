import { Dialog, DialogPanel } from '@headlessui/react';
import { NavLink } from 'react-router';
import type { MobileMenuProps } from './mobileMenuType';

const MobileMenu = ({ navList, isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  return (
    <div className="flex items-center justify-center md:hidden">
      <button
        type="button"
        className="group relative cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`border-primary bg-gobal-secondary bg-global-secondary relative flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full border shadow-md transition-all duration-200 hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] motion-reduce:transition-none dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)] ${isMenuOpen && 'shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]'}`}
        >
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 motion-reduce:transition-none">
            <div
              className={`bg-text-primary-light dark:bg-text-primary-dark h-[2px] w-7 origin-left transform transition-all delay-100 duration-300 motion-reduce:transition-none ${isMenuOpen && 'translate-y-6'} `}
            />
            <div
              className={`bg-text-primary-light dark:bg-text-primary-dark h-[2px] w-7 transform rounded transition-all delay-75 duration-300 motion-reduce:transition-none ${isMenuOpen && 'translate-y-6'}`}
            />
            <div
              className={`bg-text-primary-light dark:bg-text-primary-dark h-[2px] w-7 origin-left transform transition-all duration-300 motion-reduce:transition-none ${isMenuOpen && 'translate-y-6'}`}
            />

            <div
              className={`absolute top-5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 motion-reduce:transition-none ${isMenuOpen && 'w-12 translate-x-0'} `}
            >
              <div
                className={`bg-text-primary-light dark:bg-text-primary-dark absolute h-[2px] w-5 rotate-0 transform transition-all delay-300 duration-500 motion-reduce:transition-none ${isMenuOpen && 'rotate-45'}`}
              />
              <div
                className={`bg-text-primary-light dark:bg-text-primary-dark absolute h-[2px] w-5 -rotate-0 transform transition-all delay-300 duration-500 motion-reduce:transition-none ${isMenuOpen && '-rotate-45'}`}
              />
            </div>
          </div>
        </div>
      </button>
      <Dialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        transition
        className="relative z-40 transition duration-300 ease-out data-closed:opacity-0 motion-reduce:transition-none"
      >
        <div className="fixed inset-0 flex h-dvh w-dvw items-center justify-center">
          <DialogPanel className="bg-global-primary text-primary mt-[60px] flex h-[calc(100dvh-60px)] w-full items-center justify-center px-12">
            <nav>
              <ul className="flex flex-col items-start justify-center gap-14">
                {navList.map((item) => (
                  <li key={item.id} className="uppercase">
                    <NavLink
                      to={item.path}
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
