import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div className="flex content-center justify-center">
      <GrLanguage size={24} />
    </div>
  );
};

export default LanguageToggle;
