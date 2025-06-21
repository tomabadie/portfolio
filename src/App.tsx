import { Outlet } from 'react-router';

import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';
import CustomCursor from './components/ui/CustomCursor';
import SkipToContent from './components/ui/SkipToContent';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { language } = useLanguage();
  return (
    <>
      <SkipToContent />
      <CustomCursor />
      <Header />
      <main className="bg-global-primary transition-theme min-h-[calc(100dvh-61px-37px)] py-4 md:py-8">
        <span tabIndex={-1} id="main-focus-anchor" className="sr-only">
          {language === 'en' ? 'Main content anchor' : 'Contenu principal'}
        </span>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
