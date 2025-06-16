import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Fragment } from 'react/jsx-runtime';
import { ChevronDownIcon, CloseIcon, GroupIcon, UserIcon } from '../../../components/ui/Icons';
import StackList from '../../../components/ui/StackList';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { ProjectDialogProps } from '../data/projectsDataType';
import ProjectLinks from './ProjectLinks';

const ProjectDialog = ({ isOpen, setIsOpen, focusedProject }: ProjectDialogProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();

  const animatedList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const animatedListItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="border-primary bg-global-secondary max-h-[80dvh] max-w-4xl space-y-4 overflow-y-auto rounded-2xl border-3 p-3 sm:p-8 lg:p-12">
          {/* Title and button */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <DialogTitle className="text-primary transition-theme border-accent-light dark:border-accent-dark rounded-sm border-2 p-2 font-bold uppercase hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] motion-reduce:transition-none dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]">
              {focusedProject?.name}
            </DialogTitle>

            <button
              type="button"
              data-cursor="hover"
              className="order-first mx-auto sm:order-none sm:mx-0"
              onClick={() => setIsOpen(false)}
              aria-label={language === 'en' ? 'Close window' : 'Fermer la fenêtre'}
            >
              <CloseIcon className="border-primary dark:stroke-primary-dark stroke-primary-light transition-theme h-10 w-10 rounded-full border shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] motion-reduce:transition-none dark:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]" />
            </button>
          </div>

          {/* Links */}
          <ProjectLinks demoLink={focusedProject?.demoLink} repoLink={focusedProject?.repoLink} />

          {/* Banner */}

          <div className="text-primary transition-theme flex gap-2 motion-reduce:transition-none">
            {focusedProject?.context.solo === true ? (
              <UserIcon className="h-6 w-6 stroke-current" />
            ) : (
              <GroupIcon className="h-6 w-6 stroke-current" />
            )}
            <span className="font-bold">{focusedProject?.context.type}</span>
          </div>

          <hr className="text-primary" />

          {/* Description */}

          <Description className={'text-primary'}>
            {' '}
            {focusedProject?.detailedDescription}
          </Description>

          {/* Stack */}

          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton data-cursor="hover" className={'flex items-center gap-2'}>
                  <h3 className="text-primary dark:border-b-accent-dark transition-theme border-b-accent-light w-fit border-b-2 motion-reduce:transition-none">
                    Stack
                  </h3>
                  <ChevronDownIcon
                    isOpen={open}
                    className="dark:stroke-primary-dark stroke-primary-light h-5 w-5"
                  />
                </DisclosureButton>
                <AnimatePresence mode="wait" initial={false}>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <div className="flex flex-col justify-between gap-2">
                        {focusedProject?.stack?.map((type) => {
                          return (
                            <div key={type.name} className="text-primary flex flex-col gap-0.5">
                              <h4>{type.name} : </h4>
                              <StackList
                                type={type}
                                styleVariant="names"
                                orientationVariant="row"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>

          {/* Contributions */}

          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton data-cursor="hover" className={'flex items-center gap-2'}>
                  <h3 className="text-primary transition-theme dark:border-b-accent-dark border-b-accent-light w-fit border-b-2 motion-reduce:transition-none">
                    {language === 'en' ? 'Contributions' : 'Contributions'}
                  </h3>
                  <ChevronDownIcon
                    isOpen={open}
                    className="dark:stroke-primary-dark stroke-primary-light h-5 w-5"
                  />
                </DisclosureButton>
                <AnimatePresence mode="wait" initial={false}>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.ul
                        className="text-primary list-inside list-disc"
                        variants={shouldReduceMotion ? undefined : animatedList}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {focusedProject?.contributions.map((contribution) => {
                          return (
                            <motion.li
                              key={contribution}
                              variants={animatedListItem}
                              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                              className="opacity-0"
                            >
                              {contribution}
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProjectDialog;
