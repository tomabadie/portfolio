import SocialLinks from './SocialLinks';
import { socialLinksList } from './data/socialLinksData';

const SocialGlobal = () => {
  return (
    <div className="sm:self-start">
      <SocialLinks
        socialLinksList={socialLinksList}
        socialLinksClassName="before:transition-theme after:transition-theme motion-reduce:transition-none  before:bg-primary-light dark:before:bg-primary-dark after:bg-primary-light dark:after:bg-primary-dark flex items-center gap-6 sm:flex-col sm:before:h-24 sm:before:w-px before:content-[''] sm:after:h-0.5 sm:after:w-0.5 sm:after:rounded-full after:content-['']
        
        before:w-6 before:h-px after:w-6 after:h-px
        "
      />
    </div>
  );
};

export default SocialGlobal;
