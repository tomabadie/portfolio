import { useState } from 'react';
import type { NavigationItemProps } from '../../components/layouts/Header/data/headerType';
import { navDataEn } from '../../components/layouts/Header/data/navData.en';
import { navDataFr } from '../../components/layouts/Header/data/navData.fr';
import { useLanguage } from '../../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const navList = language === 'en' ? navDataEn : navDataFr;
  const [selected, setSelected] = useState<NavigationItemProps | null>(null);

  const getSizes = (index: number): string => {
    const selectedIndex = selected ? navList.indexOf(selected) : -1;
    if (index === selectedIndex) return 'basis-[50%]';
    /* if (Math.abs(index - selectedIndex) === 1) return 'basis-[20%]'; */
    return 'basis-[10%]';
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
            className={`flex h-full cursor-pointer items-center rounded-lg transition-all duration-300 ease-in-out ${getSizes(index)}`}
            style={{
              backgroundColor: `rgb(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)})`,
            }}
          >
            <input
              type="radio"
              name="navItem"
              value={navItem.name}
              checked={selected === navItem}
              onChange={() => setSelected(navItem)}
              className="sr-only h-full w-full cursor-pointer"
            />
            <p className="rotate-270 border bg-purple-500 text-4xl">{navItem.name}</p>
            <p> {index === navList.indexOf(selected) && navItem.info}</p>{' '}
            {/* Needs to be improved */}
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default Home;
