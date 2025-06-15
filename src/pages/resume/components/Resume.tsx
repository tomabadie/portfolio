import SocialGlobal from '../../../components/social/SocialGlobal/SocialGlobal';
import { useLanguage } from '../../../contexts/LanguageContext';
import Education from './Education';
import Languages from './Languages';
import Skills from './Skills';
import SoftSkills from './SoftSkills';
import WorkExperiences from './WorkExperiences';

const Resume = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-start">
      <SocialGlobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 motion-reduce:transition-none sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
          {language === 'en' ? 'My journey' : 'Mon parcours'}
        </h2>
        <div className="grid gap-2 md:grid-cols-2">
          <WorkExperiences className="md:col-start-2 md:row-start-1" />
          <Skills className="md:col-start-1 md:row-start-1" />
          <Education className="md:col-start-2 md:row-start-2" />
          <SoftSkills className="md:col-start-1 md:row-start-2" />
          <Languages className="md:col-span-2 md:row-start-3" />
        </div>
      </section>
    </div>
  );
};

export default Resume;
