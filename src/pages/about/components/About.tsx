import { useLanguage } from '../../../shared/components/Language/LanguageContext';
import SocialAbout from '../../../shared/components/SocialAbout/components/SocialAbout';
import type { AboutProps } from '../data/aboutType';

const About = (aboutData: AboutProps) => {
  const { language } = useLanguage();
  const aboutDataList = aboutData[language];

  return (
    <div className="flex flex-col items-center gap-4 px-2 sm:flex-row sm:justify-around lg:gap-0">
      <SocialAbout />
      <section className="bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border py-3 lg:w-1/2">
        <h2 className="my-2 text-center text-xl font-bold">About me</h2>
        {aboutDataList.map((item) => (
          <section key={item.id} className="px-8">
            <h3 className="text-l my-2 font-bold">{item.title}</h3>
            {item.content.map((paragraph) => (
              <p key={paragraph.id} className="text-primary max-w-[80ch]">
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
