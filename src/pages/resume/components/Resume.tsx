import SocialGlobal from '../../../components/social/SocialGlobal/SocialGlobal';
import Education from './Education';
import Languages from './Languages';
import Personality from './Personality';
import Skills from './Skills';
import WorkExperiences from './WorkExperiences';

const Resume = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-start">
      <SocialGlobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border py-3 sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme my-2 text-center text-xl font-bold">RESUME</h2>
        <Education />
        <WorkExperiences />
        <Skills />
        <Personality />
        <Languages />
      </section>
    </div>
  );
};

export default Resume;
