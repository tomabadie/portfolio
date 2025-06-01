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
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold">
          RESUME
        </h2>
        <div>
          <Education />
          <WorkExperiences />
          <Skills />
          <Personality />
          <Languages />
        </div>
      </section>
    </div>
  );
};

export default Resume;
