import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
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
          <DialogPanel className="border-primary bg-global-primary max-w-lg space-y-4 rounded-2xl border p-12">
            <DialogTitle className="text-primary font-bold">{focusedItem?.company}</DialogTitle>
            <Description className={'text-primary'}>{focusedItem?.position}</Description>
            <p className="text-primary">{focusedItem?.description}</p>
            <h4 className="text-primary dark:border-b-accent-dark border-b-accent-light w-fit border-b">
              Technologies
            </h4>
            <ul className="text-secondary">
              {focusedItem?.achievements.map((achievement) => {
                return <li key={achievement}>{achievement}</li>;
              })}
            </ul>

            <h4 className="text-primary dark:border-b-accent-dark border-b-accent-light w-fit border-b">
              Technologies
            </h4>
            <div className="text-secondary flex justify-between">
              <ul>
                <h4>{language === 'en' ? 'Languages' : 'Languages'}</h4>
                {focusedItem?.technologies?.languages?.map((language) => {
                  return <li key={language}>{language}</li>;
                })}
              </ul>
              <ul>
                <h4>{language === 'en' ? 'Frameworks' : 'Frameworks'}</h4>
                {focusedItem?.technologies?.frameworks?.map((framework) => {
                  return <li key={framework}>{framework}</li>;
                })}
              </ul>
              <ul>
                <h4>{language === 'en' ? 'Databases' : 'Base de données'}</h4>
                {focusedItem?.technologies?.databases?.map((database) => {
                  return <li key={database}>{database}</li>;
                })}
              </ul>
              <ul>
                <h4>{language === 'en' ? 'Tools' : 'Outils'}</h4>
                {focusedItem?.technologies?.tools?.map((tool) => {
                  return <li key={tool}>{tool}</li>;
                })}
              </ul>
            </div>

            <div className="flex gap-4">
              <button type="button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button type="button" onClick={() => setIsOpen(false)}>
                Deactivate
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
};

export default Education;
