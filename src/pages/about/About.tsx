import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Fragment } from 'react/jsx-runtime';
import SocialAbout from '../../components/social/SocialAbout';
import { ChevronDownIcon } from '../../components/ui/Icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { aboutDataEn } from './data/aboutData.en';
import { aboutDataFr } from './data/aboutData.fr';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const aboutDataList = language === 'en' ? aboutDataEn : aboutDataFr;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center gap-4 px-2 sm:flex-row sm:items-start sm:justify-around lg:gap-0 xl:justify-center xl:gap-20">
      <SocialAbout />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex w-full flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 motion-reduce:transition-none md:w-lg lg:w-2xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
          {language === 'en' ? 'About me' : 'Bio'}
        </h2>
        {aboutDataList.map((item) => (
          <section key={item.id} className="flex w-full flex-col items-start">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton data-cursor="hover" className={'flex items-center gap-2'}>
                    <h3 className="text-l transition-theme dark:border-b-accent-dark border-b-accent-light my-2 border-b-2 text-start font-bold motion-reduce:transition-none">
                      {item.title}
                    </h3>
                    <ChevronDownIcon
                      isOpen={open}
                      className="dark:stroke-primary-dark stroke-primary-light h-5 w-5"
                    />
                  </DisclosureButton>
                  <AnimatePresence mode="wait" initial={false}>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          variants={containerVariants}
                          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                          className="origin-top"
                        >
                          {item.content.map((paragraph) => (
                            <motion.p
                              key={paragraph.id}
                              variants={itemVariants}
                              className="transition-theme text-primary max-w-[80ch] motion-reduce:transition-none"
                            >
                              {paragraph.content} <br />
                            </motion.p>
                          ))}
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </section>
        ))}
      </section>
    </div>
  );
};

export default About;
