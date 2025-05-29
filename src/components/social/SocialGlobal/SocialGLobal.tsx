import SocialLinks from '../SocialLinks/SocialLinks';
import { socialLinksList } from '../SocialLinks/socialLinksData';

const SocialGLobal = () => {
  return (
    <div>
      <SocialLinks
        socialLinksList={socialLinksList}
        socialLinksClassName="flex gap-3 items-center"
      />
    </div>
  );
};

export default SocialGLobal;
