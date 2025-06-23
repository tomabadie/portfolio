import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import IconWrapper from '../../../components/ui/IconWrapper';
import { CloseIcon } from '../../../components/ui/Icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { SkillsDialogProps } from '../data/profileDataType';

const SkillsDialog = ({ isOpen, setIsOpen, focusedSkill }: SkillsDialogProps) => {
  const { language } = useLanguage();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="border-primary bg-global-secondary max-h-[80dvh] w-[100dvw] max-w-4xl space-y-4 overflow-y-auto rounded-2xl border-3 p-3 sm:w-[80dvw] sm:p-8 lg:p-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <DialogTitle className="text-primary transition-theme border-accent-light dark:border-accent-dark rounded-sm border-2 p-2 font-bold uppercase motion-reduce:transition-none">
              {focusedSkill?.label}
            </DialogTitle>

            <button
              type="button"
              data-cursor="hover"
              className="order-first mx-auto sm:order-none sm:mx-0"
              onClick={() => setIsOpen(false)}
              aria-label={language === 'en' ? 'Close window' : 'Fermer la fenêtre'}
            >
              <IconWrapper
                variant="rounded-button"
                wrapperClassName="shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)] size-10"
              >
                <CloseIcon />
                <span className="sr-only">
                  {language === 'en' ? 'Close window' : 'Fermer la fenêtre'}
                </span>
              </IconWrapper>
            </button>
          </div>

          <hr className="text-primary" />

          <div className="relative hidden min-h-[400px] w-full items-center justify-center py-4 sm:flex">
            <span className="text-primary border-primary bg-global-secondary absolute z-10 rounded-lg border px-6 py-3 text-lg font-semibold shadow-lg">
              {focusedSkill?.label}
            </span>
            {focusedSkill?.projects.map((project, index) => {
              const totalProjects = focusedSkill.projects.length;
              const angle = (360 / totalProjects) * index - 90;
              const radius = 170;

              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={project}
                  className="bg-global-secondary absolute -translate-x-1/2 -translate-y-1/2 transform"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <span className="text-primary bg-global-secondary relative z-10 rounded px-2">
                    {project}
                  </span>
                  <div
                    className="bg-primary absolute top-1/2 left-1/2 w-0.5 origin-top opacity-30"
                    style={{
                      height: `${radius}px`,
                      transform: `rotate(${angle + 90}deg)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SkillsDialog;
