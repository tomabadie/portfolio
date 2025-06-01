import { useLanguage } from '../../../contexts/LanguageContext';
import { languagesDataEN } from '../data/profileData.en';
import { languagesDataFR } from '../data/profileData.fr';

const Languages = () => {
  const { language } = useLanguage();
  const languagesList = language === 'en' ? languagesDataEN : languagesDataFR;

  return <div>Languages</div>;
};

export default Languages;
