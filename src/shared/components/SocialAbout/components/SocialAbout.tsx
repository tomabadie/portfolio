import SocialLinks from '../../../elements/SocialLinks';
import WeatherAbout from '../../../elements/WeatherAbout';
import { socialLinksList } from '../../../elements/socialLinksData';

const SocialAbout = () => {
  return (
    <section className="bg-global-secondary border-primary text-primary flex w-3xs flex-col items-center gap-4 rounded-2xl border py-4">
      <div className="mask-radial-from-40% mask-radial-at-center">
        <img
          src="/assets/img/avatar/IMG-20250327-WA0039.jpg"
          alt="Thomas Abadie"
          className="h-50"
        />
      </div>
      <SocialLinks
        aboutPage={true}
        socialLinksList={socialLinksList}
        socialLinksClassName="flex flex-col gap-3 items-center"
      />
      <hr className="border-primary my-2 w-2/3" />
      <WeatherAbout />
    </section>
  );
};

export default SocialAbout;
