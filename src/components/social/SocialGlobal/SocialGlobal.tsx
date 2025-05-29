import SocialLinks from '../SocialLinks/SocialLinks';
import { socialLinksList } from '../SocialLinks/socialLinksData';

const SocialGlobal = () => {
  return (
    <div className="">
      <SocialLinks
        socialLinksList={socialLinksList}
        socialLinksClassName="flex gap-3 items-center"
      />
    </div>
  );
};

export default SocialGlobal;
