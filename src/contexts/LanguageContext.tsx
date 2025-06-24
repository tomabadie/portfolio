import { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  /* languageData: Language; */
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage === 'en' || savedLanguage === 'fr') {
        return savedLanguage;
      }
      const browserLanguage = navigator.language || navigator.language[0];
      return browserLanguage.startsWith('fr') ? 'fr' : 'en';
    }

    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  /* 
  Further use : dynamic data loadind

  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    fetchLanguageData();
  }, [language]);

  const fetchLanguageData = () => {
    const dataUrl = `/locales/${language}.json`;

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setLanguageData(data))
      .catch((error) => console.error('Error fetching language data:', error));
  };
 */

  return (
    <LanguageContext value={{ language, setLanguage /* , languageData */ }}>
      {children}
    </LanguageContext>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
