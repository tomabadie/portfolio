import SocialGlobal from '../../components/social/SocialGlobal';
import { useLanguage } from '../../contexts/LanguageContext';
import Education from './components/Education';
import Languages from './components/Languages';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import WorkExperiences from './components/WorkExperiences';

const Resume = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-start">
      <SocialGlobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 motion-reduce:transition-none sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
          {language === 'en' ? 'My journey' : 'Mon parcours'}
        </h2>
        <div className="lg:grid-row-6 grid gap-2 md:grid-cols-2 md:grid-rows-8 lg:grid-rows-7">
          {' '}
          <WorkExperiences className="md:col-start-2 md:row-span-3 md:row-start-1" />
          <Skills className="md:col-start-1 md:row-span-7 md:row-start-1 lg:row-span-5" />
          <Education className="md:col-start-2 md:row-span-2 md:row-start-4" />
          <SoftSkills className="md:col-start-2 md:row-span-2 md:row-start-6 lg:col-span-2 lg:row-span-1 lg:row-start-6" />
          <Languages className="md:col-span-2 md:row-start-8 lg:row-start-7" />
        </div>
      </section>
    </div>
  );
};

export default Resume;
