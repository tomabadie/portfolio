import { useLanguage } from '../../../contexts/LanguageContext';
import { educationDataEN } from '../data/educationData.en';
import { educationDataFR } from '../data/educationData.fr';

const Education = () => {
  const { language } = useLanguage();
  const educationList = language === 'en' ? educationDataEN : educationDataFR;

  return <div>Education</div>;
};

export default Education;
