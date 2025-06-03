import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { useState } from 'react';
import { ChevronDownIcon, CloseIcon } from '../../../components/ui/Icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import { educationDataEN } from '../data/educationData.en';
import { educationDataFR } from '../data/educationData.fr';
import type { EducationProps } from '../data/educationDataType';

const Education = () => {
  const { language } = useLanguage();
  const educationList = language === 'en' ? educationDataEN : educationDataFR;
  const [isOpen, setIsOpen] = useState(false);
  const [focusedItem, setFocusedItem] = useState<EducationProps | null>(null);

  const handleClick = (item: EducationProps) => {
    setIsOpen(true);
    setFocusedItem(item);
  };
  return (
    <section className="border-primary transition-theme rounded-lg border px-2 py-1">
      <h3 className="border-b-accent-light dark:border-b-accent-dark transition-theme mb-2 w-fit border-b-2 font-bold">
        {language === 'en' ? 'Education' : 'Formation'}
      </h3>
      <ul className="before:bg-border-primary-light dark:before:bg-border-primary-dark transition-theme relative space-y-8 pl-1 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full">
        {educationList.map((item) => {
          return (
            <li key={item.id} className="relative -ms-1.5 flex items-start gap-4">
              <span className="border-accent-light dark:border-accent-dark bg-global-secondary transition-theme size-3 shrink-0 rounded-full border-2" />

              <div className="-mt-2">
                <time className="text-secondary text-xs/none font-medium">{item.endDate}</time>

                <button type="button" className="block" onClick={() => handleClick(item)}>
                  <h3 className="hover:text-accent-light dark:hover:text-accent-dark transition-theme cursor-pointer text-lg font-bold">
                    {item.company}
                  </h3>
                </button>

                <p className="text-secondary mt-0.5 text-sm">{item.position}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="border-primary bg-global-secondary mr-[calc(theme(spacing.4)-env(safe-area-inset-right))] max-w-4xl space-y-4 overflow-y-auto rounded-2xl border-3 p-12">
            <div className="flex items-center justify-between">
              <a href={focusedItem?.link} target="_blank" rel="noopener noreferrer">
                <DialogTitle className="text-primary transition-theme border-accent-light dark:border-accent-dark rounded-sm border-2 p-2 font-bold uppercase hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]">
                  {focusedItem?.company}
                </DialogTitle>
              </a>
              <button type="button" onClick={() => setIsOpen(false)}>
                <CloseIcon className="border-primary dark:stroke-primary-dark stroke-primary-light transition-theme h-10 w-10 cursor-pointer rounded-full border shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]" />
              </button>
            </div>
            <Description className={'text-primary'}>
              {focusedItem?.position} - {focusedItem?.location} - {focusedItem?.duration}
            </Description>
            <hr className="text-primary" />

            {/* Description */}

            <p className="text-primary">{focusedItem?.description}</p>

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
    </section>
  );
};

export default Education;
