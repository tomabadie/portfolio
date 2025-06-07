import { useState } from 'react';
import { Link } from 'react-router';
import type { NavigationItemProps } from '../../components/layouts/Header/data/headerType';

import { navDataEn } from '../../components/navigation/data/navData.en';
import { navDataFr } from '../../components/navigation/data/navData.fr';
import { ArrowRightIcon } from '../../components/ui/Icons';
import { useLanguage } from '../../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const navList = language === 'en' ? navDataEn : navDataFr;
  const [selected, setSelected] = useState<NavigationItemProps | null>(null);

  const getSizes = (index: number): string => {
    const selectedIndex = selected ? navList.indexOf(selected) : -1;
    if (index === selectedIndex) return 'w-[55%]';
    /* if (Math.abs(index - selectedIndex) === 1) return 'basis-[20%]'; */
    return 'w-[15%]';
  };

  return (
    <div className="flex flex-col items-center justify-around gap-4 border border-purple-500 px-2">
      <h2 className="text-primary transition-theme border border-amber-400 text-5xl uppercase">
        {language === 'en' ? 'Explore' : 'Exploration'}
      </h2>
      <p className="">
        {language === 'en'
          ? 'A clear view into my developer journey'
          : `Une porte d'entrée vers mon univers de développeur.`}
      </p>

      <fieldset className="flex h-[50dvh] w-[80vw] items-center justify-center gap-3 border border-green-500">
        {navList.map((navItem, index) => (
          <label
            key={navItem.id}
            className={`flex h-full cursor-pointer items-center justify-around rounded-lg transition-all duration-300 ease-in-out ${getSizes(index)}`}
            style={{
              backgroundColor: `rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},0.2)`,
            }}
          >
            <input
              type="radio"
              name="navItem"
              value={navItem.name}
              checked={selected === navItem}
              onChange={() => setSelected(navItem)}
              onClick={() => (selected === navItem ? setSelected(null) : setSelected(navItem))}
              className="sr-only cursor-pointer border"
            />
            <div className="flex flex-col items-center gap-1">
              <p className="text-primary text-center text-2xl leading-none tracking-widest uppercase">
                {navItem.name.split('').map((char: string, i: number) => (
                  <span key={`${i}-${char}`} className="block">
                    {char === ' ' ? <span className="opacity-0">·</span> : char}
                  </span>
                ))}
              </p>
            </div>
            {selected === navItem && (
              <div className="flex h-1/3 flex-col justify-between">
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
