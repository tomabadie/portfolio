import SocialAbout from '../../../components/social/SocialAbout/SocialAbout';
import { useLanguage } from '../../../contexts/LanguageContext';
import type { AboutProps } from '../data/aboutType';

const About = (aboutData: AboutProps) => {
  const { language } = useLanguage();
  const aboutDataList = aboutData[language];

  return (
    <div className="flex flex-col items-center gap-4 px-2 sm:flex-row sm:items-start sm:justify-around lg:gap-0 xl:justify-center xl:gap-20">
      <SocialAbout />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 md:w-lg lg:w-2xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold">
          {language === 'en' ? 'About me' : 'Bio'}
        </h2>
        {aboutDataList.map((item) => (
          <section key={item.id} className="sm:px-8">
            <h3 className="text-l transition-theme my-2 font-bold">{item.title}</h3>
            {item.content.map((paragraph) => (
              <p key={paragraph.id} className="transition-theme text-primary max-w-[80ch]">
                {paragraph.content} <br />
              </p>
            ))}
          </section>
        ))}
      </section>
    </div>
  );
};

export default About;
