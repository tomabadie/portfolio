import { useState } from 'react';
import { Link } from 'react-router';
import type { NavigationItemProps } from '../../components/layouts/Header/data/headerType';

import { navDataEn } from '../../components/navigation/data/navData.en';
import { navDataFr } from '../../components/navigation/data/navData.fr';
import IconWrapper from '../../components/ui/IconWrapper';
import { ArrowRightIcon } from '../../components/ui/Icons';
import { useLanguage } from '../../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const navList = language === 'en' ? navDataEn : navDataFr;
  const [selected, setSelected] = useState<NavigationItemProps | null>(null);

  return (
    <div className="flex h-[calc(100vh-61px-37px)] flex-col items-center gap-4 border border-purple-500 px-2 md:h-fit md:justify-around">
      <h2 className="text-primary transition-theme border border-amber-400 text-3xl uppercase sm:text-5xl">
        {language === 'en' ? 'Explore' : 'Exploration'}
      </h2>
      <p className="text-primary transition-theme border border-blue-400 text-center">
        {language === 'en'
          ? 'A clear view into my developer journey'
          : `Une porte d'entrée vers mon univers de développeur.`}
      </p>

      <fieldset className="flex h-full flex-col items-center justify-center gap-3 border border-green-500 md:h-[60dvh] md:w-[80vw] md:flex-row">
        {navList.map((navItem) => (
          <label
            key={navItem.id}
            className="transition-theme bg-global-secondary border-primary flex h-full cursor-pointer items-center justify-around rounded-lg border transition-[heigth] duration-700 ease-in-out sm:transition-[width]"
            style={{
              width: selected === navItem ? '55%' : '15%',
            }}
          >
            <input
              type="radio"
              name="navItem"
              value={navItem.name}
              checked={selected === navItem}
              onClick={() => (selected === navItem ? setSelected(null) : setSelected(navItem))}
              className="sr-only cursor-pointer border"
            />
            <div className="flex h-full flex-col items-center justify-between gap-2 p-2">
              <IconWrapper variant={navItem.iconVariant} wrapperClassName="h-10 w-10">
                {navItem.iconSvg}
              </IconWrapper>
              <p className="text-primary text-center text-xl leading-none tracking-widest uppercase md:text-3xl">
                {navItem.name.split('').map((char: string, i: number) => (
                  <span key={`${i}-${char}`} className="block">
                    {char === ' ' ? <span className="opacity-0">·</span> : char}
                  </span>
                ))}
              </p>
              <span className="opacity-0">·</span>
            </div>
            {selected === navItem && (
              <div className="animate-fade-in-delay flex h-1/3 flex-col justify-between px-4">
                <p className="text-primary"> {navItem.info}</p>
                <Link className="ml-auto" to={navItem.path}>
                  <span className="bg-primary absolute h-12 w-12 animate-ping rounded-full opacity-30" />
                  <ArrowRightIcon className="stroke-primary-light dark:stroke-primary-dark h-12 w-12" />
                </Link>
              </div>
            )}
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default Home;
