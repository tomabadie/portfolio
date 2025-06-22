import WeatherAbout from '../weather/WeatherAbout';
import SocialLinks from './SocialLinks';
import { socialLinksList } from './data/socialLinksData';

const SocialAbout = () => {
  return (
    <section className="bg-global-secondary border-primary text-primary transition-theme flex w-3xs flex-col items-center gap-4 rounded-2xl border py-4 motion-reduce:transition-none sm:px-2">
      <div className="mask-radial-from-40% mask-radial-at-center">
        <img
          src="/assets/img/avatar/IMG-20250327-WA0039.jpg"
          alt="Thomas Abadie"
          className="w-36 md:w-40"
        />
      </div>
      <SocialLinks
        aboutPage={true}
        socialLinksList={socialLinksList}
        socialLinksClassName="flex sm:flex-col gap-3 items-center"
      />
      <hr className="border-primary my-2 hidden w-2/3 sm:block" />
      <WeatherAbout />
    </section>
  );
};

export default SocialAbout;
