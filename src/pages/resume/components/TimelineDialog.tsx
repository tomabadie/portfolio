import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  ChevronDownIcon,
  CloseIcon,
  CompanyIcon,
  DurationIcon,
  LocationIcon,
  SchoolIcon,
} from '../../../components/ui/Icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { TimelineDialogProps } from '../data/timelineDataType';

const TimelineDialog = ({ isOpen, setIsOpen, focusedItem }: TimelineDialogProps) => {
  const { language } = useLanguage();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="border-primary bg-global-secondary max-h-[80dvh] max-w-4xl space-y-4 overflow-y-auto rounded-2xl border-3 p-3 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href={focusedItem?.link} target="_blank" rel="noopener noreferrer" className="w-fit">
              <DialogTitle className="text-primary transition-theme border-accent-light dark:border-accent-dark rounded-sm border-2 p-2 font-bold uppercase hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]">
                {focusedItem?.company}
              </DialogTitle>
            </a>
            <button
              className="order-first mx-auto sm:order-none sm:mx-0"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon className="border-primary dark:stroke-primary-dark stroke-primary-light transition-theme h-10 w-10 cursor-pointer rounded-full border shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]" />
            </button>
          </div>

          {/* banner */}

          <div className="text-primary grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="flex gap-2">
              {focusedItem?.type === 'formation' || focusedItem?.type === 'training' ? (
                <SchoolIcon className="h-6 w-6 stroke-current" />
              ) : (
                <CompanyIcon className="h-6 w-6 stroke-current" />
              )}
              <span className="font-bold">{focusedItem?.position}</span>
            </div>
            <span className="hidden sm:block" />
            <div className="flex gap-2">
              <DurationIcon className="h-6 w-6 stroke-current" />
              <span>{focusedItem?.duration || '/'}</span>
            </div>
            <div className="flex gap-2">
              <LocationIcon className="h-6 w-6 stroke-current" />
              <span>{focusedItem?.location}</span>
            </div>
          </div>

          <hr className="text-primary" />

          {/* Description */}

          <Description className={'text-primary'}> {focusedItem?.description}</Description>

          {/* Achievements */}

          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className={'flex cursor-pointer items-center gap-2'}>
                  <h3 className="text-primary transition-theme dark:border-b-accent-dark border-b-accent-light w-fit border-b-2">
                    {language === 'en' ? 'Achievements' : 'Réalisations'}
                  </h3>
                  <ChevronDownIcon
                    isOpen={open}
                    className="dark:stroke-primary-dark stroke-primary-light h-5 w-5"
                  />
                </DisclosureButton>
                <DisclosurePanel>
                  <ul className="text-secondary list-inside list-disc">
                    {focusedItem?.achievements.map((achievement) => {
                      return <li key={achievement}>{achievement}</li>;
                    })}
                  </ul>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>

          {/* Stack */}

          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className={'flex cursor-pointer items-center gap-2'}>
                  <h3 className="text-primary dark:border-b-accent-dark transition-theme border-b-accent-light w-fit border-b-2">
                    Stack
                  </h3>
                  <ChevronDownIcon
                    isOpen={open}
                    className="dark:stroke-primary-dark stroke-primary-light h-5 w-5"
                  />
                </DisclosureButton>
                <DisclosurePanel>
                  <div className="text-secondary flex justify-between">
                    {focusedItem?.stack?.map((technology) => {
                      return (
                        <ul key={technology.name}>
                          <h4>{technology.name}</h4>
                          {technology?.content.map((item) => {
                            return (
                              <li key={item} className="list-inside list-disc text-sm">
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    })}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>

          {/* Context */}

          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className={'flex cursor-pointer items-center gap-2'}>
                  <h3 className="text-primary dark:border-b-accent-dark transition-theme border-b-accent-light w-fit border-b-2">
                    {language === 'en' ? 'Context' : 'Contexte'}
                  </h3>
                  <ChevronDownIcon
                    isOpen={open}
                    className="dark:stroke-primary-dark stroke-primary-light h-5 w-5"
                  />
                </DisclosureButton>
                <DisclosurePanel>
                  <p className="text-secondary">{focusedItem?.context}</p>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default TimelineDialog;
