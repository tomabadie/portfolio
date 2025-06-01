import { useLanguage } from '../../../contexts/LanguageContext';
import { personalityDataEN } from '../data/profileData.en';
import { personalityDataFR } from '../data/profileData.fr';

const Personality = () => {
  const { language } = useLanguage();
  const personalityList = language === 'en' ? personalityDataEN : personalityDataFR;

  return <div>Personality</div>;
};

export default Personality;
