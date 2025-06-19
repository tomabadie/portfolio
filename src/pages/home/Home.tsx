import { useState } from 'react';
import { Link } from 'react-router';
import type { NavigationItemProps } from '../../components/layouts/Header/data/headerType';

import { navDataEn } from '../../components/navigation/data/navData.en';
import { navDataFr } from '../../components/navigation/data/navData.fr';
import IconWrapper from '../../components/ui/IconWrapper';
import { ArrowRightIcon } from '../../components/ui/Icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Home = () => {
  const { language } = useLanguage();
  const navList = language === 'en' ? navDataEn : navDataFr;
  const [selected, setSelected] = useState<NavigationItemProps | null>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className="m:h-[calc(100dvh-61px-37px-16px-16px)] flex h-[calc(100dvh-61px-37px-32px-32px)] flex-col items-center gap-4 px-2 md:justify-start">
      <h2 className="text-primary transition-theme border-primary border-b-2 px-10 pb-2 text-3xl font-semibold uppercase motion-reduce:transition-none sm:text-4xl">
        {language === 'en' ? 'Explore' : 'Exploration'}
      </h2>
      <p className="text-primary transition-theme text-center motion-reduce:transition-none">
        {language === 'en'
          ? 'A clear view into my developer journey'
          : `Une porte d'entrée vers mon univers de développeur.`}
      </p>

      <fieldset className="flex h-full w-full flex-col items-center justify-center gap-3 sm:w-[80dvw] md:max-h-100 md:flex-row">
        <legend className="sr-only">
          {language === 'en'
            ? 'Website section selector on home page'
            : "Sélecteur de section du site sur la page d'accueil"}
        </legend>
        {navList.map((navItem) => {
          const isSelected = selected === navItem;
          return (
            <label
              key={navItem.id}
              data-cursor="hover"
              className="transition-theme bg-global-secondary border-primary flex h-full flex-col items-center justify-around rounded-lg transition-all duration-700 ease-in-out motion-reduce:transition-none md:flex-row"
              style={{
                width: isDesktop ? (isSelected ? '55%' : '15%') : '100%',
                height: !isDesktop ? (isSelected ? '55%' : '15%') : '100%',
              }}
            >
              <input
                type="radio"
                name="navItem"
                value={navItem.name}
                checked={selected === navItem}
                onClick={() => (selected === navItem ? setSelected(null) : setSelected(navItem))}
                className="sr-only"
              />
              <div className="flex items-center justify-between gap-2 p-2 md:h-full md:flex-col">
                <IconWrapper
                  variant={navItem.iconVariant}
                  wrapperClassName="h-8 w-8 md:h-10 md:w-10"
                >
                  {navItem.iconSvg}
                </IconWrapper>
                <h3 className="text-primary transition-theme w-52 text-center text-2xl uppercase motion-reduce:transition-none md:w-auto md:text-3xl md:leading-none md:tracking-widest">
                  {isDesktop &&
                    navItem.name.split('').map((char: string, i: number) => (
                      <span key={`${i}-${char}`} className="block">
                        {char === ' ' ? <span className="opacity-0">·</span> : char}
                      </span>
                    ))}
                  {!isDesktop && navItem.name}
                </h3>
                <span className="opacity-0">·</span>
              </div>
              {selected === navItem && (
                <div className="animate-fade-in-delay flex h-1/3 items-center justify-between gap-5 px-4 motion-reduce:animate-none md:flex-col">
                  <p className="text-primary transition-theme text-sm motion-reduce:transition-none md:text-xl">
                    {' '}
                    {navItem.info}
                  </p>
                  <Link
                    data-cursor="hover"
                    className="ml-auto grid grid-cols-1 grid-rows-1"
                    to={navItem.path}
                    aria-label={
                      language === 'en'
                        ? `Go to ${navItem.name} page`
                        : `Accéder à la page ${navItem.name}`
                    }
                  >
                    <span className="bg-primary transition-theme col-start-1 row-start-1 h-9 w-9 animate-ping self-center justify-self-center rounded-full opacity-15 motion-reduce:hidden" />
                    <ArrowRightIcon className="stroke-primary-light dark:stroke-primary-dark col-start-1 row-start-1 h-12 w-12 self-center justify-self-center" />
                  </Link>
                </div>
              )}
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};

export default Home;
